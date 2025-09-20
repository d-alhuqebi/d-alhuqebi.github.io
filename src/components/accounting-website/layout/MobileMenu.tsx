
import { motion, AnimatePresence } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface MobileMenuProps {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (tabId: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ tabs, activeTab, onTabClick, isOpen, onClose }: MobileMenuProps) {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { x: '100%' },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />
          <motion.div 
            className="fixed top-0 right-0 h-full w-72 bg-white z-50 md:hidden shadow-lg"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="p-6 pt-20">
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => onTabClick(tab.id)}
                  className={`w-full flex items-center px-4 py-3 my-2 text-lg rounded-lg transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-brand-primary text-white' 
                      : 'text-brand-dark hover:bg-gray-100'
                  }`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <tab.icon className="ml-3 h-5 w-5" />
                  <span className="font-medium">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
