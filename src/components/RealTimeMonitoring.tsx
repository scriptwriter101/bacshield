import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Wifi, Smartphone, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const RealTimeMonitoring: React.FC = () => {
  const [patientData, setPatientData] = useState({
    heartRate: 72,
    temperature: 98.6,
    tumorSize: 2.3,
    probioticCount: 1250000,
    immuneResponse: 85,
  });

  const [alerts, setAlerts] = useState([
    { id: 1, type: 'success', message: 'Probiotic deployment successful', time: '2 min ago' },
    { id: 2, type: 'info', message: 'Tumor markers decreasing', time: '5 min ago' },
    { id: 3, type: 'warning', message: 'Slight temperature elevation detected', time: '12 min ago' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPatientData(prev => ({
        heartRate: prev.heartRate + (Math.random() - 0.5) * 4,
        temperature: prev.temperature + (Math.random() - 0.5) * 0.2,
        tumorSize: Math.max(0.1, prev.tumorSize - Math.random() * 0.05),
        probioticCount: prev.probioticCount + Math.random() * 50000 - 25000,
        immuneResponse: Math.min(100, prev.immuneResponse + Math.random() * 2),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const monitoringFeatures = [
    {
      icon: Smartphone,
      title: 'Mobile App Integration',
      description: 'Real-time patient monitoring through our companion app',
      features: ['Push notifications', 'Symptom tracking', 'Medication reminders', 'Doctor communication']
    },
    {
      icon: Wifi,
      title: 'IoT Sensor Network',
      description: 'Continuous data collection from wearable devices',
      features: ['Heart rate monitoring', 'Temperature tracking', 'Activity levels', 'Sleep patterns']
    },
    {
      icon: Activity,
      title: 'Biomarker Analysis',
      description: 'Advanced blood chemistry monitoring',
      features: ['Tumor markers', 'Immune response', 'Probiotic levels', 'Side effect detection']
    }
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
            Real-Time <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Monitoring</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuous patient monitoring with AI-powered insights ensures optimal treatment 
            outcomes and immediate response to any changes.
          </p>
        </motion.div>

        {/* Live Patient Dashboard */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Vital Signs */}
          <motion.div
            className="lg:col-span-2 glass-effect p-8 rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Patient Vitals - Live Feed</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300">Heart Rate</span>
                  <Activity className="w-5 h-5 text-red-400" />
                </div>
                <div className="text-3xl font-bold text-white">{patientData.heartRate.toFixed(0)} BPM</div>
                <div className="text-sm text-green-400">Normal range</div>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300">Body Temperature</span>
                  <div className="w-5 h-5 bg-orange-400 rounded-full" />
                </div>
                <div className="text-3xl font-bold text-white">{patientData.temperature.toFixed(1)}°F</div>
                <div className="text-sm text-green-400">Stable</div>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300">Tumor Size</span>
                  <Target className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white">{patientData.tumorSize.toFixed(1)} cm</div>
                <div className="text-sm text-green-400">↓ Decreasing</div>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300">Probiotic Count</span>
                  <div className="w-5 h-5 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div className="text-3xl font-bold text-white">{(patientData.probioticCount / 1000000).toFixed(1)}M</div>
                <div className="text-sm text-green-400">Active</div>
              </div>
            </div>

            {/* Treatment Progress */}
            <div className="bg-gray-800/30 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-4">Treatment Progress</h4>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300">Immune Response</span>
                <span className="text-white font-bold">{patientData.immuneResponse.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  className="h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${patientData.immuneResponse}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Alerts & Notifications */}
          <motion.div
            className="glass-effect p-8 rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">System Alerts</h3>
            
            <div className="space-y-4">
              {alerts.map((alert) => (
                <motion.div
                  key={alert.id}
                  className={`p-4 rounded-lg border-l-4 ${
                    alert.type === 'success' ? 'border-green-400 bg-green-900/20' :
                    alert.type === 'warning' ? 'border-yellow-400 bg-yellow-900/20' :
                    'border-blue-400 bg-blue-900/20'
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * alert.id }}
                >
                  <div className="flex items-start">
                    {alert.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                    ) : alert.type === 'warning' ? (
                      <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5" />
                    ) : (
                      <Clock className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                    )}
                    <div>
                      <div className="text-white text-sm">{alert.message}</div>
                      <div className="text-gray-400 text-xs">{alert.time}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="w-full mt-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Full Report
            </motion.button>
          </motion.div>
        </div>

        {/* Monitoring Features */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {monitoringFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass-effect p-8 rounded-2xl text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
              <p className="text-gray-400 mb-6">{feature.description}</p>
              
              <ul className="space-y-2">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-300 flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RealTimeMonitoring;