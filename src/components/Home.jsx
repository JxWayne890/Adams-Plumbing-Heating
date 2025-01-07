import React from 'react';
    import { Element, Link } from 'react-scroll';
    import '../index.css';

    const servicesData = [
      {
        id: 1,
        title: 'Plumbing Services',
        description: 'From minor leaks to major installations, we’ve got you covered. Our plumbing services include: Leak repairs, Sewer and gas line maintenance, Fixture replacements and installations',
        icon: '/plumbing-icon.png',
      },
      {
        id: 2,
        title: 'Water Heater Services',
        description: 'We specialize in servicing and installing Bradford White water heaters, one of the best American-made brands on the market. As factory-certified specialists, we ensure top-notch service before, during, and after your water heater installation.',
        icon: '/water-heater-icon.png',
      },
      {
        id: 3,
        title: 'Heating Solutions',
        description: 'Need heating repairs or installations? Our experienced team handles heating projects of all sizes, keeping your home warm and energy-efficient year-round.',
        icon: '/heating-icon.png',
      },
      {
        id: 4,
        title: 'Affordable Bids & Second Opinions',
        description: 'Looking for a second or third bid on a project? We understand how competitive the plumbing and heating industry can be. That’s why we offer free, no-obligation bids to help you make the best decision for your project. With pricing up to 40% lower than big-name competitors, we aim to provide unbeatable value.',
        icon: '/bid-icon.png',
      },
    ];

    function Home() {
      return (
        <div>
          <Element name="home" className="intro">
            <div className="intro-content">
              <h2>Affordable Plumbing & Heating Solutions You Can Trust</h2>
              <p>
                Adams Plumbing & Heating is a local, low-overhead company offering high-quality services at prices up to 40% lower than larger competitors. Whether you need plumbing repairs, water heater installations, or gas line services, we deliver expert results without breaking your budget.
              </p>
              <Link to="contact" smooth={true} duration={500} className="btn">Get Your Free Quote Today</Link>
            </div>
          </Element>
          <Element name="about" className="history">
            <div className="container about-us-container">
              <div className="about-us-intro">
                <h2>Who We Are</h2>
                <img src="/plumbing-feature.jpg" alt="Plumbing Feature" />
                <p>
                  At Adams Plumbing & Heating, we pride ourselves on being a small, family-owned business with a focus on affordability and quality. With years of experience and a commitment to customer satisfaction, we offer plumbing and heating solutions tailored to your needs.
                </p>
                <p>
                  Our low-overhead structure means we can pass significant savings directly to our customers. Unlike larger companies, we’re able to offer competitive pricing without compromising on the quality of our work. Our team is licensed, factory-certified, and ready to handle all your plumbing and heating needs with excellence.
                </p>
              </div>
              <div className="about-us-why">
                <h2>Why Choose Us?</h2>
                <div className="why-choose-list">
                  <div className="why-choose-item">
                    <img src="/pricing-icon.png" alt="Pricing Icon" className="why-choose-icon" />
                    <p><strong><span className="highlight">Up to 40% Lower Pricing:</span></strong> Our low-overhead model allows us to offer significant savings on major jobs like gas and sewer line services.</p>
                  </div>
                  <div className="why-choose-item">
                    <img src="/certified-icon.png" alt="Certified Icon" className="why-choose-icon" />
                    <p><strong><span className="highlight">Certified Experts:</span></strong> We are factory-certified to work with high-quality Bradford White water heaters.</p>
                  </div>
                  <div className="why-choose-item">
                    <img src="/local-icon.png" alt="Local Icon" className="why-choose-icon" />
                    <p><strong><span className="highlight">Local & Trusted:</span></strong> We’re a proud part of the local community, with relationships built on trust, reliability, and integrity.</p>
                  </div>
                  <div className="why-choose-item">
                    <img src="/quality-icon.png" alt="Quality Icon" className="why-choose-icon" />
                    <p><strong><span className="highlight">No Shortcuts, Just Quality Work:</span></strong> Every project is handled with professionalism and attention to detail. No shortcuts—just honest, high-quality results.</p>
                  </div>
                  <div className="why-choose-item">
                    <img src="/customer-icon.png" alt="Customer Icon" className="why-choose-icon" />
                    <p><strong><span className="highlight">Customer-Focused:</span></strong> Your satisfaction is our priority. We stand behind our work and are always here to serve you.</p>
                  </div>
                </div>
              </div>
            </div>
          </Element>
          <Element name="services" className="menu">
            <h2>Our Services</h2>
            <div className="services-grid">
              {servicesData.map((service) => (
                <div
                  key={service.id}
                  className={`service-box`}
                >
                  <div className="service-icon">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <h3>{service.title}</h3>
                  <div className="service-description">
                    <p>{service.description}</p>
                    <a href="#contact" className="btn">Learn More</a>
                  </div>
                </div>
              ))}
            </div>
          </Element>
          <Element name="contact" className="contact">
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <p>
                Our team at Adams Plumbing & Heating is excited to hear from you and to learn how our team of expert plumbers can help you with any service request you may have. We're ready to do whatever it takes to make sure you're 100% satisfied with our quality guaranteed work.
              </p>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                <div style={{ flex: 1, paddingRight: '20px' }}>
                  <p>
                    Give us a call: <strong>(325) 677-6322</strong>
                  </p>
                  <p>Reach out online:</p>
                </div>
                <div style={{ flex: 1, paddingLeft: '20px' }}>
                  <h2>Contact Us Today</h2>
                  <form>
                    <div style={{ marginBottom: '10px' }}>
                      <input type="text" placeholder="Your name *" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }} />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                      <input type="email" placeholder="Your email *" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }} />
                    </div>
                    <div style={{ display: 'flex', marginBottom: '10px' }}>
                      <input type="text" placeholder="Contact" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '50%', boxSizing: 'border-box', marginRight: '5px' }} />
                      <select style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '50%', boxSizing: 'border-box', marginLeft: '5px' }}>
                        <option>Select Service</option>
                        <option>Plumbing Repairs</option>
                        <option>Drain Cleaning</option>
                        <option>Water Heater Services</option>
                      </select>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                      <textarea placeholder="Your Message" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', height: '100px' }}></textarea>
                    </div>
                    <button type="submit" className="btn" style={{ width: '100%', textAlign: 'center' }}>Request A Service</button>
                  </form>
                </div>
              </div>
            </div>
          </Element>
        </div>
      );
    }

    export default Home;
