export const siteContent = {
  brand: 'SpaceStation Coworking', location: 'Bhilai, Chhattisgarh',
  address: '2nd Floor, Kohinoor Tower, Near Avanti Bai Chowk, Junwani Road, Bhilai, Chhattisgarh – 490023',
  email: 'connect@spacestationcoworking.com', whatsapp: '918109214834',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=21.2183056,81.3404444',
  hero: { eyebrow: '', title: 'Professional business address. Quick documentation. Hassle-free registration.', body: '', poster: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=88', desktopVideo: '/media/spacestation-hero.mp4', mobileVideo: '/media/spacestation-hero.mp4' },
  intro: { title: 'Your business address. Without the cost of a full office.', body: 'Space Station Co-working offers a fast, affordable virtual office solution in Chhattisgarh, with plans starting at just ₹549/month.\n\nGet a professional business and mailing address, complete notarized documentation, assistance with GST registration and MCA/ROC requirements, fast processing and dedicated support—all without the overhead of maintaining a physical office.' },
  offerings: [
    { name: 'Virtual Office', label: 'BUSINESS ADDRESS & SUPPORT', price: 'Starting at ₹549/month', description: 'A professional business address in Chhattisgarh with the documentation and ongoing support listed by SpaceStation.', features: ['Professional virtual office address', 'Complete notarized documentation', 'GST registration assistance', 'MCA / ROC support', 'Professional mailing address', 'Fast processing', 'Dedicated support', 'Additional business support services'], image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1400&q=85' }
  ],
  onboarding: [
    ['01', 'Submit company details', 'Share company and partner or shareholder details for verification.'],
    ['02', 'Approve the draft', 'Review and approve the draft agreement before final processing.'],
    ['03', 'Receive documentation', 'Receive the signed agreement and supporting address documentation.']
  ],
  gallery: [
    ['Lounge', '/media/gallery/lounge.png'],
    ['Collaboration area', '/media/gallery/collaboration-area.png'],
    ['Reception lounge', '/media/gallery/reception-lounge.png'],
    ['Work booths', '/media/gallery/work-booths.png'],
    ['Meeting room', '/media/gallery/meeting-room.png']
  ],
  visitImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85',
  testimonials: ['Approved member testimonial will appear here.', 'Approved business testimonial will appear here.', 'Approved community testimonial will appear here.'],
  faqs: [
    ['What does the virtual office include?', 'The listed support includes NOC, a sublease agreement, utility-bill documentation, account-manager support, and courier reception or forwarding. Courier charges may apply.'],
    ['How much does the virtual office cost?', 'Virtual-office plans are listed as starting at ₹799 per month.'],
    ['What is the onboarding process?', 'Submit company details, approve the draft agreement, then receive the signed agreement and supporting documentation. Timelines and eligibility should be confirmed with the SpaceStation team.'],
    ['Is this a virtual-office-only service?', 'Our coworking spaces are fully occupied under five-year lease agreements, with new enquiries welcome from 2030. In the meantime, SpaceStation continues to provide virtual-office and professional business-address services.'],
    ['Where is SpaceStation Coworking?', 'SpaceStation is on the 2nd Floor of Kohinoor Tower, near Avanti Bai Chowk on Junwani Road, Bhilai, Chhattisgarh – 490023.']
  ]
} as const;
