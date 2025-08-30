import React from 'react';
import { motion } from 'framer-motion';
import { Play, Award, TrendingUp, Users, Globe } from 'lucide-react';
import ThreeVisualization from './ThreeVisualization';

const Hero: React.FC = () => {
  const stats = [
    { icon: Award, label: 'Patent Applications', value: '12+', color: 'text-yellow-400' },
    { icon: TrendingUp, label: 'Efficacy Rate', value: '94.7%', color: 'text-green-400' },
    { icon: Users, label: 'Lives Impacted', value: '50K+', color: 'text-blue-400' },
    { icon: Globe, label: 'Global Reach', value: '25 Countries', color: 'text-purple-400' },
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 mb-6">
                <Award className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-sm text-gray-300">Winner: MIT Innovation Challenge 2024</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  TumorTarget
                </span>
                <br />
                <span className="text-white">AI Platform</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Revolutionary AI-powered probiotic capsules that precisely target and eliminate 
                cancer cells while preserving healthy tissue. The future of personalized oncology.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.button
                className="flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Live Demo
              </motion.button>
              
              <motion.button
                className="flex items-center px-8 py-4 glass-effect text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Clinical Data
              </motion.button>
            </motion.div>

            {/* Key Metrics */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-effect p-4 rounded-xl text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - 3D Visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden glass-effect">
              <ThreeVisualization />
            </div>
            
            {/* Floating Info Cards */}
            <motion.div
              className="absolute -top-4 -right-4 glass-effect p-3 rounded-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-green-400 font-bold">99.2% Accuracy</div>
              <div className="text-xs text-gray-400">Tumor Detection</div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 glass-effect p-3 rounded-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <div className="text-blue-400 font-bold">2.3 Minutes</div>
              <div className="text-xs text-gray-400">Average Response</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Problem Statement */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">The Challenge We're Solving</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-4xl mb-4">💔</div>
              <h3 className="text-xl font-semibold text-white mb-2">10M+ Deaths Annually</h3>
              <p className="text-gray-400">Cancer remains the 2nd leading cause of death globally</p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-white mb-2">$200B+ Treatment Costs</h3>
              <p className="text-gray-400">Current therapies are expensive and often ineffective</p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-2">30% Success Rate</h3>
              <p className="text-gray-400">Traditional treatments lack precision targeting</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;