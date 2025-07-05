import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ParticleBackground from "../components/ParticleBackground";
import Building from "../components/3d/Building";
import ConstructionEquipment from "../components/3d/ConstructionEquipment";
import Lighting from "../components/3d/Lighting";

export default function Projects() {
  const projects = [
    {
      title: "Residential Building Floors",
      location: "Al Khobar, Al Qarabi Neighborhood",
      description: "Construction project featuring modern residential building floors with sustainable design principles."
    },
    {
      title: "15 Residential Villas",
      location: "Al Khobar, Al Azizia",
      description: "Complete construction of 15 luxury residential villas incorporating green building practices."
    },
    {
      title: "ADNOC Gas Stations",
      location: "Dammam",
      description: "Construction of 3 modern gas stations for ADNOC with advanced fuel systems and safety features."
    },
    {
      title: "Luxury Villas",
      location: "Dammam Al-Fakhra",
      description: "Construction and finishing of 2 premium villas with high-end amenities and sustainable features."
    },
    {
      title: "Commercial Complex",
      location: "Al-Khobar Al Rakeh",
      description: "Comprehensive finishing project for commercial complex with modern retail and office spaces."
    },
    {
      title: "Khaleej Palace Villa",
      location: "Dammam",
      description: "Construction and finishing of prestigious residential villa with luxury specifications."
    },
    {
      title: "Industrial Warehouse",
      location: "Dammam, Abudhariyah Road",
      description: "Construction and finishing project of specialized steel stretcher warehouse facility."
    },
    {
      title: "Al-Hazam Al-Ghazi Villa",
      location: "Al-Khobar",
      description: "Residential villa construction project in the prestigious Al-Hazam Al-Ghazi neighborhood."
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
            <Building position={[-6, 0, -3]} scale={[0.6, 1, 0.6]} />
            <Building position={[0, 0, -3]} scale={[0.8, 1.2, 0.8]} />
            <Building position={[6, 0, -3]} scale={[0.6, 0.8, 0.6]} />
            <ConstructionEquipment position={[-3, 0, 0]} scale={[0.4, 0.4, 0.4]} />
            <ConstructionEquipment position={[3, 0, 0]} rotation={[0, Math.PI, 0]} scale={[0.4, 0.4, 0.4]} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-green-400">Projects</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Showcasing Our Excellence in Construction and Engineering Solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="text-green-400 text-2xl mb-4">🏗️</div>
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-green-400 text-sm font-medium mb-3">📍 {project.location}</p>
                <p className="text-slate-300 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>

          {/* Project Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Project Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700">
                <div className="text-green-400 text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold text-white mb-3">Residential Projects</h3>
                <p className="text-slate-400">
                  Luxury villas, residential buildings, and housing developments across the Eastern Region.
                </p>
              </div>
              
              <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700">
                <div className="text-green-400 text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-semibold text-white mb-3">Commercial Projects</h3>
                <p className="text-slate-400">
                  Commercial complexes, retail spaces, and business facilities designed for modern operations.
                </p>
              </div>
              
              <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700">
                <div className="text-green-400 text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-semibold text-white mb-3">Industrial Projects</h3>
                <p className="text-slate-400">
                  Gas stations, warehouses, and specialized industrial facilities with advanced safety systems.
                </p>
              </div>
            </div>
          </div>

          {/* Our Expertise */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Our Project Expertise</h2>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8">
              <p className="text-slate-300 leading-relaxed mb-6">
                As a classified Saudi contractor, AGCC has successfully completed numerous large-scale projects 
                throughout the Eastern Region and beyond. Our portfolio demonstrates our commitment to quality, 
                innovation, and sustainable construction practices.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-3">Construction Excellence</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center">
                      <span className="text-green-400 mr-3">•</span>
                      Complete project management from design to delivery
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-3">•</span>
                      High-quality standards and timely completion
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-3">•</span>
                      Sustainable building practices and materials
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-3">Technical Capabilities</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center">
                      <span className="text-green-400 mr-3">•</span>
                      Advanced MEP systems integration
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-3">•</span>
                      Energy-efficient building solutions
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-3">•</span>
                      Modern construction technology utilization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}