import AboutContent from './AboutContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Lighthouse Atlanta Church | RCCG Church in Atlanta, GA',
  description: 'Learn about Lighthouse Atlanta, a vibrant church in Atlanta, GA. Discover our mission, values, and the community we serve. RCCG church with authentic worship and powerful preaching.',
  keywords: 'About church Atlanta, Lighthouse Atlanta about, RCCG church Atlanta about, community Atlanta church, Nigerian church Atlanta about, Pastor Olumide Okeowo, worship Atlanta',
  openGraph: {
    title: 'About Lighthouse Atlanta - Church in Atlanta, GA',
    description: 'Learn about our vibrant church community in Atlanta. Discover our mission, values, and the community we serve.',
  },
};

export default function AboutPage() {
  return <AboutContent />;
} 