
import { motion, Variants } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone } from "lucide-react";
import heroBackground from '@/assets/hero-background.jpg';

interface HeroProps {
  onContactOpen: () => void;
  onServicesClick: () => void;
}

export function Hero({ onContactOpen, onServicesClick }: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, duration: 0.8 } },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150, duration: 0.5 } },
  };

  return (
    <motion.section 
      className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden rounded-3xl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Image & Overlay */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: "linear" }}
      >
        <img 
          src={heroBackground} 
          alt="مكتب محاسبة متخصص"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/80 to-brand-secondary/70"></div>
      </motion.div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
          variants={titleVariants}
        >
          شريكك المالي الموثوق للنمو والنجاح
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed"
          variants={textVariants}
        >
          نقدم خدمات محاسبية واستشارية شاملة بخبرة تزيد عن 15 عاماً، لمساعدتك على تحقيق أهدافك المالية بثقة وأمان.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={{ 
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, delay: 0.5 } }
          }}
        >
          <motion.div variants={buttonVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              onClick={onServicesClick}
              className="text-lg w-full sm:w-auto px-10 py-7 bg-white text-brand-primary hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
            >
              اكتشف خدماتنا
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button> 
          </motion.div>
          <motion.div variants={buttonVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              variant="outline"
              onClick={onContactOpen}
              className="text-lg w-full sm:w-auto px-10 py-7 text-brand-primary border-white hover:bg-white hover:text-brand-primary transition-all duration-300 shadow-lg transform hover:-translate-y-1"
            >
              اطلب استشارة مجانية
              <Phone className="mr-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
