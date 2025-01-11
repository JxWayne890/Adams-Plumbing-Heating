import { Link } from 'react-router-dom';
    import { Phone, Mail, MapPin } from 'lucide-react';

    const Footer = () => {
      return (
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Adams Plumbing & Heating</h3>
                <p className="text-gray-400">Serving Abilene since 1945</p>
                <p className="text-gray-400 mt-2">License #M-17112</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <div className="space-y-2">
                  <a href="tel:+13256776322" className="flex items-center text-gray-400 hover:text-white">
                    <Phone size={20} className="mr-2" />
                    (325) 677-6322
                  </a>
                  <a href="mailto:adamsplumbingheat@att.net" className="flex items-center text-gray-400 hover:text-white">
                    <Mail size={20} className="mr-2" />
                    adamsplumbingheat@att.net
                  </a>
                  <p className="flex items-center text-gray-400">
                    <MapPin size={20} className="mr-2" />
                    846 Pine St, Abilene, TX 79601
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Adams Plumbing & Heating. All rights reserved.</p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
