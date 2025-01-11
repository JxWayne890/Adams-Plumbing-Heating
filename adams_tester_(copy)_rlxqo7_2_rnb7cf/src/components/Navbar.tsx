import { useState, useRef } from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { Menu, X } from 'lucide-react';

    interface NavbarProps {
      heroRef?: React.RefObject<HTMLElement>;
      whyChooseUsRef?: React.RefObject<HTMLElement>;
      aboutUsRef?: React.RefObject<HTMLElement>;
      servicesRef?: React.RefObject<HTMLElement>;
      contactFormRef?: React.RefObject<HTMLElement>;
    }

    const Navbar = ({ heroRef, whyChooseUsRef, aboutUsRef, servicesRef, contactFormRef }: NavbarProps) => {
      const [isOpen, setIsOpen] = useState(false);
      const location = useLocation();

      const handleScroll = (ref: React.RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      };

      return (
        <nav className="bg-white shadow-lg sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex-shrink-0 flex items-center">
                  <span className="text-primary text-xl font-bold">Adams Plumbing & Heating</span>
                </Link>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                {location.pathname === "/" ? (
                  <>
                    <button onClick={() => handleScroll(heroRef)} className="text-gray-700 hover:text-primary hover:bg-sky-100 px-3 py-2 rounded-md transition-colors">Home</button>
                    <button onClick={() => handleScroll(aboutUsRef)} className="text-gray-700 hover:text-primary hover:bg-sky-100 px-3 py-2 rounded-md transition-colors">About</button>
                    <button onClick={() => handleScroll(servicesRef)} className="text-gray-700 hover:text-primary hover:bg-sky-100 px-3 py-2 rounded-md transition-colors">Services</button>
                    <button onClick={() => handleScroll(contactFormRef)} className="text-gray-700 hover:text-primary hover:bg-sky-100 px-3 py-2 rounded-md transition-colors">Contact</button>
                  </>
                ) : (
                  <>
                    <Link to="/#hero" className="text-gray-700 hover:text-primary hover:bg-sky-100 px-3 py-2 rounded-md transition-colors">Home</Link>
                    <Link to="/#aboutUs" className="text-gray-700 hover:text-primary hover:bg-sky-100 px-3 py-2 rounded-md transition-colors">About</Link>
                    <Link to="/#services" className="text-gray-700 hover:text-primary hover:bg-sky-100 px-3 py-2 rounded-md transition-colors">Services</Link>
                    <Link to="/#contact-form" className="text-gray-700 hover:text-primary hover:bg-sky-100 px-3 py-2 rounded-md transition-colors">Contact</Link>
                  </>
                )}
                <Link to="/faqs" className="text-gray-700 hover:text-primary hover:bg-sky-100 px-3 py-2 rounded-md transition-colors">FAQs</Link>
                <a href="tel:+13256776322" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90">
                  (325) 677-6322
                </a>
              </div>

              <div className="md:hidden flex items-center">
                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {location.pathname === "/" ? (
                  <>
                    <button onClick={() => handleScroll(heroRef)} className="block px-3 py-2 text-gray-700 hover:text-primary">Home</button>
                    <button onClick={() => handleScroll(aboutUsRef)} className="block px-3 py-2 text-gray-700 hover:text-primary">About</button>
                    <button onClick={() => handleScroll(servicesRef)} className="block px-3 py-2 text-gray-700 hover:text-primary">Services</button>
                    <button onClick={() => handleScroll(contactFormRef)} className="block px-3 py-2 text-gray-700 hover:text-primary">Contact</button>
                  </>
                ) : (
                  <>
                    <Link to="/#hero" className="block px-3 py-2 text-gray-700 hover:text-primary">Home</Link>
                    <Link to="/#aboutUs" className="block px-3 py-2 text-gray-700 hover:text-primary">About</Link>
                    <Link to="/#services" className="block px-3 py-2 text-gray-700 hover:text-primary">Services</Link>
                    <Link to="/#contact-form" className="block px-3 py-2 text-gray-700 hover:text-primary">Contact</Link>
                  </>
                )}
                <Link to="/faqs" className="block px-3 py-2 text-gray-700 hover:text-primary">FAQs</Link>
                <a href="tel:+13256776322" className="block px-3 py-2 text-primary font-bold">(325) 677-6322</a>
              </div>
            </div>
          )}
        </nav>
      );
    };

    export default Navbar;
    
    function cn(...inputs: (string | boolean | undefined | null)[]): string {
      return inputs.filter(Boolean).join(' ');
    }
