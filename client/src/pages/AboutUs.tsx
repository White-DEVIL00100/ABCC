import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ParticleBackground from "../components/ParticleBackground";
import Building from "../components/3d/Building";
import Lighting from "../components/3d/Lighting";

export default function AboutUs() {
  return (
    <div className="relative w-full min-h-screen bg-slate-900 overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Subtle 3D Background */}
      <div className="absolute inset-0 opacity-30">
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
            <Building position={[-3, 0, -2]} scale={[0.8, 1.2, 0.8]} />
            <Building position={[3, 0, -2]} scale={[1, 0.9, 1]} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-green-400">Abbasi Green</span> Contracting Company
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Distinguished in Everything from Projects to Quality and Speed of Achievement
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Our Story */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8">
              <h2 className="text-2xl font-bold text-green-400 mb-6">About Us</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Since the company was founded, we seek, we strive to be distinguished in everything 
                from our projects, institutions, and affiliates, to the quality and speed of 
                achievement that we are known for.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Our seamless organizational structure is adapted to the rapidly growing size of our 
                business, and our long-term strategic plans with effective feasibility are what has 
                been the overall goal of being a beacon in the contracting sector.
              </p>
              <p className="text-slate-300 leading-relaxed">
                It remains an ongoing goal, and it is to his credit that achievement after 
                achievement and year after year is truly a pride of all of us.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8">
              <h2 className="text-2xl font-bold text-green-400 mb-6">Our Vision & Mission</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">Vision</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                We strive to be a leading preferred partner in customer focused and innovative 
                engineering solutions to clients nationally and beyond.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                We are committed in helping our clients find ways to reduce carbon emissions and 
                thus reducing their operational costs. We are continuously striving to provide 
                innovative technology based engineering solutions that are energy-efficient, cost 
                effective and sustainable.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3">Mission</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                We commit to partnering with our clients, to offer effective and efficient 
                Engineering Services through our qualified, diligent and dedicated professionals.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-4">Values</h3>
              <div className="grid grid-cols-2 gap-4 text-slate-300">
                <div className="flex items-center">
                  <span className="text-green-400 mr-3">•</span>
                  <span><strong>Trust</strong></span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-3">•</span>
                  <span><strong>Respect</strong></span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-3">•</span>
                  <span><strong>Ethics</strong></span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-3">•</span>
                  <span><strong>Teamwork</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700">
                <div className="text-green-400 text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-semibold text-white mb-3">Mechanical, Electrical & Plumbing</h3>
                <p className="text-slate-400">
                  Complete MEP solutions with design, supply and installation services for all building systems.
                </p>
              </div>
              
              <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700">
                <div className="text-green-400 text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-semibold text-white mb-3">Civil & Turnkey Fit-out Works</h3>
                <p className="text-slate-400">
                  Complete construction solutions from civil works to comprehensive fit-out projects.
                </p>
              </div>
              
              <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700">
                <div className="text-green-400 text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-white mb-3">Facility Management</h3>
                <p className="text-slate-400">
                  Ongoing maintenance, operations support, and preventive maintenance contracts for all facilities.
                </p>
              </div>
            </div>
          </div>

          {/* Activities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Design, Supply & Installation",
                "Technical Drawing Services", 
                "Energy Auditing & Retrofit Services",
                "Third Party Testing & Commissioning",
                "Fit-out & Refurbishments",
                "Operations & Maintenance",
                "Preventive Maintenance",
                "Annual Maintenance Contracts"
              ].map((activity, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-4">
                  <div className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span className="text-slate-300 font-medium">{activity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Strength Through Partnership */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Strength Through Partnership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Abbasi Green Holding Company",
                "Abbasi Green Company for General Contracting",
                "Abbasi Green Company for Air Conditioning and Cooling",
                "Abbasi Green Company for Electrical & Mechanical Work"
              ].map((company, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
                  <div className="flex items-center">
                    <span className="text-green-400 mr-3 text-xl">🏢</span>
                    <span className="text-white font-semibold">{company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Principles */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Our Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6 text-left">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Transparency & Honesty</h3>
                <p className="text-slate-300 leading-relaxed">
                  We are honest in all aspects and our contacts are transparent and frank
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6 text-left">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Excellence</h3>
                <p className="text-slate-300 leading-relaxed">
                  Is the cornerstone of our success and people strive to exceed your expectations
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6 text-left">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Innovation</h3>
                <p className="text-slate-300 leading-relaxed">
                  By keeping pace with the progress of science and taking advantage of modern technologies, we are progressing
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6 text-left">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Employee Safety</h3>
                <p className="text-slate-300 leading-relaxed">
                  Our employees are our most important resources and their safety and comfort are our basic principles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}