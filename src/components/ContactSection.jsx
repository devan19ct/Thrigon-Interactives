import React, { useState } from 'react';
import { Send, Mail, CheckCircle2, AlertCircle, Loader2, MessageSquare, Twitter, Instagram, Youtube } from 'lucide-react';
import { studioSocials } from '../data/studioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    reason: 'Game Development',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const reasons = [
    'Game Development',
    'Client Project',
    'Collaboration',
    'Publishing',
    'Partnership',
    'General Enquiry'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Invalid email address';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setStatus('submitting');

    const textParts = [
      `*THRIGON INTERACTIVES INQUIRY*`,
      ``,
      `*Name:* ${formData.name}`,
      `*Email:* ${formData.email}`,
      `*Company/Org:* ${formData.company || 'N/A'}`,
      `*Reason:* ${formData.reason}`,
      ``,
      `*Message:*`,
      `${formData.message}`
    ];
    const encodedText = encodeURIComponent(textParts.join('\n'));
    const whatsappUrl = `https://wa.me/917025042862?text=${encodedText}`;

    setTimeout(() => {
      setStatus('success');
      window.open(whatsappUrl, '_blank');
      setFormData({
        name: '',
        email: '',
        company: '',
        reason: 'Game Development',
        message: ''
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0812] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase bg-purple-950/40 px-3.5 py-1.5 rounded border border-purple-800/40">
            CONNECT WITH THRIGON
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight mt-4">
            LET'S BUILD <span className="text-purple-500">SOMETHING.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            Reach out to discuss game projects, collaborations, or general studio inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-[#0f0b1c] border border-purple-500/20 shadow-xl">
              <h3 className="font-display font-bold text-2xl text-white uppercase mb-4">
                DIRECT CONTACT
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Prefer direct communication? Send us an email directly to our official studio inbox.
              </p>

              <a
                href={`mailto:${studioSocials.email}`}
                className="inline-flex items-center space-x-3 text-purple-300 font-mono text-sm hover:text-white bg-purple-950/60 border border-purple-500/30 px-4 py-3 rounded-xl w-full transition-colors"
              >
                <Mail className="w-5 h-5 text-purple-400" />
                <span>{studioSocials.email}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="p-8 rounded-2xl bg-[#0f0b1c] border border-purple-500/20 shadow-xl">
              <h3 className="font-display font-bold text-xl text-white uppercase mb-4">
                STUDIO COMMUNITY & NETWORKS
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-6">
                Follow Thrigon Interactives across our official channels for development updates.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={studioSocials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 p-3 rounded-xl bg-purple-950/40 border border-purple-800/30 text-gray-300 hover:text-white hover:bg-purple-900/40 transition-colors text-xs font-mono"
                >
                  <Twitter className="w-4 h-4 text-purple-400" />
                  <span>X / TWITTER</span>
                </a>
                <a
                  href={studioSocials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 p-3 rounded-xl bg-purple-950/40 border border-purple-800/30 text-gray-300 hover:text-white hover:bg-purple-900/40 transition-colors text-xs font-mono"
                >
                  <Instagram className="w-4 h-4 text-purple-400" />
                  <span>INSTAGRAM</span>
                </a>
                <a
                  href={studioSocials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 p-3 rounded-xl bg-purple-950/40 border border-purple-800/30 text-gray-300 hover:text-white hover:bg-purple-900/40 transition-colors text-xs font-mono"
                >
                  <Youtube className="w-4 h-4 text-purple-400" />
                  <span>YOUTUBE</span>
                </a>
                <a
                  href={studioSocials.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 p-3 rounded-xl bg-purple-950/40 border border-purple-800/30 text-gray-300 hover:text-white hover:bg-purple-900/40 transition-colors text-xs font-mono"
                >
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                  <span>DISCORD</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#0f0b1c] border border-purple-500/30 rounded-2xl p-8 sm:p-10 shadow-2xl">
            {status === 'success' ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-purple-950 border border-purple-400 text-purple-300 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-3xl text-white uppercase">
                  MESSAGE TRANSMITTED
                </h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out! Your message has been formatted and opened in WhatsApp (+91 7025042862) to connect directly with the Thrigon Interactives team.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 bg-purple-950 text-purple-300 border border-purple-500/40 rounded-lg text-xs font-mono uppercase tracking-wider hover:bg-purple-900 transition-colors"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-gray-300 mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className={`w-full bg-[#07050b] border ${
                        errors.name ? 'border-red-500' : 'border-purple-900/50 focus:border-purple-500'
                      } rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-gray-300 mb-2">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email address"
                      className={`w-full bg-[#07050b] border ${
                        errors.email ? 'border-red-500' : 'border-purple-900/50 focus:border-purple-500'
                      } rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Company */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-gray-300 mb-2">
                      ORGANIZATION / COMPANY
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Optional"
                      className="w-full bg-[#07050b] border border-purple-900/50 focus:border-purple-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Reason dropdown */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-gray-300 mb-2">
                      REASON FOR CONTACT
                    </label>
                    <select
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="w-full bg-[#07050b] border border-purple-900/50 focus:border-purple-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                    >
                      {reasons.map((r) => (
                        <option key={r} value={r} className="bg-[#0f0b1c] text-white">
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase text-gray-300 mb-2">
                    MESSAGE *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your game project, vision or inquiry..."
                    className={`w-full bg-[#07050b] border ${
                      errors.message ? 'border-red-500' : 'border-purple-900/50 focus:border-purple-500'
                    } rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-xl shadow-purple-950/60 border border-purple-400/30 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-purple-200" />
                      <span>TRANSMITTING MESSAGE...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-purple-200" />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
