
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  FileText,
  Send,
  Users,
  Mail,
  Linkedin,
  Star,
  ShoppingBag,
  MessageSquare,
  Building,
} from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import { getTestimonials, Testimonial } from '@/lib/testimonials';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const services = [
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: 'CV Creation Service',
      price: '₹1500',
      description:
        'A professional CV crafted by experts from SRCC, IIT, and Esteem organizations. Scrutinized for quality to make you stand out.',
      link: 'https://tally.so/r/wAkvEN',
    },
    {
      icon: <Send className="h-10 w-10 text-primary" />,
      title: 'Outreach Service',
      price: '₹999',
      description:
        'We handle strategic outreach to target companies and contacts on your behalf, opening doors to new opportunities.',
      link: 'https://tally.so/r/wAkvEN',
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Mentorship Service',
      price: '₹499',
      description:
        'Receive personal guidance from industry experts for career growth, interview preparation, and skill development.',
      link: 'https://tally.so/r/wAkvEN',
    },
  ];

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error('Failed to fetch testimonials', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const teamMembers = [
  {
    name: 'Pragati Khare',
    role: 'Director at Fidelity International',
    credentials: 'Mentor at ApplyEase',
    experience: '18+ years',
    image: 'https://i.ibb.co/nsP7WhRJ/pragati-khare.jpg',
    fallback: 'PK',
    email: 'pragati.khare@applyease.com',
    linkedin: 'https://www.linkedin.com/in/pragati-khare-a116a232/',
    bio: 'With over 18 years of invaluable experience in the financial services industry, Ms. Khare brings seasoned insight and strategic depth that will significantly enhance how students approach and optimize their entire outreach process. Her guidance will play a vital role in shaping smarter, more impactful journeys for our students.',
    companies: ['Fidelity International', 'Financial Services Leadership'],
  },
  {
    name: 'Aviral Bhadauria',
    role: 'Incoming at Ditto Insurance',
    credentials: 'Outreach Mentor at ApplyEase',
    image: 'https://i.ibb.co/wNVzYZfy/Aviral-bh.jpg',
    fallback: 'AB',
    email: 'aviral.bhadauria@applyease.com',
    linkedin: 'https://www.linkedin.com/in/aviral-bhadauria/',
    bio: "Aviral Bhadauria has dived deep into the tech and systems space—interning at Motorola Solutions, Current Noodles and Snacks and Vayut Aeronautics. Now heading to Ditto by Finshot, he's bringing real-world experience and a sharp tech-business understanding. Having cracked multiple high-growth roles himself, Aviral is now helping fellow aspirants streamline their approach to internships and career building.",
    companies: ['Ditto Insurance', 'Motorola Solutions', 'Current Noodles and Snacks', 'Vayut Aeronautics'],
  },
  {
    name: 'Arya Kumari',
    role: 'Incoming at Tata Group (IHCL)',
    credentials: 'Outreach Mentor at ApplyEase',
    image: 'https://i.ibb.co/Kj3hhvHC/arya-kumar.jpg',
    fallback: 'AK',
    email: 'arya.kumari@applyease.com',
    linkedin: 'https://www.linkedin.com/in/arya-kumari-a959a0283/',
    bio: 'From Britannia Industries Limited and Frost & Sullivan to the Office of the Delhi University Vice Chancellor, Arya has taken on diverse roles in research, strategy, and operations. Now joining Tata IHCL, she brings a unique blend of precision, adaptability, and drive. Having navigated multiple selections herself, Arya is now empowering others to refine their application journeys and break into competitive internships.',
    companies: ['Tata IHCL', 'Britannia Industries Limited', 'Frost & Sullivan', 'Delhi University Vice Chancellor Office'],
  },
  {
    name: 'Vijay Prakash',
    role: 'Incoming Intern at Nation with NaMo',
    credentials: 'Outreach Mentor at ApplyEase',
    image: 'https://i.ibb.co/BVr02wyN/vijay.jpg',
    fallback: 'VP',
    email: 'vijay.prakash@applyease.com',
    linkedin: 'https://www.linkedin.com/in/vijay-prakash-b44a00287/',
    bio: "Vijay Prakash's internship journey spans across top institutions—from Piramal Finance and State Bank of India to consulting stints at Grant Thornton Bharat LLP, Teach For India, and the Rajiv Gandhi Cancer Institute and Research Centre. Having walked the path himself, Vijay is now helping to optimize internship strategies and navigate competitive selections with confidence.",
    companies: ['Nation with NaMo', 'Piramal Finance', 'State Bank of India', 'Grant Thornton Bharat LLP', 'Teach For India', 'Rajiv Gandhi Cancer Institute'],
  },
  {
    name: 'Ishan Ranjan',
    role: 'Outreach Supervisor at ApplyEase',
    credentials: 'Senior outreach supervisor and strategy guide',
    image: 'https://i.ibb.co/G68tz6Q/ishan.jpg',
    fallback: 'IR',
    email: 'ishan.ranjan@applyease.com',
    linkedin: 'https://www.linkedin.com/in/ishanranjan13/',
    bio: "From ITC Limited to Equirus (Investment Banking), from HDFC Bank Capital to Bajaj Allianz General Insurance, Ishan has cracked some of the most sought-after internships across domains. Now serving as the Outreach Supervisor at ApplyEase, he's combining his industry exposure with a drive to support others. Having walked the path himself, Ishan is now helping peers optimize their internship strategies and navigate competitive selections with confidence.",
    companies: ['ITC Limited', 'Equirus (Investment Banking)', 'HDFC Bank Capital', 'Bajaj Allianz General Insurance'],
  },
  {
    name: 'Priyansh Sinha',
    role: 'Incoming at Nation with NaMo',
    credentials: 'Outreach Mentor at ApplyEase',
    image: 'https://i.ibb.co/MyKqwbX7/priyansh.jpg',
    fallback: 'PS',
    email: 'priyansh.sinha@applyease.com',
    linkedin: 'https://www.linkedin.com/in/priyansh-sinha-548157247/',
    bio: "With stints at ICICI Bank, Protiviti, Drishti IAS, Veetaday Industries, Priyansh Sinha has consistently demonstrated clarity of thought and execution. Now joining Nation with NaMo, he's poised to bridge consulting, finance, and policy. Priyansh now uses his experience to assist others in optimising the outreach process—helping them navigate the internship maze with structure, focus, and actionable insights.",
    companies: ['Nation with NaMo', 'ICICI Bank', 'Protiviti', 'Drishti IAS', 'Veetaday Industries'],
  },
];


  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          id="home"
          className="relative flex h-screen min-h-[600px] w-full items-center justify-center text-center"
        >
          <Image
            src="https://i.ibb.co/h1VDV6Z6/ss2.png"
            alt="Office workspace"
            fill
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 -z-10 bg-black/60" />
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Helping You Land Your Dream Job with Expert Services
              </h1>
              <p className="text-lg text-neutral-200 md:text-xl">
                Build immediate trust with a professional and authentic brand.
                Our simple process captures your interest without friction.
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="#services">Get Started</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-black"
                >
                  <Link href="#about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-secondary-foreground">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Your Career, Accelerated.
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a suite of services designed to give you a
                  competitive edge in the job market.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="flex h-full flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <CardHeader className="items-center">
                    {service.icon}
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <p className="text-3xl font-bold text-primary">
                      {service.price}
                    </p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-center">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        I'm Interested
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section
          id="about"
          className="w-full bg-secondary/50 py-12 md:py-24 lg:py-32"
        >
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:gap-10">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Authenticity and Credibility You Can Trust
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are a team of dedicated professionals from top institutions like SRCC, IIT, and Esteem organizations, passionate about helping you achieve your career goals. Our focus is on building trust through transparent, high-quality services.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {teamMembers.map((member, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <button className="flex items-center gap-4 text-left hover:bg-muted/50 p-3 rounded-lg transition-colors w-full">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>{member.fallback}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-lg font-bold">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {member.role}
                        </p>
                         <p className="text-sm font-semibold text-primary">
                            {member.credentials}
                          </p>
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-4xl bg-background text-foreground border-border p-0">
                    <DialogHeader className="p-6 pb-0">
                      <div className="flex items-start gap-6">
                        <Avatar className="h-24 w-24 border-4 border-primary">
                          <AvatarImage
                            src={member.image}
                            alt={member.name}
                          />
                          <AvatarFallback>{member.fallback}</AvatarFallback>
                        </Avatar>
                        <div className="pt-2">
                          <DialogTitle className="text-3xl font-bold">
                            {member.name}
                          </DialogTitle>
                          <DialogDescription className="text-lg text-muted-foreground mt-1">
                            {member.role}
                            <span className="block font-semibold text-primary">
                              {member.credentials}
                            </span>
                          </DialogDescription>
                        </div>
                      </div>
                    </DialogHeader>
                    <div className="px-6 py-4 space-y-6 max-h-[60vh] overflow-y-auto">
                      <div>
                        <h4 className="font-semibold text-xl mb-2">
                          About
                        </h4>
                        <p className="text-muted-foreground">
                          {member.bio}
                        </p>
                      </div>

                      {member.companies && member.companies.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-xl mb-4 flex items-center gap-2">
                            <Building className="h-5 w-5 text-primary" />
                            Company Experience
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {member.companies.map((company, i) => (
                              <Badge key={i} variant="secondary">
                                {company}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-center bg-muted/50 p-4 mt-auto">
                      <p className="text-sm text-muted-foreground">
                        Connect with {member.name.split(' ')[0]}
                      </p>
                      <div className="flex justify-end gap-4">
                        <a
                          href={`mailto:${member.email}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Mail className="h-6 w-6" />
                          <span className="sr-only">Email</span>
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Linkedin className="h-6 w-6" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      </div>
                    </div>
                    <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </DialogClose>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Image
                src="https://picsum.photos/seed/103/800/400"
                data-ai-hint="team collaboration"
                width={800}
                height={400}
                alt="Our Team"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              From Our Clients
            </h2>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="mx-auto mt-12 max-w-5xl"
            >
              <CarouselContent>
                {loading
                  ? Array.from({ length: 3 }).map((_, index) => (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3"
                      >
                        <div className="p-1 h-full">
                          <Card className="flex h-full flex-col bg-muted p-6">
                            <div className="flex gap-1 mb-4">
                              {[...Array(5)].map((_, i) => (
                                <Skeleton
                                  key={i}
                                  className="h-5 w-5 rounded-full"
                                />
                              ))}
                            </div>
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-4/5 mb-4" />
                            <div className="flex items-center mt-auto">
                              <Skeleton className="h-12 w-12 rounded-full mr-4" />
                              <div>
                                <Skeleton className="h-4 w-24 mb-1" />
                                <Skeleton className="h-3 w-20" />
                              </div>
                            </div>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))
                  : testimonials.map((testimonial, index) => (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3"
                      >
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="p-1 h-full w-full">
                              <Card className="flex h-full w-full flex-col bg-muted hover:bg-muted/80 transition-colors cursor-pointer">
                                <CardContent className="flex-grow p-6">
                                  <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-5 w-5 ${
                                          i < testimonial.rating
                                            ? 'text-amber-400 fill-amber-400'
                                            : 'text-muted-foreground'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <blockquote className="text-lg font-semibold leading-snug text-secondary-foreground">
                                    &quot;{testimonial.quote}&quot;
                                  </blockquote>
                                </CardContent>
                                <CardFooter className="mt-auto border-t p-6">
                                  <div className="flex items-center">
                                    <Avatar className="mr-4 h-12 w-12">
                                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                      <AvatarFallback>
                                        {testimonial.avatar}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <p className="font-semibold">
                                        {testimonial.name}
                                      </p>
                                      <p className="text-sm text-muted-foreground">
                                        {testimonial.title}
                                      </p>
                                    </div>
                                  </div>
                                </CardFooter>
                              </Card>
                            </div>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-3xl bg-background text-foreground border-border p-0">
                            <DialogHeader className="p-6 pb-0">
                              <div className="flex items-start gap-6">
                                <Avatar className="h-24 w-24 border-4 border-primary">
                                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                  <AvatarFallback>
                                    {testimonial.avatar}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="pt-2">
                                  <div className="flex items-center gap-2">
                                    <DialogTitle className="text-3xl font-bold">
                                      {testimonial.name}
                                    </DialogTitle>
                                    <a
                                      href={testimonial.linkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                      <Linkedin className="h-6 w-6" />
                                      <span className="sr-only">LinkedIn</span>
                                    </a>
                                  </div>
                                  <DialogDescription className="text-lg text-muted-foreground mt-1">
                                    {testimonial.title}
                                  </DialogDescription>
                                  <div className="flex gap-1 mt-2">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-5 w-5 ${
                                          i < testimonial.rating
                                            ? 'text-amber-400 fill-amber-400'
                                            : 'text-muted-foreground/50'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </DialogHeader>
                            <div className="px-6 py-4 space-y-6 max-h-[60vh] overflow-y-auto">
                              
                              <div>
                                <h4 className="font-semibold text-xl mb-2">
                                  About
                                </h4>
                                <p className="text-muted-foreground">
                                  {testimonial.bio}
                                </p>
                              </div>

                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-semibold text-xl mb-2 flex items-center gap-2">
                                    <ShoppingBag className="h-5 w-5 text-primary" />
                                    Opportunities Secured
                                  </h4>
                                   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {testimonial.companiesSecured.map((company, i) => (
                                      <div key={i} className="flex flex-col items-center text-center gap-2 p-2 border rounded-lg bg-secondary/50">
                                        {company.logo && (
                                          <div className="w-16 h-16 relative flex items-center justify-center bg-white rounded-md p-1 border shadow-sm">
                                            <Image 
                                              src={company.logo} 
                                              alt={`${company.name} logo`} 
                                              fill
                                              objectFit="contain"
                                              className="rounded-sm" 
                                            />
                                          </div>
                                        )}
                                        <span className="text-xs font-semibold mt-1">{company.name}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-xl mb-2 flex items-center gap-2">
                                    <MessageSquare className="h-5 w-5 text-primary" />
                                    Feedback
                                  </h4>
                                  <blockquote className="text-muted-foreground border-l-4 pl-4 italic">
                                    &quot;{testimonial.quote}&quot;
                                  </blockquote>
                                </div>
                              </div>
                            </div>
                            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                              <X className="h-4 w-4" />
                              <span className="sr-only">Close</span>
                            </DialogClose>
                          </DialogContent>
                        </Dialog>
                      </CarouselItem>
                    ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Feedback Section */}
        <section
          id="feedback"
          className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50"
        >
          <div className="container mx-auto max-w-3xl px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Share Your Feedback
              </h2>
              <p className="text-muted-foreground md:text-xl">
                We’d love to hear your thoughts — help us improve by submitting
                your feedback!
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg">
                <a
                  href="https://tally.so/r/mORBgY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Submit Feedback
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container mx-auto max-w-3xl px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter smt:ext-5xl">
                Have a Question?
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Click the button below to open our contact form and we&apos;ll
                get back to you as soon as possible.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg">
                <a
                  href="https://tally.so/r/n046r9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
