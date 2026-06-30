'use client';

import Lanyard from "./component/Lanyard";
import Masonry from "./component/Masonry";
import SplitText from "./component/SplitText";
import TrueFocus from "./component/TrueFocus";
import TextType from "./component/TextType";
import FlyingPosters from "./component/FlyingPosters";
import Link from "next/link";
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, subject, message } = formData;
    
    // Validasi form
    if (!name || !email || !subject || !message) {
      alert('Mohon isi semua field');
      return;
    }

    // Format pesan untuk WhatsApp
    const whatsappMessage = `Halo, nama saya *${name}*\n\nEmail: ${email}\n\nSubyek: *${subject}*\n\nPesan:\n${message}`;
    
    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Nomor WhatsApp (tanpa + atau 0, gunakan format internasional)
    const phoneNumber = '6288216276309'; // Sesuaikan dengan nomor WhatsApp Anda
    
    // Buka WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
const items = [
  "/project1/pic1.jpeg",
  "/project1/pic2.jpeg",
  "/project1/pic3.jpeg",
  "/project1/pic4.jpeg",
  "/project1/pic5.jpeg",
  "/project1/pic6.jpeg",
  "/project1/pic7.jpeg",
  "/project1/pic8.jpeg",
  "/project1/pic9.jpeg",
  "/project1/pic10.jpeg",
];

  const projectItems = [
    {
      id: "1",
      img: "/project/project1.jpg",
      url: "https://github.com/yogha-pixel/log-jaringan-dppkad-karanganyar.git",
      height: 400,
    },
    {
      id: "2",
      img: "/project/project2.jpg",
      url: "https://github.com/yogha-pixel/sistem_rekomendasi_paket_internet.git",
      height: 250,
    },
    {
      id: "3",
      img: "/project/project3.jpg",
      url: "https://github.com/yogha-pixel/Hotspot_Login_Sekolah.git",
      height: 600,
    },
    {
      id: "4",
      img: "/project/project4.png",
      url: "https://github.com/username/project4",
      height: 350,
    },
    {
      id: "5",
      img: "/project/project5.png",
      url: "https://github.com/username/project5",
      height: 480,
    },
  ];
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 lg:px-20 bg-black/80 backdrop-blur-md border-b border-cyan-400/20">
        <div className="flex items-center justify-between max-w-full mx-auto">
          {/* Logo */}
          <div className="text-white text-lg md:text-xl font-bold flex-shrink-0">
            Yoga Aji <span className="text-cyan-400">Pratama.</span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium border-b-2 border-cyan-400 pb-1">
              Home
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="#skill" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
              Skill
            </Link>
            <Link href="#project" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
              Project
            </Link>
            <Link href="#Contact" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white hover:text-cyan-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6 order-2 lg:order-1">
              {/* Heading - Using SplitText */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-baseline gap-3">
                  <SplitText
                    text="Hi, It's"
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white"
                    delay={50}
                    duration={1}
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    tag="h1"
                    textAlign="left"
                  />
                  <SplitText
                    text="Yoga"
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-cyan-400"
                    delay={200}
                    duration={1}
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    tag="h1"
                    textAlign="left"
                  />
                </div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <SplitText
                    text="Aji"
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-cyan-400"
                    delay={350}
                    duration={1}
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    tag="h1"
                    textAlign="left"
                  />
                  <SplitText
                    text="Pratama"
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white"
                    delay={500}
                    duration={1}
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    tag="h1"
                    textAlign="left"
                  />
                </div>
              </div>

              {/* Subtitle - Simple Text Style */}
              <div className="flex items-baseline gap-2 flex-wrap">
                  <TrueFocus 
                    sentence="I'm a Junior Front-End Developer"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="#5227FF"
                    animationDuration={0.5}
                    pauseBetweenAnimations={1}
                    />
              </div>



              {/* Description - Using TextType */}
              <div className="max-w-xl">
                <TextType 
                  text="Hallo Semuanya, Selamat Datang di Website Portofolio saya. Perkenalkan Saya Yoga Aji Pratama. Fresh graduate Teknik Informatika."
                  className="text-gray-300 text-base md:text-lg leading-relaxed"
                  typingSpeed={50}
                  deletingSpeed={30}
                  pauseDuration={2000}
                  showCursor={true}
                  cursorCharacter="|"
                  cursorClassName="text-cyan-400"
                />
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                <a 
                  href="https://github.com/yogha-pixel" 
                  className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/yoga-aji-pratama-1474b43b6/" 
                  className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/yoghaaprtm/" 
                  className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
             </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#about" 
                  className="px-8 py-3 rounded-full border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition-all flex items-center gap-2"
                >
                  About Me
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="#Contact" 
                  className="px-8 py-3 rounded-full border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition-all flex items-center gap-2"
                >
                  Contact
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a 
                  href="/cv/Yoga-Aji-Pratama-CV.pdf" 
                  className="px-8 py-3 rounded-full border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition-all flex items-center gap-2"
                >
                  Download Cv
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Lanyard Component */}
            <div className="order-1 lg:order-2 relative h-[250px] md:h-[300px] lg:h-[900px] flex items-center justify-center -mt-28 lg:-mt-32">
             
                {/* Glowing effect behind Lanyard */}               
                {/* Lanyard Component */}
                <div className="relative z-10 w-full h-full">
                  <Lanyard
                    position={[0, 0, 15]}
                    gravity={[0, -50, 0]}
                  />
                </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="relative min-h-screen py-20 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                About <span className="text-cyan-400">Me</span>
              </h2>
              <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
            </div>

            {/* About Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
              <div className="space-y-10">
                <h1 className="text-xl md:text-5xl font-bold text-cyan-400">
                 TENTANG SAYA
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed">
                 Perkenalkan, saya Yoga Aji Pratama, seorang Teknisi Jaringan dan Network Engineer yang memiliki pengalaman dalam pengelolaan, pemeliharaan, serta troubleshooting infrastruktur jaringan agar sistem berjalan dengan optimal dan stabil. Selain itu, saya juga memiliki kemampuan sebagai Junior Web Developer dalam pengembangan website dan sistem berbasis web pada tingkat dasar. Saya memiliki minat besar di bidang teknologi informasi serta berkomitmen untuk terus mengembangkan kemampuan di bidang jaringan dan web development.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Dengan pengalaman dalam berbagai project, saya terus mengasah kemampuan saya 
                  dalam JavaScript, React, Next.js, dan teknologi web modern lainnya.
                </p>
              </div>
            <div className="order-5 lg:order-2 relative h-[1000px] md:h-[500px] lg:h-[1000px] flex items-center justify-center -mt-60 lg:-mt-32">
                <div className="relative w-full h-[600px]">
                  <FlyingPosters
                    items={[
                      "/project1/pic1.jpeg",
                      "/project1/pic2.jpeg",
                      "/project1/pic3.jpeg",
                      "/project1/pic4.jpeg",
                      "/project1/pic5.jpeg",
                      "/project1/pic6.jpeg",
                      "/project1/pic7.jpeg",
                      "/project1/pic8.jpeg",
                      "/project1/pic9.jpeg",
                      "/project1/pic10.jpeg",
                    ]}
                    planeWidth={320}
                    planeHeight={320}
                    distortion={3}
                    scrollEase={0.01}
                    cameraFov={45}
                    cameraZ={20}
                  />
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skill" className="relative min-h-screen py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                My <span className="text-cyan-400">Skills</span>
              </h2>
              <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: 'HTML', level: '90%' },
                { name: 'CSS', level: '85%' },
                { name: 'JavaScript', level: '80%' },
                { name: 'React', level: '75%' },
                { name: 'Next.js', level: '70%' },
                { name: 'Tailwind CSS', level: '85%' },
                { name: 'Git', level: '75%' },
                { name: 'TypeScript', level: '70%' }
              ].map((skill, index) => (
                <div 
                  key={index}
                  className="bg-gray-900 p-6 rounded-xl border border-cyan-400/20 hover:border-cyan-400 transition-all hover:scale-105"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">{skill.name}</div>
                    <div className="text-cyan-400 font-semibold">{skill.level}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="project" className="relative min-h-screen py-20 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                My <span className="text-cyan-400">Projects</span>
              </h2>
              <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
            </div>

            {/* Masonry Gallery */}
            <div className="h-[800px] md:h-[1000px] lg:h-[1200px]">
              <Masonry
                items={projectItems}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="bottom"
                scaleOnHover={true}
                hoverScale={0.95}
                blurToFocus={true}
                colorShiftOnHover={false}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="Contact" className="relative min-h-screen py-20 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                Contact <span className="text-cyan-400">Me</span>
              </h2>
              <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
              <p className="text-gray-400 text-lg">
                Tertarik untuk berkolaborasi? Mari kita buat sesuatu yang luar biasa bersama!
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 p-8 rounded-xl border border-cyan-400/20">
              <form onSubmit={handleSendToWhatsApp} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2 font-semibold">Name</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black border border-cyan-400/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-semibold">Email</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black border border-cyan-400/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white mb-2 font-semibold">Subject</label>
                  <input 
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-cyan-400/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-semibold">Message</label>
                  <textarea 
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-cyan-400/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-cyan-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 mx-auto"
                >
                  Send Message
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gray-900 p-6 rounded-xl border border-cyan-400/20 text-center">
                <svg className="w-8 h-8 text-cyan-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="text-white font-bold mb-1">Email</h3>
                <p className="text-gray-400 text-sm">yogaajipratama101@gmail.com</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border border-cyan-400/20 text-center">
                <svg className="w-8 h-8 text-cyan-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <h3 className="text-white font-bold mb-1">Phone</h3>
                <p className="text-gray-400 text-sm">+62 88216276309</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border border-cyan-400/20 text-center">
                <svg className="w-8 h-8 text-cyan-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-white font-bold mb-1">Location</h3>
                <p className="text-gray-400 text-sm">Surakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-cyan-400/20 py-8">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center text-gray-400">
            <p>&copy; 2026 Yoga Aji Pratama. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
