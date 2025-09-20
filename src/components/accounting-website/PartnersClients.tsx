import { motion } from 'framer-motion';

const partners = [
  { name: "مجموعة الخليج للاستثمار", logo: "/src/assets/placeholder.svg" },
  { name: "شركة النور التجارية", logo: "/src/assets/placeholder.svg" },
  { name: "مصنع الأغذية الحديثة", logo: "/src/assets/placeholder.svg" },
  { name: "شركة الخدمات اللوجستية اليمنية", logo: "/src/assets/placeholder.svg" },
  { name: "مكتب محاماة عبدالله وشركاه", logo: "/src/assets/placeholder.svg" },
  { name: "شركة الأمل التجارية", logo: "/src/assets/placeholder.svg" }
];

export function PartnersClients() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section 
      className="py-16 bg-brand-light"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">شركاؤنا وعملاؤنا</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نفخر بالشراكات التي نبنيها مع الشركات والمؤسسات الرائدة
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-brand-medium hover:shadow-brand-strong transition-all duration-300"
            >
              <div className="text-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                <p className="text-brand-dark font-medium text-center">{partner.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
