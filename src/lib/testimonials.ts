
'use server';

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Momentum Careers helped me restructure my CV and I landed a job at my dream company within a month!',
    name: 'Priya S.',
    title: 'Software Engineer',
    avatar: 'PS',
    rating: 5,
  },
  {
    quote:
      'The mentorship program is invaluable. My mentor provided guidance that helped me navigate a career transition successfully.',
    name: 'Rohan M.',
    title: 'Product Manager',
    avatar: 'RM',
    rating: 5,
  },
  {
    quote:
      "The outreach service saved me so much time and effort. I got interviews I wouldn't have been able to secure on my own.",
    name: 'Anika J.',
    title: 'Data Analyst',
    avatar: 'AJ',
    rating: 4,
  },
  {
    quote:
      "The team's expertise is top-notch. They transformed my resume and my confidence.",
    name: 'Sameer K.',
    title: 'Marketing Specialist',
    avatar: 'SK',
    rating: 5,
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
