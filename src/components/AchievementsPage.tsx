
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, TrendingUp, Users, CheckCircle, Star, Target, Calendar } from "lucide-react";

const achievements = [
  {
    icon: <Award className="w-12 h-12 text-white" />,
    title: "أكثر من 100 عميل سعيد",
    description: "لقد خدمنا بفخر أكثر من 100 عميل من مختلف القطاعات.",
    image: "/src/assets/team-meeting.jpg",
  },
  {
    icon: <Briefcase className="w-12 h-12 text-white" />,
    title: "50+ مشروع مكتمل",
    description: "أكملنا بنجاح أكثر من 50 مشروعًا في مجالات متنوعة.",
    image: "/src/assets/accounting-team.jpg",
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-white" />,
    title: "نمو بنسبة 200%",
    description: "حققنا نموًا بنسبة 200% في الإيرادات خلال العامين الماضيين.",
    image: "/src/assets/financial-consulting.jpg",
  },
  {
    icon: <Users className="w-12 h-12 text-white" />,
    title: "فريق من 15+ خبراء",
    description: "يتكون فريقنا من أكثر من 15 خبيراً في مجالات المحاسبة والضرائب والاستثمار.",
    image: "/src/assets/about-office.jpg",
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-white" />,
    title: "99% رضا العملاء",
    description: "نفخر بتحقيق نسبة رضا عملاء تصل إلى 99% من إجمالي العملاء.",
    image: "/src/assets/service-audit.jpg",
  },
  {
    icon: <Star className="w-12 h-12 text-white" />,
    title: "جائزة أفضل مكتب محاسبي",
    description: "حاز مكتبنا على جائزة أفضل مكتب محاسبي في اليمن لعام 2023.",
    image: "/src/assets/service-tax.jpg",
  },
  {
    icon: <Target className="w-12 h-12 text-white" />,
    title: "15 عاماً من الخبرة",
    description: "积累了 15 عاماً من الخبرة في تقديم خدمات المحاسبة والاستشارات المالية.",
    image: "/src/assets/service-feasibility.jpg",
  },
  {
    icon: <Calendar className="w-12 h-12 text-white" />,
    title: "500+ يوم دعم فني",
    description: "قمنا بتقديم أكثر من 5000 يوم دعم فني واستشارات للعملاء.",
    image: "/src/assets/service-systems.jpg",
  }
];

const milestones = [
  { year: "2008", event: "تأسيس المكتب في عدن" },
  { year: "2010", event: "الحصول على الترخيص المهني" },
  { year: "2012", event: "توسيع الفريق ليشمل 5 محاسبين" },
  { year: "2015", event: "افتتاح فرع في صنعاء" },
  { year: "2018", event: "الحصول على شهادة الجودة ISO 9001" },
  { year: "2020", event: "التوسع ليشمل 12 خبيراً في الفريق" },
  { year: "2022", event: "تقديم خدمات لـ 75 عميلًا" },
  { year: "2023", event: "الفوز بجائزة أفضل مكتب محاسبي" }
];

const clientSuccessStories = [
  {
    title: "شركة النور التجارية",
    description: "ساعدنا في إعادة هيكلة حساباتهم المالية مما أدى إلى تحسين السيولة بنسبة 40%.",
    result: "تحسين السيولة بنسبة 40%",
    image: "/src/assets/accounting-software.jpg"
  },
  {
    title: "مجموعة الخليج للاستثمار",
    description: "قمنا بإعداد دراسة جدوى شاملة لمشروعهم الجديد في قطاع الأغذية.",
    result: "الحصول على تمويل بقيمة 50 مليون ريال",
    image: "/src/assets/financial-consulting.jpg"
  },
  {
    title: "شركة الخدمات اللوجستية اليمنية",
    description: "أجرينا تدقيقاً شاملاً للحسابات مما أدى إلى اكتشاف توفيرات بنسبة 15%.",
    result: "توفير 15% من التكاليف",
    image: "/src/assets/service-audit.jpg"
  }
];

const AchievementsPage = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-brand-dark mb-4"
        >
          إنجازاتنا
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          نفخر بما حققناه من نجاحات ونسعى دائمًا لتقديم الأفضل لعملائنا.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <Card className="shadow-brand-medium hover:shadow-brand-strong transition-shadow duration-300 overflow-hidden group">
              <CardHeader className="relative p-0">
                <img src={achievement.image} alt={achievement.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="bg-brand-primary/80 p-4 rounded-full">
                    {achievement.icon}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-center pt-6">
                <CardTitle className="text-xl font-bold text-brand-dark mb-2">{achievement.title}</CardTitle>
                <p className="text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Client Success Stories */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-brand-dark mb-4"
          >
            قصص نجاح عملائنا
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            نعرض أبرز النجاحات التي حققناها لعملائنا الكرام
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientSuccessStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="h-full flex flex-col overflow-hidden shadow-brand-medium hover:shadow-brand-strong transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="flex-grow flex flex-col p-6">
                  <h3 className="text-2xl font-bold text-brand-dark mb-3">{story.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{story.description}</p>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <Star className="ml-2 h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-green-800">{story.result}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Milestones Timeline */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-brand-dark mb-4"
          >
            محطات رحلتنا
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            نظرة على أهم المحطات في رحلة نمونا وتطورنا
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute right-1/2 transform translate-x-1/2 h-full w-1 bg-brand-primary hidden md:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} space-x-4 space-x-reverse`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <Card className="shadow-brand-medium hover:shadow-brand-strong transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-brand-dark mb-2">{milestone.event}</h3>
                      <p className="text-muted-foreground">{milestone.year}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative z-10 hidden md:block">
                  <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:hidden">
                  <Card className="shadow-brand-medium hover:shadow-brand-strong transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-brand-dark mb-2">{milestone.event}</h3>
                      <p className="text-muted-foreground">{milestone.year}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
