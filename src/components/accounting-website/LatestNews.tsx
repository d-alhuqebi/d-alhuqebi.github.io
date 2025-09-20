import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";

const newsItems = [
  {
    title: "مكتب سعد يشارك في المؤتمر السنوي للمحاسبين في عدن",
    excerpt: "شارك مكتب عبدالرقيب عبدالله عبده سعد في المؤتمر السنوي للمحاسبين الذي أقيم في عدن، حيث قدمت ورقة بحثية حول التحديات الحديثة في المحاسبة.",
    date: "15 رمضان 1445",
    author: "فريق التحرير",
    image: "/src/assets/team-meeting.jpg",
    readTime: "3 دقائق قراءة"
  },
  {
    title: "أهمية التخطيط الضريبي في ظل التغيرات الاقتصادية",
    excerpt: "في مقال تحليلي، يناقش خبراء مكتب سعد أهمية التخطيط الضريبي الاستباقي لمساعدة الشركات على التكيف مع التغيرات الاقتصادية الحديثة.",
    date: "8 رمضان 1445",
    author: "أحمد محمد علي",
    image: "/src/assets/service-tax.jpg",
    readTime: "5 دقائق قراءة"
  },
  {
    title: "مكتب سعد يطلق برنامج تدريب مبكر للمحاسبين الجدد",
    excerpt: "أعلن مكتب سعد عن إطلاق برنامج تدريب مبكر للمحاسبين الجدد بهدف سد الفجوة بين التعليم الأكاديمي والتطبيقات العملية في المجال المحاسبي.",
    date: "1 رمضان 1445",
    author: "فريق التحرير",
    image: "/src/assets/accounting-team.jpg",
    readTime: "4 دقائق قراءة"
  }
];

export function LatestNews() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">أحدث الأخبار والمقالات</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            تابع أحدث المستجدات والآراء التحليلية من خبراء مكتبنا
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((news, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="h-full flex flex-col overflow-hidden shadow-brand-medium hover:shadow-brand-strong transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-brand-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                    {news.readTime}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors duration-300 line-clamp-2">
                    {news.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">{news.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="ml-2 h-4 w-4 text-brand-primary" />
                    <span>{news.date}</span>
                    <User className="mr-3 ml-4 h-4 w-4 text-brand-primary" />
                    <span>{news.author}</span>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-brand-primary hover:text-white transition-colors"
                  >
                    اقرأ المزيد
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center" variants={itemVariants}>
          <Button 
            size="lg"
            className="bg-brand-primary hover:bg-brand-dark text-white transition-colors duration-300 text-lg px-8 py-6 group"
          >
            عرض جميع المقالات
            <ArrowLeft className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
