import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Zap, Target, Shield, Activity } from 'lucide-react';

const AIInsights: React.FC = () => {
  const [activeModel, setActiveModel] = useState('detection');
  const [processingData, setProcessingData] = useState(false);
  const [confidence, setConfidence] = useState(0);

  const aiModels = {
    detection: {
      title: 'Tumor Detection AI',
      icon: Target,
      accuracy: '99.2%',
      description: 'Deep learning model trained on 2.3M medical images',
      features: [
        'Multi-modal imaging analysis',
        'Real-time biomarker detection',
        'Early-stage tumor identification',
        'False positive rate: 0.3%'
      ]
    },
    targeting: {
      title: 'Precision Targeting',
      icon: Zap,
      accuracy: '97.8%',
      description: 'Reinforcement learning for optimal probiotic deployment',
      features: [
        'Dynamic route optimization',
        'Tissue-specific targeting',
        'Minimal collateral damage',
        'Adaptive dosing algorithms'
      ]
    },
    monitoring: {
      title: 'Treatment Monitoring',
      icon: Activity,
      accuracy: '98.5%',
      description: 'Continuous learning from patient responses',
      features: [
        'Real-time efficacy tracking',
        'Predictive outcome modeling',
        'Personalized adjustments',
        'Safety alert systems'
      ]
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setConfidence(Math.random() * 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleRunAnalysis = () => {
    setProcessingData(true);
    setTimeout(() => setProcessingData(false), 3000);
  };

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Intelligence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proprietary AI engine combines computer vision, natural language processing, 
            and reinforcement learning to deliver personalized cancer treatment.
          </p>
        </motion.div>

        {/* AI Model Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {Object.entries(aiModels).map(([key, model]) => (
            <motion.div
              key={key}
              className={`glass-effect p-6 rounded-2xl cursor-pointer transition-all ${
                activeModel === key ? 'ring-2 ring-blue-400' : ''
              }`}
              onClick={() => setActiveModel(key)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * Object.keys(aiModels).indexOf(key) }}
            >
              <model.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{model.title}</h3>
              <div className="text-2xl font-bold text-green-400 mb-2">{model.accuracy}</div>
              <p className="text-gray-400 text-sm">{model.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Active Model Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            className="glass-effect p-8 rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            key={activeModel}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {aiModels[activeModel as keyof typeof aiModels].title} Details
            </h3>
            
            <ul className="space-y-4 mb-8">
              {aiModels[activeModel as keyof typeof aiModels].features.map((feature, index) => (
                <motion.li
                  key={feature}
                  className="flex items-center text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-4" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <motion.button
              onClick={handleRunAnalysis}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={processingData}
            >
              {processingData ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                  Processing...
                </div>
              ) : (
                'Run Live Analysis'
              )}
            </motion.button>
          </motion.div>

          {/* Real-time AI Dashboard */}
          <motion.div
            className="glass-effect p-8 rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Live AI Dashboard</h3>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Model Confidence</span>
                <span className="text-2xl font-bold text-green-400">{confidence.toFixed(1)}%</span>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  className="h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${confidence}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="text-sm text-gray-400">Processing Speed</div>
                  <div className="text-xl font-bold text-white">2.3ms</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="text-sm text-gray-400">Active Models</div>
                  <div className="text-xl font-bold text-white">12</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="text-sm text-gray-400">Data Points</div>
                  <div className="text-xl font-bold text-white">847K</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="text-sm text-gray-400">Accuracy</div>
                  <div className="text-xl font-bold text-green-400">99.2%</div>
                </div>
              </div>

              {processingData && (
                <motion.div
                  className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="flex items-center mb-2">
                    <Brain className="w-5 h-5 text-blue-400 mr-2" />
                    <span className="text-white font-semibold">AI Analysis in Progress</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    Processing patient biomarkers and optimizing treatment protocol...
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Data Visualization Section */}
        <motion.div
          className="glass-effect p-8 rounded-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-wrap gap-4 mb-8">
            {Object.entries(datasets).map(([key, dataset]) => (
              <motion.button
                key={key}
                onClick={() => setSelectedDataset(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedDataset === key
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {dataset.title}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={selectedDataset}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {datasets[selectedDataset as keyof typeof datasets].component}
          </motion.div>
        </motion.div>

        {/* AI Innovation Highlights */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-3xl font-bold text-white mb-12">AI Innovation Breakthroughs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🧠', title: 'Neural Networks', desc: 'Custom architectures for medical imaging' },
              { icon: '🔍', title: 'Computer Vision', desc: 'Sub-cellular level tumor detection' },
              { icon: '📊', title: 'Predictive Analytics', desc: 'Treatment outcome forecasting' },
              { icon: '🎯', title: 'Precision Medicine', desc: 'Personalized therapy optimization' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-effect p-6 rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIInsights;