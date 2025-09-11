
'use server';

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  bio: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Momentum Careers helped me restructure my CV and I landed a job at my dream company within a month!',
    name: 'Priya S.',
    title: 'Software Engineer',
    avatar: 'PS',
    rating: 5,
    bio: 'Priya is a dedicated software engineer with a passion for creating innovative solutions. After struggling to get noticed by top tech companies, she turned to Momentum Careers to revamp her professional brand.',
    service: 'CV Creation Service',
  },
  {
    quote:
      'The mentorship program is invaluable. My mentor provided guidance that helped me navigate a career transition successfully.',
    name: 'Rohan M.',
    title: 'Product Manager',
    avatar: 'RM',
    rating: 5,
    bio: 'Rohan was looking to transition from a technical role to product management. The mentorship program provided him with the strategic guidance and industry insights he needed to make the leap confidently.',
    service: 'Mentorship Service',
  },
  {
    quote:
      "The outreach service saved me so much time and effort. I got interviews I wouldn't have been able to secure on my own.",
    name: 'Anika J.',
    title: 'Data Analyst',
    avatar: 'AJ',
    rating: 4,
    bio: 'As a skilled data analyst, Anika knew her worth but found it challenging to get her foot in the door at leading firms. The outreach service connected her with the right people, fast-tracking her job search.',
    service: 'Outreach Service',
  },
  {
    quote:
      "The team's expertise is top-notch. They transformed my resume and my confidence.",
    name: 'Sameer K.',
    title: 'Marketing Specialist',
    avatar: 'SK',
    rating: 5,
    bio: 'Sameer had a strong marketing background but his resume wasn’t reflecting his true potential. The CV creation service helped him craft a compelling narrative that immediately caught the attention of recruiters.',
    service: 'CV Creation Service',
  },
];

export const getTestimonials = async (): Promise<Testimonial[]> => {
  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In a real app, you would fetch this data from Supabase
  // For example:
  // const { data, error } = await supabase.from('testimonials').select('*');
  // if (error) throw error;
  // return data;
  
  return testimonials;
};
