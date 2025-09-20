import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

interface ServiceDetailProps {
  service: {
    title: string;
    tagline: string;
    benefits: string[];
    description: string;
    image: string;
  };
  onBack: () => void;
  onContactClick: (serviceName: string) => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack, onContactClick }) => {
  return (
    <div className="space-y-8 animate-in fade-in-50 duration-500">
      {/* زر العودة - Back Button */}
      <Button 
        variant="outline" 
        onClick={onBack}
        className="mb-6 hover:bg-brand-primary hover:text-white transition-brand"
      >
        <ArrowRight className="ml-2 h-4 w-4" />
        العودة للخدمات
      </Button>

      {/* صورة الغلاف - Cover Image */}
      <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-brand-strong">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
          <div className="p-6 md:p-8 text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-lg md:text-xl opacity-90">{service.tagline}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* المحتوى الرئيسي - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* الوصف التفصيلي - Detailed Description */}
          <Card className="shadow-brand-medium">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-dark">نظرة عامة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
                {service.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* المزايا والفوائد - Benefits */}
          <Card className="shadow-brand-medium">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-dark">المزايا والفوائد</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-reverse space-x-3 p-4 bg-brand-muted rounded-lg">
                    <CheckCircle className="h-6 w-6 text-brand-primary flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* الشريط الجانبي - Sidebar */}
        <div className="space-y-6">
          {/* بطاقة التواصل - Contact Card */}
          <Card className="shadow-brand-medium sticky top-24">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl text-brand-dark">هل تحتاج لهذه الخدمة؟</CardTitle>
              <CardDescription>
                تواصل معنا الآن للحصول على استشارة مجانية
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={() => onContactClick(service.title)}
                className="w-full text-lg py-3 bg-brand-primary hover:bg-brand-secondary transition-brand"
                size="lg"
              >
                <Phone className="ml-2 h-5 w-5" />
                اطلب استشارة مجانية
              </Button>
              
              <div className="text-center space-y-2 pt-4 border-t">
                <p className="text-sm text-gray-600">أو تواصل مباشرة</p>
                <div className="space-y-2">
                  <p className="font-semibold text-brand-dark">📞 777123456</p>
                  <p className="font-semibold text-brand-dark">📧 info@accounting-office.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* معلومات إضافية - Additional Info */}
          <Card className="shadow-brand-medium">
            <CardHeader>
              <CardTitle className="text-lg">معلومات الخدمة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">مدة التنفيذ:</span>
                <Badge variant="secondary">حسب حجم المشروع</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">الاستشارة الأولى:</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">مجانية</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">المتابعة:</span>
                <Badge variant="secondary">مستمرة</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;