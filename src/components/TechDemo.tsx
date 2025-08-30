import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Zap, Target, Shield, Cpu } from 'lucide-react';

const TechDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [selectedTech, setSelectedTech] = useState('capsule');

  const phases = [
    { name: 'Ingestion', description: 'Capsule travels through digestive system', color: 'bg-blue-500' },
    { name: 'Bloodstream Entry', description: 'Controlled release into circulation', color: 'bg-purple-500' },
    { name: 'Tumor Detection', description: 'AI sensors identify cancer biomarkers', color: 'bg-yellow-500' },
    { name: 'Targeted Deployment', description: 'Probiotics released at tumor site', color: 'bg-green-500' },
    { name: 'Elimination', description: 'Coordinated attack destroys cancer cells', color: 'bg-red-500' },
  ];

  const technologies = {
    capsule: {
      title: 'Smart Capsule Design',
      icon: Shield,
      features: [
        'pH-responsive polymer coating',
        'Biodegradable nanostructure',
        'Temperature-stable storage',
        'Controlled release mechanism'
      ]
    },
    ai: {
      title: 'AI Detection Engine',
      icon: Cpu,
      features: [
        'Real-time biomarker analysis',
        'Machine learning tumor classification',
        'Predictive targeting algorithms',
        'Adaptive treatment optimization'
      ]
    },
    targeting: {
      title: 'Precision Targeting',
      icon: Target,
      features: [
        'Molecular-level recognition',
        'Multi-modal sensor array',
        'GPS-like tumor navigation',
        'Selective cell destruction'
      ]
    },
    probiotics: {
      title: 'Engineered Probiotics',
      icon: Zap,
      features: [
        'Genetically modified bacteria',
        'Tumor-specific cytotoxins',
        'Self-destruct mechanisms',
        'Immune system enhancement'
      ]
    }
  };

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentPhase((prev) => (prev + 1) % phases.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, phases.length]);

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Technology <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Demonstration</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our breakthrough technology in action. Watch how AI-guided probiotics 
            revolutionize cancer treatment with unprecedented precision.
          </p>
        </motion.div>

        {/* Live Demo Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            className="glass-effect p-8 rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Live Treatment Simulation</h3>
            
            {/* Demo Controls */}
            <div className="flex items-center space-x-4 mb-8">
              <motion.button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
                {isPlaying ? 'Pause' : 'Start'} Demo
              </motion.button>
              
              <motion.button
                onClick={() => {
                  setCurrentPhase(0);
                  setIsPlaying(false);
                }}
                className="flex items-center px-4 py-3 glass-effect text-white rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Reset
              </motion.button>
            </div>

            {/* Phase Visualization */}
            <div className="space-y-4">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.name}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    index === currentPhase
                      ? 'border-blue-400 bg-blue-500/20'
                      : index < currentPhase
                      ? 'border-green-400 bg-green-500/20'
                      : 'border-gray-600 bg-gray-800/20'
                  }`}
                  animate={{
                    scale: index === currentPhase ? 1.02 : 1,
                  }}
                >
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full mr-4 ${phase.color}`} />
                    <div>
                      <div className="font-semibold text-white">{phase.name}</div>
                      <div className="text-sm text-gray-400">{phase.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Deep Dive */}
          <motion.div
            className="glass-effect p-8 rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Core Technologies</h3>
            
            {/* Tech Selection */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {Object.entries(technologies).map(([key, tech]) => (
                <motion.button
                  key={key}
                  onClick={() => setSelectedTech(key)}
                  className={`p-4 rounded-lg text-left transition-all ${
                    selectedTech === key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <tech.icon className="w-6 h-6 mb-2" />
                  <div className="font-semibold text-sm">{tech.title}</div>
                </motion.button>
              ))}
            </div>

            {/* Selected Technology Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-bold text-white mb-4">
                  {technologies[selectedTech as keyof typeof technologies].title}
                </h4>
                <ul className="space-y-3">
                  {technologies[selectedTech as keyof typeof technologies].features.map((feature, index) => (
                    <motion.li
                      key={feature}
                      className="flex items-center text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Innovation Highlights */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-12">Why This Changes Everything</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-2xl">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-white mb-4">Precision Targeting</h4>
              <p className="text-gray-400">
                Our AI identifies and targets only cancer cells, leaving healthy tissue completely unharmed.
              </p>
            </div>
            <div className="glass-effect p-8 rounded-2xl">
              <div className="text-5xl mb-4">🧬</div>
              <h4 className="text-xl font-bold text-white mb-4">Biological Innovation</h4>
              <p className="text-gray-400">
                Engineered probiotics work with your body's natural systems for enhanced effectiveness.
              </p>
            </div>
            <div className="glass-effect p-8 rounded-2xl">
              <div className="text-5xl mb-4">📱</div>
              <h4 className="text-xl font-bold text-white mb-4">Real-Time Monitoring</h4>
              <p className="text-gray-400">
                Continuous tracking and adjustment ensure optimal treatment outcomes for each patient.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechDemo;