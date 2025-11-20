// C MATIC CONTROL LLP - Main Application Script

// Product Data
const productData = {
  categories: [
    {
      name: "Pneumatic Products",
      slug: "pneumatic-products",
      description: "Complete range of pneumatic cylinders, valves, and accessories for industrial automation",
      icon: "🔧",
      subcategories: [
        {
          name: "Pneumatic Cylinders",
          slug: "pneumatic-cylinders",
          description: "High-quality pneumatic cylinders in various configurations",
          products: [
            {
              name: "ISO Standard Cylinder",
              slug: "iso-standard-cylinder",
              category: "Pneumatic Cylinders",
              description: "ISO 15552 standard pneumatic cylinders for reliable linear motion. Tie-rod construction ensures durability and long service life.",
              specs: {
                "Bore Size": "32mm - 320mm",
                "Stroke Length": "Up to 2000mm",
                "Operating Pressure": "1-10 bar",
                "Temperature Range": "-10°C to 80°C",
                "Cushioning": "Adjustable pneumatic cushioning at both ends",
                "Mounting": "Multiple mounting options available",
                "Material": "Aluminum alloy body, stainless steel piston rod"
              },
              brands: ["FESTO", "SMC", "PARKER", "NORGREN"],
              applications: "Material handling, packaging machinery, assembly lines, clamping operations"
            },
            {
              name: "Compact Cylinder",
              slug: "compact-cylinder",
              category: "Pneumatic Cylinders",
              description: "ISO 21287 compact cylinders offering maximum force in minimum space. Ideal for space-constrained applications.",
              specs: {
                "Bore Size": "12mm - 100mm",
                "Stroke Length": "Up to 500mm",
                "Operating Pressure": "1-10 bar",
                "Temperature Range": "-10°C to 80°C",
                "Design": "Space-saving profile design",
                "Mounting": "Through-hole mounting",
                "Weight": "Lightweight aluminum construction"
              },
              brands: ["FESTO", "SMC", "MINDMAN", "CAMOZZI"],
              applications: "Pick and place, robotics, medical equipment, testing machinery"
            },
            {
              name: "Rodless Cylinder",
              slug: "rodless-cylinder",
              category: "Pneumatic Cylinders",
              description: "Magnetically coupled rodless cylinders for long stroke applications. Eliminates piston rod buckling issues.",
              specs: {
                "Bore Size": "16mm - 80mm",
                "Stroke Length": "Up to 8000mm",
                "Operating Pressure": "1.5-10 bar",
                "Load Capacity": "Up to 500kg",
                "Positioning Accuracy": "±0.1mm",
                "Guide System": "Precision linear guide bearings",
                "Type": "Magnetically coupled, band type available"
              },
              brands: ["FESTO", "SMC", "PARKER"],
              applications: "Long stroke applications, material transport, printing machines, packaging lines"
            },
            {
              name: "Mini Cylinder",
              slug: "mini-cylinder",
              category: "Pneumatic Cylinders",
              description: "ISO 6432 mini cylinders for small force applications. Compact design with excellent performance.",
              specs: {
                "Bore Size": "8mm - 25mm",
                "Stroke Length": "Up to 250mm",
                "Operating Pressure": "1-10 bar",
                "Temperature Range": "-5°C to 70°C",
                "Type": "Single-acting and double-acting",
                "Material": "Aluminum body, stainless steel rod",
                "Weight": "Ultra-lightweight"
              },
              brands: ["FESTO", "SMC", "MINDMAN"],
              applications: "Electronics assembly, small parts handling, laboratory equipment, dental tools"
            },
            {
              name: "Guided Cylinder",
              slug: "guided-cylinder",
              category: "Pneumatic Cylinders",
              description: "Cylinders with integrated linear guide for high lateral load capacity and precise guiding.",
              specs: {
                "Bore Size": "20mm - 100mm",
                "Stroke Length": "Up to 1000mm",
                "Operating Pressure": "1-10 bar",
                "Guide Type": "Ball bearing linear guide",
                "Lateral Load": "Up to 800N",
                "Moment Load": "High moment resistance",
                "Positioning": "Non-rotating design"
              },
              brands: ["FESTO", "SMC", "PARKER"],
              applications: "Gripping, pressing, lifting with offset loads, rotary-free positioning"
            }
          ]
        },
        {
          name: "Pneumatic Valves",
          slug: "pneumatic-valves",
          description: "Directional control valves, solenoid valves, and valve terminals",
          products: [
            {
              name: "Solenoid Valve 5/2 Way",
              slug: "solenoid-valve-5-2",
              category: "Pneumatic Valves",
              description: "5/2 way solenoid operated directional control valve for double-acting cylinders. Available in single and double solenoid versions.",
              specs: {
                "Port Size": "G1/8\" to G1\"",
                "Flow Rate": "Up to 6000 L/min",
                "Operating Pressure": "2-10 bar",
                "Voltage": "24V DC, 110V AC, 230V AC",
                "Response Time": "<20ms",
                "Type": "Monostable or bistable",
                "Protection": "IP65"
              },
              brands: ["FESTO", "SMC", "PARKER", "NORGREN"],
              applications: "Cylinder control, automation systems, process control"
            },
            {
              name: "Pneumatic Valve Terminal",
              slug: "valve-terminal",
              category: "Pneumatic Valves",
              description: "Modular valve terminal system with integrated electronics for distributed automation.",
              specs: {
                "Stations": "Up to 32 valves",
                "Communication": "IO-Link, EtherCAT, PROFINET",
                "Valve Type": "5/2, 5/3, 3/2 way",
                "Flow Rate": "800-2000 L/min per valve",
                "Voltage": "24V DC",
                "Diagnostics": "LED indicators, remote monitoring",
                "Protection": "IP65/IP67"
              },
              brands: ["FESTO", "SMC", "AVENTICS"],
              applications: "Automated production lines, Industry 4.0, flexible manufacturing"
            }
          ]
        },
        {
          name: "FRL Units",
          slug: "frl-units",
          description: "Filter, Regulator, Lubricator units for air preparation",
          products: [
            {
              name: "FRL Combination Unit",
              slug: "frl-combination",
              category: "Air Preparation",
              description: "Complete air preparation unit combining filter, pressure regulator, and lubricator in modular design.",
              specs: {
                "Port Size": "1/8\" to 1\"",
                "Flow Rate": "Up to 10000 L/min",
                "Filtration": "5 or 40 micron",
                "Pressure Range": "0.5-10 bar",
                "Gauge": "Pressure gauge included",
                "Bowl": "Polycarbonate or metal",
                "Mounting": "Bracket or directly mounted"
              },
              brands: ["FESTO", "SMC", "PARKER", "NORGREN"],
              applications: "Compressed air preparation, system protection, tool lubrication"
            }
          ]
        }
      ]
    },
    {
      name: "Hydraulic Products",
      slug: "hydraulic-products",
      description: "Industrial hydraulic power packs, cylinders, pumps, and control systems",
      icon: "⚙️",
      subcategories: [
        {
          name: "Hydraulic Power Packs",
          slug: "hydraulic-power-packs",
          description: "Complete hydraulic power units for various industrial applications",
          products: [
            {
              name: "Standard Hydraulic Power Pack",
              slug: "standard-power-pack",
              category: "Hydraulic Power Pack",
              description: "Self-contained hydraulic power unit with motor, pump, reservoir, and control valves. Customizable for specific applications.",
              specs: {
                "Motor Power": "2 HP to 50 HP",
                "Pump Type": "Gear pump, vane pump, piston pump",
                "Working Pressure": "50-250 bar",
                "Tank Capacity": "35 to 500 liters",
                "Voltage": "415V AC, 3-phase",
                "Flow Rate": "5-200 LPM",
                "Material": "Mild steel tank, powder coated"
              },
              brands: ["BOSCH REXROTH", "YUKEN", "PARKER", "HYDROMOT"],
              applications: "Machine tools, presses, material handling, mobile equipment"
            },
            {
              name: "Compact Power Pack",
              slug: "compact-power-pack",
              category: "Hydraulic Power Pack",
              description: "Space-saving hydraulic power unit designed for OEM applications and tight installation spaces.",
              specs: {
                "Motor Power": "1 HP to 10 HP",
                "Pump Type": "Gear pump",
                "Working Pressure": "100-180 bar",
                "Tank Capacity": "10 to 100 liters",
                "Voltage": "230V/415V AC",
                "Flow Rate": "3-50 LPM",
                "Features": "Low noise operation, compact footprint"
              },
              brands: ["BOSCH REXROTH", "YUKEN", "PARKER"],
              applications: "Lifting platforms, conveyors, small presses, automated machinery"
            }
          ]
        },
        {
          name: "Hydraulic Cylinders",
          slug: "hydraulic-cylinders",
          description: "Heavy-duty hydraulic cylinders for high force applications",
          products: [
            {
              name: "Double Acting Hydraulic Cylinder",
              slug: "double-acting-cylinder",
              category: "Hydraulic Cylinder",
              description: "Robust double-acting hydraulic cylinder with precision machined components for industrial use.",
              specs: {
                "Bore Size": "32mm to 250mm",
                "Stroke Length": "Up to 5000mm",
                "Working Pressure": "160-250 bar",
                "Rod Material": "Hard chrome plated steel",
                "Seals": "High-quality polyurethane seals",
                "Mounting": "Clevis, flange, trunnion options",
                "Cushioning": "End-of-stroke cushioning available"
              },
              brands: ["BOSCH REXROTH", "YUKEN", "PARKER"],
              applications: "Heavy machinery, presses, material handling, construction equipment"
            },
            {
              name: "Telescopic Hydraulic Cylinder",
              slug: "telescopic-cylinder",
              category: "Hydraulic Cylinder",
              description: "Multi-stage telescopic cylinder for long stroke in compact retracted length.",
              specs: {
                "Stages": "2 to 6 stages",
                "Bore Size": "50mm to 200mm",
                "Extended Length": "Up to 15 meters",
                "Working Pressure": "160-200 bar",
                "Design": "Single-acting or double-acting",
                "Application": "Dump trucks, tippers, aerial platforms"
              },
              brands: ["BOSCH REXROTH", "YUKEN", "PARKER"],
              applications: "Tippers, dump trucks, aerial work platforms, vehicle lifts"
            }
          ]
        },
        {
          name: "Hydraulic Valves",
          slug: "hydraulic-valves",
          description: "Directional control, pressure control, and flow control valves",
          products: [
            {
              name: "Solenoid Directional Control Valve",
              slug: "solenoid-directional-valve",
              category: "Hydraulic Valve",
              description: "Electrically operated directional control valve for precise hydraulic system control.",
              specs: {
                "Type": "4/2, 4/3 way",
                "Size": "NG6 to NG32",
                "Flow Rate": "Up to 400 LPM",
                "Pressure": "Up to 350 bar",
                "Voltage": "12V DC, 24V DC, 110V AC, 230V AC",
                "Spool Type": "Spring centered, detent",
                "Protection": "Coil protection IP65"
              },
              brands: ["BOSCH REXROTH", "YUKEN", "PARKER"],
              applications: "Industrial hydraulics, mobile equipment, machine tools"
            }
          ]
        }
      ]
    },
    {
      name: "Automation Products",
      slug: "automation-products",
      description: "Sensors, drives, controllers, and complete automation solutions",
      icon: "🤖",
      subcategories: [
        {
          name: "Sensors",
          slug: "sensors",
          description: "Proximity sensors, photoelectric sensors, and position sensors",
          products: [
            {
              name: "Inductive Proximity Sensor",
              slug: "inductive-sensor",
              category: "Sensor",
              description: "Non-contact inductive proximity sensor for metal object detection with high switching frequency.",
              specs: {
                "Sensing Range": "2mm to 40mm",
                "Output": "NPN/PNP, NO/NC",
                "Voltage": "10-30V DC",
                "Housing": "M8, M12, M18, M30 cylindrical",
                "Protection": "IP67",
                "Material": "Brass/Stainless steel",
                "Connection": "Cable or M12 connector"
              },
              brands: ["AUTONICS", "SMC", "FESTO"],
              applications: "Position detection, counting, automation systems, material handling"
            },
            {
              name: "Photoelectric Sensor",
              slug: "photoelectric-sensor",
              category: "Sensor",
              description: "Through-beam and retro-reflective photoelectric sensors for reliable object detection.",
              specs: {
                "Type": "Through-beam, Retro-reflective, Diffuse",
                "Sensing Range": "Up to 100 meters",
                "Light Source": "LED, Laser",
                "Output": "NPN/PNP, NO/NC",
                "Voltage": "12-24V DC",
                "Response Time": "<1ms",
                "Protection": "IP67"
              },
              brands: ["AUTONICS", "SMC", "FESTO"],
              applications: "Packaging lines, conveyor systems, level detection, counting"
            },
            {
              name: "Magnetic Reed Switch",
              slug: "magnetic-reed-switch",
              category: "Sensor",
              description: "Compact magnetic reed switch for pneumatic cylinder position detection.",
              specs: {
                "Type": "Reed contact, solid-state",
                "Output": "2-wire, 3-wire",
                "Voltage": "5-250V DC/AC",
                "Switching Current": "Up to 500mA",
                "Housing": "Plastic, aluminum",
                "Mounting": "T-slot, direct mount",
                "LED Indicator": "Available"
              },
              brands: ["FESTO", "SMC", "NORGREN"],
              applications: "Cylinder position sensing, end-of-stroke detection"
            }
          ]
        },
        {
          name: "Grippers & Handling",
          slug: "grippers-handling",
          description: "Pneumatic grippers, vacuum handling, and robotic end-effectors",
          products: [
            {
              name: "Parallel Pneumatic Gripper",
              slug: "parallel-gripper",
              category: "Gripper",
              description: "2-jaw parallel gripper with synchronized movement for reliable parts handling.",
              specs: {
                "Gripper Force": "50N to 2000N",
                "Stroke per Jaw": "3mm to 50mm",
                "Operating Pressure": "4-8 bar",
                "Weight": "0.1kg to 5kg",
                "Repeatability": "±0.02mm",
                "Sensor Slots": "T-slot for reed switches",
                "Material": "Aluminum body, hardened steel jaws"
              },
              brands: ["FESTO", "SMC", "PARKER"],
              applications: "Robot end-effector, pick and place, assembly, machine loading"
            },
            {
              name: "Angular Gripper",
              slug: "angular-gripper",
              category: "Gripper",
              description: "Compact angular gripper for gripping parts in confined spaces.",
              specs: {
                "Gripper Force": "30N to 500N",
                "Opening Angle": "0° to 30°",
                "Operating Pressure": "4-8 bar",
                "Jaw Stroke": "Adjustable",
                "Weight": "Lightweight design",
                "Mounting": "Multiple orientations"
              },
              brands: ["FESTO", "SMC"],
              applications: "Small parts handling, electronics assembly, medical devices"
            }
          ]
        },
        {
          name: "Pneumatic Fittings",
          slug: "pneumatic-fittings",
          description: "Push-in fittings, tube connectors, and quick couplings",
          products: [
            {
              name: "Push-in Fitting",
              slug: "push-in-fitting",
              category: "Fitting",
              description: "One-touch push-in fittings for quick and secure tube connections without tools.",
              specs: {
                "Thread Size": "M5 to G1\"",
                "Tube OD": "4mm to 16mm",
                "Material": "Nickel-plated brass, stainless steel",
                "Pressure": "Up to 10 bar",
                "Temperature": "-20°C to 80°C",
                "Type": "Straight, elbow, tee, Y-connector",
                "Release": "Push-to-release collar"
              },
              brands: ["FESTO", "SMC", "PARKER", "CAMOZZI"],
              applications: "Pneumatic systems, tube routing, quick assembly"
            }
          ]
        }
      ]
    }
  ],
  brands: ["FESTO", "SMC", "MINDMAN", "JANATICS", "PARKER", "BOSCH REXROTH", "YUKEN", "NORGREN", "AUTONICS", "CAMOZZI", "AVENTICS"]
};

