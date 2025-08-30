import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import TechDemo from './components/TechDemo';
import DataVisualization from './components/DataVisualization';
import AIInsights from './components/AIInsights';
import RealTimeMonitoring from './components/RealTimeMonitoring';
import BusinessModel from './components/BusinessModel';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    { id: 'hero', component: Hero },
    { id: 'tech-demo', component: TechDemo },
    { id: 'data-viz', component: DataVisualization },
    { id: 'ai-insights', component: AIInsights },
    { id: 'monitoring', component: RealTimeMonitoring },
    { id: 'business', component: BusinessModel },
    { id: 'team', component: TeamSection },
  ];

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      <AnimatePresence mode="wait">
        {sections.map(({ id, component: Component }) => (
          currentSection === id && (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Component />
            </motion.div>
          )
        ))}
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}

export default App;