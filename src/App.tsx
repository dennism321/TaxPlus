/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  BookOpen, 
  Users, 
  Mail, 
  FileText, 
  ExternalLink, 
  Calendar, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight,
  Menu,
  X,
  Plus
} from 'lucide-react';

// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: string, setActivePage: (page: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Home', 'Services', 'About', 'Resources', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button 
              onClick={() => setActivePage('Home')}
              className="flex items-center gap-2 text-2xl font-display font-bold text-primary group"
            >
              <div className="p-1.5 bg-primary text-white rounded group-hover:bg-accent transition-colors">
                <Plus size={24} />
              </div>
              <span>Tax Plus</span>
            </button>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActivePage(item)}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                  activePage === item ? 'text-accent border-b-2 border-accent' : 'text-slate-600'
                }`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => setActivePage('Contact')}
              className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-slate-700 transition-all shadow-sm"
            >
              Schedule Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActivePage(item);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left text-lg font-medium text-slate-700 hover:text-accent"
                >
                  {item}
                </button>
              ))}
              <button className="w-full bg-primary text-white py-3 rounded-xl font-medium">
                Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onAction }: { onAction: () => void }) => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-template-columns-2 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Accepting New 2024 Tax Clients
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Expert Tax Strategy for Your <span className="text-accent underline decoration-slate-200">Peace of Mind</span>.
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Personalized tax planning and preparation designed to minimize your liability and maximize your growth. Professional, reliable, and thorough.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onAction}
              className="bg-primary text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-700 transition-all shadow-lg"
            >
              Get Started <ChevronRight size={18} />
            </button>
            <button className="bg-white text-primary border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all">
              View Services
            </button>
          </div>
          <div className="mt-12 flex items-center gap-8 border-t border-slate-100 pt-8">
            <div>
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-slate-500">Years Experience</div>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div>
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-slate-500">Happy Clients</div>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div>
              <div className="text-2xl font-bold text-primary">A+</div>
              <div className="text-sm text-slate-500">Reliability Rating</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden relative shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800" 
              alt="Professional accounting" 
              className="object-cover w-full h-full opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
          </div>
          
          {/* Floating Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <Calculator size={24} />
              </div>
              <div className="font-semibold text-primary">Max Refund Guaranteed</div>
            </div>
            <p className="text-sm text-slate-500">Our deep dive review ensures you never pay a penny more than you should.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "Individual Tax Prep",
      desc: "Comprehensive 1040 preparation with focus on credits, deductions, and accurate filing.",
      icon: <Users className="text-blue-600" />,
      features: ["W-2 & 1099 Income", "Standard/Itemized Deductions", "Tax Credits Review"]
    },
    {
      title: "Business Tax Solutions",
      desc: "Entity-specific tax services for LLCs, S-Corps, and Corporations. Strategies for growth.",
      icon: <Calculator className="text-indigo-600" />,
      features: ["Corporate Filings", "Payroll Tax Compliance", "Strategic Planning"]
    },
    {
      title: "Bookkeeping & Payroll",
      desc: "Full-service accounting to keep your business running smoothly and audit-ready year-round.",
      icon: <FileText className="text-teal-600" />,
      features: ["Monthly Reconciliation", "Financial Reporting", "Payroll Management"]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 px-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">What We Offer</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Built for Accuracy and Growth</h3>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            From simple personal returns to complex business accounting, we provide the expertise you need to navigate tax law.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all h-full flex flex-col"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                {s.icon}
              </div>
              <h4 className="text-2xl font-display font-bold mb-4">{s.title}</h4>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed">{s.desc}</p>
              <ul className="space-y-3">
                {s.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Resources = () => {
  const resources = [
    {
      title: "Where's My Refund?",
      desc: "Track the status of your federal income tax refund with the IRS tracking tool.",
      url: "https://www.irs.gov/refunds",
      icon: <ExternalLink size={20} />
    },
    {
      title: "IRS Forms & Pubs",
      desc: "Direct access to federal tax forms, instructions, and informational publications.",
      url: "https://www.irs.gov/forms-instructions",
      icon: <FileText size={20} />
    },
    {
      title: "2024 Tax Calendar",
      desc: "Important deadlines and key dates for quarterly payments and annual filings.",
      url: "#",
      icon: <Calendar size={20} />
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 px-4">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Taxpayer Toolkit</h2>
            <h3 className="text-4xl font-display font-bold">Essential Resources</h3>
          </div>
          <button className="text-accent font-semibold flex items-center gap-2 hover:underline">
            View All Resources <ChevronRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <a
              key={i}
              href={r.url}
              target={r.url.startsWith('http') ? "_blank" : "_self"}
              className="group block p-8 bg-white rounded-2xl border border-slate-200 hover:border-accent hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-50 text-slate-600 rounded-xl group-hover:bg-accent group-hover:text-white transition-colors">
                  {r.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-primary">{r.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{r.desc}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 bg-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-3xl font-display font-bold mb-4">Ready to File?</h4>
              <p className="text-slate-300 mb-0 opacity-90">Our secure client portal allows you to upload documents safely and track your return progress in real-time.</p>
            </div>
            <div className="flex justify-start md:justify-end">
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all flex items-center gap-2">
                Client Portal Login <ChevronRight size={18} />
              </button>
            </div>
          </div>
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-xl">
             <img 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800" 
                alt="Our team" 
                className="object-cover w-full h-full"
              />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-accent text-white p-10 rounded-3xl shadow-2xl hidden lg:block">
            <h4 className="text-5xl font-display font-bold mb-2">15+</h4>
            <p className="text-sm uppercase tracking-widest font-bold opacity-80">Years of Service</p>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Our Agency</h2>
          <h3 className="text-4xl font-display font-bold mb-6">Accountability You Can Count On</h3>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Founded on the principles of integrity and exhaustive detail, Tax Plus has grown from a local boutique to a trusted advisor for clients nationwide.
          </p>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            We don't just "do taxes"—we build long-term relationships that foster financial health and compliance. Our team stays at the forefront of changing tax codes so you don't have to.
          </p>
          <div className="space-y-4 mb-10">
            {[
              "Certified Public Accountants (CPAs)",
              "Enrolled Agents (EA) for IRS Representation",
              "Annual Continuing Education Requirements",
              "Strict Confidentiality Protocols"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <ChevronRight size={14} strokeWidth={3} />
                </div>
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
          <button className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-accent hover:border-accent transition-all">
            Meet Our Leadership Team
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Contact Us</h2>
            <h3 className="text-4xl font-display font-bold mb-6">Let's Discuss Your Situation</h3>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Have a question or ready to become a client? Reach out and we'll get back to you within 24 business hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center text-accent shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-bold text-primary">Call Us</div>
                  <div className="text-slate-500">(555) 123-4567</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center text-accent shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-bold text-primary">Email Support</div>
                  <div className="text-slate-500">hello@taxplusagency.com</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center text-accent shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-bold text-primary">Office Location</div>
                  <div className="text-slate-500">123 Financial Row, Suite 400<br />New York, NY 10001</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center text-accent shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="font-bold text-primary">Business Hours</div>
                  <div className="text-slate-500">Mon-Fri: 9am - 6pm<br />Sat: 10am - 2pm (Tax Season)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
              <form className="grid sm:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-tighter">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:border-accent focus:ring-0 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-tighter">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:border-accent focus:ring-0 transition-all outline-none" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-tighter">Service Interest</label>
                  <select className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:border-accent focus:ring-0 transition-all outline-none">
                    <option>Individual Tax Preparation</option>
                    <option>Business Tax Strategy</option>
                    <option>Bookkeeping & Accounting</option>
                    <option>IRS Notice Resolution</option>
                  </select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-tighter">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:border-accent focus:ring-0 transition-all outline-none resize-none"></textarea>
                </div>
                <div className="sm:col-span-2">
                  <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ activePage, setActivePage }: { activePage: string, setActivePage: (page: string) => void }) => (
  <footer className="bg-primary text-slate-400 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4">
      <div className="grid md:grid-cols-4 gap-12 mb-16 px-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 text-2xl font-display font-bold text-white mb-6">
            <div className="p-1.5 bg-white text-primary rounded">
              <Plus size={20} />
            </div>
            <span>Tax Plus</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Expert tax guidance you can trust. Serving individuals and business owners with precision and dedication.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
            {[1, 2, 3].map(i => (
              <div key={i} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center cursor-pointer">
                <div className="w-4 h-4 bg-slate-400 rounded-sm"></div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h5>
          <ul className="space-y-4 text-sm">
            {['Home', 'Services', 'About', 'Resources', 'Contact'].map(item => (
              <li key={item}>
                <button 
                  onClick={() => setActivePage(item)}
                  className="hover:text-white transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Services</h5>
          <ul className="space-y-4 text-sm">
            <li><button className="hover:text-white transition-colors" onClick={() => setActivePage('Services')}>Individual Tax</button></li>
            <li><button className="hover:text-white transition-colors" onClick={() => setActivePage('Services')}>Corporate Tax</button></li>
            <li><button className="hover:text-white transition-colors" onClick={() => setActivePage('Services')}>Bookkeeping</button></li>
            <li><button className="hover:text-white transition-colors" onClick={() => setActivePage('Services')}>IRS Representation</button></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Stay Updated</h5>
          <p className="text-xs mb-4">Subscribe for tax tips and deadline reminders.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Email" className="bg-white/10 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-white outline-none" />
            <button className="bg-white text-primary p-2 rounded-lg hover:bg-slate-200">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs mx-4">
        <p>&copy; {new Date().getFullYear()} Tax Plus Agency. All rights reserved.</p>
        <div className="flex gap-8">
          <button className="hover:text-white">Privacy Policy</button>
          <button className="hover:text-white">Terms of Service</button>
          <button className="hover:text-white">Client Portal</button>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [activePage, setActivePage] = useState('Home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="min-h-screen">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main>
        <AnimatePresence mode="wait">
          {activePage === 'Home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Hero onAction={() => setActivePage('Contact')} />
              <Services />
              <Resources />
            </motion.div>
          )}

          {activePage === 'Services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pt-32 pb-12 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 text-center">
                  <h1 className="text-5xl font-display font-bold mb-4">Our Services</h1>
                  <p className="text-lg text-slate-500 max-w-2xl mx-auto">Expert accounting and tax services tailored to your specific needs.</p>
                </div>
              </div>
              <Services />
              <section className="py-24 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                  <h2 className="text-3xl font-display font-bold mb-8 text-white">Don't see what you need?</h2>
                  <p className="text-xl mb-12 opacity-80 max-w-3xl mx-auto">We offer custom consulting and specialized tax planning for unique financial situations. Contact us for a personalized quote.</p>
                  <button 
                    onClick={() => setActivePage('Contact')}
                    className="bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all inline-flex items-center gap-2"
                  >
                    Request custom info <ChevronRight size={18} />
                  </button>
                </div>
              </section>
            </motion.div>
          )}

          {activePage === 'About' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pt-32 pb-12 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 text-center">
                  <h1 className="text-5xl font-display font-bold mb-4">About Tax Plus</h1>
                  <p className="text-lg text-slate-500 max-w-2xl mx-auto">Learn about our mission, our standards, and why thousands of clients trust us with their financial legacy.</p>
                </div>
              </div>
              <About />
              <div className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-4 gap-8 text-center">
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <div className="text-4xl font-display font-bold text-accent mb-2">2009</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Established</div>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <div className="text-4xl font-display font-bold text-accent mb-2">98%</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Retention Rate</div>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <div className="text-4xl font-display font-bold text-accent mb-2">4.9/5</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Client Rating</div>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <div className="text-4xl font-display font-bold text-accent mb-2">12k+</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Returns Filed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activePage === 'Resources' && (
            <motion.div
              key="resources"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pt-32 pb-12 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 text-center">
                  <h1 className="text-5xl font-display font-bold mb-4">Resources</h1>
                  <p className="text-lg text-slate-500 max-w-2xl mx-auto">Quick links and downloads to help you navigate your tax obligations and the IRS landscape.</p>
                </div>
              </div>
              <Resources />
              <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4">
                   <h3 className="text-3xl font-display font-bold mb-8 text-center">Frequently asked questions</h3>
                   <div className="space-y-6">
                      {[
                        { q: "What documents do I need for my tax appointment?", a: "Generally, you'll need W-2s, 1099s, mortgage interest statements, property tax records, and any documentation for deductions or credits you plan to claim." },
                        { q: "When is the filing deadline for 2024?", a: "The standard deadline is April 15, 2025. Corporate deadlines may vary based on your entity type (e.g., S-Corps are typically March 15)." },
                        { q: "How long should I keep old tax returns?", a: "The IRS recommends keeping records for 3 years, but for certain situations (like real estate or stock records), 6-7 years is safer." }
                      ].map((item, i) => (
                        <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                           <div className="font-bold text-primary mb-2 flex items-start gap-2">
                             <div className="w-5 h-5 bg-accent text-white rounded-full flex items-center justify-center text-[10px] shrink-0 mt-1">Q</div>
                             {item.q}
                           </div>
                           <p className="text-slate-600 text-sm leading-relaxed pl-7">{item.a}</p>
                        </div>
                      ))}
                   </div>
                </div>
              </section>
            </motion.div>
          )}

          {activePage === 'Contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pt-32 pb-12 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 text-center">
                  <h1 className="text-5xl font-display font-bold mb-4">Contact Us</h1>
                  <p className="text-lg text-slate-500 max-w-2xl mx-auto">Reach out to our team of experts. We're here to help guide your financial future.</p>
                </div>
              </div>
              <Contact />
              <div className="h-[400px] bg-slate-200 relative mb-[-2px]">
                 <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold uppercase tracking-[0.2em] text-sm">
                   Interactive Map Component Placeholder
                 </div>
                 {/* Decorative overlay */}
                 <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}
