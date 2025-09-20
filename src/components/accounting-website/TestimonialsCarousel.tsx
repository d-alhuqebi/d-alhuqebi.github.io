import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
 {
    name: "أحمد محمد",
    title: "مدير عام شركة الأمل التجارية",
    quote: "خدمة متميزة ومهنية عالية، ساعدونا كثيراً في تنظيم حساباتنا المالية وتحسين سيولة الشركة بنسبة 35%.",
    avatar: "/src/assets/placeholder.svg",
    rating: 5
  },
  {
    name: "فاطمة علي",
    title: "المدير المالي بشركة النور",
    quote: "استشاراتهم الضريبية وفرت علينا الكثير من التعقيدات والمشاكل، وساعدتنا في الحصول على حوافز ضريبية بقيمة 2 مليون ريال.",
    avatar: "/src/assets/placeholder.svg",
    rating: 5
  },
  {
    name: "محمد سالم",
    title: "رئيس مجلس إدارة مجموعة الخليج",
    quote: "دراسة الجدوى التي أعدوها لنا كانت دقيقة جداً وساعدتنا على النجاح في مشروعنا الاستثماري الجديد الذي حقق أرباحاً تجاوزت 50 مليون ريال في السنة الأولى.",
    avatar: "/src/assets/placeholder.svg",
    rating: 5
  },
  {
    name: "سارة عبدالله",
    title: "مدير مكتب محاماة عبدالله وشركاه",
    quote: "الشراكة مع مكتب سعد كانت قراراً ذكياً، حيث ساعدونا في تنظيم شؤوننا المالية وضمان الامتثال للقوانين الضريبية最新.",
    avatar: "/src/assets/placeholder.svg",
    rating: 5
  },
  {
    name: "عبدالله أحمد",
    title: "مالك مصنع الأغذية الحديثة",
    quote: " благодаря لخدمات التدقيق والاستشارات المالية من مكتب سعد، تم اكتشاف ثغرات في نظامنا المالي وتحسينه، مما أدى إلى توفير ملايين الريالات سنوياً.",
    avatar: "/src/assets/placeholder.svg",
    rating: 5
  }
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">آراء عملائنا</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نفخر بثقة عملائنا ونشكرهم على شهاداتهم الإيجابية
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Card className="shadow-brand-strong border-t-4 border-brand-primary">
                <CardContent className="p-8 text-center">
                  <Quote className="mx-auto h-12 w-12 text-brand-primary mb-6" />
                  <blockquote className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className="flex flex-col items-center">
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name} 
                      className="w-20 h-20 rounded-full mb-4 border-4 border-brand-primary"
                    />
                    <h4 className="text-2xl font-bold text-brand-dark">{testimonials[currentIndex].name}</h4>
                    <p className="text-lg text-muted-foreground mb-4">{testimonials[currentIndex].title}</p>
                    <div className="flex justify-center space-x-1 space-x-reverse">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center space-x-4 space-x-reverse mb-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full hover:bg-brand-primary hover:text-white transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full hover:bg-brand-primary hover:text-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex justify-center space-x-2 space-x-reverse">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-brand-primary' : 'bg-gray-300'
                }`}
                aria-label={`عرض التقييم ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