// Router State
let currentRoute = {
  page: 'home',
  category: null,
  subcategory: null,
  product: null
};

// Preloader
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(function() {
      preloader.classList.add('fade-out');
      setTimeout(function() {
        preloader.style.display = 'none';
      }, 500);
    }, 2000);
  }
});

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
  setupScrollAnimations();
  setupHeaderScroll();
  
  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth';
});

function initializeApp() {
  // Check for hash in URL
  const hash = window.location.hash;
  if (hash) {
    handleHashChange();
  } else {
    renderHomePage();
  }
}

function setupHeaderScroll() {
  const header = document.getElementById('header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

function setupEventListeners() {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Close mobile menu when clicking nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
      if (mobileMenu) {
        mobileMenu.classList.add('hidden');
      }
    });
  });
  
  // Enquiry form
  const enquiryForm = document.getElementById('enquiry-form');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', handleEnquirySubmit);
  }
  
  // Handle hash changes
  window.addEventListener('hashchange', handleHashChange);
}

function updatePageMeta(title, description, keywords) {
  document.title = title;
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }
  
  // Update meta keywords if provided
  if (keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
  }
  
  // Update OG meta tags
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title);
  }
  
  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', description);
  }
  
  // Update Twitter meta tags
  let twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.setAttribute('content', title);
  }
  
  let twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription) {
    twitterDescription.setAttribute('content', description);
  }
}

function handleHashChange() {
  const hash = window.location.hash.slice(1);
  const parts = hash.split('/');
  
  if (!hash || hash === 'home') {
    renderHomePage();
    updatePageMeta(
      'C MATIC CONTROL LLP | Pneumatic, Hydraulic & Automation Solutions in Mumbai',
      'Leading supplier of pneumatic cylinders, hydraulic power packs, and industrial automation solutions. Authorized dealer for FESTO, SMC, Parker & more. Serving India since 2019.',
      'Pneumatic cylinders Mumbai, Hydraulic power packs India, Industrial automation, FESTO dealer, Cylinder repairing services'
    );
  } else if (hash === 'products') {
    renderProductsPage();
    updatePageMeta(
      'Industrial Products | Pneumatic, Hydraulic & Automation Products | C MATIC CONTROL',
      'Browse our comprehensive range of 32+ pneumatic, hydraulic, and automation products from FESTO, SMC, Parker, and other global brands.',
      'Pneumatic cylinders, Hydraulic power packs, Industrial automation products, Solenoid valves, Hydraulic motors'
    );
  } else if (hash === 'services') {
    renderServicesPage();
    updatePageMeta(
      'Industrial Services | Cylinder Repairing & Maintenance in Mumbai | C MATIC CONTROL',
      'Professional pneumatic and hydraulic cylinder repairing, maintenance, and custom automation system design services in Mumbai.',
      'Cylinder repairing Mumbai, Hydraulic maintenance, Preventive maintenance, Automation system design'
    );
  } else if (hash === 'about' || hash.includes('about')) {
    renderAboutPage();
    updatePageMeta(
      'About Us | C MATIC CONTROL LLP | Pneumatic & Hydraulic Experts',
      'Learn about C MATIC CONTROL LLP - your trusted partner for pneumatic, hydraulic, and automation solutions since 2019.',
      'C MATIC CONTROL, Pneumatic supplier Mumbai, Hydraulic solutions India'
    );
  } else if (hash === 'contact') {
    renderContactPage();
    updatePageMeta(
      'Contact Us | C MATIC CONTROL LLP | Pneumatic & Hydraulic Solutions',
      'Get in touch with C MATIC CONTROL LLP for pneumatic, hydraulic solutions. Located in Vikhroli, Mumbai. Call +91 9773087002',
      'Contact C MATIC CONTROL, Pneumatic supplier Mumbai, Hydraulic solutions'
    );
  } else if (parts[0] === 'products' && parts[1]) {
    if (parts[2] && parts[3]) {
      // Product detail page
      renderProductDetailPage(parts[1], parts[2], parts[3]);
    } else if (parts[2]) {
      // Subcategory page
      renderSubcategoryPage(parts[1], parts[2]);
    } else {
      // Category page
      renderCategoryPage(parts[1]);
    }
  }
  
  // Scroll to top
  window.scrollTo(0, 0);
}

function renderHomePage() {
  const content = document.getElementById('app-content');
  content.innerHTML = `
    <!-- Home Section -->
    <section id="home">
      <!-- Animated Hero Section -->
      <div class="hero-gradient text-white py-20 lg:py-32">
        <div class="hero-animated-bg">
          <div class="hero-shape hero-shape-1"></div>
          <div class="hero-shape hero-shape-2"></div>
        </div>
        <div class="container mx-auto px-4 lg:px-8 hero-content">
          <div class="text-center max-w-4xl mx-auto">
            <h1 class="text-4xl lg:text-6xl font-bold mb-4 hero-title-animate gradient-text-animated">C MATIC CONTROL LLP</h1>
            <p class="text-xl lg:text-2xl mb-4 font-semibold hero-tagline-animate">Pneumatic | Hydraulic | Automation</p>
            <p class="text-lg lg:text-xl mb-8 opacity-95 hero-tagline-animate">Precision in Motion - Industry-Leading Solutions</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center hero-cta-animate">
              <a href="#products" class="px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold hover:shadow-xl transition-all text-lg inline-flex items-center justify-center">
                <span>Explore Products</span>
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
              <button onclick="openEnquiryModal()" class="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all text-lg">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Company Introduction -->
      <div class="section bg-white">
        <div class="container mx-auto px-4 lg:px-8">
          <div class="max-w-4xl mx-auto text-center">
            <p class="text-lg lg:text-xl text-gray-700 leading-relaxed scroll-fade about-text-animate">
              Since 2019, C MATIC CONTROL LLP has been India's trusted provider of pneumatic, hydraulic, and automation solutions. 
              Authorized dealers for FESTO, SMC, Parker, Bosch Rexroth, and 7+ global leaders. 
              <strong class="text-gray-900">Precision. Reliability. Excellence.</strong>
            </p>
          </div>
        </div>
      </div>
      
      <!-- Industries Served Section -->
      <div class="section bg-gray-50">
        <div class="container mx-auto px-4 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-4xl font-bold mb-4 gradient-text scroll-fade">Industries We Serve</h2>
            <p class="text-lg text-gray-600 scroll-fade">Solutions for diverse industrial sectors</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${renderIndustriesServed()}
          </div>
        </div>
      </div>
      
      <!-- Testimonials Section -->
      <div class="section bg-white">
        <div class="container mx-auto px-4 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-4xl font-bold mb-4 gradient-text scroll-fade">What Our Clients Say</h2>
            <p class="text-lg text-gray-600 scroll-fade">Trusted by industry leaders across India</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${renderTestimonials()}
          </div>
        </div>
      </div>
      
      <!-- Certifications & Trust Section -->
      <div class="section bg-gray-50">
        <div class="container mx-auto px-4 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-4xl font-bold mb-4 gradient-text scroll-fade">Trusted By Industry Leaders</h2>
            <p class="text-lg text-gray-600 scroll-fade">Certified, Verified, Established</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            ${renderCertifications()}
          </div>
        </div>
      </div>
      
      <!-- Animated Brands Slider -->
      <div class="section bg-gray-50">
        <div class="container mx-auto px-4 lg:px-8">
          <div class="text-center mb-8">
            <h2 class="text-2xl lg:text-3xl font-bold gradient-text scroll-fade">Trusted by Industry Leaders</h2>
          </div>
          <div class="brand-slider-container">
            <div class="brand-slider">
              ${renderBrandSlider()}
              ${renderBrandSlider()}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Why Choose Us Section -->
      <div class="section bg-gray-50">
        <div class="container mx-auto px-4 lg:px-8">
          <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12 gradient-text scroll-fade">Why Choose Us</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${renderWhyChooseUs()}
          </div>
        </div>
      </div>
      
      <!-- Quality Assurance Section -->
      <div class="section bg-white">
        <div class="container mx-auto px-4 lg:px-8">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl lg:text-4xl font-bold mb-6 gradient-text scroll-fade">Quality Assurance</h2>
            <p class="text-lg text-gray-700 leading-relaxed scroll-fade">
              Each component is inspected for precision and performance. We ensure every product meets international 
              standards and customer expectations. Our rigorous quality control process guarantees that only the finest 
              products reach our customers, backed by manufacturer warranties and our commitment to excellence.
            </p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div class="text-center stagger-item">
                <div class="text-4xl font-bold text-red-600 mb-2">100%</div>
                <div class="text-sm text-gray-600">Quality Tested</div>
              </div>
              <div class="text-center stagger-item">
                <div class="text-4xl font-bold text-blue-700 mb-2">5+</div>
                <div class="text-sm text-gray-600">Years Experience</div>
              </div>
              <div class="text-center stagger-item">
                <div class="text-4xl font-bold text-red-600 mb-2">1000+</div>
                <div class="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div class="text-center stagger-item">
                <div class="text-4xl font-bold text-blue-700 mb-2">11</div>
                <div class="text-sm text-gray-600">Global Brands</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Vision & Mission Section -->
      <div class="section bg-gray-50">
        <div class="container mx-auto px-4 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="bg-white p-8 rounded-lg shadow-md card-hover scroll-fade">
              <div class="w-16 h-16 bg-gradient-to-r from-red-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl mb-6">🎯</div>
              <h3 class="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
              <p class="text-gray-700 leading-relaxed">
                To be India's most reliable supplier of motion control systems and industrial automation products, 
                setting new standards in quality, service, and innovation.
              </p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-md card-hover scroll-fade">
              <div class="w-16 h-16 bg-gradient-to-r from-red-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl mb-6">🚀</div>
              <h3 class="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
              <p class="text-gray-700 leading-relaxed">
                Deliver innovative, reliable, cost-effective industrial automation solutions that empower businesses 
                to achieve operational excellence and maximize productivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    

  `;
  
  setupScrollAnimations();
}

function renderIndustriesServed() {
  const industries = [
    { name: 'Pharmaceuticals', description: 'Precision motion control for pharmaceutical manufacturing', icon: '🔬' },
    { name: 'Packaging', description: 'Reliable automation for high-speed packaging lines', icon: '📦' },
    { name: 'Automotive', description: 'Industrial solutions for automotive assembly', icon: '🚗' },
    { name: 'Food & Beverage', description: 'Hygienic systems for food processing & packaging', icon: '🍽️' },
    { name: 'Iron & Steel', description: 'Heavy-duty systems for steel manufacturing', icon: '🏭' },
    { name: 'Textile', description: 'Precision control for textile machinery', icon: '👕' },
    { name: 'Process Control', description: 'Automated systems for industrial processes', icon: '⚙️' }
  ];
  
  return industries.map((industry, index) => `
    <div class="industry-card stagger-item" style="animation-delay: ${index * 0.1}s;">
      <div class="industry-icon">${industry.icon}</div>
      <h3 class="text-xl font-bold mb-2 text-gray-800">${industry.name}</h3>
      <p class="text-gray-600">${industry.description}</p>
    </div>
  `).join('');
}

function renderTestimonials() {
  const testimonials = [
    {
      quote: 'C MATIC CONTROL provided exceptional pneumatic cylinder repairing services. Their technical expertise and quick turnaround time reduced our production downtime significantly.',
      author: 'Rajesh Kumar',
      company: 'Premier Packaging Solutions',
      industry: 'Packaging',
      rating: 5
    },
    {
      quote: 'Outstanding quality and reliability. We have been dealing with C MATIC CONTROL for over 3 years for all our hydraulic requirements. Highly recommended for industrial automation needs.',
      author: 'Amit Patel',
      company: 'Automotive Components Ltd',
      industry: 'Automotive',
      rating: 5
    },
    {
      quote: 'Professional team, competitive pricing, and excellent after-sales support. C MATIC CONTROL is our trusted partner for all pneumatic and hydraulic solutions in Mumbai.',
      author: 'Vikram Singh',
      company: 'Industrial Process Systems',
      industry: 'Process Control',
      rating: 5
    }
  ];
  
  return testimonials.map((testimonial, index) => `
    <div class="testimonial-card stagger-item" style="animation-delay: ${index * 0.1}s;">
      <div class="testimonial-quote">"</div>
      <div class="mb-4">
        ${'⭐'.repeat(testimonial.rating)}
      </div>
      <p class="text-gray-700 mb-4 italic">"${testimonial.quote}"</p>
      <div class="border-t pt-4">
        <p class="font-bold text-gray-800">${testimonial.author}</p>
        <p class="text-sm text-gray-600">${testimonial.company}</p>
        <p class="text-xs text-gray-500">${testimonial.industry}</p>
      </div>
    </div>
  `).join('');
}

function renderCertifications() {
  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management System Certified', icon: '🏆' },
    { name: 'MSME Registered', description: 'Micro, Small & Medium Enterprise', icon: '📋' },
    { name: 'GST Registered', description: 'Goods & Services Tax Compliant', icon: '✅' }
  ];
  
  return certifications.map((cert, index) => `
    <div class="cert-badge stagger-item" style="animation-delay: ${index * 0.1}s;">
      <div class="text-5xl mb-3">${cert.icon}</div>
      <h3 class="text-lg font-bold mb-2 text-gray-800">${cert.name}</h3>
      <p class="text-sm text-gray-600">${cert.description}</p>
    </div>
  `).join('');
}

function renderWhyChooseUs() {
  const items = [
    { icon: '💡', title: 'Industry Knowledge', description: '20+ years of combined experience in pneumatic and hydraulic systems' },
    { icon: '🚚', title: 'On-Time Delivery', description: 'Reliable supply chain management ensures timely product delivery' },
    { icon: '🤝', title: 'Transparent Dealings', description: 'Honest pricing and clear communication with all clients' },
    { icon: '👥', title: 'Expert Team', description: 'Technical support from qualified engineers and specialists' },
    { icon: '💰', title: 'Fair Pricing', description: 'Competitive rates without compromising on quality' },
    { icon: '📦', title: 'Wide Range', description: 'One-stop solution for all automation needs' }
  ];
  
  return items.map((item, index) => `
    <div class="bg-white p-6 rounded-lg shadow-md card-hover stagger-item" style="animation-delay: ${index * 0.1}s;">
      <div class="text-4xl mb-4">${item.icon}</div>
      <h3 class="text-xl font-semibold mb-2 text-gray-800">${item.title}</h3>
      <p class="text-gray-600">${item.description}</p>
    </div>
  `).join('');
}

function renderProductCards(products) {
  return products.map((product, index) => `
    <div class="bg-white p-6 rounded-lg shadow-md card-hover stagger-item" data-aos="fade-up" style="animation-delay: ${index * 0.05}s;">
      <div class="text-3xl mb-3">🔩</div>
      <h4 class="text-lg font-bold mb-2 text-gray-800">${product.name}</h4>
      <p class="text-sm text-gray-600 mb-3">${product.desc}</p>
      ${product.specs ? `
        <ul class="text-xs text-gray-500 space-y-1 mb-4">
          ${product.specs.slice(0, 2).map(spec => `<li>• ${spec}</li>`).join('')}
        </ul>
      ` : ''}
      <button onclick="openEnquiryModal()" class="w-full px-4 py-2 bg-gradient-to-r from-red-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium">
        View Details
      </button>
    </div>
  `).join('');
}

function renderServiceCards() {
  const services = [
    {
      title: 'Pneumatic Cylinder Repairing & Refurbishing',
      description: 'Professional overhaul and reconditioning of all pneumatic cylinders for peak performance.',
      icon: '🔧'
    },
    {
      title: 'Hydraulic Cylinder Repairing',
      description: 'Expert maintenance and repair services for hydraulic systems ensuring optimal efficiency.',
      icon: '⚙️'
    },
    {
      title: 'Solenoid Valve Servicing & Testing',
      description: 'Complete testing, diagnostics, and servicing of solenoid valves with quality assurance.',
      icon: '🔬'
    },
    {
      title: 'Custom Hydraulic Power Pack Design',
      description: 'Tailored hydraulic power pack solutions designed specifically for your application requirements.',
      icon: '💡'
    },
    {
      title: 'On-site Pneumatic System Maintenance',
      description: 'Preventive maintenance and troubleshooting services for pneumatic systems at your facility.',
      icon: '🛠️'
    },
    {
      title: 'Industrial Automation Integration Support',
      description: 'Expert consultation and support for seamless integration of automation solutions into operations.',
      icon: '🤖'
    }
  ];
  
  return services.map((service, index) => `
    <div class="bg-white p-8 rounded-lg shadow-md card-hover stagger-item" data-aos="fade-up" style="animation-delay: ${index * 0.1}s;">
      <div class="w-16 h-16 bg-gradient-to-r from-red-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl mb-4">${service.icon}</div>
      <h3 class="text-xl font-bold mb-3 text-gray-800">${service.title}</h3>
      <p class="text-gray-600 mb-4">${service.description}</p>
      <button onclick="openEnquiryModal()" class="px-6 py-2 border-2 border-blue-700 text-blue-700 rounded-lg hover:bg-blue-50 transition-all font-medium">
        Book Maintenance
      </button>
    </div>
  `).join('');
}

function renderBrandSlider() {
  return productData.brands.map(brand => `
    <div class="brand-item">
      <div class="px-8 py-4 bg-gray-100 rounded-lg font-semibold text-gray-700 text-center whitespace-nowrap">
        ${brand}
      </div>
    </div>
  `).join('');
}

