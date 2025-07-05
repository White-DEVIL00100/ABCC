import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import Scene from "./3d/Scene";
import EmailSubscription from "./ui/EmailSubscription";
import CountdownTimer from "./ui/CountdownTimer";
import ParticleBackground from "./ParticleBackground";
import { useAudio } from "../lib/stores/useAudio";

export default function ComingSoon() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { toggleMute, isMuted } = useAudio();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Launch date - 3 months from now
  const launchDate = new Date();
  launchDate.setMonth(launchDate.getMonth() + 3);

  return (
    <div className="relative w-full min-h-screen bg-slate-900 overflow-hidden">
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

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 pt-20 z-10">
        {/* Company Name */}
        <div className={`text-center mb-8 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            <span className="text-green-400">Abbasi</span>
            <br />
            <span className="text-green-500">Green</span>
            <br />
            <span className="text-white">Contracting</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Building Tomorrow's Sustainable Infrastructure Today
          </p>
        </div>

        {/* Countdown Timer */}
        <div className={`mb-8 transition-all duration-1000 delay-300 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <CountdownTimer targetDate={launchDate} />
        </div>

        {/* Coming Soon Badge */}
        <div className={`mb-8 transition-all duration-1000 delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3">
            <span className="text-green-400 font-semibold text-lg">Coming Soon</span>
          </div>
        </div>

        {/* Email Subscription */}
        <div className={`mb-8 transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <EmailSubscription />
        </div>

        {/* Features */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700">
            <div className="text-green-400 text-2xl mb-2">🌱</div>
            <h3 className="text-white font-semibold mb-2">Sustainable Building</h3>
            <p className="text-slate-400 text-sm">Eco-friendly construction solutions for a greener future</p>
          </div>
          <div className="text-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700">
            <div className="text-green-400 text-2xl mb-2">🏗️</div>
            <h3 className="text-white font-semibold mb-2">Expert Construction</h3>
            <p className="text-slate-400 text-sm">Professional contracting services with proven expertise</p>
          </div>
          <div className="text-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700">
            <div className="text-green-400 text-2xl mb-2">💚</div>
            <h3 className="text-white font-semibold mb-2">Green Innovation</h3>
            <p className="text-slate-400 text-sm">Cutting-edge technology for sustainable construction</p>
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

      {/* Contact Info */}
      <div className="absolute bottom-4 left-4 z-20 text-slate-400 text-sm">
        <p>Contact: info@abbasigreen.com</p>
      </div>
    </div>
  );
}
