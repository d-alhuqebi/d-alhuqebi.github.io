
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Eye, Goal, Star, CheckCircle, TrendingUp, Clock, Heart, Target } from "lucide-react";

const testimonials = [
  {
    name: "أحمد محمد",
    title: "مدير عام شركة الأمل التجارية",
    quote: "خدمة متميزة ومهنية عالية، ساعدونا كثيراً في تنظيم حساباتنا المالية.",
    avatar: "/src/assets/placeholder.svg"
  },
  {
    name: "فاطمة علي",
    title: "المدير المالي بشركة النور",
    quote: "استشاراتهم الضريبية وفرت علينا الكثير من التعقيدات والمشاكل.",
    avatar: "/src/assets/placeholder.svg"
  },
  {
    name: "محمد سالم",
    title: "رئيس مجلس إدارة مجموعة الخليج",
    quote: "دراسة الجدوى التي أعدوها لنا كانت دقيقة جداً وساعدتنا على النجاح.",
    avatar: "/src/assets/placeholder.svg"
  },
];

const values = [
  {
    icon: <CheckCircle className="h-10 w-10 text-brand-primary" />,
    title: "الجودة",
    description: "التزامنا بتقديم أعلى معايير الجودة في جميع خدماتنا"
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-brand-primary" />,
    title: "التميز",
    description: "نسعى دائماً لتحقيق التميز في كل ما نقوم به"
  },
  {
    icon: <Clock className="h-10 w-10 text-brand-primary" />,
    title: "الدقة",
    description: "الدقة في التفاصيل واحترافية في التعامل مع العملاء"
  },
  {
    icon: <Heart className="h-10 w-10 text-brand-primary" />,
    title: "النزاهة",
    description: "الشفافية والنزاهة في جميع تعاملاتنا المهنية"
  }
];

const history = [
  { year: "2008", event: "تأسيس مكتب عبدالرقيب عبدالله عبده سعد للمحاسبة" },
  { year: "2010", event: "الحصول على ترخيص من وزارة التجارة والصناعة" },
  { year: "2012", event: "توسيع الفريق ليشمل 5 محاسبين معتمدين" },
  { year: "2015", event: "الانضمام إلى نقابة المحاسبين اليمنيين" },
  { year: "2018", event: "افتتاح فرع جديد في صنعاء" },
  { year: "2020", event: "الحصول على شهادة الجودة ISO 9001" },
  { year: "2023", event: "التوسع ليشمل أكثر من 15 عضواً في الفريق" }
];

const stats = [
  { value: "15+", label: "سنوات من الخبرة" },
  { value: "100+", label: "عميل راضٍ" },
  { value: "50+", label: "مشروع مكتمل" },
  { value: "15+", label: "عضو في الفريق" }
];

