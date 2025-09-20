
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';

interface Service {
  title: string;
  tagline: string;
  image: string;
}

interface ServicesOverviewProps {
  services: Service[];
  onServiceClick: (serviceIndex: number) => void;
  onViewAllClick: () => void;
}

export function ServicesOverview({ services, onServiceClick, onViewAllClick }: ServicesOverviewProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Show only first 4 services for the overview
  const servicesToShow = services.slice(0, 4);

  return (
    <motion.section 
      className="py-20 bg-brand-light"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">خدماتنا في نظرة سريعة</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نقدم حلولاً متكاملة لدعم نمو أعمالك وتحقيق أهدافك المالية بكفاءة ومهنية.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {servicesToShow.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="h-full"
            >
              <Card 
                className="h-full flex flex-col overflow-hidden shadow-brand-medium hover:shadow-brand-strong transition-all duration-300 group cursor-pointer"
                onClick={() => onServiceClick(services.findIndex(s => s.title === service.title))}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle className="text-2xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{service.tagline}</p>
                  <span className="font-semibold text-brand-primary group-hover:underline">
                    اعرف المزيد
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center mt-16" variants={itemVariants}>
          <Button 
            size="lg"
            className="bg-brand-primary hover:bg-brand-dark text-white transition-colors duration-300 text-lg px-8 py-6 group"
            onClick={onViewAllClick}
          >
            عرض كل الخدمات
            <ArrowLeft className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
