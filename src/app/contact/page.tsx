import ContactContent from './ContactContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Lighthouse Atlanta Church | Visit Our Church in Atlanta, GA',
  description: 'Contact Lighthouse Atlanta church in Atlanta, GA. Visit us at 925 Highway 124, Braselton GA. Sunday services at 10:00 AM. RCCG church serving the community.',
  keywords: 'Contact church Atlanta, Lighthouse Atlanta contact, visit church Atlanta, RCCG church Atlanta contact, church Atlanta address, Nigerian church Atlanta contact, church location Atlanta',
  openGraph: {
    title: 'Contact Us - Lighthouse Atlanta Church',
    description: 'Visit our church in Atlanta, GA. Sunday services at 10:00 AM. Contact us for directions and more information.',
  },
};

export default function ContactPage() {
  return <ContactContent />;
} 