function renderProductsPage() {
  const content = document.getElementById('app-content');
  content.innerHTML = `
    <section class="section bg-gray-50 min-h-screen">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-12">
          <h1 class="text-4xl lg:text-5xl font-bold mb-4 gradient-text animate-fade-in">Our Comprehensive Product Range</h1>
          <p class="text-lg text-gray-700 animate-fade-in">Premium pneumatic, hydraulic, and automation solutions</p>
        </div>
        
        <!-- Pneumatic Products Section -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold mb-8 text-gray-800 scroll-fade">🔧 Pneumatic Products</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${renderProductCards([
              { name: 'Pneumatic Cylinders', desc: 'High-performance linear motion solutions', specs: ['32-320mm bore', 'Up to 2000mm stroke', '1-10 bar pressure'] },
              { name: 'ISO Cylinders', desc: 'ISO 15552 standard cylinders for reliability', specs: ['Tie-rod construction', 'Adjustable cushioning', 'Multiple mounting options'] },
              { name: 'Compact Cylinders', desc: 'Space-saving design for tight installations', specs: ['12-100mm bore', 'Up to 500mm stroke', 'Space-optimized design'] },
              { name: 'Rodless Cylinders', desc: 'Long stroke capability in compact package', specs: ['Up to 8000mm stroke', 'Magnetic coupling', 'Precision guidance'] },
              { name: 'Mini Cylinders', desc: 'ISO 6432 precision cylinders', specs: ['8-25mm bore', 'Up to 250mm stroke', 'Ultra-lightweight'] },
              { name: 'Double Acting / Single Acting Cylinders', desc: 'Versatile configurations for any application', specs: ['Multiple bore sizes', 'Custom mountings', 'Performance-tested'] },
              { name: 'Solenoid Valves', desc: 'Electrically operated directional control', specs: ['Multiple voltages', 'Fast response time', 'Reliable operation'] },
              { name: '2/2 Way Valves', desc: 'Simple on/off control solutions', specs: ['Compact design', 'Easy installation', 'Cost-effective'] },
              { name: '3/2 Way Valves', desc: 'Three-position directional control', specs: ['Flexible control', 'Multiple configurations', 'Industry standard'] },
              { name: '5/2 Way Valves', desc: 'Five-port solenoid directional control', specs: ['Full cylinder control', 'High flow rates', 'Durable design'] },
              { name: '5/3 Way Valves', desc: 'Center-closed valve configuration', specs: ['Precise control', 'Smooth operation', 'Professional-grade'] },
              { name: 'FRL Units', desc: 'Complete air preparation systems', specs: ['5-40 micron filtration', '0.5-10 bar range', 'Easy maintenance'] },
              { name: 'Air Tubings &amp; Fittings', desc: 'Durable tubing with quick-connect fittings', specs: ['Multiple diameters', 'Quick connections', 'High durability'] },
              { name: 'Air Blow Guns', desc: 'High-velocity air jet cleaning tools', specs: ['Efficient cleaning', 'Safety-tested', 'Ergonomic design'] },
              { name: 'Rotary Actuators', desc: 'Compact rotational motion control', specs: ['Smooth operation', 'Low maintenance', 'Reliable performance'] },
              { name: 'Pneumatic Sensors', desc: 'Position and pressure detection systems', specs: ['High accuracy', 'Fast response', 'IP67 rated'] },
              { name: 'Air Preparation Units', desc: 'Advanced filtration and conditioning', specs: ['Multi-stage filtration', 'Precision regulation', 'Optimal performance'] },
              { name: 'Pneumatic Accessories', desc: 'Supporting components for system integration', specs: ['Custom configurations', 'Quality components', 'System optimization'] }
            ])}
          </div>
        </div>
        
        <!-- Hydraulic Products Section -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold mb-8 text-gray-800 scroll-fade">💧 Hydraulic Products</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${renderProductCards([
              { name: 'Hydraulic Cylinders', desc: 'Heavy-duty linear force production', specs: ['32-250mm bore', 'Up to 5000mm stroke', '160-250 bar'] },
              { name: 'Hydraulic Power Packs', desc: 'Complete self-contained power units', specs: ['2-50 HP motors', 'Customizable', 'Multiple pump types'] },
              { name: 'Hydraulic Pumps', desc: 'Variable and fixed displacement pumps', specs: ['Efficient operation', 'High pressure capability', 'Long service life'] },
              { name: 'Directional Control Valves', desc: 'Precision flow direction management', specs: ['Fast response', 'Accurate control', 'Multiple sizes'] },
              { name: 'Pressure Relief Valves', desc: 'System overpressure protection', specs: ['Safety protection', 'Precise setting', 'Reliable performance'] },
              { name: 'Hydraulic Motors', desc: 'Rotational power output systems', specs: ['High torque', 'Smooth operation', 'Durable design'] },
              { name: 'Hoses, Pipes &amp; Fittings', desc: 'High-pressure fluid conveyance', specs: ['High pressure rated', 'Multiple sizes', 'Quality construction'] },
              { name: 'Manifolds &amp; Filters', desc: 'Integrated valve and filtration systems', specs: ['Custom design', 'Efficient filtration', 'System integration'] },
              { name: 'Hydraulic Accessories', desc: 'Supporting components and consumables', specs: ['Quality materials', 'Easy installation', 'Long lasting'] }
            ])}
          </div>
        </div>
        
        <!-- Automation Products Section -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold mb-8 text-gray-800 scroll-fade">⚙️ Automation &amp; Motion Control</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${renderProductCards([
              { name: 'Linear Actuators', desc: 'Precise linear motion automation', specs: ['Smooth motion', 'Accurate positioning', 'Reliable control'] },
              { name: 'Servo Drives &amp; Motors', desc: 'High-precision motion control systems', specs: ['Advanced control', 'High precision', 'Industry standard'] },
              { name: 'Pneumatic Conveying Systems', desc: 'Automated material transport solutions', specs: ['Efficient transport', 'Reliable operation', 'Customizable'] },
              { name: 'Industrial Sensors', desc: 'Advanced detection and measurement devices', specs: ['High accuracy', 'Multiple types', 'IP67+ protection'] },
              { name: 'Process Control Valves', desc: 'Automated process regulation systems', specs: ['Precise control', 'Reliable operation', 'Industry-proven'] }
            ])}
          </div>
        </div>
        

      </div>
    </section>
  `;
  
  setupScrollAnimations();
}

function renderCategoryPage(categorySlug) {
  const category = productData.categories.find(c => c.slug === categorySlug);
  if (!category) {
    render404();
    return;
  }
  
  const content = document.getElementById('app-content');
  content.innerHTML = `
    <section class="section bg-gray-50 min-h-screen">
      <div class="container mx-auto px-4 lg:px-8">
        <!-- Breadcrumb -->
        <div class="breadcrumb mb-8 text-sm">
          <a href="#home">Home</a>
          <span class="text-gray-400">›</span>
          <a href="#products">Products</a>
          <span class="text-gray-400">›</span>
          <span class="text-gray-700 font-medium">${category.name}</span>
        </div>
        
        <div class="mb-12">
          <h1 class="text-4xl lg:text-5xl font-bold mb-4 gradient-text animate-fade-in">${category.name}</h1>
          <p class="text-lg text-gray-700 animate-fade-in">${category.description}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${category.subcategories.map((subcategory, index) => `
            <a href="#products/${categorySlug}/${subcategory.slug}" class="bg-white rounded-lg shadow-lg overflow-hidden product-card stagger-item" style="animation-delay: ${index * 0.1}s;">
              <div class="h-40 bg-gradient-to-br from-blue-500 to-red-500 flex items-center justify-center text-white text-5xl">
                📦
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-gray-800">${subcategory.name}</h3>
                <p class="text-gray-600 mb-4">${subcategory.description}</p>
                <div class="flex items-center text-blue-700 font-semibold">
                  <span>View Products</span>
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
  
  setupScrollAnimations();
}

