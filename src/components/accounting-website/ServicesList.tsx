
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";

interface Service {
  title: string;
  tagline: string;
  benefits: string[];
  description: string;
  image: string;
}

interface ServicesListProps {
  services: Service[];
  onServiceClick: (serviceIndex: number) => void;
  onConsultationClick: (serviceTitle: string) => void;
}

export function ServicesList({ services, onServiceClick, onConsultationClick }: ServicesListProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-16"
    >
      {/* Header Section */}
      <motion.div 
        className="relative h-72 rounded-lg overflow-hidden"
        variants={itemVariants}
      >
        <img src="/src/assets/financial-consulting.jpg" alt="Our Services" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center text-white p-4">
          <motion.h1 
            className="text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            خدماتنا المتخصصة
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            نقدم مجموعة شاملة من الخدمات المحاسبية والاستشارية التي تلبي كافة احتياجات أعمالك.
          </motion.p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="h-full flex flex-col overflow-hidden shadow-brand-medium hover:shadow-brand-strong transition-all duration-300 group">
                <div className="relative h-56 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 p-4">
                    <CardTitle className="text-2xl text-white font-bold">{service.title}</CardTitle>
                  </div>
                </div>
                <CardContent className="flex-grow flex flex-col justify-between p-6">
                  <p className="text-muted-foreground mb-6 flex-grow">{service.tagline}</p>
                  <Button 
                    className="w-full bg-brand-primary hover:bg-brand-dark text-white transition-colors duration-300"
                    onClick={() => onServiceClick(index)}
                  >
                    تفاصيل أكثر
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div className="container mx-auto px-4" variants={itemVariants}>
        <div className="relative rounded-lg overflow-hidden p-12 text-center bg-brand-light">
           <img src="/src/assets/calculator-bg.jpg" alt="Consultation" className="absolute inset-0 w-full h-full object-cover opacity-10"/>
          <div className="relative">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">هل لديك استفسار؟</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              فريقنا من الخبراء مستعد لتقديم استشارة مجانية لمناقشة احتياجاتك وتقديم الحلول المناسبة لك.
            </p>
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white transition-colors duration-300 text-lg px-8 py-6"
              onClick={() => onConsultationClick('استشارة عامة')}
            >
              <MessageCircle className="ml-3 h-6 w-6" />
              اطلب استشارتك المجانية الآن
            </Button>
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
}
