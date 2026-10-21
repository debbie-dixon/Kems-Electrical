import React, { useState } from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "./App.css";


// CONFIGURATION: Set your WhatsApp phone number & Image URLs here
const WHATSAPP_NUMBER = "+2348100717074"; // Replace with your phone number (with country code)

const SITE_IMAGES = {
  hero: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
  outdoorSecurity: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
  safetyAudit: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
  applianceAuto: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
  smartSwitch: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
  voiceIntegration: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
  energyMonitoring: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop"
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
    author: "Engr. Michael O.",
    role: "Commercial Facility Manager",
    stars: 5,
    text: "KEMs performed a complete load management audit for our office complex. The safety compliance report was thorough and solved our constant breaker trips.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    author: "Dr. Sarah T.",
    role: "Homeowner",
    stars: 5,
    text: "Exceeded expectations on our smart switch retrofitting! Clean installation, zero damage to wall paint, and voice automation works seamlessly.",
    date: "1 month ago"
  },
  {
    id: 3,
    author: "Chidi K.",
    role: "Industrial Plant Supervisor",
    stars: 5,
    text: "Top tier electrical engineering team. Highly knowledgeable in high-power appliance automation and emergency safety compliance.",
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
    const message = `Hello KEMS Electrical Engineering,%0A%0AI would like to request a service:%0A• *Client Name:* ${formData.name}%0A• *Phone:* ${formData.phone}%0A• *Requested Service:* ${formData.service}%0A• *Property Type:* ${formData.location}%0A• *Details:* ${formData.details || 'N/A'}`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
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
          whatsappNumber={WHATSAPP_NUMBER}
        />
      </main>

      <Footer
        scrollToSection={scrollToSection}
        
      />

     
    </div>
  );
}