function renderSubcategoryPage(categorySlug, subcategorySlug) {
  const category = productData.categories.find(c => c.slug === categorySlug);
  if (!category) {
    render404();
    return;
  }
  
  const subcategory = category.subcategories.find(s => s.slug === subcategorySlug);
  if (!subcategory) {
    render404();
    return;
  }
  
  const content = document.getElementById('app-content');
  content.innerHTML = `
    <section class="section bg-gray-50 min-h-screen">
      <div class="container mx-auto px-4 lg:px-8">
        <!-- Breadcrumb -->
        <div class="breadcrumb mb-8 text-sm">
          <a href="#home">Home</a>
          <span class="text-gray-400">›</span>
          <a href="#products">Products</a>
          <span class="text-gray-400">›</span>
          <a href="#products/${categorySlug}">${category.name}</a>
          <span class="text-gray-400">›</span>
          <span class="text-gray-700 font-medium">${subcategory.name}</span>
        </div>
        
        <div class="mb-12">
          <h1 class="text-4xl lg:text-5xl font-bold mb-4 gradient-text animate-fade-in">${subcategory.name}</h1>
          <p class="text-lg text-gray-700 animate-fade-in">${subcategory.description}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${subcategory.products.map((product, index) => `
            <a href="#products/${categorySlug}/${subcategorySlug}/${product.slug}" class="bg-white rounded-lg shadow-lg overflow-hidden product-card stagger-item" style="animation-delay: ${index * 0.1}s;">
              <div class="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 text-4xl">
                🔩
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-gray-800">${product.name}</h3>
                <p class="text-sm text-gray-600 mb-3 line-clamp-2">${product.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  ${product.brands.slice(0, 2).map(brand => `
                    <span class="badge badge-secondary text-xs">${brand}</span>
                  `).join('')}
                </div>
                <div class="flex items-center text-blue-700 font-semibold">
                  <span>View Details</span>
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
  
  setupScrollAnimations();
}

function renderProductDetailPage(categorySlug, subcategorySlug, productSlug) {
  const category = productData.categories.find(c => c.slug === categorySlug);
  if (!category) {
    render404();
    return;
  }
  
  const subcategory = category.subcategories.find(s => s.slug === subcategorySlug);
  if (!subcategory) {
    render404();
    return;
  }
  
  const product = subcategory.products.find(p => p.slug === productSlug);
  if (!product) {
    render404();
    return;
  }
  
  const content = document.getElementById('app-content');
  content.innerHTML = `
    <section class="section bg-gray-50 min-h-screen">
      <div class="container mx-auto px-4 lg:px-8">
        <!-- Breadcrumb -->
        <div class="breadcrumb mb-8 text-sm">
          <a href="#home">Home</a>
          <span class="text-gray-400">›</span>
          <a href="#products">Products</a>
          <span class="text-gray-400">›</span>
          <a href="#products/${categorySlug}">${category.name}</a>
          <span class="text-gray-400">›</span>
          <a href="#products/${categorySlug}/${subcategorySlug}">${subcategory.name}</a>
          <span class="text-gray-400">›</span>
          <span class="text-gray-700 font-medium">${product.name}</span>
        </div>
        
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <!-- Product Image -->
            <div class="animate-fade-in">
              <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-8xl border-4 border-gradient">
                🔩
              </div>
            </div>
            
            <!-- Product Details -->
            <div class="animate-fade-in">
              <div class="mb-4">
                <span class="badge badge-primary">${product.category}</span>
              </div>
              <h1 class="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">${product.name}</h1>
              <p class="text-lg text-gray-700 mb-6 leading-relaxed">${product.description}</p>
              
              <!-- Specifications -->
              <h3 class="text-2xl font-bold mb-4 text-gray-800">Specifications</h3>
              <table class="spec-table mb-6">
                ${Object.entries(product.specs).map(([key, value]) => `
                  <tr>
                    <td>${key}</td>
                    <td class="text-gray-700">${value}</td>
                  </tr>
                `).join('')}
              </table>
              
              <!-- Applications -->
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Applications</h3>
              <p class="text-gray-700 mb-6">${product.applications}</p>
              
              <!-- Available Brands -->
              <h3 class="text-xl font-bold mb-3 text-gray-800">Available Brands</h3>
              <div class="flex flex-wrap gap-2 mb-6">
                ${product.brands.map(brand => `
                  <span class="badge badge-secondary">${brand}</span>
                `).join('')}
              </div>
              
              <!-- CTA Buttons -->
              <div class="flex flex-col sm:flex-row gap-4">
                <button onclick="openEnquiryModal()" class="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all font-medium">
                  Enquiry Now
                </button>
                <a href="tel:+919773087002" class="flex-1 px-6 py-3 border-2 border-blue-700 text-blue-700 rounded-lg hover:bg-blue-50 transition-all font-medium text-center">
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Brand Slider -->
        <div class="mt-12">
          <h2 class="text-2xl font-bold text-center mb-6 gradient-text">Authorized Brands</h2>
          <div class="brand-slider-container">
            <div class="brand-slider">
              ${renderBrandSlider()}
              ${renderBrandSlider()}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
  
  setupScrollAnimations();
}

function renderServicesPage() {
  const services = [
    {
      title: 'Pneumatic Cylinder Repairing & Refurbishing',
      description: 'Professional overhaul, reconditioning, and performance optimization of pneumatic cylinders for industrial applications',
      location: 'Vikhroli, Mumbai',
      icon: '🔧'
    },
    {
      title: 'Hydraulic Cylinder & Valve Repairing',
      description: 'Expert repair and maintenance services for hydraulic systems ensuring optimal efficiency and reliability',
      location: 'Vikhroli, Mumbai',
      icon: '⚙️'
    },
    {
      title: 'Preventive & Breakdown Maintenance',
      description: 'Scheduled maintenance programs and emergency repair services to minimize production downtime',
      location: 'Vikhroli, Mumbai',
      icon: '🛠️'
    },
    {
      title: 'Custom Automation System Design',
      description: 'Tailored pneumatic and hydraulic system design solutions for specific industrial applications',
      location: 'Vikhroli, Mumbai',
      icon: '💡'
    }
  ];
  
  const content = document.getElementById('app-content');
  content.innerHTML = `
    <section class="section bg-gray-50 min-h-screen">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-12">
          <h1 class="text-4xl lg:text-5xl font-bold mb-4 gradient-text animate-fade-in">Our Expert Services</h1>
          <p class="text-lg text-gray-700 animate-fade-in mb-2">Professional maintenance, repair, and custom solutions</p>
          <p class="text-md text-gray-600 animate-fade-in">📍 Service Center: Vikhroli, Mumbai</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          ${services.map((service, index) => `
            <div class="bg-white p-8 rounded-lg shadow-lg card-hover stagger-item" style="animation-delay: ${index * 0.1}s;">
              <div class="w-16 h-16 bg-gradient-to-r from-red-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl mb-4">${service.icon}</div>
              <h3 class="text-xl font-bold mb-3 text-gray-800">${service.title}</h3>
              <p class="text-gray-600 mb-3">${service.description}</p>
              <p class="text-sm text-gray-500 mb-4">📍 ${service.location}</p>
              <div class="flex gap-3">
                <button onclick="openEnquiryModal()" class="flex-1 px-6 py-2 bg-gradient-to-r from-red-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all font-medium">
                  Request Service
                </button>
                <a href="tel:+919773087002" class="flex-1 px-6 py-2 border-2 border-blue-700 text-blue-700 rounded-lg hover:bg-blue-50 transition-all font-medium text-center">
                  Call Now
                </a>
              </div>
            </div>
          `).join('')}
        </div>
        
        <!-- Service Transformation Section -->
        <div class="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 class="text-3xl font-bold mb-8 text-center gradient-text">Our Repair Excellence</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-4xl">🔍</span>
              </div>
              <h3 class="text-xl font-bold mb-2 text-gray-800">Diagnosis</h3>
              <p class="text-gray-600">Comprehensive inspection and fault identification</p>
            </div>
            <div class="text-center">
              <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-4xl">🔧</span>
              </div>
              <h3 class="text-xl font-bold mb-2 text-gray-800">Repair</h3>
              <p class="text-gray-600">Expert restoration using quality components</p>
            </div>
            <div class="text-center">
              <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-4xl">✅</span>
              </div>
              <h3 class="text-xl font-bold mb-2 text-gray-800">Testing</h3>
              <p class="text-gray-600">Performance verification and quality assurance</p>
            </div>
          </div>
        </div>
        
        <!-- Why Choose Our Services -->
        <div class="bg-gradient-to-r from-red-600 to-blue-700 rounded-lg shadow-lg p-8 text-white">
          <h2 class="text-3xl font-bold mb-8 text-center">Why Choose Our Services</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-4xl mb-3">⚡</div>
              <h3 class="font-bold mb-2">Quick Turnaround</h3>
              <p class="text-sm opacity-90">Fast repair & delivery</p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-3">🎯</div>
              <h3 class="font-bold mb-2">Expert Technicians</h3>
              <p class="text-sm opacity-90">Qualified professionals</p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-3">💰</div>
              <h3 class="font-bold mb-2">Competitive Pricing</h3>
              <p class="text-sm opacity-90">Best value for money</p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-3">🔒</div>
              <h3 class="font-bold mb-2">Quality Guarantee</h3>
              <p class="text-sm opacity-90">Warranty on repairs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
  
  setupScrollAnimations();
}

function renderAboutPage() {
  const content = document.getElementById('app-content');
  content.innerHTML = `
    <section class="section bg-gray-50 min-h-screen" id="about">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-12">
          <h1 class="text-4xl lg:text-5xl font-bold mb-4 gradient-text animate-fade-in">About C MATIC CONTROL LLP</h1>
          <p class="text-lg text-gray-700 animate-fade-in">Excellence in Industrial Automation Since 2019</p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="bg-white p-8 rounded-lg shadow-lg mb-8 animate-fade-in">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">Company Overview</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              C MATIC CONTROL LLP, established in 2019, is a leading supplier, distributor, and exporter of Pneumatic, 
              Hydraulic, and Automation products. We are proud authorized dealers for world-renowned brands including 
              FESTO, SMC, MINDMAN, JANATICS, PARKER, BOSCH REXROTH, YUKEN, NORGREN, AUTONICS, CAMOZZI, and AVENTICS.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Our commitment to quality, reliability, and customer satisfaction has helped us build strong relationships 
              with businesses across various industries including manufacturing, packaging, automotive, food processing, 
              and more.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div class="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
              <div class="w-16 h-16 bg-gradient-to-r from-red-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl mb-4">🎯</div>
              <h3 class="text-xl font-bold mb-3 text-gray-800">Our Vision</h3>
              <p class="text-gray-700">
                To be India's most reliable supplier of motion control systems and industrial automation products, 
                setting new standards in quality, service, and innovation.
              </p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
              <div class="w-16 h-16 bg-gradient-to-r from-red-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl mb-4">🚀</div>
              <h3 class="text-xl font-bold mb-3 text-gray-800">Our Mission</h3>
              <p class="text-gray-700">
                Deliver innovative, reliable, cost-effective industrial automation solutions that empower businesses 
                to achieve operational excellence and maximize productivity.
              </p>
            </div>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">Why Choose C MATIC CONTROL LLP</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              ${renderWhyChooseUs()}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
  
  setupScrollAnimations();
}

function renderContactPage() {
  const content = document.getElementById('app-content');
  content.innerHTML = `
    <section class="section bg-gray-50 min-h-screen">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-12">
          <h1 class="text-4xl lg:text-5xl font-bold mb-4 gradient-text animate-fade-in">Contact Us</h1>
          <p class="text-lg text-gray-700 animate-fade-in">Get in touch with our team for any inquiries</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <!-- Contact Form -->
          <div class="contact-form-container animate-fade-in">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">Send us a message</h2>
            <form id="contact-form" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input type="text" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input type="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                <input type="tel" name="phone" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                <select name="subject" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select a subject</option>
                  <option value="Product Inquiry">Product Inquiry</option>
                  <option value="Service Request">Service Request</option>
                  <option value="General Question">General Question</option>
                  <option value="Brochure Request">Brochure Request</option>
                  <option value="Partnership">Partnership</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea name="message" required rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
              </div>
              <button type="submit" class="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all font-medium">
                Submit Message
              </button>
            </form>
          </div>
          
          <!-- Contact Information -->
          <div class="space-y-6">
            <!-- Business Details -->
            <div class="contact-info-card animate-fade-in">
              <h3 class="text-xl font-bold mb-4 text-gray-800">Business Details</h3>
              <div class="space-y-3 text-gray-700">
                <div>
                  <p class="font-semibold text-gray-800">C MATIC CONTROL LLP</p>
                </div>
                <div class="flex items-start space-x-2">
                  <svg class="w-5 h-5 text-red-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p>C-26, Adke Compound, L.B.S. Marg, Surya Nagar, Vikhroli (W), Mumbai – 400 083, Maharashtra, India</p>
                </div>
                <div class="flex items-center space-x-2">
                  <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <div>
                    <a href="tel:+919773087002" class="text-blue-700 hover:underline">+91 9773087002</a> / 
                    <a href="tel:+919773087005" class="text-blue-700 hover:underline">+91 9773087005</a>
                  </div>
                </div>
                <div class="flex items-center space-x-2">
                  <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <a href="mailto:cmaticcontrol19@gmail.com" class="text-blue-700 hover:underline">cmaticcontrol19@gmail.com</a>
                </div>
                <div class="flex items-center space-x-2">
                  <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                  <span>www.cmaticcontrol.com</span>
                </div>
              </div>
            </div>
            
            <!-- Google Map -->
            <div class="contact-info-card animate-fade-in">
              <h3 class="text-xl font-bold mb-4 text-gray-800">Our Location</h3>
              <div class="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6565394739877!2d72.92437731490108!3d19.113644887062887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7d7e1f4f0d3%3A0x1e3e3e3e3e3e3e3e!2sVikhroli%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                  title="C MATIC CONTROL LLP Location">
                </iframe>
              </div>
            </div>
            
            <!-- Operating Hours -->
            <div class="contact-info-card animate-fade-in">
              <h3 class="text-xl font-bold mb-4 text-gray-800">Operating Hours</h3>
              <div class="space-y-2 text-gray-700">
                <div class="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span class="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span>Saturday:</span>
                  <span class="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span>Sunday:</span>
                  <span class="font-medium text-red-600">Closed</span>
                </div>
              </div>
            </div>
            
            <!-- Quick Contact Buttons -->
            <div class="grid grid-cols-3 gap-3 animate-fade-in">
              <a href="tel:+919773087002" class="flex flex-col items-center px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all">
                <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span class="text-xs font-medium">Call Us</span>
              </a>
              <a href="https://wa.me/919773087002" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all">
                <svg class="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span class="text-xs font-medium">WhatsApp</span>
              </a>
              <a href="mailto:cmaticcontrol19@gmail.com" class="flex flex-col items-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span class="text-xs font-medium">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
  
  // Add contact form handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleEnquirySubmit);
  }
  
  setupScrollAnimations();
}

