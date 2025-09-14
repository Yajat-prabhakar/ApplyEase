
'use server';

export interface Company {
  name: string;
  logo?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  image?: string;
  rating: number;
  bio: string;
  linkedin: string;
  companiesSecured: Company[];
}

const testimonials: Testimonial[] = [
  {
    quote:
      'The experience with Apply Ease was effortless. They managed every detail with precision and care, so I could focus on my priorities. I landed the opportunity without any stress, all thanks to their seamless service!',
    name: 'Keshav Mittal',
    title: 'Student at SRCC',
    avatar: 'KM',
    image: 'https://i.ibb.co/7xq5jy5q/Keshav-Mital.jpg',
    rating: 5,
    bio: 'I am Keshav Mittal. A person living only because of his dreams. Hobbies include playing Chess, sports and spending time alone. A passionate for Finance and Accountancy. A desire to improve myself better than last day. A constant eagerness for learning and growth.',
    linkedin: 'https://www.linkedin.com/in/keshav-mittal-0719b4286/',
    companiesSecured: [
      { name: 'Primus Partners Pvt Ltd (Public Policy and Research Intern)', logo: 'https://i.ibb.co/DP7mfKHC/primus.png'},
      { name: 'Benori (Market Research and Data Analytics)', logo: 'https://i.ibb.co/ZRxPhJFd/benori.jpg' },
    ],
  },
  {
    quote:
      'Apply Ease is a game-changer. Their team took full ownership of the process, ensuring everything was handled perfectly and on time. I just focused on my work while they made the opportunity happen for me. Simply outstanding!',
    name: 'Pratik Kumar',
    title: 'Student at SRCC',
    avatar: 'PK',
    image: 'https://i.ibb.co/DHp1hsTt/Pratik-Kumar.jpg',
    rating: 4,
    bio: "I have gained hands-on experience through an internship at Shadowfax, where I optimized logistics, inventory management, and workforce scheduling to improve productivity. At CDF-SRCC, I led ventures such as Rivaayat, which boosted 32 artisans' income by 115% through partnerships with Bain & Co., Vodafone, and ITC; Naqsh, an upcycling initiative that generated ₹1,00,000 revenue with ~30% margin in four months; and Arpan, a sustainable incense business scaled with 40% projected revenue growth and a supply chain expansion to 15 manufacturers. These experiences have sharpened my skills in business strategy, operations, and entrepreneurship, enabling me to drive measurable growth and impact.",
    linkedin: 'https://www.linkedin.com/in/pratik-kumar-0b2487220/',
    companiesSecured: [
      { name: 'SBI (State Bank of India)', logo: 'https://i.ibb.co/ycVZq6ff/SBI.png' }, 
      { name: 'Zomato', logo: 'https://i.ibb.co/cSC65jzn/Zomato.webp' }, 
      { name: 'Protiviti Consulting', logo: 'https://i.ibb.co/9HGrJkzZ/Protiviti-Consulting.png' }
    ],
  },
  {
    quote:
      "Apply Ease took away all the hassle. Their expertise, dedication, and hands-on approach meant I could relax knowing I was in good hands. The opportunity came through smoothly and on schedule – couldn't have asked for more!",
    name: 'Vijay Prakash',
    title: 'Business Analyst at Picapool',
    avatar: 'VP',
    image: 'https://i.ibb.co/Ng8fDnkK/Vijay-Prakash.jpg',
    rating: 5,
    bio: "As a Business Analyst at Picapool, I apply my expertise in accounting and corporate law to deliver data-driven insights and strategic recommendations that support business growth. Alongside my role, I am pursuing the CA Intermediate certification and have completed the Do Well Do Good Future Leaders Program, as well as certifications from NISM (Research Analyst) and SEBI (Investor Certificate). These experiences have strengthened my ability to combine financial analysis, legal understanding, and strategic thinking to drive value for the organization and its stakeholders.",
    linkedin: 'https://www.linkedin.com/in/vijay-prakash-b44a00287/',
    companiesSecured: [
        { name: 'Acuvon Consulting (Project Intern)', logo: 'https://i.ibb.co/sv3HZcNx/Acuvon-Consulting.jpg' }, 
        { name: 'Piramal Finance', logo: 'https://i.ibb.co/gFyBXpWg/Piramal-Financejpg.jpg' }, 
        { name: 'SBI (State Bank of India)', logo: 'https://i.ibb.co/ycVZq6ff/SBI.png' }
    ],
  },
  {
    quote:
      'Apply Ease made everything so simple for me. I just sat back and relaxed while their expert team handled every step of the process. Thanks to them, I landed the opportunity effortlessly. Highly recommended for anyone seeking a stress-free experience!',
    name: 'Vidisha Shree',
    title: 'Student at SRCC',
    avatar: 'VS',
    image: 'https://i.ibb.co/SX8j2v1n/Vidisha-Shree.jpg',
    rating: 5,
    bio: "As a B.Com (Hons.) student at SRCC and CA Foundation qualifier, I bring a blend of analytical and strategic skills through experiences at Unilever, where I gained exposure to global operations, and at The Electric Eel Founder's Office, where I worked closely on business growth initiatives. My role at TEDxSRCC further strengthened my leadership, organizational, and stakeholder management abilities. These experiences have shaped my interest in finance, strategy, and business operations, and I am keen to apply my skills to drive impactful solutions in dynamic environments.",
    linkedin: 'https://www.linkedin.com/in/vidisha-shree-433a42298/',
    companiesSecured: [
      { name: 'Primus Partners Pvt Ltd', logo: 'https://i.ibb.co/DP7mfKHC/primus.png' },
      { name: 'SBI', logo: 'https://i.ibb.co/ycVZq6ff/SBI.png' }
    ],
  },
  {
    quote:
      "From start to finish, Apply Ease handled all the complexities without me having to worry about a thing. Their professionalism and attention to detail gave me complete confidence. I'm thrilled with the outcome and can't thank them enough!",
    name: 'Alok Kumar',
    title: 'Student at SRCC',
    avatar: 'AK',
    image: 'https://i.ibb.co/27KK47KH/Alok-Kumar.jpg',
    rating: 5,
    bio: "I am a B.Com (Hons.) student at SRCC '26/27 with experience spanning consulting, growth strategy, and public policy. I have worked with organizations like Primus Partners, Frost & Sullivan, the Ministry of Commerce & Industry, and Picapool, where I contributed to business expansion, analytics, and strategic projects. Beyond internships, I serve as General Secretary at Delta SRCC and engage in initiatives such as Vittshala, NSS, and Changement Services, honing my leadership and problem-solving skills.",
    linkedin: 'https://www.linkedin.com/in/alok-kumar-8063b8292/',
    companiesSecured: [
      { name: 'Primus Partners Pvt Ltd (Consulting Intern)', logo: 'https://i.ibb.co/DP7mfKHC/primus.png' },
      { name: 'Bajaj Capital Ltd (Summer Intern)', logo: 'https://i.ibb.co/KzfhKCSt/Bajaj-Capital-Ltd.jpg' },
      { name: 'Ministry of Commerce and Industry, Government of India (Internship)', logo: 'https://i.ibb.co/Pzhdyyty/Ministry-of-Commerce-and-Industry-Government-of-India.png' },
    ],
  },
  {
    quote:
      'Apply Ease turned what seemed complicated into a simple, smooth experience. I just sat back while their team managed everything end-to-end. The result? A successful outcome without any of the usual stress. Highly trustworthy!',
    name: 'Rishi Kumar Sinha',
    title: "Student at SRCC",
    avatar: 'RS',
    image: 'https://i.ibb.co/rGjyW3tx/Rishi-kumar-Sinha.jpg',
    rating: 4,
    bio: "I am a B.Com (Hons.) student at SRCC '25 who enjoys turning complex financial data into clear strategies that improve efficiency and unlock growth. My journey spans roles at Shriram Finance, Bajaj Allianz, Vodafone Idea, SPA Capital, and 24x7 Security, where I worked on everything from building financial models and streamlining compliance processes to designing risk frameworks and supporting post-merger analysis. Alongside internships, I've actively contributed to SRCC's Debating Society and student leadership initiatives, which sharpened my ability to think critically and communicate persuasively. What drives me is the challenge of connecting numbers with strategy to create solutions that make organizations more agile, resilient, and future-ready.",
    linkedin: 'https://www.linkedin.com/in/rishi-kumar-sinha-b92347230/',
    companiesSecured: [
      { name: 'Shriram Finance Limited (Finance Intern)', logo: 'https://i.ibb.co/21611bT5/Shriram-Finance-Limited.png' },
      { name: 'SPA Capital Services Ltd. (Project Consultant)', logo: 'https://i.ibb.co/HDSncbpf/SPA-Capital-Services-Ltd.png' },
      { name: 'Bajaj Allianz General Insurance (Strategy Intern)', logo: 'https://i.ibb.co/JRLHkQpr/Bajaj-Allianz-General-Insurance.png' },
    ],
  },
];


export const getTestimonials = async (): Promise<Testimonial[]> => {
  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In a real app, you would fetch this data from a database
  return testimonials;
};