export function AboutPage() {
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
    <motion.div 
      className="space-y-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.div 
        className="relative h-72 rounded-lg overflow-hidden"
        variants={itemVariants}
      >
        <img src="/src/assets/about-office.jpg" alt="About our office" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-center text-center text-white p-4">
          <motion.h1 
            className="text-5xl font-bold mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            عن مكتبنا
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            رواد المحاسبة والاستشارات المالية في اليمن، نجمع بين الخبرة والابتكار لتحقيق أهدافكم.
          </motion.p>
        </div>
      </motion.div>

      {/* Who We Are Section */}
      <motion.div className="container mx-auto px-4" variants={itemVariants}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-brand-dark mb-4">من نحن؟</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                مكتب عبدالرقيب عبدالله عبده سعد للمحاسبة والاستشارات المالية هو مكتب معتمد ومرخص 
                برقم 2189 يقدم خدمات محاسبية واستشارية متميزة للشركات والمؤسسات في اليمن.
              </p>
              <p>
                نحن نفخر بخبرتنا الواسعة في مجال المحاسبة والمراجعة والاستشارات المالية، حيث نقدم 
                حلولاً مبتكرة ومهنية تلبي احتياجات عملائنا وتساعدهم على تحقيق أهدافهم التجارية.
              </p>
              <p>
                التزامنا بالجودة والمصداقية جعلنا الخيار الأول للعديد من الشركات الرائدة، ونسعى 
                دائماً لتطوير خدماتنا وفقاً لأحدث المعايير المحاسبية الدولية.
              </p>
            </div>
          </div>
          <motion.div 
            className="relative h-80 w-full rounded-lg overflow-hidden shadow-brand-strong"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <img src="/src/assets/accounting-team.jpg" alt="Our Team" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-brand-primary/30"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* Vision & Mission Section */}
      <motion.div className="container mx-auto px-4" variants={itemVariants}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="text-center h-full shadow-brand-medium hover:shadow-brand-strong transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-brand-light p-4 rounded-full w-fit mb-4">
                  <Eye className="h-10 w-10 text-brand-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-brand-dark">رؤيتنا</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  أن نكون المكتب المحاسبي الرائد والموثوق به في اليمن، ونساهم بفعالية في نمو وازدهار اقتصاد عملائنا.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="text-center h-full shadow-brand-medium hover:shadow-brand-strong transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-brand-light p-4 rounded-full w-fit mb-4">
                  <Goal className="h-10 w-10 text-brand-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-brand-dark">رسالتنا</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  تقديم خدمات محاسبية واستشارية عالية الجودة تتجاوز توقعات العملاء، من خلال فريق عمل محترف وتقنيات متطورة.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div className="container mx-auto px-4" variants={itemVariants}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">شهادات نعتز بها</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">آراء عملائنا هي وسام فخر لنا ودافع لتقديم الأفضل دائمًا.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col justify-between shadow-brand-medium hover:shadow-brand-strong transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full ml-4 border-2 border-brand-primary"/>
                    <div>
                      <p className="font-bold text-brand-dark text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
                <div className="p-4 bg-brand-light flex justify-center items-center space-x-1 space-x-reverse">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Our Values Section */}
      <motion.div className="container mx-auto px-4" variants={itemVariants}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">قيمنا الأساسية</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            القيم التي نؤمن بها ونتخذها أساساً في جميع أعمالنا وتعاملاتنا
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full text-center shadow-brand-medium hover:shadow-brand-strong transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto bg-brand-light p-4 rounded-full w-fit mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-brand-dark">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div className="container mx-auto px-4" variants={itemVariants}>
        <div className="bg-gradient-brand rounded-2xl p-8 shadow-brand-strong">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg md:text-xl opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* History Timeline */}
      <motion.div className="container mx-auto px-4" variants={itemVariants}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">رحلتنا عبر الزمن</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نظرة على أهم المحطات في رحلة نمونا وتطورنا
          </p>
        </div>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute right-1/2 transform translate-x-1/2 h-full w-1 bg-brand-primary"></div>
          
          <div className="space-y-12">
            {history.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} space-x-4 space-x-reverse`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <Card className="shadow-brand-medium hover:shadow-brand-strong transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-brand-dark mb-2">{item.event}</h3>
                      <p className="text-muted-foreground">{item.year}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative z-10">
                  <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold">
                    {item.year.slice(-2)}
                  </div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div className="container mx-auto px-4" variants={itemVariants}>
        <div className="bg-brand-light rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-brand-dark mb-6">لماذا تختارنا؟</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="mt-1 bg-brand-primary text-white p-2 rounded-full">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">خبرة متراكمة</h3>
                    <p className="text-muted-foreground">
                      أكثر من 15 عاماً من الخبرة في مجال المحاسبة والاستشارات المالية
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="mt-1 bg-brand-primary text-white p-2 rounded-full">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">فريق عمل متخصص</h3>
                    <p className="text-muted-foreground">
                      فريق من المحاسبين المعتمدين والخبراء المتخصصين في مختلف المجالات
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="mt-1 bg-brand-primary text-white p-2 rounded-full">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">حلول مخصصة</h3>
                    <p className="text-muted-foreground">
                      حلول مخصصة تتناسب مع احتياجات كل عميل وطبيعة عمله
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="mt-1 bg-brand-primary text-white p-2 rounded-full">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">نتائج ملموسة</h3>
                    <p className="text-muted-foreground">
                      تحقيق نتائج ملموسة وملموس للعملاء في تحسين أدائهم المالي
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-brand-strong">
              <img 
                src="/src/assets/team-meeting.jpg" 
                alt="لماذا تختارنا" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">التميز في الخدمة</h3>
                  <p>نسعى دائماً لتقديم الأفضل لعملائنا الكرام</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
}
