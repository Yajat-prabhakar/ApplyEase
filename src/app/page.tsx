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
import { FileText, Send, Users, Star, Linkedin } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';

export default function Home() {
  const services = [
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: 'CV Creation Service',
      price: '₹999',
      description:
        'Professional CV crafted by experts from SRCC, IIT, and STEAM organizations. Scrutinized for quality to make you stand out.',
      link: 'https://tally.so/r/wAkvEN',
    },
    {
      icon: <Send className="h-10 w-10 text-primary" />,
      title: 'Outreach Service',
      price: '₹499',
      description:
        'We handle strategic outreach to target companies and contacts on your behalf, opening doors to new opportunities.',
      link: 'https://tally.so/r/wAkvEN',
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Mentorship Service',
      price: '₹1,999',
      description:
        'Receive personal guidance from industry experts for career growth, interview preparation, and skill development.',
      link: 'https://tally.so/r/wAkvEN',
    },
  ];

  const testimonials = [
    {
      quote:
        'Momentum Careers helped me restructure my CV and I landed a job at my dream company within a month!',
      name: 'Priya S.',
      title: 'Software Engineer',
      avatar: 'PS',
    },
    {
      quote:
        'The mentorship program is invaluable. My mentor provided guidance that helped me navigate a career transition successfully.',
      name: 'Rohan M.',
      title: 'Product Manager',
      avatar: 'RM',
    },
    {
      quote:
        'The outreach service saved me so much time and effort. I got interviews I wouldn’t have been able to secure on my own.',
      name: 'Anika J.',
      title: 'Data Analyst',
      avatar: 'AJ',
    },
  ];

  const teamMembers = [
    {
      name: 'Aisha Khan',
      role: 'Founder & Career Strategist',
      credentials: 'SRCC Alumna',
      image: 'https://picsum.photos/100/100',
      dataAiHint: 'professional woman',
    },
    {
      name: 'Vikram Singh',
      role: 'Lead Mentor',
      credentials: 'IIT Delhi Graduate',
      image: 'https://picsum.photos/101/101',
      dataAiHint: 'professional man',
    },
  ];

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          id="home"
          className="bg-dot-pattern flex w-full items-center justify-center py-20 text-center md:py-32 lg:py-40"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                Helping You Land Your Dream Job with Expert Services
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Build immediate trust with a professional and authentic brand. Our simple process captures your interest without friction.
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="#services">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
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
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Services
                </div>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                  Your Career, Accelerated.
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a suite of services designed to give you a competitive edge in the job market.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} className="flex h-full flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <CardHeader className="items-center">
                    {service.icon}
                    <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                    <p className="text-3xl font-bold text-primary">{service.price}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-center">{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <a href={service.link} target="_blank" rel="noopener noreferrer">
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
        <section id="about" className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Authenticity and Credibility You Can Trust
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are a team of dedicated professionals from top institutions like SRCC, IIT, and STEAM organizations, passionate about helping you achieve your career goals. Our focus is on building trust through transparent, high-quality services.
              </p>
              <div className="flex flex-col gap-4">
                {teamMembers.map((member) => (
                  <div key={member.name} className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <Image src={member.image} alt={member.name} width={64} height={64} data-ai-hint={member.dataAiHint} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-bold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {member.role} - <span className="font-semibold text-primary">{member.credentials}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src="https://picsum.photos/600/500"
              width={600}
              height={500}
              alt="Our Team"
              data-ai-hint="team collaboration"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-headline text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              From Our Clients
            </h2>
            <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="flex flex-col">
                  <CardContent className="flex-grow p-6">
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                    </div>
                    <blockquote className="mt-4 text-lg font-semibold leading-snug">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                  <CardFooter className="mt-auto border-t p-6">
                    <div className="flex items-center">
                      <Avatar className="mr-4 h-12 w-12">
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-3xl px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                Have a Question?
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <div className="mt-8">
              <iframe
                data-tally-src="https://tally.so/embed/n046r9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="316"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Contact Form"
              ></iframe>
              <script>
                {`
                  var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
                `}
              </script>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
