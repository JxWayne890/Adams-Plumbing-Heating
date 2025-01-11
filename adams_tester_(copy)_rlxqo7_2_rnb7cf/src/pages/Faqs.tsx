import React, { useState, useRef, useLayoutEffect, useTransition, useEffect } from 'react';
    import Navbar from '../components/Navbar';
    import Footer from '../components/Footer';
    import { cn } from '@/lib/utils';
    import { Phone } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { Link } from 'react-router-dom';

    const Faqs = () => {
      const [activeCategory, setActiveCategory] = useState('General');
      const contentRef = useRef<HTMLDivElement>(null);
      const [contentHeight, setContentHeight] = useState<number | null>(null);
      const [isPending, startTransition] = useTransition();
      const heroRef = useRef<HTMLElement>(null);
      const whyChooseUsRef = useRef<HTMLElement>(null);
      const aboutUsRef = useRef<HTMLElement>(null);
      const servicesRef = useRef<HTMLElement>(null);
      const contactFormRef = useRef<HTMLElement>(null);
      const ctaButtonRef = useRef<HTMLAnchorElement>(null);
      const [isCtaVisible, setIsCtaVisible] = useState(false);

      const faqs = {
        General: [
          {
            question: 'What plumbing and heating services do you offer?',
            answer: 'We provide services such as leak detection, pipe repairs, drain cleaning, water heater installation, boiler servicing, central heating repairs, radiator installation, gas line repairs, and bathroom/kitchen plumbing renovations.',
          },
          {
            question: 'Do you offer emergency plumbing and heating services?',
            answer: 'Yes, we offer 24/7 emergency services for urgent plumbing and heating issues, including burst pipes, boiler breakdowns, and gas leaks.',
          },
          {
            question: 'Are you licensed and insured?',
            answer: 'Yes, all our plumbers and heating technicians are fully licensed, insured, and trained to handle a variety of residential and commercial plumbing and heating issues.',
          },
          {
            question: 'How do I schedule an appointment?',
            answer: 'You can call us directly, book online through our website, or send us an email, and we’ll confirm your appointment as soon as possible.',
          },
          {
            question: 'Do you provide free estimates?',
            answer: 'Yes, we offer free estimates for most plumbing and heating services. For complex projects, a site visit may be required before providing a detailed quote.',
          },
        ],
        Plumbing: [
          {
            question: 'Why is my faucet dripping?',
            answer: 'A dripping faucet can be caused by worn-out washers, seals, or faulty valves. Ignoring it can lead to higher water bills, so it’s best to have it repaired promptly.',
          },
          {
            question: 'What should I do if my pipes burst?',
            answer: 'Immediately turn off your main water supply and call us for emergency plumbing services. Burst pipes can cause significant water damage, so prompt action is essential.',
          },
          {
            question: 'How can I prevent clogged drains?',
            answer: 'Avoid pouring grease, coffee grounds, and food scraps down the drain. Regular maintenance, such as using strainers, can help prevent clogs.',
          },
          {
            question: 'Why is my water pressure low?',
            answer: 'Low water pressure can be caused by several factors, including clogged pipes, leaks, or problems with your water supply. We can diagnose the cause and restore proper pressure.',
          },
          {
            question: 'What causes my toilet to keep running?',
            answer: 'A continuously running toilet is often due to a faulty flapper valve, fill valve, or float. This can waste a lot of water, so prompt repair is advised.',
          },
          {
            question: 'Do you repair or replace water heaters?',
            answer: 'Yes, we offer both repair and replacement services for traditional and tankless water heaters. If your water heater is over 10 years old or frequently breaking down, replacement might be more cost-effective.',
          },
          {
            question: 'What should I do if my water heater is leaking?',
            answer: 'Turn off the water supply to the heater and call us immediately. A leaking water heater can lead to significant damage and requires prompt attention.',
          },
          {
            question: 'How often should I have my plumbing inspected?',
            answer: 'We recommend having your plumbing inspected annually to catch potential issues early and ensure everything is functioning properly.',
          },
        ],
        Heating: [
          {
            question: 'How often should I service my boiler?',
            answer: 'It’s recommended to have your boiler serviced annually to ensure it operates efficiently and safely. Regular servicing can also extend its lifespan.',
          },
          {
            question: 'Why is my radiator not getting hot?',
            answer: 'Common reasons include trapped air in the system, a faulty thermostat, or a circulation issue. Bleeding the radiator might help, but if the problem persists, give us a call.',
          },
          {
            question: 'What should I do if my boiler stops working?',
            answer: 'First, check the thermostat settings, ensure the pilot light is on (if applicable), and check for power issues. If everything seems fine but the boiler isn’t working, call us for a professional inspection.',
          },
          {
            question: 'How do I know if I need a new boiler?',
            answer: 'If your boiler is more than 10-15 years old, frequently breaking down, or no longer heating efficiently, it may be time for a replacement. We can assess your boiler and recommend the best solution.',
          },
          {
            question: 'What types of heating systems do you install?',
            answer: 'We install a range of heating systems, including boilers, furnaces, heat pumps, radiant floor heating, and smart thermostats for better energy efficiency.',
          },
          {
            question: 'Can you help me reduce my heating bills?',
            answer: 'Yes, we offer energy-efficient solutions, including smart thermostat installations, boiler upgrades, and system insulation. Regular servicing also helps maintain efficiency.',
          },
        ],
        Cost: [
          {
            question: 'How much will my repair cost?',
            answer: 'The cost depends on the type of repair and parts needed. We provide upfront pricing with no hidden fees after inspecting the problem.',
          },
          {
            question: 'Do you offer financing options?',
            answer: 'Yes, we offer flexible financing options for larger installations and repairs. Contact us to learn more about available plans.',
          },
          {
            question: 'What forms of payment do you accept?',
            answer: 'We accept cash, credit/debit cards, and bank transfers. For larger projects, we may also accept payment plans.',
          },
          {
            question: 'Do you charge for after-hours or emergency services?',
            answer: 'Yes, there is an additional charge for after-hours and emergency call-outs. However, we strive to keep our rates competitive and fair.',
          },
          {
            question: 'Do you offer any discounts?',
            answer: 'Yes, we offer discounts for senior citizens, veterans, and first-time customers. Check our website or call us to learn about current promotions.',
          },
        ],
        Warranties: [
          {
            question: 'Do you offer a warranty on your work?',
            answer: 'Yes, we provide a warranty on both parts and labor. The specific warranty duration depends on the type of service and parts used.',
          },
          {
            question: 'What happens if the problem recurs after the repair?',
            answer: 'If the problem recurs within the warranty period, we will return and fix it at no additional cost.',
          },
          {
            question: 'Do you use high-quality parts?',
            answer: 'Yes, we use high-quality, industry-standard parts from trusted manufacturers to ensure durability and reliability.',
          },
        ],
        Energy: [
          {
            question: 'How can I make my home more energy-efficient?',
            answer: 'Regular maintenance of your heating system, upgrading to a high-efficiency boiler or water heater, insulating pipes, and using a smart thermostat can significantly improve energy efficiency.',
          },
          {
            question: 'Is it worth switching to a tankless water heater?',
            answer: 'Yes, tankless water heaters are more energy-efficient because they only heat water when needed, reducing energy waste and lowering utility bills.',
          },
          {
            question: 'What is the best type of heating system for my home?',
            answer: 'The best system depends on your home size, energy needs, and budget. We can provide a detailed assessment and recommend the ideal solution for your specific situation.',
          },
        ],
        Emergency: [
          {
            question: 'What should I do in case of a gas leak?',
            answer: 'If you suspect a gas leak, immediately evacuate your home, avoid using electrical appliances, and call your gas company and our emergency number.',
          },
          {
            question: 'How do I shut off my water supply in an emergency?',
            answer: 'Locate your main water shut-off valve, usually found where the water line enters your home. Turn it clockwise to shut off the water.',
          },
          {
            question: 'Can you fix frozen pipes?',
            answer: 'Yes, we can safely thaw frozen pipes and repair any damage caused. It’s crucial to address frozen pipes quickly to prevent bursting.',
          },
        ],
      };

      useLayoutEffect(() => {
        if (contentRef.current) {
          setContentHeight(contentRef.current.scrollHeight);
        }
      }, [activeCategory]);

      useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsCtaVisible(true);
            } else {
              setIsCtaVisible(false);
            }
          });
        }, { threshold: 0.1 });

        if (ctaButtonRef.current) {
          observer.observe(ctaButtonRef.current);
        }

        return () => {
          if (ctaButtonRef.current) {
            observer.unobserve(ctaButtonRef.current);
          }
        };
      }, []);

      return (
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
              <aside className="w-1/4 pr-8 border-r">
                <h2 className="text-2xl font-bold mb-6">Categories</h2>
                <ul className="space-y-2">
                  {Object.keys(faqs).map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => startTransition(() => setActiveCategory(category))}
                        className={cn(
                          "block w-full text-left py-2 px-4 rounded-md hover:bg-gray-100",
                          activeCategory === category ? "bg-gray-100 font-medium" : "text-gray-700"
                        )}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </aside>
              <div
                ref={contentRef}
                className={cn(
                  "w-3/4 pl-8 overflow-hidden transition-[max-height] duration-300 ease-in-out",
                  isPending && "opacity-50",
                  contentHeight !== null && `max-h-[${contentHeight}px]`,
                  contentHeight === null && "max-h-0"
                )}
              >
                <h1 className="text-3xl font-bold mb-6">{activeCategory} FAQs</h1>
                <ul className="list-none list-inside text-gray-700 space-y-4">
                  {faqs[activeCategory]?.map((faq, index) => (
                    <li key={index} className="mb-6">
                      <p className="font-bold">{faq.question}</p>
                      <p>{faq.answer}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </main>
          <Footer />
          <Link
            ref={ctaButtonRef}
            to="/#contact-form"
            className={cn(
              "fixed bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-md font-bold hover:bg-primary/90 inline-flex items-center transition-opacity duration-1000 animate-blink",
              isCtaVisible ? "opacity-100" : "opacity-0"
            )}
          >
            Get A Free Quote
          </Link>
        </div>
      );
    };

    export default Faqs;
