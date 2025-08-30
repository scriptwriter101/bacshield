import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';

const DataVisualization: React.FC = () => {
  const [selectedDataset, setSelectedDataset] = useState('efficacy');

  const efficacyData = [
    { month: 'Month 1', traditional: 45, tumorTarget: 78 },
    { month: 'Month 3', traditional: 52, tumorTarget: 85 },
    { month: 'Month 6', traditional: 58, tumorTarget: 91 },
    { month: 'Month 12', traditional: 61, tumorTarget: 94.7 },
  ];

  const cancerTypeData = [
    { type: 'Breast Cancer', efficacy: 96.2, patients: 1250 },
    { type: 'Lung Cancer', efficacy: 93.8, patients: 980 },
    { type: 'Colorectal', efficacy: 95.1, patients: 750 },
    { type: 'Prostate', efficacy: 97.3, patients: 650 },
    { type: 'Pancreatic', efficacy: 89.4, patients: 420 },
  ];

  const sideEffectsData = [
    { name: 'None', value: 78, color: '#10b981' },
    { name: 'Mild', value: 18, color: '#f59e0b' },
    { name: 'Moderate', value: 3, color: '#f97316' },
    { name: 'Severe', value: 1, color: '#ef4444' },
  ];

  const datasets = {
    efficacy: {
      title: 'Treatment Efficacy Over Time',
      component: (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={efficacyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1f2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#fff'
              }} 
            />
            <Line 
              type="monotone" 
              dataKey="traditional" 
              stroke="#ef4444" 
              strokeWidth={3}
              name="Traditional Therapy"
            />
            <Line 
              type="monotone" 
              dataKey="tumorTarget" 
              stroke="#10b981" 
              strokeWidth={3}
              name="TumorTarget AI"
            />
          </LineChart>
        </ResponsiveContainer>
      )
    },
    cancerTypes: {
      title: 'Efficacy by Cancer Type',
      component: (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={cancerTypeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="type" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1f2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#fff'
              }} 
            />
            <Bar dataKey="efficacy" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      )
    },
    safety: {
      title: 'Safety Profile - Side Effects',
      component: (
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={sideEffectsData}
              cx="50%"
              cy="50%"
              outerRadius={120}
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}%`}
            >
              {sideEffectsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      )
    }
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
            Clinical <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Evidence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive clinical trial results demonstrating superior efficacy, 
            safety, and patient outcomes across multiple cancer types.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: TrendingUp, label: 'Success Rate', value: '94.7%', change: '+23.4%' },
            { icon: Users, label: 'Patients Treated', value: '4,050', change: '+156%' },
            { icon: Clock, label: 'Treatment Time', value: '2.3 days', change: '-78%' },
            { icon: Award, label: 'Remission Rate', value: '91.2%', change: '+34%' },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              className="glass-effect p-6 rounded-xl text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <metric.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-sm text-gray-400 mb-2">{metric.label}</div>
              <div className="text-xs text-green-400 font-semibold">{metric.change} vs traditional</div>
            </motion.div>
          ))}
        </div>

        {/* Data Visualization */}
        <div className="glass-effect p-8 rounded-2xl mb-16">
          <div className="flex flex-wrap gap-4 mb-8">
            {Object.entries(datasets).map(([key, dataset]) => (
              <motion.button
                key={key}
                onClick={() => setSelectedDataset(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedDataset === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {dataset.title}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={selectedDataset}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {datasets[selectedDataset as keyof typeof datasets].component}
          </motion.div>
        </div>

        {/* Clinical Trial Highlights */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="glass-effect p-8 rounded-2xl text-center">
            <div className="text-4xl mb-4">🏥</div>
            <h4 className="text-xl font-bold text-white mb-4">Phase III Trials</h4>
            <p className="text-gray-400 mb-4">
              Completed across 15 leading cancer centers worldwide with unprecedented results.
            </p>
            <div className="text-2xl font-bold text-green-400">FDA Fast Track</div>
          </div>
          
          <div className="glass-effect p-8 rounded-2xl text-center">
            <div className="text-4xl mb-4">🔬</div>
            <h4 className="text-xl font-bold text-white mb-4">Peer Review</h4>
            <p className="text-gray-400 mb-4">
              Published in Nature Medicine, Science Translational Medicine, and The Lancet.
            </p>
            <div className="text-2xl font-bold text-blue-400">Impact Factor: 87.2</div>
          </div>
          
          <div className="glass-effect p-8 rounded-2xl text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h4 className="text-xl font-bold text-white mb-4">Global Impact</h4>
            <p className="text-gray-400 mb-4">
              Regulatory approval in 12 countries, with 25 more in review process.
            </p>
            <div className="text-2xl font-bold text-purple-400">50K+ Lives Saved</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DataVisualization;