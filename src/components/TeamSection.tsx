import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Award, GraduationCap, Briefcase } from 'lucide-react';

const TeamSection: React.FC = () => {
  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Co-Founder',
      expertise: 'Oncology & Bioengineering',
      education: 'MD/PhD Harvard Medical School',
      experience: '15+ years at Memorial Sloan Kettering',
      achievements: ['Published 120+ papers', 'NIH Grant Recipient', 'Forbes 30 Under 30'],
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: { linkedin: '#', github: '#', email: 'sarah@tumortarget.ai' }
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'CTO & Co-Founder',
      expertise: 'AI/ML & Computational Biology',
      education: 'PhD Computer Science MIT',
      experience: 'Former Google DeepMind Senior Researcher',
      achievements: ['50+ AI patents', 'Nature AI Editor', 'Turing Award Nominee'],
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: { linkedin: '#', github: '#', email: 'michael@tumortarget.ai' }
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Chief Medical Officer',
      expertise: 'Clinical Trials & Regulatory',
      education: 'MD Johns Hopkins, MBA Wharton',
      experience: 'Former FDA Deputy Director',
      achievements: ['Led 50+ clinical trials', 'Regulatory expert', 'Medical innovation leader'],
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: { linkedin: '#', github: '#', email: 'emily@tumortarget.ai' }
    },
    {
      name: 'Dr. James Kim',
      role: 'Head of AI Research',
      expertise: 'Machine Learning & Computer Vision',
      education: 'PhD Stanford AI Lab',
      experience: 'Former Tesla Autopilot Lead',
      achievements: ['ICML Best Paper Award', '30+ ML publications', 'AI ethics advocate'],
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: { linkedin: '#', github: '#', email: 'james@tumortarget.ai' }
    }
  ];

  const advisors = [
    { name: 'Dr. Jennifer Doudna', role: 'CRISPR Pioneer, Nobel Laureate', company: 'UC Berkeley' },
    { name: 'Dr. Eric Topol', role: 'Digital Medicine Expert', company: 'Scripps Research' },
    { name: 'Reid Hoffman', role: 'Tech Entrepreneur', company: 'Greylock Partners' },
    { name: 'Dr. Mary-Claire King', role: 'Genetics Pioneer', company: 'University of Washington' },
  ];

  const investors = [
    { name: 'Andreessen Horowitz', amount: '$50M Series B', stage: 'Lead Investor' },
    { name: 'GV (Google Ventures)', amount: '$25M Series A', stage: 'Strategic' },
    { name: 'Johnson & Johnson Innovation', amount: '$15M Seed', stage: 'Corporate VC' },
    { name: 'Khosla Ventures', amount: '$10M Pre-Seed', stage: 'Early Believer' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            World-Class <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Led by renowned experts in oncology, AI, and bioengineering, our team combines 
            decades of experience with cutting-edge innovation.
          </p>
        </motion.div>

        {/* Core Team */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="glass-effect p-6 rounded-2xl text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-400"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-blue-400 font-semibold mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm mb-4">{member.expertise}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-xs text-gray-300">
                  <GraduationCap className="w-3 h-3 mr-2" />
                  {member.education}
                </div>
                <div className="flex items-center text-xs text-gray-300">
                  <Briefcase className="w-3 h-3 mr-2" />
                  {member.experience}
                </div>
              </div>

              <div className="space-y-1 mb-6">
                {member.achievements.map((achievement, idx) => (
                  <div key={idx} className="text-xs text-green-400">
                    • {achievement}
                  </div>
                ))}
              </div>

              <div className="flex justify-center space-x-3">
                <motion.a
                  href={member.social.linkedin}
                  className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={member.social.github}
                  className="p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={`mailto:${member.social.email}`}
                  className="p-2 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisory Board */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Advisory Board</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                className="glass-effect p-6 rounded-xl text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="font-bold text-white mb-1">{advisor.name}</h4>
                <p className="text-blue-400 text-sm mb-1">{advisor.role}</p>
                <p className="text-gray-400 text-xs">{advisor.company}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Funding & Investors */}
        <motion.div
          className="glass-effect p-8 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Funding & Investors</h3>
          
          <div className="text-center mb-12">
            <div className="text-5xl font-bold text-green-400 mb-2">$100M</div>
            <div className="text-xl text-gray-300">Total Funding Raised</div>
            <div className="text-sm text-blue-400">Series B Completed - December 2024</div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investors.map((investor, index) => (
              <motion.div
                key={investor.name}
                className="bg-gray-800/30 p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="font-bold text-white mb-2">{investor.name}</h4>
                <div className="text-green-400 font-semibold mb-1">{investor.amount}</div>
                <p className="text-gray-400 text-sm">{investor.stage}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamSection;