
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, User, Book, MessageSquare, MessageCircle } from "lucide-react";

export function ContactPage() {
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

  const contactInfo = [
    {
      icon: <Phone className="h-8 w-8 text-brand-primary" />,
      title: "رقم الهاتف",
      details: ["+967 777 721 2776", "+967 783 150 102"],
    },
    {
      icon: <Mail className="h-8 w-8 text-brand-primary" />,
      title: "البريد الإلكتروني",
      details: ["saadoffice2189@gmail.com"],
    },
    {
      icon: <MapPin className="h-8 w-8 text-brand-primary" />,
      title: "العنوان",
      details: ["عدن - المنصورة - التسعين"],
    },
  ];

  return (
    <motion.div 
      className="space-y-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.div 
        className="relative h-64 rounded-lg overflow-hidden"
        variants={itemVariants}
      >
        <img src="/src/assets/contact-bg.jpg" alt="Contact Us" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center text-white p-4">
          <motion.h1 
            className="text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            تواصل معنا
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            نحن هنا لخدمتك ومساعدتك في جميع احتياجاتك المحاسبية والاستشارية
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="shadow-brand-strong border-t-4 border-brand-primary">
              <CardHeader>
                <CardTitle className="text-3xl text-brand-dark flex items-center">
                  <MessageSquare className="mr-3 text-brand-primary" />
                  أرسل لنا رسالة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input placeholder="الاسم الكامل" className="pl-10" />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input type="email" placeholder="البريد الإلكتروني" className="pl-10" />
                </div>
                <div className="relative">
                  <Book className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input placeholder="الموضوع" className="pl-10" />
                </div>
                <Textarea placeholder="رسالتك" rows={5} />
                <Button className="w-full bg-brand-primary hover:bg-brand-dark text-white transition-colors duration-300" size="lg">
                  إرسال الرسالة
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="flex items-start space-x-4 space-x-reverse"
                variants={itemVariants}
              >
                <div className="bg-brand-light p-4 rounded-full">
                  {info.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-brand-dark mb-1">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-lg text-muted-foreground">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
            
            <motion.div variants={itemVariants}>
              <Card className="shadow-brand-medium border-t-4 border-green-600 mt-8">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-center text-brand-dark mb-4">أو تواصل مباشرة عبر واتساب</h3>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors duration-300"
                    size="lg"
                    onClick={() => window.open('https://wa.me/+9677777212776', '_blank')}
                  >
                    <MessageCircle className="ml-2 h-5 w-5" />
                    تواصل عبر الواتساب
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
