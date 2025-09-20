import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, Award } from "lucide-react";

const projects = [
  {
    title: "مشروع إعادة هيكلة مالية شركة النور التجارية",
    description: "تنفيذ برنامج شامل لإعادة الهيكلة المالية لشركة تجارية كبرى في عدن، مما أدى إلى تحسين السيولة بنسبة 40%.",
    image: "/src/assets/accounting-software.jpg",
    client: "شركة النور التجارية",
    location: "عدن",
    duration: "6 أشهر",
    results: "تحسين السيولة بنسبة 40%"
  },
  {
    title: "دراسة الجدوى لمشروع مصنع للأغذية",
    description: "إعداد دراسة جدوى شاملة لمشروع استثماري في قطاع الأغذية، بما في ذلك التحليل المالي والتسويق.",
    image: "/src/assets/service-feasibility.jpg",
    client: "مجموعة الخليج للاستثمار",
    location: "صنعاء",
    duration: "3 أشهر",
    results: "الحصول على تمويل بقيمة 50 مليون ريال"
  },
  {
    title: "تدقيق حسابات شركة الخدمات اللوجستية",
    description: "إجراء تدقيق شامل للحسابات لشركة لوجستية رائدة، مما أدى إلى اكتشاف وتوفير 15% من التكاليف.",
    image: "/src/assets/service-audit.jpg",
    client: "شركة الخدمات اللوجستية اليمنية",
    location: "الرياض",
    duration: "4 أشهر",
    results: "توفير 15% من التكاليف"
  }
];

export function FeaturedProjects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section 
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">مشاريع مميزة</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نعرض أبرز المشاريع التي نفذناها بنجاح لعملائنا الكرام
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="h-full flex flex-col overflow-hidden shadow-brand-medium hover:shadow-brand-strong transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="ml-2 h-4 w-4 text-brand-primary" />
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="ml-2 h-4 w-4 text-brand-primary" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="ml-2 h-4 w-4 text-brand-primary" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <Award className="ml-2 h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-green-800">{project.results}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
