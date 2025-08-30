import React from 'react';
import { motion } from 'framer-motion';
import { Dna, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, setCurrentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'hero', label: 'Overview', icon: '🏠' },
    { id: 'tech-demo', label: 'Technology', icon: '🔬' },
    { id: 'data-viz', label: 'Clinical Data', icon: '📊' },
    { id: 'ai-insights', label: 'AI Engine', icon: '🤖' },
    { id: 'monitoring', label: 'Monitoring', icon: '📡' },
    { id: 'business', label: 'Market', icon: '💼' },
    { id: 'team', label: 'Team', icon: '👥' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 glass-effect"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <Dna className="w-8 h-8 text-blue-400" />
            <div>
              <h1 className="text-xl font-bold text-white">TumorTarget AI</h1>
              <p className="text-xs text-gray-300">Next-Gen Cancer Therapy</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setCurrentSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentSection === item.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="lg:hidden pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      setCurrentSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`p-3 rounded-lg text-sm font-medium transition-all ${
                      currentSection === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="block text-lg mb-1">{item.icon}</span>
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;