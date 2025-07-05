import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import ParticleBackground from "../components/ParticleBackground";
import ConstructionEquipment from "../components/3d/ConstructionEquipment";
import Lighting from "../components/3d/Lighting";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
  };

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
            <ConstructionEquipment position={[-4, 0, -2]} scale={[0.6, 0.6, 0.6]} />
            <ConstructionEquipment position={[4, 0, -2]} rotation={[0, Math.PI, 0]} scale={[0.6, 0.6, 0.6]} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact <span className="text-green-400">Us</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ready to start your sustainable construction project? Let's discuss how we can bring your vision to life.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8">
              <h2 className="text-2xl font-bold text-green-400 mb-6">Get in Touch</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-green-400 text-4xl mb-4">✓</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Thank You!</h3>
                  <p className="text-slate-300 mb-6">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-green-400"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-green-400"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-green-400"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-green-400"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-slate-600 bg-slate-700/50 px-3 py-2 text-white placeholder-slate-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20"
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>

                  <p className="text-xs text-slate-400 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8">
                <h2 className="text-2xl font-bold text-green-400 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-green-400 text-xl">📧</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <p className="text-slate-300">info@abbasigreen.com</p>
                      <p className="text-slate-400 text-sm">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-green-400 text-xl">📞</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Phone</h3>
                      <p className="text-slate-300">(555) 123-GREEN</p>
                      <p className="text-slate-400 text-sm">Mon-Fri, 8 AM - 6 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-green-400 text-xl">📍</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Office</h3>
                      <p className="text-slate-300">123 Green Construction Way</p>
                      <p className="text-slate-300">Sustainable City, SC 12345</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-green-400 text-xl">🕒</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Business Hours</h3>
                      <p className="text-slate-300">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-slate-300">Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="text-slate-300">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm rounded-lg border border-red-400/30 p-6">
                <h3 className="text-xl font-bold text-red-400 mb-3">Emergency Contact</h3>
                <p className="text-slate-300 mb-3">
                  For urgent construction issues or emergencies:
                </p>
                <p className="text-white font-semibold text-lg">(555) 911-BUILD</p>
                <p className="text-slate-400 text-sm">Available 24/7 for existing clients</p>
              </div>

              {/* Why Choose Us */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4">Why Choose Abbasi Green?</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Certified sustainable construction practices
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    25+ years of combined experience
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Licensed and fully insured
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Free consultations and estimates
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Warranty on all construction work
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}