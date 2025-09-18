import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Phone, Calendar, FileText, Award, Users, TrendingUp } from "lucide-react";

// Import service images
import serviceAuditImage from '@/assets/service-audit.jpg';
import serviceTaxImage from '@/assets/service-tax.jpg';
import serviceFeasibilityImage from '@/assets/service-feasibility.jpg';
import serviceSystemsImage from '@/assets/service-systems.jpg';
import financialConsultingImage from '@/assets/financial-consulting.jpg';

interface ServicePageProps {
  serviceId: number;
  onBack: () => void;
  onContactClick: (serviceName: string) => void;
}

const ServicePages: React.FC<ServicePageProps> = ({ serviceId, onBack, onContactClick }) => {
  const services = [
    {
      id: 1,
      title: "مراجعة وتدقيق حسابات",
      subtitle: "خدمات التدقيق والمراجعة المحاسبية المتخصصة",
      description: "نقدم خدمات مراجعة وتدقيق شاملة للحسابات المالية وفقاً لأعلى المعايير المهنية المحاسبية المحلية والدولية.",
      image: serviceAuditImage,
      coverGradient: "from-blue-600 to-blue-800",
      services: [
        {
          title: "مراجعة القوائم المالية",
          description: "فحص شامل للقوائم المالية والتأكد من دقتها ومطابقتها للمعايير المحاسبية",
          features: ["تدقيق الميزانية العمومية", "مراجعة قائمة الدخل", "تدقيق قائمة التدفقات النقدية", "مراجعة قائمة حقوق الملكية"]
        },
        {
          title: "تدقيق العمليات المحاسبية",
          description: "تدقيق دقيق لجميع العمليات المحاسبية والمالية خلال الفترة المحاسبية",
          features: ["تدقيق المشتريات والمبيعات", "مراجعة العمليات النقدية", "تدقيق الرواتب والأجور", "مراجعة الأصول والخصوم"]
        },
        {
          title: "تقييم أنظمة الرقابة الداخلية",
          description: "دراسة وتقييم فعالية أنظمة الرقابة الداخلية المطبقة في الشركة",
          features: ["تحليل نقاط القوة والضعف", "تطوير إجراءات رقابية جديدة", "تدريب الموظفين", "متابعة التطبيق"]
        }
      ],
      benefits: [
        "ضمان دقة وموثوقية القوائم المالية",
        "الامتثال للمعايير المحاسبية المحلية والدولية",
        "بناء الثقة مع المستثمرين والشركاء",
        "تحسين الشفافية المالية للشركة",
        "اكتشاف الأخطاء والمخالفات المحاسبية",
        "تقديم توصيات لتحسين الأداء المالي"
      ],
      process: [
        { step: "التخطيط والدراسة الأولية", description: "فهم طبيعة العمل ووضع خطة التدقيق" },
        { step: "تجميع وفحص المستندات", description: "جمع وتحليل جميع الوثائق المالية والمحاسبية" },
        { step: "تنفيذ إجراءات التدقيق", description: "تطبيق الاختبارات والفحوصات المطلوبة" },
        { step: "إعداد التقرير النهائي", description: "صياغة تقرير شامل مع النتائج والتوصيات" }
      ]
    },
    {
      id: 2,
      title: "استشارات مالية وضريبية",
      subtitle: "خدمات الاستشارات المالية والضريبية المتخصصة",
      description: "نوفر استشارات متخصصة في التخطيط المالي والامتثال الضريبي لمساعدة الشركات على تحقيق أهدافها المالية.",
      image: serviceTaxImage,
      coverGradient: "from-green-600 to-green-800",
      services: [
        {
          title: "التخطيط الضريبي",
          description: "وضع استراتيجيات ضريبية فعالة لتقليل العبء الضريبي بطرق قانونية",
          features: ["تحليل الوضع الضريبي الحالي", "وضع خطط ضريبية مستقبلية", "استغلال الحوافز الضريبية", "تجنب المخالفات الضريبية"]
        },
        {
          title: "إعداد الإقرارات الضريبية",
          description: "إعداد وتقديم جميع أنواع الإقرارات الضريبية المطلوبة",
          features: ["إقرار ضريبة الدخل", "إقرار ضريبة المبيعات", "إقرار ضريبة الخدمات", "إقرار الضرائب المقطوعة"]
        },
        {
          title: "الاستشارات المالية الاستراتيجية",
          description: "تقديم المشورة في الأمور المالية والاستثمارية الهامة",
          features: ["تحليل الأداء المالي", "تخطيط السيولة", "تقييم الاستثمارات", "إدارة المخاطر المالية"]
        }
      ],
      benefits: [
        "تقليل العبء الضريبي بطرق قانونية",
        "ضمان الامتثال للقوانين الضريبية",
        "تحسين التخطيط المالي للشركة",
        "تجنب الغرامات والعقوبات الضريبية",
        "زيادة الربحية وتحسين التدفق النقدي",
        "اتخاذ قرارات مالية مدروسة"
      ],
      process: [
        { step: "دراسة الوضع المالي", description: "تحليل شامل للوضع المالي والضريبي الحالي" },
        { step: "وضع الاستراتيجية", description: "تطوير خطة مالية وضريبية مناسبة" },
        { step: "التنفيذ والمتابعة", description: "تطبيق الخطة ومتابعة النتائج" },
        { step: "المراجعة والتطوير", description: "مراجعة دورية وتطوير الاستراتيجية" }
      ]
    },
    {
      id: 3,
      title: "دراسات الجدوى الاقتصادية",
      subtitle: "تحليل شامل للمشاريع الاستثمارية وتقييم الجدوى",
      description: "نقدم دراسات جدوى اقتصادية متخصصة لتقييم المشاريع الاستثمارية ومساعدة المستثمرين في اتخاذ قرارات مدروسة.",
      image: serviceFeasibilityImage,
      coverGradient: "from-purple-600 to-purple-800",
      services: [
        {
          title: "دراسة السوق والمنافسين",
          description: "تحليل شامل للسوق المستهدف ودراسة المنافسين والفرص المتاحة",
          features: ["تحليل حجم السوق", "دراسة سلوك المستهلكين", "تحليل المنافسة", "تحديد الفرص والتهديدات"]
        },
        {
          title: "التحليل المالي والاقتصادي",
          description: "تحليل مفصل للجوانب المالية والاقتصادية للمشروع",
          features: ["حساب التكاليف الاستثمارية", "تقدير الإيرادات المتوقعة", "حساب العائد على الاستثمار", "تحليل التدفقات النقدية"]
        },
        {
          title: "تقييم المخاطر",
          description: "تحديد وتقييم المخاطر المحتملة ووضع استراتيجيات للتعامل معها",
          features: ["تحليل المخاطر المالية", "المخاطر التشغيلية", "المخاطر السوقية", "خطط إدارة المخاطر"]
        }
      ],
      benefits: [
        "اتخاذ قرارات استثمارية مدروسة",
        "تقليل مخاطر الاستثمار",
        "تحديد أفضل البدائل الاستثمارية",
        "حساب العائد المتوقع بدقة",
        "جذب المستثمرين والممولين",
        "ضمان نجاح المشروع"
      ],
      process: [
        { step: "جمع البيانات والمعلومات", description: "تجميع جميع المعلومات المطلوبة عن المشروع والسوق" },
        { step: "التحليل والدراسة", description: "تحليل البيانات ودراسة جميع جوانب المشروع" },
        { step: "إعداد النماذج المالية", description: "بناء نماذج مالية لتقييم أداء المشروع" },
        { step: "إعداد التقرير النهائي", description: "صياغة تقرير شامل مع التوصيات النهائية" }
      ]
    },
    {
      id: 4,
      title: "تحليل الأنظمة المالية والإدارية",
      subtitle: "تقييم وتطوير الأنظمة المالية والإدارية",
      description: "نقدم خدمات تحليل وتطوير الأنظمة المالية والإدارية لتحسين كفاءة العمليات وجودة التقارير المالية.",
      image: serviceSystemsImage,
      coverGradient: "from-orange-600 to-orange-800",
      services: [
        {
          title: "تحليل الأنظمة الحالية",
          description: "تقييم شامل للأنظمة المالية والإدارية المطبقة حالياً",
          features: ["دراسة العمليات الحالية", "تحديد نقاط القوة والضعف", "تحليل كفاءة الأنظمة", "تقييم مدى الامتثال للمعايير"]
        },
        {
          title: "تصميم أنظمة جديدة",
          description: "تطوير أنظمة مالية وإدارية محدثة ومتطورة",
          features: ["تصميم الإجراءات المالية", "إعداد دليل السياسات", "تطوير نماذج العمل", "تحديد الصلاحيات والمسؤوليات"]
        },
        {
          title: "التدريب والتطبيق",
          description: "تدريب الفرق على الأنظمة الجديدة ومتابعة التطبيق",
          features: ["برامج تدريبية متخصصة", "ورش عمل تطبيقية", "الدعم الفني المستمر", "متابعة الأداء"]
        }
      ],
      benefits: [
        "تحسين كفاءة العمليات المالية",
        "ضمان دقة التقارير المالية",
        "تقليل الأخطاء البشرية",
        "تسريع عمليات اتخاذ القرار",
        "الامتثال للمعايير المحاسبية",
        "توفير الوقت والجهد"
      ],
      process: [
        { step: "التقييم الأولي", description: "دراسة الوضع الحالي للأنظمة المطبقة" },
        { step: "التصميم والتطوير", description: "تطوير الأنظمة الجديدة حسب احتياجات الشركة" },
        { step: "التطبيق التجريبي", description: "تطبيق الأنظمة على نطاق محدود للاختبار" },
        { step: "التطبيق الكامل", description: "تعميم الأنظمة الجديدة والتدريب عليها" }
      ]
    },
    {
      id: 5,
      title: "الاستشارات المالية المتقدمة",
      subtitle: "خدمات استشارية متخصصة في التمويل والاستثمار",
      description: "نوفر استشارات مالية متقدمة في مجالات التمويل والاستثمار وإدارة المحافظ المالية للشركات والأفراد.",
      image: financialConsultingImage,
      coverGradient: "from-indigo-600 to-indigo-800",
      services: [
        {
          title: "إدارة المحافظ الاستثمارية",
          description: "تطوير وإدارة محافظ استثمارية متنوعة تحقق أفضل العوائد",
          features: ["تحليل المخاطر والعوائد", "توزيع الاستثمارات", "متابعة الأداء", "إعادة التوازن الدوري"]
        },
        {
          title: "التخطيط المالي الشخصي",
          description: "وضع خطط مالية شخصية للأفراد لتحقيق أهدافهم المالية",
          features: ["تحليل الوضع المالي الحالي", "وضع الأهداف المالية", "خطط الادخار والاستثمار", "التخطيط للتقاعد"]
        },
        {
          title: "استشارات التمويل",
          description: "تقديم المشورة في الحصول على التمويل المناسب للمشاريع",
          features: ["تقييم خيارات التمويل", "إعداد ملفات القروض", "التفاوض مع البنوك", "هيكلة الديون"]
        }
      ],
      benefits: [
        "تحقيق أهداف مالية طويلة المدى",
        "تقليل مخاطر الاستثمار",
        "زيادة العوائد المالية",
        "تحسين الوضع المالي العام",
        "الحصول على أفضل شروط التمويل",
        "بناء ثروة مستدامة"
      ],
      process: [
        { step: "التقييم المالي", description: "تحليل شامل للوضع المالي الحالي" },
        { step: "وضع الأهداف", description: "تحديد الأهداف المالية قصيرة وطويلة المدى" },
        { step: "تطوير الاستراتيجية", description: "وضع خطة مالية مفصلة لتحقيق الأهداف" },
        { step: "المتابعة والتطوير", description: "متابعة التنفيذ وتعديل الخطة حسب الحاجة" }
      ]
    }
  ];

  const service = services.find(s => s.id === serviceId);
  
  if (!service) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-600">الخدمة غير موجودة</h2>
        <Button onClick={onBack} className="mt-4">
          العودة للخدمات
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-500">
      {/* زر العودة */}
      <Button 
        variant="outline" 
        onClick={onBack}
        className="mb-6 hover:bg-brand-primary hover:text-white transition-brand"
      >
        <ArrowLeft className="ml-2 h-4 w-4" />
        العودة للخدمات
      </Button>

      {/* غلاف الخدمة */}
      <div className={`relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r ${service.coverGradient}`}>
        <div className="absolute inset-0 bg-black/30" />
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover mix-blend-multiply"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center p-8">
          <div className="text-white max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-6">{service.subtitle}</p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">{service.description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* المحتوى الرئيسي */}
        <div className="lg:col-span-2 space-y-8">
          {/* الخدمات الفرعية */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-lg">
              <CardTitle className="text-2xl text-brand-dark flex items-center">
                <FileText className="ml-3 h-6 w-6 text-brand-primary" />
                الخدمات المتخصصة
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {service.services.map((subService, index) => (
                  <div key={index} className="border-r-4 border-brand-primary pr-6 bg-gradient-to-r from-brand-muted/50 to-transparent p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-brand-dark mb-3">{subService.title}</h4>
                    <p className="text-gray-700 mb-4 leading-relaxed">{subService.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {subService.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-reverse space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* المزايا والفوائد */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 rounded-t-lg">
              <CardTitle className="text-2xl text-brand-dark flex items-center">
                <Award className="ml-3 h-6 w-6 text-green-600" />
                المزايا والفوائد
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-reverse space-x-3 p-4 bg-gradient-to-r from-green-50 to-transparent rounded-lg hover:shadow-md transition-all duration-300">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* مراحل العمل */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-lg">
              <CardTitle className="text-2xl text-brand-dark flex items-center">
                <TrendingUp className="ml-3 h-6 w-6 text-blue-600" />
                مراحل تنفيذ الخدمة
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-reverse space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold text-brand-dark mb-2">{step.step}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* الشريط الجانبي */}
        <div className="space-y-6">
          {/* بطاقة التواصل */}
          <Card className="shadow-lg border-0 sticky top-24">
            <CardHeader className="text-center pb-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-t-lg">
              <CardTitle className="text-xl flex items-center justify-center">
                <Phone className="ml-2 h-5 w-5" />
                اطلب الخدمة الآن
              </CardTitle>
              <CardDescription className="text-white/90">
                احصل على استشارة مجانية واطلب الخدمة
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              <Button 
                onClick={() => onContactClick(service.title)}
                className="w-full text-lg py-3 bg-brand-primary hover:bg-brand-secondary transition-brand"
                size="lg"
              >
                <Phone className="ml-2 h-5 w-5" />
                استشارة مجانية
              </Button>
              
              <div className="text-center space-y-3 pt-4 border-t">
                <p className="text-sm text-gray-600">تواصل مباشرة</p>
                <div className="space-y-2">
                  <p className="font-semibold text-brand-dark">📞 777123456</p>
                  <p className="font-semibold text-brand-dark">📧 info@accounting-office.com</p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center space-x-reverse space-x-2 mb-2">
                  <Calendar className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-800">موعد مجاني</span>
                </div>
                <p className="text-xs text-green-700">
                  احجز موعد استشارة مجانية لمناقشة احتياجاتك
                </p>
              </div>
            </CardContent>
          </Card>

          {/* معلومات إضافية */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Users className="ml-2 h-5 w-5 text-brand-primary" />
                معلومات الخدمة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">مدة التنفيذ:</span>
                  <Badge variant="secondary">حسب حجم المشروع</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-600">الاستشارة الأولى:</span>
                  <Badge className="bg-green-100 text-green-800 border-green-200">مجانية</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-gray-600">المتابعة:</span>
                  <Badge variant="secondary">مستمرة</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="text-gray-600">التقارير:</span>
                  <Badge className="bg-purple-100 text-purple-800 border-purple-200">مفصلة</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* شهادات وجوائز */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Award className="ml-2 h-5 w-5 text-yellow-600" />
                الاعتمادات والشهادات
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-reverse space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <Award className="h-5 w-5 text-yellow-600" />
                  <span className="text-sm text-gray-700">محاسب قانوني معتمد</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-gray-700">عضوية نقابة المحاسبين</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-3 p-3 bg-green-50 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">خبرة +15 سنة</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServicePages;