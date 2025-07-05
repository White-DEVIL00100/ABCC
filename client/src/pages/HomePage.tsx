import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import Scene from "../components/3d/Scene";
import ParticleBackground from "../components/ParticleBackground";
import { useAudio } from "../lib/stores/useAudio";
import { Button } from "../components/ui/button";

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export default function HomePage({ onPageChange }: HomePageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { toggleMute, isMuted } = useAudio();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-slate-900">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {/* Particle Background */}
        <ParticleBackground />
        
        {/* 3D Scene */}
        <div className="absolute inset-0">
          <Canvas
            shadows
            camera={{
              position: [0, 5, 15],
              fov: 45,
              near: 0.1,
              far: 1000
            }}
            gl={{
              antialias: true,
              powerPreference: "high-performance"
            }}
          >
            <color attach="background" args={["#0f172a"]} />
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 pt-20 z-10">
          <div className={`text-center mb-8 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-green-400">Abbasi Green</span>
              <br />
              <span className="text-white">Contracting Company</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Distinguished in Everything from Projects to Quality and Speed of Achievement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onPageChange('projects')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
              >
                Our Projects
              </Button>
              <Button 
                onClick={() => onPageChange('contact')}
                variant="outline" 
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 px-8 py-3 text-lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Sound Toggle */}
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 z-20 p-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 text-white hover:bg-slate-700/50 transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>

      {/* Services Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Our <span className="text-green-400">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              onClick={() => onPageChange('services')}
              className="text-center p-8 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:bg-slate-800/70 transition-all cursor-pointer"
            >
              <div className="text-green-400 text-5xl mb-6">⚙️</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Mechanical, Electrical & Plumbing</h3>
              <p className="text-slate-300 leading-relaxed">
                Complete MEP solutions with design, supply and installation services for all building systems.
              </p>
            </div>
            <div 
              onClick={() => onPageChange('services')}
              className="text-center p-8 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:bg-slate-800/70 transition-all cursor-pointer"
            >
              <div className="text-green-400 text-5xl mb-6">🏗️</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Civil & Turnkey Fit-out</h3>
              <p className="text-slate-300 leading-relaxed">
                Complete construction solutions from civil works to comprehensive fit-out projects.
              </p>
            </div>
            <div 
              onClick={() => onPageChange('services')}
              className="text-center p-8 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:bg-slate-800/70 transition-all cursor-pointer"
            >
              <div className="text-green-400 text-5xl mb-6">🔧</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Facility Management</h3>
              <p className="text-slate-300 leading-relaxed">
                Operations, maintenance and annual service contracts for all facilities.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button 
              onClick={() => onPageChange('services')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                About <span className="text-green-400">AGCC</span>
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                Since our founding, we strive to be distinguished in everything from our projects, 
                institutions, and affiliates, to the quality and speed of achievement that we are known for.
              </p>
              <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                Our seamless organizational structure is adapted to the rapidly growing size of our 
                business, with long-term strategic plans and effective feasibility as our goal of 
                being a beacon in the contracting sector.
              </p>
              <Button 
                onClick={() => onPageChange('about')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3"
              >
                Learn More About Us
              </Button>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8">
              <h3 className="text-2xl font-semibold text-green-400 mb-6">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                We strive to be a leading preferred partner in customer focused and innovative 
                engineering solutions to clients nationally and beyond.
              </p>
              <h3 className="text-2xl font-semibold text-green-400 mb-6">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                We commit to partnering with our clients, to offer effective and efficient 
                Engineering Services through our qualified, diligent and dedicated professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Featured <span className="text-green-400">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "15 Residential Villas", location: "Al Khobar, Al Azizia" },
              { title: "ADNOC Gas Stations", location: "Dammam" },
              { title: "Commercial Complex", location: "Al-Khobar Al Rakeh" },
              { title: "Luxury Villas", location: "Dammam Al-Fakhra" },
              { title: "Industrial Warehouse", location: "Dammam, Abudhariyah Road" },
              { title: "Residential Building", location: "Al Khobar, Al Qarabi" }
            ].map((project, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6 hover:bg-slate-800/70 transition-all">
                <div className="text-green-400 text-3xl mb-4">🏗️</div>
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-green-400 text-sm font-medium mb-3">📍 {project.location}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              onClick={() => onPageChange('projects')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Start Your <span className="text-green-400">Project?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Contact us today for professional construction and engineering solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
              <div className="text-green-400 text-3xl mb-4">📞</div>
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-slate-300">+966 59 608 6868</p>
              <p className="text-slate-400 text-sm">Ishtiaq Ahmed Abbasi</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
              <div className="text-green-400 text-3xl mb-4">📧</div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-slate-300">info@abbasigreen.com</p>
              <p className="text-slate-400 text-sm">24h response time</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
              <div className="text-green-400 text-3xl mb-4">📍</div>
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-slate-300">Eastern Region</p>
              <p className="text-slate-400 text-sm">Saudi Arabia</p>
            </div>
          </div>
          <Button 
            onClick={() => onPageChange('contact')}
            className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 text-lg"
          >
            Get Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}