import { useState } from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "./App.css";
import kems4 from './assets/kems4.jpg'
import kems1 from './assets/kems1.jpg'
import kems2 from './assets/kems2.jpg'
import kems3 from './assets/kems3.jpg'
import kems5 from './assets/kems5.jpg'
import kems6 from './assets/kems6.jpg'
import kems7 from './assets/kems7.jpg'
import { Analytics } from "@vercel/analytics/react"


// CONFIGURATION: Set your WhatsApp phone number here
const WHATSAPP_NUMBER = "+2348100717074"; // Replace with your phone number (with country code)

const SITE_IMAGES = {
  hero: kems6,
  outdoorSecurity: kems5,
  safetyAudit: kems7,
  applianceAuto: kems3,
  smartSwitch: kems1,
  voiceIntegration: kems2,
  energyMonitoring: kems4
};

const SERVICES_LIST = [
  {
    id: 'outdoor-security',
    title: 'Outdoor & Security Automation',
    desc: 'Automated floodlighting, Motion Sensor Integration, and perimeter power isolation designed for complete outdoor safety.',
    icon: '💡',
    image: SITE_IMAGES.outdoorSecurity,
    bullets: ['Perimeter Light Timers', 'Motion Detector Calibration', 'Weatherproof Fittings']
  },
  {
    id: 'safety-audit',
    title: 'Electrical Safety Audit & Compliance',
    desc: 'Comprehensive thermal diagnostics, breaker stress-testing, and official code compliance certification.',
    icon: '⚡',
    image: SITE_IMAGES.safetyAudit,
    bullets: ['Infrared Thermal Inspection', 'Earthing & Grounding Check', 'Fire Hazard Triage']
  },
  {
    id: 'appliance-automation',
    title: 'High-Power Appliance Automation',
    desc: 'Heavy-duty relay protection and scheduled switching for HVACs, water heaters, pumps, and heavy equipment.',
    icon: '🔌',
    image: SITE_IMAGES.applianceAuto,
    bullets: ['Overload Contactor Setup', 'Heavy Duty Relays', 'Automated Surge Dampening']
  },
  {
    id: 'smart-switch',
    title: 'Smart Switch Installation & Retrofitting',
    desc: 'Upgrade legacy light switches to modern smart touch points without rewiring your existing building structure.',
    icon: '📱',
    image: SITE_IMAGES.smartSwitch,
    bullets: ['Zero Neutral Wire Retrofitting', 'Multi-Way Dimming', 'Touch & App Control']
  },
  {
    id: 'voice-integration',
    title: 'Custom Home Automation & Voice Integration',
    desc: 'Seamless ecosystem setup syncing Apple HomeKit, Google Assistant, and Alexa for effortless automated living.',
    icon: '🎙️',
    image: SITE_IMAGES.voiceIntegration,
    bullets: ['Central Automation Hubs', 'Voice Command Scenes', 'Custom Night-Mode Automation']
  },
  {
    id: 'energy-monitoring',
    title: 'Load Management & Energy Monitoring',
    desc: 'Real-time panel telemetry and automatic load shedding to prevent circuit trips and cut monthly electricity costs.',
    icon: '📊',
    image: SITE_IMAGES.energyMonitoring,
    bullets: ['Smart Sub-Meter Panels', 'Automatic Peak-Load Shedding', 'Usage Telemetry Apps']
  }
];

const REVIEWS_LIST = [
  {
    id: 1,
    author: "Asiapmina Mpcs",
    role: "Satisfied Customer",
    stars: 5,
    text: "He's good at what he does.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    author: "wallet money",
    role: "Satisfied Customer",
    stars: 5,
    text: "Best engineer you deserve a 6 star",
    date: "1 month ago"
  },
  {
    id: 3,
    author: "godswill sunday",
    role: "Satisfied Customer",
    stars: 5,
    text: "Nice electrician",
    date: "3 months ago"
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES_LIST[0].title,
    location: 'Residential Home / Apartment',
    details: ''
  });

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    const message = [
      'Hello KEMS Electrical Engineering,',
      '',
      'I would like to request a service:',
      `• Client Name: ${formData.name}`,
      `• Phone: ${formData.phone}`,
      `• Requested Service: ${formData.service}`,
      `• Property Type: ${formData.location}`,
      `• Details: ${formData.details || 'N/A'}`
    ].join('\n');
    const phoneNumber = WHATSAPP_NUMBER.replace(/\D/g, '');
    const query = new URLSearchParams({ text: message });

    window.open(`https://wa.me/${phoneNumber}?${query.toString()}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
       
      />

      <main>
        <Hero
          images={SITE_IMAGES}
          scrollToSection={scrollToSection}
        />

        <Services
          servicesList={SERVICES_LIST}
          scrollToSection={scrollToSection}
        />

        <Testimonials
          reviewsList={REVIEWS_LIST}
        />

        <Contact
          formData={formData}
          setFormData={setFormData}
          handleSubmitWhatsApp={handleSubmitWhatsApp}
          servicesList={SERVICES_LIST}
        />
      </main>

      <Footer
        scrollToSection={scrollToSection}
        
      />
      <Analytics/>

     
    </div>
  );
}