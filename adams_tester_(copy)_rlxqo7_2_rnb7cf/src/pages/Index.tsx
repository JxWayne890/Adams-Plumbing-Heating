import Navbar from '../components/Navbar';
    import Footer from '../components/Footer';
    import { Shield, Clock, Award, Phone, DollarSign, CheckCircle, MapPin, Users, Star } from 'lucide-react';
    import { Link } from 'react-router-dom';
    import ContactForm from '../components/ContactForm';
    import React, { useRef, useEffect } from 'react';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
    import { LayoutList, Water, Flame } from 'lucide-react';

    const Index = () => {
      const contactFormRef = useRef<HTMLElement>(null);
      const heroRef = useRef<HTMLElement>(null);
      const whyChooseUsRef = useRef<HTMLElement>(null);
      const aboutUsRef = useRef<HTMLElement>(null);
      const servicesRef = useRef<HTMLElement>(null);
      const ctaRef = useRef<HTMLElement>(null);

      const handleContactClick = () => {
        contactFormRef.current?.scrollIntoView({ behavior: 'smooth' });
      };

      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      };

      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in-up');
            } else {
              entry.target.classList.remove('animate-fade-in-up');
            }
          });
        }, observerOptions);

        if (heroRef.current) observer.observe(heroRef.current);
        if (whyChooseUsRef.current) observer.observe(whyChooseUsRef.current);
        if (aboutUsRef.current) observer.observe(aboutUsRef.current);
        if (servicesRef.current) observer.observe(servicesRef.current);
        if (ctaRef.current) observer.observe(ctaRef.current);

        return () => {
          if (heroRef.current) observer.unobserve(heroRef.current);
          if (whyChooseUsRef.current) observer.unobserve(whyChooseUsRef.current);
          if (aboutUsRef.current) observer.unobserve(aboutUsRef.current);
          if (servicesRef.current) observer.unobserve(servicesRef.current);
          if (ctaRef.current) observer.unobserve(ctaRef.current);
        };
      }, []);

      return (
        <div className="min-h-screen flex flex-col">
          <Navbar 
            heroRef={heroRef}
            whyChooseUsRef={whyChooseUsRef}
            aboutUsRef={aboutUsRef}
            servicesRef={servicesRef}
            contactFormRef={contactFormRef}
          />
          
          <main className="flex-grow">
            {/* Hero Section */}
            <section ref={heroRef} id="hero" className="bg-gradient-to-r from-primary to-blue-900 text-white flex items-center py-20 opacity-0" style={{minHeight: '100svh'}}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Trusted Plumbing & Heating Experts</h1>
                  <p className="text-xl md:text-2xl mb-8">Serving Abilene Since 1945</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="tel:+13256776322" className="bg-white text-primary px-8 py-3 rounded-md font-bold hover:bg-gray-100 flex items-center justify-center">
                      <Phone size={20} className="mr-2" />
                      Call Now
                    </a>
                    <button onClick={handleContactClick} className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-primary">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section ref={whyChooseUsRef} className="py-16 bg-gray-50 opacity-0">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose Adams Plumbing & Heating?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-6">
                    <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
                    <p className="text-gray-600">Licensed professionals with verified credentials (License #M-17112)</p>
                  </div>
                  <div className="text-center p-6">
                    <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-2">75+ Years Experience</h3>
                    <p className="text-gray-600">Decades of trusted service in the Abilene community</p>
                  </div>
                  <div className="text-center p-6">
                    <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-2">A+ BBB Rating</h3>
                    <p className="text-gray-600">Consistently high customer satisfaction ratings</p>
                  </div>
                </div>
              </div>
            </section>

            {/* About Us Section */}
            <section ref={aboutUsRef} id="aboutUs" className="py-16 opacity-0 bg-gradient-to-r from-primary to-blue-900 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto flex flex-col">
                  <h2 className="text-4xl font-bold text-center mb-8">
                    Affordable Plumbing & Heating <br /> Solutions You Can Trust
                  </h2>
                  <div className="py-2 flex flex-col md:flex-row justify-between">
                    <div className="md:w-1/2 md:pr-8">
                      <Card className="bg-white/70 text-black">
                        <CardHeader>
                          <CardTitle className="text-2xl font-bold mb-4 pb-1 border-b border-white text-white">Who We Are</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 mb-4">
                            At Adams Plumbing & Heating, we pride ourselves on being a small, family-owned business with a focus on affordability and quality. With years of experience and a commitment to customer satisfaction, we offer plumbing and heating solutions tailored to your needs.
                          </p>
                          <p className="text-gray-700 mb-4">
                            Our low-overhead structure means we can pass significant savings directly to our customers. Unlike larger companies, we’re able to offer competitive pricing without compromising on the quality of our work. Our team is licensed, factory-certified, and ready to handle all your plumbing and heating needs with excellence.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
                      <Card className="bg-white/70 text-black">
                        <CardHeader>
                          <CardTitle className="text-2xl font-bold mb-4 pb-1 border-b border-white text-white">Why Choose Us?</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-none list-inside text-gray-700 mb-4">
                            <li className="flex items-center mb-4">
                              <DollarSign className="h-8 w-8 mr-2 text-primary" />
                              <p><b>Up to 40% Lower Pricing</b> <br /> Our low-overhead model allows us to offer significant savings on major jobs like gas and sewer line services.</p>
                            </li>
                            <li className="flex items-center mb-4">
                              <CheckCircle className="h-6 w-6 mr-2 text-primary" />
                              <p><b>Certified Experts</b> <br /> Factory-certified to work with trusted brands like Bradford White water heaters.</p>
                            </li>
                            <li className="flex items-center mb-4">
                              <MapPin className="h-6 w-6 mr-2 text-primary" />
                              <p><b>Local & Trusted</b> <br /> Proudly serving the local community with integrity, reliability, and trust.</p>
                            </li>
                            <li className="flex items-center mb-4">
                              <Users className="h-6 w-6 mr-2 text-primary" />
                              <p><b>No Shortcuts, Just Quality Work</b> <br /> Every project is handled with professionalism and attention to detail.</p>
                            </li>
                            <li className="flex items-center mb-4">
                              <Star className="h-6 w-6 mr-2 text-primary" />
                              <p><b>Customer-Focused</b> <br /> Your satisfaction is our priority—we stand behind every job we do.</p>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Overview */}
            <section ref={servicesRef} id="services" className="py-16 opacity-0">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-white/70 text-black">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <LayoutList className="h-6 w-6" />
                        Plumbing Services
                      </CardTitle>
                      <CardDescription>From minor leaks to major installations, we’ve got you covered.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• General plumbing repairs</li>
                        <li>• Pipe installations</li>
                        <li>• Leak detection</li>
                        <li>• Sewer line services</li>
                        <li>• Water heater installation and repair</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/70 text-black">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Flame className="h-6 w-6" />
                        Heating Services
                      </CardTitle>
                      <CardDescription>We handle heating projects of all sizes, keeping your home warm and energy-efficient year-round.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Heating system installation</li>
                        <li>• Preventive maintenance</li>
                        <li>• Repair services</li>
                        <li>• System upgrades</li>
                        <li>• Emergency heating repairs</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </main>
          <section id="contact-form" className="py-16" ref={contactFormRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
              <ContactForm />
            </div>
          </section>
          <Footer />
        </div>
      );
    };

    export default Index;
