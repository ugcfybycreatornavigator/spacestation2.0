export const siteContent = {
  brand: 'SpaceStation Coworking', location: 'Bhilai, Chhattisgarh',
  address: '2nd Floor, Kohinoor Tower, Near Avanti Bai Chowk, Junwani Road, Bhilai, Chhattisgarh – 490023',
  email: 'connect@spacestationcoworking.com', whatsapp: '918109214834',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=21.2183056,81.3404444',
  hero: { eyebrow: 'COWORKING & VIRTUAL OFFICES / BHILAI', title: 'Your next great workday starts here.', body: '', poster: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=88', desktopVideo: '/media/spacestation-hero.mp4', mobileVideo: '/media/spacestation-hero.mp4' },
  intro: { title: 'A space to work. A place to belong.', body: 'SpaceStation Coworking brings flexible work and virtual-office support together in Bhilai. Whether you need a professional business address or want to ask about a physical workspace, start here.' },
  offerings: [
    { name:'Virtual Office', label:'CONFIRMED OFFERING', price:'Starting at ₹799/month', description:'A professional business address in Chhattisgarh with the documentation and ongoing support listed by SpaceStation.', features:['NOC documentation','Sublease agreement','Utility-bill documentation','Account-manager support','Courier reception and forwarding'], image:'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1400&q=85' },
    { name:'Coworking Enquiry', label:'AVAILABILITY TO BE CONFIRMED', price:'Enquire for pricing', description:'Tell the SpaceStation team how you want to work. Specific desk, cabin, meeting-room and access options require confirmation before booking.', features:['Workspace formats pending confirmation','Availability supplied by the team','Pricing supplied after enquiry'], image:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85' }
  ],
  onboarding: [
    ['01','Submit company details','Share company and partner or shareholder details for verification.'],
    ['02','Approve the draft','Review and approve the draft agreement before final processing.'],
    ['03','Receive documentation','Receive the signed agreement and supporting address documentation.']
  ],
  gallery: [
    ['Workspace view','https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=85'],
    ['Shared work area','https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1400&q=85'],
    ['Meeting setting','https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85'],
    ['Focus setting','https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1400&q=85'],
    ['Community setting','https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85']
  ],
  testimonials:['Approved member testimonial will appear here.','Approved business testimonial will appear here.','Approved community testimonial will appear here.'],
  faqs: [
    ['What does the virtual office include?','The listed support includes NOC, a sublease agreement, utility-bill documentation, account-manager support, and courier reception or forwarding. Courier charges may apply.'],
    ['How much does the virtual office cost?','Virtual-office plans are listed as starting at ₹799 per month. This price does not apply to desks, cabins, meeting rooms, or other physical workspace.'],
    ['What is the onboarding process?','Submit company details, approve the draft agreement, then receive the signed agreement and supporting documentation. Timelines and eligibility should be confirmed with the SpaceStation team.'],
    ['Which physical workspaces are available?','Specific coworking formats and their current availability are not published clearly. Send an enquiry so the team can confirm the appropriate option and price.'],
    ['Can I visit the space?','Use the enquiry form to request a visit. A visit is subject to confirmation by the SpaceStation team.'],
    ['Where is SpaceStation Coworking?','SpaceStation is on the 2nd Floor of Kohinoor Tower, near Avanti Bai Chowk on Junwani Road, Bhilai, Chhattisgarh – 490023.']
  ]
} as const;
