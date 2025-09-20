
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail, Phone } from "lucide-react";

const teamMembers = [
  {
    name: "عبدالرقيب عبدالله عبده سعد",
    title: "محاسب قانوني معتمد - المؤسس والمدير العام",
    bio: "محاسب قانوني معتمد بخبرة تزيد عن 15 عام في مجال المحاسبة والمراجعة والاستشارات المالية. متخصص في إعداد القوائم المالية وتدقيق الحسابات وفقاً للمعايير المحاسبية الدولية.",
    image: "/src/assets/accounting-team.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "saad@accounting.com",
      phone: "+967 777 721 2776"
    },
    expertise: ["تدقيق حسابات", "الاستشارات المالية", "الامتثال الضريبي"]
  },
  {
    name: "أحمد محمد علي",
    title: "مدير الاستشارات المالية",
    bio: "خبير في الاستشارات المالية والضريبية مع خبرة 10 سنوات. متخصص في التخطيط المالي الاستراتيجي ودراسات الجدوى الاقتصادية للمشاريع الاستثمارية.",
    image: "/src/assets/financial-consulting.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "ahmed@accounting.com",
      phone: "+967 783 150 102"
    },
    expertise: ["التخطيط المالي", "الدراسات الاقتصادية", "الاستثمار"]
 },
  {
    name: "فاطمة سالم أحمد",
    title: "مديرة قسم المراجعة والتدقيق",
    bio: "محاسبة معتمدة متخصصة في مراجعة وتدقيق القوائم المالية. خبرة 8 سنوات في تقييم أنظمة الرقابة الداخلية وضمان الامتثال للمعايير المحاسبية المعتمدة.",
    image: "/src/assets/service-audit.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "fatima@accounting.com",
      phone: "+967 712 345 678"
    },
    expertise: ["مراجعة حسابات", "الرقابة الداخلية", "التدقيق المالي"]
  },
  {
    name: "محمد عبدالله سعيد",
    title: "مدير قسم الأنظمة المالية",
    bio: "خبير في تحليل وتطوير الأنظمة المالية والإدارية. لديه خبرة 9 سنوات في تصميم وتنفيذ أنظمة محاسبية متطورة للشركات الكبرى.",
    image: "/src/assets/service-systems.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mohammed@accounting.com",
      phone: "+967 734 567 890"
    },
    expertise: ["أنظمة مالية", "التحول الرقمي", "التطوير المؤسسي"]
  },
  {
    name: "سارة علي أحمد",
    title: "مديرة قسم الضرائب",
    bio: "متخصصة في الاستشارات الضريبية والامتثال الضريبي. لديها خبرة 7 سنوات في مساعدة الشركات على تقليل العبء الضريبي بطرق قانونية.",
    image: "/src/assets/service-tax.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sara@accounting.com",
      phone: "+967 756 789 012"
    },
    expertise: ["الاستشارات الضريبية", "التخطيط الضريبي", "الامتثال"]
  },
  {
    name: "عبدالله سالم محمد",
    title: "مدير قسم الجدوى الاقتصادية",
    bio: "خبير في إعداد دراسات الجدوى الاقتصادية وتقييم المشاريع الاستثمارية. لديه خبرة 8 سنوات في تحليل الأسواق وتقدير العوائد المالية.",
    image: "/src/assets/service-feasibility.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "abdullah@accounting.com",
      phone: "+967 778 901 234"
    },
    expertise: ["دراسات الجدوى", "تحليل مالي", "تقييم مشاريع"]
 }
];

const advisors = [
  {
    name: "د. علي عبدالله أحمد",
    title: "أستاذ الاقتصاد بجامعة عدن",
    bio: "خبير في الاقتصاد والتمويل، يقدم الاستشارات الاستراتيجية للمكتب في تحليل الأسواق والسياسات المالية.",
    image: "/src/assets/about-office.jpg"
 },
  {
    name: "د. محمد سعيد علي",
    title: "أستاذ المحاسبة بجامعة صنعاء",
    bio: "أحد أبرز خبراء المحاسبة في اليمن، يقدم الإشراف الفني والمهني للمكتب وفريق العمل.",
    image: "/src/assets/calculator-bg.jpg"
  }
];

export function TeamPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
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
        <img src="/src/assets/team-meeting.jpg" alt="Our Team" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center text-white p-4">
          <motion.h1 
            className="text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            تعرف على فريق خبرائنا
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            فريق من المحاسبين المعتمدين والخبراء المتخصصين لخدمة أهدافك.
          </motion.p>
        </div>
      </motion.div>

      {/* Team Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="h-full flex flex-col text-center overflow-hidden shadow-brand-medium hover:shadow-brand-strong transition-all duration-300 group">
                <div className="relative bg-brand-light pt-8">
                  <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover bg-gray-200" />
                  </div>
                  <div className="absolute bottom-0 w-full h-1/2 bg-white"></div>
                </div>
                <CardContent className="flex-grow flex flex-col justify-between text-center p-6 bg-white">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-1">{member.name}</h3>
                    <p className="text-brand-primary font-semibold mb-4">{member.title}</p>
                    <p className="text-muted-foreground text-sm mb-6">{member.bio}</p>
                  </div>
                  <div className="flex justify-center space-x-4 space-x-reverse">
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand-primary transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand-primary transition-colors">
                      <Twitter className="h-6 w-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Advisors Section */}
      <motion.div className="container mx-auto px-4" variants={itemVariants}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">مستشارونا الخبراء</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نستفيد من خبرات نخبة من الخبراء في مختلف المجالات المالية والاقتصادية
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advisors.map((advisor, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Card className="h-full flex flex-col md:flex-row overflow-hidden shadow-brand-medium hover:shadow-brand-strong transition-all duration-300 group">
                <div className="md:w-1/3 relative bg-brand-light">
                  <div className="h-64 md:h-full w-full flex items-center justify-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32" />
                  </div>
                </div>
                <CardContent className="flex-grow flex-col justify-between p-6 md:w-2/3">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-1">{advisor.name}</h3>
                    <p className="text-brand-primary font-semibold mb-4">{advisor.title}</p>
                    <p className="text-muted-foreground text-sm">{advisor.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
