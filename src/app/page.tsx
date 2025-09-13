
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
  Trophy,
  Briefcase,
  TrendingUp,
  Rocket,
  ExternalLink,
  Star,
  ShoppingBag,
  MessageSquare,
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
        'A professional CV crafted by experts from SRCC, IIT, and Esteem organizations, which is scrutinized for quality to make you stand out.',
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
      name: 'Aisha Khan',
      role: 'Founder & Career Strategist',
      credentials: 'SRCC Alumna',
      image: 'https://picsum.photos/seed/101/100/100',
      fallback: 'AK',
      email: 'aisha.khan@applyease.com',
      linkedin: 'https://www.linkedin.com/in/aishakhan',
      bio: 'Aisha is a passionate career strategist with a decade of experience helping professionals achieve their dream careers. A proud SRCC alumna, she specializes in crafting compelling narratives that make candidates stand out in a competitive job market.',
      achievements: [
        {
          icon: <Trophy className="h-6 w-6 text-amber-400" />,
          title: 'Top Career Coach 2023',
          description:
            'Recognized for outstanding success in client placements.',
        },
        {
          icon: <Briefcase className="h-6 w-6 text-blue-400" />,
          title: '500+ Placements',
          description:
            'Successfully placed over 500 candidates in top-tier companies.',
        },
        {
          icon: <TrendingUp className="h-6 w-6 text-green-400" />,
          title: '98% Client Satisfaction',
          description:
            'Maintained a near-perfect satisfaction rate through personalized service.',
        },
      ],
      projects: [
        {
          title: 'CareerPath AI',
          description: 'An AI-powered platform for personalized career roadmap generation.',
          link: '#',
          image: 'https://picsum.photos/seed/201/300/200'
        },
        {
          title: 'Resume-Analyzer',
          description: 'A tool that uses NLP to score resumes against job descriptions.',
          link: '#',
          image: 'https://picsum.photos/seed/202/300/200'
        },
        {
          title: 'Interview Simulator',
          description: 'VR-based interview practice with real-time feedback.',
          link: '#',
          image: 'https://picsum.photos/seed/203/300/200'
        },
      ],
    },
    {
      name: 'Vikram Singh',
      role: 'Lead Mentor',
      credentials: 'IIT Delhi Graduate',
      image: 'https://picsum.photos/seed/102/100/100',
      fallback: 'VS',
      email: 'vikram.singh@applyease.com',
      linkedin: 'https://www.linkedin.com/in/vikramsingh',
      bio: 'Vikram is an IIT Delhi graduate and a seasoned industry expert with a passion for mentoring the next generation of leaders. He provides invaluable guidance on career growth, interview preparation, and skill development, helping mentees navigate their professional journey with confidence.',
      achievements: [
        {
          icon: <Trophy className="h-6 w-6 text-amber-400" />,
          title: 'Innovation in Mentorship Award',
          description:
            'Awarded for developing a groundbreaking mentorship framework.',
        },
        {
          icon: <Briefcase className="h-6 w-6 text-blue-400" />,
          title: '100+ Mentees',
          description:
            'Guided over 100 young professionals to achieve their career goals.',
        },
        {
          icon: <TrendingUp className="h-6 w-6 text-green-400" />,
          title: 'Industry Speaker',
          description:
            'Frequent speaker at major tech and career development conferences.',
        },
      ],
      projects: [
        {
          title: 'Project MentorMatch',
          description: 'An algorithm to match mentees with the most suitable mentors.',
          link: '#',
          image: 'https://picsum.photos/seed/204/300/200'
        },
        {
          title: 'SkillGap Analyzer',
          description: 'A tool for identifying and bridging skill gaps for career advancement.',
          link: '#',
          image: 'https://picsum.photos/seed/205/300/200'
        },
        {
          title: 'Tech-Interview PrepKit',
          description: 'A comprehensive resource hub for technical interview preparation.',
          image: 'https://picsum.photos/seed/206/300/200'
        },
      ],
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
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Authenticity and Credibility You Can Trust
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are a team of dedicated professionals from top institutions like SRCC, IIT, and Esteem organizations, all passionate about helping you achieve your career goals. Our focus is on building trust through transparent, high-quality services.
              </p>
              <div className="flex flex-col gap-4">
                {teamMembers.map((member, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <button className="flex items-center gap-4 text-left hover:bg-muted/50 p-2 rounded-lg transition-colors">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={member.image} alt={member.name} />
                          <AvatarFallback>{member.fallback}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-lg font-bold">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {member.role} -{' '}
                            <span className="font-semibold text-primary">
                              {member.credentials}
                            </span>
                          </p>
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-6xl bg-background text-foreground border-border p-0">
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
                              {member.role} -{' '}
                              <span className="font-semibold text-primary">
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

                        <div>
                          <h4 className="font-semibold text-xl mb-4">
                            Achievements
                          </h4>
                          <Carousel
                            opts={{
                              align: 'start',
                            }}
                            className="w-full"
                          >
                            <CarouselContent>
                              {member.achievements.map((achievement, i) => (
                                <CarouselItem
                                  key={i}
                                  className="md:basis-1/2 lg:basis-1/2"
                                >
                                  <div className="p-1 h-full">
                                    <Card className="flex flex-col h-full bg-muted/50">
                                      <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                                        {achievement.icon}
                                        <CardTitle className="text-md font-medium">
                                          {achievement.title}
                                        </CardTitle>
                                      </CardHeader>
                                      <CardContent>
                                        <p className="text-xs text-muted-foreground">
                                          {achievement.description}
                                        </p>
                                      </CardContent>
                                    </Card>
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious className="ml-12" />
                            <CarouselNext className="mr-12" />
                          </Carousel>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-xl mb-4">
                            Projects
                          </h4>
                          <Carousel
                            opts={{
                              align: 'start',
                            }}
                            className="w-full"
                          >
                            <CarouselContent>
                              {member.projects.map((project, i) => (
                                <CarouselItem
                                  key={i}
                                  className="md:basis-1/2 lg:basis-1/2"
                                >
                                  <div className="p-1 h-full">
                                    <Card className="flex flex-col h-full bg-muted/50 overflow-hidden">
                                      <div className="relative h-40 w-full">
                                        <Image src={project.image} alt={project.title} fill className="object-cover" />
                                      </div>
                                      <CardHeader>
                                        <CardTitle className="text-md font-medium">
                                          {project.title}
                                        </CardTitle>
                                      </CardHeader>
                                      <CardContent className='flex-grow'>
                                        <p className="text-xs text-muted-foreground">
                                          {project.description}
                                        </p>
                                      </CardContent>
                                      {project.link && (
                                        <CardFooter className="pt-4">
                                          <Button asChild size='sm' variant='outline' className="w-full">
                                            <a
                                              href={project.link}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                            >
                                              View Project <ExternalLink className="ml-2 h-4 w-4"/>
                                            </a>
                                          </Button>
                                        </CardFooter>
                                      )}
                                    </Card>
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious className="ml-12" />
                            <CarouselNext className="mr-12" />
                          </Carousel>
                        </div>
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
            </div>
            <Image
              src="https://picsum.photos/seed/103/600/500"
              data-ai-hint="team collaboration"
              width={600}
              height={500}
              alt="Our Team"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
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
                                  <AvatarFallback>
                                    {testimonial.avatar}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="pt-2">
                                  <DialogTitle className="text-3xl font-bold">
                                    {testimonial.name}
                                  </DialogTitle>
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
                                    Service Used
                                  </h4>
                                  <p className="text-muted-foreground">
                                    {testimonial.service}
                                  </p>
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
