import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import {
  HiOutlineLightBulb,
  HiOutlineCode,
  HiOutlineChip,
  HiOutlineGlobe,
} from "react-icons/hi";

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const videoRef = useRef(null);

  // Core values data
  const coreValues = [
    {
      title: "Innovation",
      description:
        "We push boundaries and challenge conventions to create cutting-edge solutions.",
      icon: <HiOutlineLightBulb className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Excellence",
      description:
        "We strive for perfection in everything we do, from code quality to client relationships.",
      icon: <HiOutlineCode className="w-10 h-10 text-purple-500" />,
    },
    {
      title: "Adaptability",
      description:
        "We embrace change and continuously evolve our skills and technologies.",
      icon: <HiOutlineChip className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Diversity",
      description:
        "We value diverse perspectives and foster an inclusive environment for all.",
      icon: <HiOutlineGlobe className="w-10 h-10 text-yellow-500" />,
    },
  ];

  // Team data
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "/images/team/john.jpg",
      bio: "Visionary leader with 10+ years of experience in tech innovation.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "/images/team/jane.jpg",
      bio: "Tech wizard specializing in AI and cloud infrastructure.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "Alex Johnson",
      role: "Lead Designer",
      image: "/images/team/alex.jpg",
      bio: "Creative genius with a passion for user-centric design.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "Sarah Williams",
      role: "Product Manager",
      image: "/images/team/sarah.jpg",
      bio: "Strategic thinker who bridges the gap between tech and business needs.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "/images/team/michael.jpg",
      bio: "Coding master with deep expertise in scalable architecture and cutting-edge frameworks.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "Priya Sharma",
      role: "AI Specialist",
      image: "/images/team/priya.jpg",
      bio: "Pioneering researcher in machine learning algorithms and neural networks.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
  ];

  // Timeline data
  const timeline = [
    {
      year: "2015",
      event: "CodeKet Founded",
      description:
        "Started in a small garage with a big dream to revolutionize coding practices.",
    },
    {
      year: "2017",
      event: "First Major Client",
      description:
        "Landed our first enterprise client, marking our breakthrough in the industry.",
    },
    {
      year: "2018",
      event: "CodeKet Accelerator",
      description:
        "Launched our startup accelerator program to nurture the next generation of tech innovators.",
    },
    {
      year: "2020",
      event: "AI Platform Launch",
      description:
        "Introduced our revolutionary AI-powered development platform, CodeKet Studio.",
    },
    {
      year: "2022",
      event: "Series B Funding",
      description:
        "Secured $25M in funding to scale our operations and expand our product offerings.",
    },
    {
      year: "2023",
      event: "Global Expansion",
      description:
        "Expanded operations to 12 countries worldwide with regional headquarters in Singapore and Berlin.",
    },
    {
      year: "2024",
      event: "Open Source Initiative",
      description:
        "Launched CodeKet Community Edition, contributing back to the open source ecosystem that helped us grow.",
    },
  ];

  // Stats data
  const stats = [
    { value: "250+", label: "Projects Completed", icon: "🚀" },
    { value: "99.9%", label: "Client Satisfaction", icon: "🌟" },
    { value: "12", label: "Countries Served", icon: "🌍" },
    { value: "5M+", label: "Users Impacted", icon: "👥" },
    { value: "48", label: "Team Members", icon: "👨‍💻" },
    { value: "15+", label: "Industry Awards", icon: "🏆" },
    { value: "24/7", label: "Support Coverage", icon: "🔧" },
    { value: "120+", label: "Open Source Contributions", icon: "♻️" },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "David Lee",
      position: "CTO, TechNova Inc.",
      image: "/images/testimonials/david.jpg",
      quote:
        "CodeKet transformed our development process. Their solutions cut our deployment time by 70% and significantly improved our product quality.",
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, StartupX",
      image: "/images/testimonials/emily.jpg",
      quote:
        "As a startup founder, I needed a technical partner who understood our vision. CodeKet didn't just deliver code—they delivered on promises and became an extension of our team.",
    },
    {
      name: "James Wilson",
      position: "VP Engineering, Enterprise Solutions",
      image: "/images/testimonials/james.jpg",
      quote:
        "The expertise and professionalism of the CodeKet team is unmatched. They helped us navigate complex technical challenges with innovative, scalable solutions.",
    },
  ];

  // Office locations
  const locations = [
    {
      city: "San Francisco",
      address: "101 Market Street, Suite 700, San Francisco, CA 94105",
      image: "/images/offices/sf.jpg",
    },
    {
      city: "Singapore",
      address: "80 Raffles Place, #43-01, Singapore 048624",
      image: "/images/offices/singapore.jpg",
    },
    {
      city: "Berlin",
      address: "Friedrichstraße 88, 10117 Berlin, Germany",
      image: "/images/offices/berlin.jpg",
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      <Header />
      {/* Parallax Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center opacity-50"
        ></motion.div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            About CodeKet
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-3xl mx-auto">
            We are a team of innovators, creators, and problem-solvers dedicated
            to transforming the future of technology through elegant code and
            visionary solutions.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10"
          >
            <a
              href="#our-story"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
            >
              Discover Our Story
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="w-2 h-2 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>

      {/* Vision & Mission Section */}
      <div id="our-story" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl text-gray-300 mb-8">
                To create a world where technology empowers every individual and
                organization to achieve their fullest potential.
              </p>

              <h2 className="text-4xl font-bold mb-6 mt-12">Our Mission</h2>
              <p className="text-xl text-gray-300">
                To empower businesses with cutting-edge technology solutions
                that drive innovation, efficiency, and sustainable growth in an
                increasingly connected world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
              <video
                ref={videoRef}
                className="w-full h-auto rounded-xl shadow-2xl border border-gray-800"
                autoPlay
                loop
                muted
                playsInline
                poster="/images/video-poster.jpg"
              >
                <source src="/videos/about-us.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-24 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20"
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our passionate team of experts combines technical expertise with
              creative problem-solving to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-blue-400 mt-1">{member.role}</p>
                  <p className="text-gray-300 mt-4">{member.bio}</p>
                  <div className="flex space-x-4 mt-6">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <FaTwitter className="w-6 h-6" />
                    </a>
                    <a
                      href={member.social.github}
                      className="text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a
              href="/careers"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
            >
              Join Our Team
            </a>
          </motion.div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-24 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Our Journey
          </motion.h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            <div className="space-y-20">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0
                        ? "md:text-right md:pr-16"
                        : "md:order-2 md:pl-16"
                    }`}
                  >
                    <div
                      className={`bg-gray-800 rounded-xl p-6 border border-gray-700 ${
                        index % 2 === 0 ? "ml-auto" : ""
                      }`}
                    >
                      <h3 className="text-2xl font-bold mb-1 text-blue-400">
                        {item.year}
                      </h3>
                      <h4 className="text-xl font-bold mb-3">{item.event}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xl font-bold border-4 border-gray-900">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            What Our Clients Say
          </motion.h2>

          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex flex-col space-y-6">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-800 rounded-xl p-8 border border-gray-700 relative"
                >
                  <FaQuoteLeft className="absolute top-8 left-8 text-3xl text-blue-500 opacity-30" />
                  <FaQuoteRight className="absolute bottom-8 right-8 text-3xl text-purple-500 opacity-30" />

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                      <img
                        src={testimonials[activeTestimonial].image}
                        alt={testimonials[activeTestimonial].name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-gray-700"
                      />
                    </div>
                    <div className="md:w-3/4 md:pl-8">
                      <p className="text-xl text-gray-300 italic mb-6">
                        "{testimonials[activeTestimonial].quote}"
                      </p>
                      <h4 className="text-xl font-bold">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-blue-400">
                        {testimonials[activeTestimonial].position}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    activeTestimonial === index ? "bg-blue-500" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            CodeKet by the Numbers
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Global Presence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              With offices across the globe, we're positioned to serve clients
              wherever they are.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.city}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{location.city}</h3>
                  <p className="text-gray-300 mt-4">{location.address}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Join the hundreds of organizations that have partnered with CodeKet
            to drive innovation and achieve remarkable results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="/case-studies"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors duration-300 shadow-lg"
            >
              View Case Studies
            </a>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