function render404() {
  const content = document.getElementById('app-content');
  content.innerHTML = `
    <section class="section bg-gray-50 min-h-screen flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-6xl font-bold mb-4 gradient-text">404</h1>
        <p class="text-2xl text-gray-700 mb-8">Page Not Found</p>
        <a href="#home" class="px-8 py-4 bg-gradient-to-r from-red-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
          Return Home
        </a>
      </div>
    </section>
  `;
}

function openEnquiryModal() {
  const modal = document.getElementById('enquiry-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeEnquiryModal() {
  const modal = document.getElementById('enquiry-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

function handleEnquirySubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  
  // Show success message
  alert('Thank you for your enquiry! We will contact you soon.');
  
  // Reset form
  e.target.reset();
  
  // Close modal if open
  closeEnquiryModal();
}

function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Add GPU acceleration
        entry.target.classList.add('animate-gpu');
      }
    });
  }, observerOptions);
  
  // Observe scroll-fade elements
  document.querySelectorAll('.scroll-fade').forEach(el => {
    observer.observe(el);
  });
  
  // Observe stagger items with individual delays
  document.querySelectorAll('.stagger-item').forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
  });
  
  // Observe about section animations
  document.querySelectorAll('.about-text-animate, .about-image-animate').forEach(el => {
    observer.observe(el);
  });
  
  // Footer animation
  const footer = document.querySelector('footer');
  if (footer) {
    const footerObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('footer-animate');
        }
      });
    }, { threshold: 0.1 });
    footerObserver.observe(footer);
  }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
  const modal = document.getElementById('enquiry-modal');
  if (e.target === modal) {
    closeEnquiryModal();
  }
});