import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ParticleBackground from "../components/ParticleBackground";
import ConstructionEquipment from "../components/3d/ConstructionEquipment";
import Lighting from "../components/3d/Lighting";

export default function Services() {
  const services = [
    {
      title: "Mechanical, Electrical & Plumbing (MEP)",
      icon: "⚙️",
      description: "Complete MEP solutions with design, supply and installation services for all building systems.",
      features: [
        "HVAC Systems Design & Installation",
        "Electrical Power Distribution",
        "Plumbing & Water Systems",
        "Fire Safety Systems",
        "Energy Management Systems",
        "Building Automation"
      ]
    },
    {
      title: "Civil & Turnkey Fit-out Works",
      icon: "🏗️",
      description: "Complete construction solutions from civil works to comprehensive fit-out projects.",
      features: [
        "Structural Engineering",
        "Foundation & Concrete Works",
        "Interior Design & Fit-out",
        "Exterior Facades",
        "Landscaping",
        "Project Management"
      ]
    },
    {
      title: "Facility Management",
      icon: "🔧",
      description: "Ongoing maintenance, operations support, and preventive maintenance contracts for all facilities.",
      features: [
        "Preventive Maintenance",
        "Operations & Maintenance",
        "Annual Maintenance Contracts",
        "Emergency Response",
        "Equipment Servicing",
        "Facility Optimization"
      ]
    }
  ];

  const activities = [
    {
      category: "Design & Engineering",
      items: [
        "Design, Supply & Installation",
        "Technical Drawing Services",
        "Energy Auditing & Retrofit Services",
        "Third Party Testing & Commissioning"
      ]
    },
    {
      category: "Construction & Renovation",
      items: [
        "Fit-out & Refurbishments",
        "Civil Construction Works",
        "MEP System Installation",
        "Quality Control & Testing"
      ]
    },
    {
      category: "Maintenance & Support",
      items: [
        "Operations & Maintenance",
        "Preventive Maintenance",
        "Annual Maintenance Contracts",
        "24/7 Emergency Support"
      ]
    }
  ];

  const specializations = [
    {
      title: "Generator Services",
      icon: "🔌",
      description: "Complete generator installation and maintenance services for commercial and industrial applications.",
      details: [
        "Site preparation and installation",
        "Fuel supply system setup",
        "Electrical connections and transfer switches",
        "Testing and commissioning",
        "Preventive maintenance programs"
      ]
    },
    {
      title: "Transformer Solutions",
      icon: "⚡",
      description: "Professional transformer installation, maintenance, and monitoring services.",
      details: [
        "Site assessment and foundation work",
        "Installation and grounding",
        "Oil testing and filtration",
        "Thermal scanning and monitoring",
        "Load testing and maintenance"
      ]
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-slate-900 overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Subtle 3D Background */}
      <div className="absolute inset-0 opacity-20">
        <Canvas
          camera={{
            position: [0, 2, 8],
            fov: 45,
            near: 0.1,
            far: 1000
          }}
        >
          <color attach="background" args={["#0f172a"]} />
          <Suspense fallback={null}>
            <Lighting />
            <ConstructionEquipment position={[-2, 0, -2]} scale={[0.5, 0.5, 0.5]} />
            <ConstructionEquipment position={[2, 0, -2]} rotation={[0, Math.PI, 0]} scale={[0.5, 0.5, 0.5]} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-green-400">Services</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive engineering solutions from design to maintenance, 
              delivered by qualified and dedicated professionals
            </p>
          </div>

          {/* Main Services */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Core Services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8 hover:bg-slate-800/70 transition-all">
                  <div className="text-green-400 text-4xl mb-6 text-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">{service.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-6 text-center">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <span className="text-green-400 mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {activities.map((category, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
                  <h3 className="text-xl font-semibold text-green-400 mb-6 text-center">{category.category}</h3>
                  <ul className="space-y-4">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-slate-300">
                        <span className="text-green-400 mr-3 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Specialized Services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {specializations.map((spec, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-green-400 text-3xl mr-4">{spec.icon}</div>
                    <h3 className="text-2xl font-semibold text-white">{spec.title}</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">{spec.description}</p>
                  <ul className="space-y-3">
                    {spec.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-slate-300">
                        <span className="text-green-400 mr-3 mt-1">→</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Our Approach</h2>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-4">Quality & Excellence</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    We add the value of quality and mastery at every stage of construction through 
                    the latest advanced construction technology for long-term quality and safety of buildings.
                  </p>
                  <h3 className="text-xl font-semibold text-green-400 mb-4">Innovation & Technology</h3>
                  <p className="text-slate-300 leading-relaxed">
                    We provide innovative technology-based engineering solutions that are energy-efficient, 
                    cost-effective and sustainable, helping clients reduce carbon emissions and operational costs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-4">Professional Team</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Our qualified, diligent and dedicated professionals ensure effective and efficient 
                    engineering services through our seamless organizational structure.
                  </p>
                  <h3 className="text-xl font-semibold text-green-400 mb-4">Customer Focus</h3>
                  <p className="text-slate-300 leading-relaxed">
                    We strive to be a leading preferred partner in customer-focused and innovative 
                    engineering solutions to clients nationally and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}