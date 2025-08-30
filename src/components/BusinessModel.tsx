import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Globe, Users, Briefcase, Award } from 'lucide-react';

const BusinessModel: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState('market');

  const marketData = {
    market: {
      title: 'Total Addressable Market',
      value: '$240B',
      growth: '+12.4% CAGR',
      description: 'Global cancer therapeutics market by 2030',
      breakdown: [
        { segment: 'Targeted Therapy', value: '$89B', percentage: 37 },
        { segment: 'Immunotherapy', value: '$72B', percentage: 30 },
        { segment: 'Precision Medicine', value: '$48B', percentage: 20 },
        { segment: 'Digital Health', value: '$31B', percentage: 13 },
      ]
    },
    revenue: {
      title: 'Revenue Projections',
      value: '$2.8B',
      growth: '+340% by 2028',
      description: 'Projected annual revenue at scale',
      breakdown: [
        { segment: 'Treatment Licenses', value: '$1.2B', percentage: 43 },
        { segment: 'AI Platform SaaS', value: '$0.8B', percentage: 29 },
        { segment: 'Monitoring Services', value: '$0.5B', percentage: 18 },
        { segment: 'Research Partnerships', value: '$0.3B', percentage: 10 },
      ]
    },
    impact: {
      title: 'Lives Impacted',
      value: '2.5M',
      growth: '+500K annually',
      description: 'Patients treated by 2030',
      breakdown: [
        { segment: 'Breast Cancer', value: '850K', percentage: 34 },
        { segment: 'Lung Cancer', value: '625K', percentage: 25 },
        { segment: 'Colorectal', value: '500K', percentage: 20 },
        { segment: 'Other Types', value: '525K', percentage: 21 },
      ]
    }
  };

  const competitiveAdvantages = [
    {
      icon: Award,
      title: 'First-Mover Advantage',
      description: '12+ patents filed, 3+ years ahead of competition',
      impact: 'Market leadership position'
    },
    {
      icon: TrendingUp,
      title: 'Superior Efficacy',
      description: '94.7% success rate vs 61% traditional therapy',
      impact: '55% improvement in outcomes'
    },
    {
      icon: DollarSign,
      title: 'Cost Effectiveness',
      description: '78% reduction in treatment costs',
      impact: '$180K savings per patient'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Platform ready for worldwide deployment',
      impact: '25 countries in pipeline'
    }
  ];

  const partnerships = [
    { name: 'Mayo Clinic', type: 'Clinical Partner', logo: '🏥' },
    { name: 'Pfizer', type: 'Pharma Alliance', logo: '💊' },
    { name: 'Google Health', type: 'AI Partnership', logo: '🤖' },
    { name: 'FDA', type: 'Regulatory', logo: '✅' },
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
            Business <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Model</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming cancer treatment into a scalable, profitable, and globally impactful business 
            that saves lives while generating sustainable returns.
          </p>
        </motion.div>

        {/* Market Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {Object.entries(marketData).map(([key, data]) => (
            <motion.div
              key={key}
              className={`glass-effect p-8 rounded-2xl cursor-pointer transition-all ${
                selectedMetric === key ? 'ring-2 ring-green-400' : ''
              }`}
              onClick={() => setSelectedMetric(key)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * Object.keys(marketData).indexOf(key) }}
            >
              <h3 className="text-lg font-semibold text-white mb-2">{data.title}</h3>
              <div className="text-4xl font-bold text-green-400 mb-2">{data.value}</div>
              <div className="text-sm text-blue-400 mb-4">{data.growth}</div>
              <p className="text-gray-400 text-sm">{data.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Breakdown */}
        <motion.div
          className="glass-effect p-8 rounded-2xl mb-16"
          key={selectedMetric}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            {marketData[selectedMetric as keyof typeof marketData].title} Breakdown
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {marketData[selectedMetric as keyof typeof marketData].breakdown.map((item, index) => (
                <motion.div
                  key={item.segment}
                  className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-gray-300">{item.segment}</span>
                  <div className="text-right">
                    <div className="text-white font-bold">{item.value}</div>
                    <div className="text-sm text-gray-400">{item.percentage}%</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64">
                {marketData[selectedMetric as keyof typeof marketData].breakdown.map((item, index) => {
                  const angle = (item.percentage / 100) * 360;
                  const rotation = marketData[selectedMetric as keyof typeof marketData].breakdown
                    .slice(0, index)
                    .reduce((acc, curr) => acc + (curr.percentage / 100) * 360, 0);
                  
                  return (
                    <motion.div
                      key={item.segment}
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(from ${rotation}deg, #3b82f6 0deg, #3b82f6 ${angle}deg, transparent ${angle}deg)`,
                      }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                    />
                  );
                })}
                <div className="absolute inset-8 bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      {marketData[selectedMetric as keyof typeof marketData].value}
                    </div>
                    <div className="text-sm text-gray-400">Total</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Competitive Advantages */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Competitive Advantages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                className="glass-effect p-6 rounded-xl text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <advantage.icon className="w-10 h-10 text-green-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-3">{advantage.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{advantage.description}</p>
                <div className="text-sm font-semibold text-green-400">{advantage.impact}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strategic Partnerships */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-3xl font-bold text-white mb-12">Strategic Partnerships</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="glass-effect p-6 rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h4 className="font-bold text-white mb-2">{partner.name}</h4>
                <p className="text-sm text-gray-400">{partner.type}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessModel;