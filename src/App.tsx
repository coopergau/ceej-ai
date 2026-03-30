import { Phone, MessageSquare, Workflow, ArrowRight, Shield } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-[#0a0a0a]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
            Ceej AI
          </div>
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#a855f7] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#ec4899] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-[#a855f7] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            AI That Works.
            <br />
            <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
              So You Don't Have To.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ceej AI helps businesses automate workflows, answer customers, and integrate AI where it matters most.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white px-8 py-4 rounded-lg font-medium text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#a855f7]/50 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#a855f7] to-[#ec4899] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Voice Bots</h3>
              <p className="text-gray-400 leading-relaxed">
                AI-powered phone agents that answer calls, qualify leads, and handle customer inquiries 24/7. Never miss a call again.
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#ec4899]/50 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#a855f7] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Website Chatbots</h3>
              <p className="text-gray-400 leading-relaxed">
                Intelligent chat agents embedded on your website that engage visitors, answer questions, and convert leads automatically.
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#a855f7]/50 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#a855f7] to-[#ec4899] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">OpenClaw Setup & Configuration</h3>
              <p className="text-gray-400 leading-relaxed">
                Professional installation and secure configuration of OpenClaw for your business. We handle the technical setup, permissions, and safety guardrails so your team gets a powerful AI agent without the security headaches.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white/[0.03] to-white/[0.08] backdrop-blur-sm rounded-2xl p-8 border-2 border-[#a855f7]/30 hover:border-[#a855f7]/60 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-xs font-semibold">
                Custom
              </div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#a855f7] to-[#ec4899] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Workflow className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Workflow Automation</h3>
              <p className="text-gray-400 leading-relaxed">
                Custom AI workflows built around your business. CRM integrations, admin automation, and process optimization tailored to your needs. Contact us to discuss your use case.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            About Ceej AI
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Ceej AI is a modern AI solutions company helping businesses adopt and integrate AI into their daily operations. We believe in making powerful AI technology accessible, secure, and practical for every organization.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            From voice agents to workflow automation, we craft tailored solutions that drive efficiency, reduce costs, and unlock new possibilities for your team.
          </p>
        </div>
      </section>

      <section id="contact" className="py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Build Something
              <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent"> Together</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a855f7] focus:border-transparent transition-all text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a855f7] focus:border-transparent transition-all text-white placeholder-gray-500"
                  placeholder="Acme Inc."
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a855f7] focus:border-transparent transition-all text-white placeholder-gray-500"
                placeholder="john@acme.com"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                Service Interest
              </label>
              <select
                id="service"
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a855f7] focus:border-transparent transition-all text-white"
              >
                <option value="" className="bg-[#0a0a0a]">Select a service</option>
                <option value="voice-bots" className="bg-[#0a0a0a]">Voice Bots</option>
                <option value="website-chatbots" className="bg-[#0a0a0a]">Website Chatbots</option>
                <option value="openclaw-setup" className="bg-[#0a0a0a]">OpenClaw Setup & Configuration</option>
                <option value="workflow-automation" className="bg-[#0a0a0a]">Workflow Automation</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a855f7] focus:border-transparent transition-all text-white placeholder-gray-500 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white px-8 py-4 rounded-lg font-medium text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          © 2024 Ceej AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
