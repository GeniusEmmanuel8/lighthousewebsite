import AboutContent from './AboutContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Lighthouse Atlanta African Church | RCCG Church in Atlanta, GA',
  description: 'Learn about Lighthouse Atlanta, a vibrant African church in Atlanta, GA. Discover our mission, values, and the African community we serve. RCCG church with authentic worship and powerful preaching.',
  keywords: 'About African church Atlanta, Lighthouse Atlanta about, RCCG church Atlanta about, African community Atlanta church, Nigerian church Atlanta about, Pastor Olumide Okeowo, African worship Atlanta',
  openGraph: {
    title: 'About Lighthouse Atlanta - African Church in Atlanta, GA',
    description: 'Learn about our vibrant African church community in Atlanta. Discover our mission, values, and the African community we serve.',
    images: ['/church photo.jpeg'],
  },
};

export default function AboutPage() {
  return <AboutContent />;
} 