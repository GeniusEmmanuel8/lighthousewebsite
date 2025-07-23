import ContactContent from './ContactContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Lighthouse Atlanta African Church | Visit Our Church in Atlanta, GA',
  description: 'Contact Lighthouse Atlanta African church in Atlanta, GA. Visit us at 925 Highway 124, Braselton GA. Sunday services at 10:00 AM. RCCG church serving the African community.',
  keywords: 'Contact African church Atlanta, Lighthouse Atlanta contact, visit African church Atlanta, RCCG church Atlanta contact, African church Atlanta address, Nigerian church Atlanta contact, church location Atlanta',
  openGraph: {
    title: 'Contact Us - Lighthouse Atlanta African Church',
    description: 'Visit our African church in Atlanta, GA. Sunday services at 10:00 AM. Contact us for directions and more information.',
    images: ['/church photo.jpeg'],
  },
};

export default function ContactPage() {
  return <ContactContent />;
} 