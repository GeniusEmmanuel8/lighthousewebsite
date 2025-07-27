<?php
/**
 * Plugin Name: Next.js Revalidation
 * Description: Automatically triggers Next.js revalidation when content is published or updated
 * Version: 1.0.0
 * Author: Your Name
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

class NextJSRevalidation {
    
    public function __construct() {
        // Hook into WordPress content updates
        add_action('save_post', array($this, 'trigger_revalidation'), 10, 2);
        add_action('wp_insert_post', array($this, 'trigger_revalidation'), 10, 2);
        add_action('wp_update_post', array($this, 'trigger_revalidation'), 10, 2);
        
        // Hook into page updates
        add_action('save_page', array($this, 'trigger_revalidation'), 10, 2);
        
        // Hook into custom post type updates
        add_action('save_post_sermon', array($this, 'trigger_revalidation'), 10, 2);
        add_action('save_post_event', array($this, 'trigger_revalidation'), 10, 2);
        
        // Add admin settings
        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('admin_init', array($this, 'register_settings'));
    }
    
    public function trigger_revalidation($post_id, $post) {
        // Skip autosaves and revisions
        if (wp_is_post_revision($post_id) || wp_is_post_autosave($post_id)) {
            return;
        }
        
        // Only trigger for published posts
        if ($post->post_status !== 'publish') {
            return;
        }
        
        // Get the revalidation URL from settings
        $revalidation_url = get_option('nextjs_revalidation_url', '');
        $revalidation_token = get_option('nextjs_revalidation_token', '');
        
        if (empty($revalidation_url) || empty($revalidation_token)) {
            error_log('Next.js Revalidation: Missing URL or token configuration');
            return;
        }
        
        // Trigger revalidation asynchronously
        wp_schedule_single_event(time(), 'nextjs_trigger_revalidation', array(
            'url' => $revalidation_url,
            'token' => $revalidation_token,
            'post_id' => $post_id
        ));
    }
    
    public function do_revalidation($url, $token, $post_id) {
        $response = wp_remote_post($url, array(
            'headers' => array(
                'Content-Type' => 'application/json',
                'x-revalidate-token' => $token
            ),
            'timeout' => 30,
            'body' => json_encode(array(
                'post_id' => $post_id,
                'timestamp' => current_time('mysql')
            ))
        ));
        
        if (is_wp_error($response)) {
            error_log('Next.js Revalidation failed: ' . $response->get_error_message());
        } else {
            $status_code = wp_remote_retrieve_response_code($response);
            if ($status_code === 200) {
                error_log('Next.js Revalidation successful for post ' . $post_id);
            } else {
                error_log('Next.js Revalidation failed with status: ' . $status_code);
            }
        }
    }
    
    public function add_admin_menu() {
        add_options_page(
            'Next.js Revalidation',
            'Next.js Revalidation',
            'manage_options',
            'nextjs-revalidation',
            array($this, 'admin_page')
        );
    }
    
    public function register_settings() {
        register_setting('nextjs_revalidation', 'nextjs_revalidation_url');
        register_setting('nextjs_revalidation', 'nextjs_revalidation_token');
    }
    
    public function admin_page() {
        ?>
        <div class="wrap">
            <h1>Next.js Revalidation Settings</h1>
            <form method="post" action="options.php">
                <?php settings_fields('nextjs_revalidation'); ?>
                <table class="form-table">
                    <tr>
                        <th scope="row">Revalidation URL</th>
                        <td>
                            <input type="url" name="nextjs_revalidation_url" 
                                   value="<?php echo esc_attr(get_option('nextjs_revalidation_url')); ?>" 
                                   class="regular-text" />
                            <p class="description">
                                The URL of your Next.js revalidation endpoint (e.g., https://yourdomain.com/api/revalidate)
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Revalidation Token</th>
                        <td>
                            <input type="text" name="nextjs_revalidation_token" 
                                   value="<?php echo esc_attr(get_option('nextjs_revalidation_token')); ?>" 
                                   class="regular-text" />
                            <p class="description">
                                The secret token that matches your Next.js REVALIDATE_TOKEN environment variable
                            </p>
                        </td>
                    </tr>
                </table>
                <?php submit_button(); ?>
            </form>
            
            <h2>Manual Revalidation</h2>
            <p>Click the button below to manually trigger revalidation:</p>
            <button type="button" id="manual-revalidate" class="button button-primary">
                Trigger Revalidation
            </button>
            <div id="revalidation-result"></div>
            
            <script>
            document.getElementById('manual-revalidate').addEventListener('click', function() {
                const button = this;
                const resultDiv = document.getElementById('revalidation-result');
                
                button.disabled = true;
                button.textContent = 'Triggering...';
                resultDiv.innerHTML = '';
                
                fetch('<?php echo admin_url('admin-ajax.php'); ?>', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: 'action=manual_revalidation'
                })
                .then(response => response.json())
                .then(data => {
                    resultDiv.innerHTML = '<div class="notice notice-success"><p>' + data.message + '</p></div>';
                })
                .catch(error => {
                    resultDiv.innerHTML = '<div class="notice notice-error"><p>Error: ' + error.message + '</p></div>';
                })
                .finally(() => {
                    button.disabled = false;
                    button.textContent = 'Trigger Revalidation';
                });
            });
            </script>
        </div>
        <?php
    }
}

// Initialize the plugin
new NextJSRevalidation();

// Handle manual revalidation via AJAX
add_action('wp_ajax_manual_revalidation', function() {
    $revalidation_url = get_option('nextjs_revalidation_url', '');
    $revalidation_token = get_option('nextjs_revalidation_token', '');
    
    if (empty($revalidation_url) || empty($revalidation_token)) {
        wp_send_json_error('Missing configuration');
        return;
    }
    
    $response = wp_remote_post($revalidation_url, array(
        'headers' => array(
            'Content-Type' => 'application/json',
            'x-revalidate-token' => $revalidation_token
        ),
        'timeout' => 30
    ));
    
    if (is_wp_error($response)) {
        wp_send_json_error('Revalidation failed: ' . $response->get_error_message());
    } else {
        $status_code = wp_remote_retrieve_response_code($response);
        if ($status_code === 200) {
            wp_send_json_success('Revalidation triggered successfully!');
        } else {
            wp_send_json_error('Revalidation failed with status: ' . $status_code);
        }
    }
});

// Hook the scheduled revalidation
add_action('nextjs_trigger_revalidation', array('NextJSRevalidation', 'do_revalidation'), 10, 3);
?> 