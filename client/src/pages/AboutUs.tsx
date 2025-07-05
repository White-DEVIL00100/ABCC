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
              About <span className="text-green-400">Abbasi Green</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Building Tomorrow's Sustainable Infrastructure Today
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Our Story */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8">
              <h2 className="text-2xl font-bold text-green-400 mb-6">Our Story</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Founded with a vision to revolutionize the construction industry, Abbasi Green Contracting Company 
                stands at the forefront of sustainable building practices. We believe that exceptional construction 
                and environmental responsibility go hand in hand.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Our journey began with a simple mission: to create structures that not only serve their purpose 
                but also contribute positively to the environment. Every project we undertake reflects our 
                commitment to green building practices and innovative construction solutions.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Today, we're proud to be recognized as leaders in sustainable construction, delivering projects 
                that exceed expectations while minimizing environmental impact.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8">
              <h2 className="text-2xl font-bold text-green-400 mb-6">Our Mission</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                To lead the construction industry toward a sustainable future by delivering exceptional building 
                solutions that prioritize environmental stewardship, energy efficiency, and long-term value.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-4">Core Values</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span><strong>Sustainability:</strong> Every project incorporates eco-friendly materials and practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span><strong>Innovation:</strong> Embracing cutting-edge technology and construction methods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span><strong>Quality:</strong> Uncompromising standards in every aspect of our work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span><strong>Integrity:</strong> Transparent communication and ethical business practices</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Services Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700">
                <div className="text-green-400 text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-semibold text-white mb-3">Commercial Construction</h3>
                <p className="text-slate-400">
                  Modern office buildings, retail spaces, and commercial complexes designed for efficiency and sustainability.
                </p>
              </div>
              
              <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700">
                <div className="text-green-400 text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold text-white mb-3">Residential Projects</h3>
                <p className="text-slate-400">
                  Eco-friendly homes and residential developments that prioritize comfort, efficiency, and environmental impact.
                </p>
              </div>
              
              <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700">
                <div className="text-green-400 text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-white mb-3">Renovation & Retrofit</h3>
                <p className="text-slate-400">
                  Transforming existing structures with green technologies and sustainable building practices.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Our Team</h2>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8">
              <p className="text-slate-300 leading-relaxed mb-6">
                Our diverse team of architects, engineers, project managers, and construction professionals 
                brings decades of combined experience to every project. We're united by our passion for 
                sustainable construction and our commitment to excellence.
              </p>
              <p className="text-slate-300 leading-relaxed">
                From initial concept to final delivery, our team works collaboratively to ensure that 
                every project meets the highest standards of quality, sustainability, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}