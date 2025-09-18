import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Calculator, Phone, Mail, MapPin, Users, Award, FileText, TrendingUp, Menu, X, MessageCircle, Printer, ArrowLeft } from "lucide-react";
import ServiceDetail from './ServiceDetail';

// استيراد الصور - Import images
import aboutOfficeImage from '@/assets/about-office.jpg';
import serviceAuditImage from '@/assets/service-audit.jpg';
import serviceTaxImage from '@/assets/service-tax.jpg';
import serviceFeasibilityImage from '@/assets/service-feasibility.jpg';
import serviceSystemsImage from '@/assets/service-systems.jpg';
import teamMeetingImage from '@/assets/team-meeting.jpg';

const AccountingWebsite = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<number | null>(null);
  const { toast } = useToast();
  
  // حاسبة الأسقف الهوردي - Calculator state
  const [calculatorInputs, setCalculatorInputs] = useState({
    length: '',
    width: '',
    wastePercentage: '10',
    blockHeight: '20',
    blockWidth: '50',
    blockLength: '25',
    steelDiameter: '8',
    cementRatio: '350'
  });

  const [calculatorResults, setCalculatorResults] = useState(null);

  // حسابات الحاسبة - Calculator functions
  const calculateResults = () => {
    const { length, width, wastePercentage, blockHeight, blockWidth, blockLength, steelDiameter, cementRatio } = calculatorInputs;
    
    if (!length || !width) {
      toast({
        title: "خطأ في الإدخال",
        description: "يرجى إدخال الطول والعرض",
        variant: "destructive"
      });
      return;
    }

    // حساب المساحة الإجمالية
    const totalArea = parseFloat(length) * parseFloat(width);
    
    // حساب البلوك النظري
    const blockArea = (parseFloat(blockLength) / 100) * (parseFloat(blockWidth) / 100);
    const theoreticalBlocks = Math.ceil(totalArea / blockArea);
    
    // حساب البلوك مع الهدر
    const totalBlocks = Math.ceil(theoreticalBlocks * (1 + parseFloat(wastePercentage) / 100));
    
    // حساب حجم البلوك
    const blockVolume = totalBlocks * (parseFloat(blockLength) / 100) * (parseFloat(blockWidth) / 100) * (parseFloat(blockHeight) / 100);
    
    // حساب الخرسانة الإجمالية (50% من حجم البلوك)
    const totalConcrete = blockVolume * 0.5;
    
    // حساب الخرسانة الصافية (60% من الإجمالية)
    const netConcrete = totalConcrete * 0.6;
    
    // حساب وزن الحديد (80 كغ لكل متر مكعب)
    const steelWeight = totalArea * 80;
    
    // حساب عدد الأسياخ
    const rebarLength = 12; // متر
    const rebarWeight = Math.PI * Math.pow(parseFloat(steelDiameter) / 2000, 2) * 7850 * rebarLength;
    const numberOfRebars = Math.ceil(steelWeight / rebarWeight);
    
    // حساب الأسمنت
    const cementBags = Math.ceil((netConcrete * parseFloat(cementRatio)) / 50);
    
    // حساب الرمل والزلط
    const sandVolume = netConcrete * 0.4;
    const gravelVolume = netConcrete * 0.8;

    const results = {
      totalArea: totalArea.toFixed(2),
      theoreticalBlocks,
      totalBlocks,
      blockVolume: blockVolume.toFixed(3),
      totalConcrete: totalConcrete.toFixed(3),
      netConcrete: netConcrete.toFixed(3),
      steelWeight: steelWeight.toFixed(2),
      numberOfRebars,
      cementBags,
      sandVolume: sandVolume.toFixed(3),
      gravelVolume: gravelVolume.toFixed(3)
    };

    setCalculatorResults(results);
  };

  // طباعة تقرير الحاسبة
  const printReport = () => {
    window.print();
  };

  // إرسال نموذج الاتصال
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال رسالتك بنجاح",
      description: "سيتم التواصل معك قريباً إن شاء الله",
    });
    setIsContactOpen(false);
  };

  // قائمة التبويبات
  const tabs = [
    { id: "home", label: "الرئيسية", icon: Award },
    { id: "about", label: "عن المكتب", icon: Users },
    { id: "services", label: "الخدمات", icon: FileText },
    { id: "calculator", label: "الحاسبات", icon: Calculator },
    { id: "team", label: "فريق العمل", icon: Users },
    { id: "contact", label: "تواصل", icon: Phone }
  ];

  // الخدمات مع الصور - Services with images
  const services = [
    {
      title: "مراجعة وتدقيق حسابات",
      tagline: "خدمات تدقيق شاملة ومراجعة دقيقة للحسابات المالية",
      benefits: [
        "مراجعة شاملة للقوائم المالية والحسابات بدقة عالية ومعايير مهنية",
        "تدقيق دقيق للعمليات المالية والمحاسبية وفقاً للمعايير الدولية", 
        "تقارير مفصلة وتوصيات عملية لتحسين الأداء المالي والإداري"
      ],
      description: `خدمات المراجعة والتدقيق المحاسبي تشمل فحص شامل للقوائم المالية والسجلات المحاسبية للتأكد من دقتها ومطابقتها للمعايير المحاسبية المعتمدة. نقوم بتقييم أنظمة الرقابة الداخلية وإجراءات العمل المالي بطريقة منهجية ومنظمة.

نقدم تقارير مفصلة تتضمن النتائج والتوصيات اللازمة لتحسين الأداء المالي وضمان الامتثال للقوانين واللوائح المالية المحلية والدولية. فريقنا المتخصص يضمن الدقة والشفافية في جميع عمليات المراجعة مع الحفاظ على السرية المهنية.

خدماتنا تساعد الشركات على بناء الثقة مع المستثمرين والشركاء التجاريين من خلال توفير قوائم مالية موثوقة ومدققة وفقاً لأعلى المعايير المهنية المحاسبية المعترف بها محلياً وإقليمياً.`,
      image: serviceAuditImage
    },
    {
      title: "إستشارات مالية وضريبية",
      tagline: "استشارات متخصصة في التخطيط المالي والامتثال الضريبي",
      benefits: [
        "استشارات ضريبية شاملة وتخطيط مالي فعال يناسب طبيعة العمل",
        "مساعدة في إعداد الإقرارات الضريبية والامتثال للقوانين الضريبية",
        "تحليل وتحسين الهيكل المالي للشركات وتقليل الأعباء الضريبية"
      ],
      description: `الاستشارات المالية والضريبية تهدف إلى مساعدة عملائنا في اتخاذ قرارات مالية مدروسة وذكية تحقق أهدافهم التجارية. نوفر خدمات التخطيط المالي الاستراتيجي والإرشاد في الأمور الضريبية المعقدة بطريقة مبسطة ومفهومة.

فريقنا من الخبراء يقدم المشورة في تحسين الهيكل المالي للشركات وتقليل العبء الضريبي بطرق قانونية ومشروعة تتماشى مع القوانين المحلية. نساعد في إعداد الإقرارات الضريبية وضمان الامتثال الكامل للقوانين المالية والضريبية السارية.

خدماتنا الاستشارية تشمل تحليل المخاطر المالية ووضع استراتيجيات للنمو المالي المستدام والمربح، مما يساعد الشركات على تحقيق أهدافها المالية بكفاءة عالية وفي إطار زمني محدد.`,
      image: serviceTaxImage
    },
    {
      title: "دراسات جدوى",
      tagline: "تحليل شامل للمشاريع الاستثمارية وتقييم الجدوى الاقتصادية",
      benefits: [
        "تحليل اقتصادي ومالي شامل للمشاريع الاستثمارية الجديدة والتوسعات",
        "تقييم المخاطر والفرص الاستثمارية المتاحة في السوق المحلي",
        "تقارير مفصلة ودقيقة تساعد في اتخاذ قرارات استثمارية مدروسة"
      ],
      description: `دراسات الجدوى الاقتصادية هي عملية تحليل شاملة ومنهجية تهدف إلى تقييم مدى نجاح المشاريع الاستثمارية قبل البدء في تنفيذها. نقوم بدراسة جميع الجوانب المالية والتقنية والتسويقية والإدارية للمشروع بطريقة علمية ومدروسة.

تشمل خدماتنا تحليل السوق والمنافسين، وتقدير التكاليف والإيرادات المتوقعة، وحساب معدل العائد على الاستثمار ونقطة التعادل. كما نقيم المخاطر المحتملة ونقدم استراتيجيات عملية للتعامل معها وتخفيف آثارها السلبية.

تقاريرنا المفصلة توفر للمستثمرين رؤية واضحة وشاملة حول جدوى مشاريعهم الاستثمارية، مما يساعدهم على اتخاذ قرارات استثمارية مدروسة ومبنية على أسس علمية وتحليل دقيق للواقع والتوقعات المستقبلية.`,
      image: serviceFeasibilityImage
    },
    {
      title: "تحليل أنظمة مالية وإدارية",
      tagline: "تقييم وتطوير الأنظمة المالية والإدارية لتحسين الكفاءة",
      benefits: [
        "تحليل شامل للأنظمة المالية والإدارية الحالية وتحديد نقاط الضعف",
        "تصميم وتطوير أنظمة محاسبية متطورة وفعالة تناسب طبيعة العمل",
        "تدريب الفرق والموظفين على استخدام الأنظمة الجديدة بكفاءة"
      ],
      description: `خدمات تحليل الأنظمة المالية والإدارية تركز على تقييم الأنظمة الحالية بطريقة منهجية وتحديد نقاط القوة والضعف فيها بدقة. نعمل على تطوير حلول مخصصة ومبتكرة تناسب احتياجات كل عميل وطبيعة نشاطه التجاري.

فريقنا المتخصص يقوم بتصميم أنظمة محاسبية وإدارية متقدمة تساهم في تحسين الكفاءة التشغيلية وتبسيط العمليات المالية والإدارية. نحرص على أن تكون الأنظمة سهلة الاستخدام ومتوافقة مع المعايير المحاسبية المحلية والدولية.

نوفر برامج تدريبية شاملة ومتخصصة للموظفين لضمان الاستفادة القصوى من الأنظمة الجديدة، مع تقديم الدعم الفني المستمر وخدمات الصيانة الدورية لضمان استمرارية العمل بكفاءة عالية ودون انقطاع.`,
      image: serviceSystemsImage
    }
  ];

  return (
    <div className="min-h-screen bg-background font-arabic">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        {/* الهيدر والتنقل - Header and Navigation */}
        <header className="bg-gradient-brand shadow-brand-medium sticky top-0 z-50 no-print">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              {/* اللوجو والعنوان - Logo and Title */}
              <div className="flex items-center space-x-reverse space-x-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="text-white">
                  <h1 className="text-xl font-bold">عبدالرقيب عبدالله عبده سعد</h1>
                  <p className="text-sm opacity-90">محاسب قانوني معتمد - ترخيص رقم 2189</p>
                </div>
              </div>

              {/* التنقل للديسك توب - Desktop Navigation */}
              <nav className="hidden md:flex">
                <TabsList className="bg-white/20 border-white/30">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className="text-white data-[state=active]:bg-white data-[state=active]:text-brand-primary transition-brand"
                    >
                      <tab.icon className="ml-2 h-4 w-4" />
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </nav>

              {/* زر القائمة للموبايل - Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:bg-white/20"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>

            {/* القائمة المنسدلة للموبايل - Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden bg-white/95 backdrop-blur-md rounded-xl mt-2 mb-4 shadow-brand-strong border border-white/20 overflow-hidden">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsMobileMenuOpen(false);
                      setSelectedServiceDetail(null);
                    }}
                    className={`w-full flex items-center px-6 py-4 text-brand-dark hover:bg-brand-muted transition-brand border-b border-gray-100 last:border-b-0 ${
                      activeTab === tab.id ? 'bg-brand-primary text-white' : ''
                    }`}
                  >
                    <tab.icon className="ml-3 h-5 w-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* المحتوى الرئيسي - Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* الصفحة الرئيسية - Home Page */}
          <TabsContent value="home" className="space-y-12">
            {/* القسم الرئيسي - Hero Section */}
            <section className="text-center py-16 bg-gradient-accent rounded-2xl shadow-brand-strong">
              <div className="max-w-4xl mx-auto text-white px-6">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  مكتب محاسبة متخصص
                </h2>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  خدمات محاسبية واستشارية شاملة بخبرة تزيد عن 15 عام
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <Badge variant="secondary" className="text-lg py-2 px-4 bg-white/20 text-white border-white/30">
                    مراجعة وتدقيق
                  </Badge>
                  <Badge variant="secondary" className="text-lg py-2 px-4 bg-white/20 text-white border-white/30">
                    استشارات ضريبية
                  </Badge>
                  <Badge variant="secondary" className="text-lg py-2 px-4 bg-white/20 text-white border-white/30">
                    دراسات جدوى
                  </Badge>
                </div>
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => setIsContactOpen(true)}
                  className="text-lg px-8 py-4 bg-white text-brand-primary hover:bg-white/90 transition-brand"
                >
                  تواصل معنا الآن
                  <Phone className="mr-2 h-5 w-5" />
                </Button>
              </div>
            </section>

            {/* نظرة عامة على الخدمات - Services Overview */}
            <section>
              <h3 className="text-3xl font-bold text-center mb-12 text-brand-dark">خدماتنا المتخصصة</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <Card 
                    key={index} 
                    className="hover:shadow-brand-medium transition-all duration-300 cursor-pointer group overflow-hidden"
                    onClick={() => {
                      setActiveTab("services");
                      setSelectedServiceDetail(index);
                    }}
                  >
                    <CardHeader className="text-center pb-4">
                      {/* صورة مصغرة للخدمة */}
                      <div className="relative h-24 w-24 mx-auto mb-4 rounded-full overflow-hidden shadow-brand-medium">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-brand-primary/10 transition-colors duration-300"></div>
                      </div>
                      <CardTitle className="text-lg mb-2 group-hover:text-brand-primary transition-colors">{service.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">{service.tagline}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-3">
                      <Button 
                        variant="outline" 
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTab("services");
                          setSelectedServiceDetail(index);
                        }}
                        className="w-full hover:bg-brand-primary hover:text-white transition-brand"
                      >
                        اعرف المزيد
                      </Button>
                      <Button 
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedService(service.title);
                          setIsContactOpen(true);
                        }}
                        className="w-full text-sm hover:bg-brand-secondary transition-brand"
                      >
                        اطلب استشارة
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          {/* عن المكتب - About Page */}
          <TabsContent value="about" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="shadow-brand-medium">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-brand-dark">
                    <Award className="ml-3 h-6 w-6" />
                    عن مكتبنا
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg leading-relaxed">
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
                </CardContent>
              </Card>

              <Card className="shadow-brand-medium">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-brand-dark">
                    <Users className="ml-3 h-6 w-6" />
                    شهادات العملاء
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-brand-light p-4 rounded-lg">
                    <p className="text-lg mb-3 italic">
                      "خدمة متميزة ومهنية عالية، ساعدونا كثيراً في تنظيم حساباتنا المالية"
                    </p>
                    <p className="font-semibold text-brand-dark">أحمد محمد - مدير عام شركة الأمل التجارية</p>
                  </div>
                  
                  <div className="bg-brand-light p-4 rounded-lg">
                    <p className="text-lg mb-3 italic">
                      "استشاراتهم الضريبية وفرت علينا الكثير من التعقيدات والمشاكل"
                    </p>
                    <p className="font-semibold text-brand-dark">فاطمة علي - المدير المالي بشركة النور</p>
                  </div>
                  
                  <div className="bg-brand-light p-4 rounded-lg">
                    <p className="text-lg mb-3 italic">
                      "دراسة الجدوى التي أعدوها لنا كانت دقيقة جداً وساعدتنا على النجاح"
                    </p>
                    <p className="font-semibold text-brand-dark">محمد سالم - رئيس مجلس إدارة مجموعة الخليج</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* الخدمات - Services Page */}
          <TabsContent value="services" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-dark mb-4">خدماتنا المتخصصة</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                نقدم مجموعة شاملة من الخدمات المحاسبية والاستشارية المتخصصة
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="shadow-brand-medium hover:shadow-brand-strong transition-brand">
                  <CardHeader>
                    <CardTitle className="text-2xl text-brand-dark">{service.title}</CardTitle>
                    <CardDescription className="text-lg">{service.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-brand-dark">المزايا الرئيسية:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="bg-brand-primary text-white rounded-full w-6 h-6 flex items-center justify-center ml-2 mt-0.5 flex-shrink-0">
                              <span className="text-sm">✓</span>
                            </div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-brand-dark">تفاصيل الخدمة:</h4>
                      <div className="space-y-4 text-justify leading-relaxed">
                        {service.description.split('\n\n').map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-brand hover:opacity-90 transition-brand"
                      onClick={() => {
                        setSelectedService(service.title);
                        setIsContactOpen(true);
                      }}
                    >
                      اطلب استشارة في {service.title}
                      <Phone className="mr-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* الحاسبات - Calculator Page */}
          <TabsContent value="calculator" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-brand-dark mb-4">حاسبة الأسقف الهوردي</h2>
              <p className="text-xl text-muted-foreground">احسب كمية المواد المطلوبة للأسقف الهوردي بدقة</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* نموذج الإدخال - Input Form */}
              <Card className="shadow-brand-medium">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-brand-dark">
                    <Calculator className="ml-3 h-5 w-5" />
                    بيانات المشروع
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="length">الطول (متر)</Label>
                      <Input
                        id="length"
                        type="number"
                        value={calculatorInputs.length}
                        onChange={(e) => setCalculatorInputs({...calculatorInputs, length: e.target.value})}
                        placeholder="أدخل الطول"
                      />
                    </div>
                    <div>
                      <Label htmlFor="width">العرض (متر)</Label>
                      <Input
                        id="width"
                        type="number"
                        value={calculatorInputs.width}
                        onChange={(e) => setCalculatorInputs({...calculatorInputs, width: e.target.value})}
                        placeholder="أدخل العرض"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="waste">نسبة الهدر (%)</Label>
                    <Input
                      id="waste"
                      type="number"
                      value={calculatorInputs.wastePercentage}
                      onChange={(e) => setCalculatorInputs({...calculatorInputs, wastePercentage: e.target.value})}
                    />
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-brand-dark">مقاسات البلوك (سم)</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="blockLength">الطول</Label>
                        <Input
                          id="blockLength"
                          type="number"
                          value={calculatorInputs.blockLength}
                          onChange={(e) => setCalculatorInputs({...calculatorInputs, blockLength: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="blockWidth">العرض</Label>
                        <Input
                          id="blockWidth"
                          type="number"
                          value={calculatorInputs.blockWidth}
                          onChange={(e) => setCalculatorInputs({...calculatorInputs, blockWidth: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="blockHeight">الارتفاع</Label>
                        <Input
                          id="blockHeight"
                          type="number"
                          value={calculatorInputs.blockHeight}
                          onChange={(e) => setCalculatorInputs({...calculatorInputs, blockHeight: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="steelDiameter">قطر الحديد (ملم)</Label>
                      <Input
                        id="steelDiameter"
                        type="number"
                        value={calculatorInputs.steelDiameter}
                        onChange={(e) => setCalculatorInputs({...calculatorInputs, steelDiameter: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="cementRatio">نسبة الأسمنت (كغ/م³)</Label>
                      <Input
                        id="cementRatio"
                        type="number"
                        value={calculatorInputs.cementRatio}
                        onChange={(e) => setCalculatorInputs({...calculatorInputs, cementRatio: e.target.value})}
                      />
                    </div>
                  </div>

                  <Button 
                    onClick={calculateResults} 
                    className="w-full bg-gradient-brand hover:opacity-90 transition-brand"
                    size="lg"
                  >
                    احسب الكميات
                    <Calculator className="mr-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* النتائج - Results */}
              <Card className="shadow-brand-medium">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center text-xl text-brand-dark">
                      <FileText className="ml-3 h-5 w-5" />
                      نتائج الحسابات
                    </CardTitle>
                    {calculatorResults && (
                      <Button 
                        onClick={printReport}
                        variant="outline"
                        size="sm"
                        className="no-print"
                      >
                        <Printer className="ml-2 h-4 w-4" />
                        طباعة
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {calculatorResults ? (
                    <div className="space-y-4" id="calculator-report">
                      <div className="print-only mb-4">
                        <h2 className="text-2xl font-bold text-center mb-2">تقرير حاسبة الأسقف الهوردي</h2>
                        <p className="text-center text-lg">مكتب عبدالرقيب عبدالله عبده سعد للمحاسبة</p>
                        <p className="text-center">التاريخ: {new Date().toLocaleDateString('ar-YE')}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">المساحة الإجمالية:</span>
                          <span className="text-brand-primary font-bold">{calculatorResults.totalArea} م²</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">البلوك النظري:</span>
                          <span className="text-brand-primary font-bold">{calculatorResults.theoreticalBlocks} قطعة</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">البلوك مع الهدر:</span>
                          <span className="text-brand-primary font-bold">{calculatorResults.totalBlocks} قطعة</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">حجم البلوك:</span>
                          <span className="text-brand-primary font-bold">{calculatorResults.blockVolume} م³</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">الخرسانة الإجمالية:</span>
                          <span className="text-brand-primary font-bold">{calculatorResults.totalConcrete} م³</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">الخرسانة الصافية:</span>
                          <span className="text-brand-primary font-bold">{calculatorResults.netConcrete} م³</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">وزن الحديد:</span>
                          <span className="text-brand-primary font-bold">{calculatorResults.steelWeight} كغ</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">عدد الأسياخ:</span>
                          <span className="text-brand-primary font-bold">{calculatorResults.numberOfRebars} سيخ</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">أكياس الأسمنت:</span>
                          <span className="text-brand-primary font-bold">{calculatorResults.cementBags} كيس</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">حجم الرمل:</span>
                          <span className="text-brand-primary font-bold">{calculatorResults.sandVolume} م³</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="font-medium">حجم الزلط:</span>
                          <span className="text-brand-primary font-bold">{calculatorResults.gravelVolume} م³</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <Calculator className="mx-auto h-16 w-16 mb-4 opacity-50" />
                      <p className="text-lg">أدخل البيانات واضغط على "احسب الكميات" لعرض النتائج</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* فريق العمل - Team Page */}
          <TabsContent value="team" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-dark mb-4">فريق العمل</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                فريق من المحاسبين المعتمدين والخبراء المتخصصين
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-brand-medium hover:shadow-brand-strong transition-brand">
                <CardContent className="text-center pt-6">
                  <div className="bg-gradient-brand text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">عبدالرقيب عبدالله عبده سعد</h3>
                  <p className="text-brand-primary font-semibold mb-3">محاسب قانوني معتمد - المؤسس والمدير العام</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    محاسب قانوني معتمد بخبرة تزيد عن 15 عام في مجال المحاسبة والمراجعة والاستشارات المالية. 
                    متخصص في إعداد القوائم المالية وتدقيق الحسابات وفقاً للمعايير المحاسبية الدولية.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-brand-medium hover:shadow-brand-strong transition-brand">
                <CardContent className="text-center pt-6">
                  <div className="bg-gradient-accent text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">أحمد محمد علي</h3>
                  <p className="text-brand-primary font-semibold mb-3">مدير الاستشارات المالية</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    خبير في الاستشارات المالية والضريبية مع خبرة 10 سنوات. متخصص في التخطيط المالي 
                    الاستراتيجي ودراسات الجدوى الاقتصادية للمشاريع الاستثمارية.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-brand-medium hover:shadow-brand-strong transition-brand">
                <CardContent className="text-center pt-6">
                  <div className="bg-brand-secondary text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">فاطمة سالم أحمد</h3>
                  <p className="text-brand-primary font-semibold mb-3">مديرة قسم المراجعة والتدقيق</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    محاسبة معتمدة متخصصة في مراجعة وتدقيق القوائم المالية. خبرة 8 سنوات في تقييم أنظمة 
                    الرقابة الداخلية وضمان الامتثال للمعايير المحاسبية المعتمدة.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* التواصل - Contact Page */}
          <TabsContent value="contact" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-dark mb-4">تواصل معنا</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                نحن هنا لخدمتك ومساعدتك في جميع احتياجاتك المحاسبية والاستشارية
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* معلومات الاتصال - Contact Information */}
              <Card className="shadow-brand-medium">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-dark">معلومات الاتصال</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-reverse space-x-4">
                    <div className="bg-gradient-brand text-white p-3 rounded-lg">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark">رقم الهاتف</p>
                      <p className="text-lg">7777 21 27 6</p>
                      <p className="text-lg">7831 50 102</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-reverse space-x-4">
                    <div className="bg-gradient-brand text-white p-3 rounded-lg">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark">البريد الإلكتروني</p>
                      <p className="text-lg">saadoffice2189@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-reverse space-x-4">
                    <div className="bg-gradient-brand text-white p-3 rounded-lg">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark">العنوان</p>
                      <p className="text-lg">عدن - المنصورة - التسعين</p>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white transition-brand"
                    size="lg"
                    onClick={() => window.open('https://wa.me/+9677777212776', '_blank')}
                  >
                    <MessageCircle className="ml-2 h-5 w-5" />
                    تواصل عبر الواتساب
                  </Button>
                </CardContent>
              </Card>

              {/* خريطة جوجل - Google Maps */}
              <Card className="shadow-brand-medium">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-dark">موقعنا على الخريطة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-80 bg-brand-light rounded-lg flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.123456789!2d45.0364!3d12.7794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQ2JzQ1LjgiTiA0NcKwMDInMTEuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="موقع مكتب عبدالرقيب عبدالله عبده سعد للمحاسبة - عدن، اليمن"
                      aria-label="خريطة توضح موقع مكتب المحاسبة في عدن - المنصورة - التسعين"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </main>
      </Tabs>

      {/* الفوتر - Footer */}
      <footer className="bg-brand-dark text-white py-12 mt-16 no-print">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">مكتب عبدالرقيب عبدالله</h3>
              <p className="text-white/80 leading-relaxed">
                مكتب محاسبة واستشارات مالية معتمد يقدم خدمات متخصصة للشركات والمؤسسات
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">خدماتنا</h3>
              <ul className="space-y-2 text-white/80">
                <li>مراجعة وتدقيق الحسابات</li>
                <li>استشارات مالية وضريبية</li>
                <li>دراسات الجدوى الاقتصادية</li>
                <li>تحليل الأنظمة المالية</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
              <div className="space-y-2 text-white/80">
                <p>📱 7777 21 27 6</p>
                <p>📱 7831 50 102</p>
                <p>📧 saadoffice2189@gmail.com</p>
                <p>📍 عدن - المنصورة - التسعين</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} مكتب عبدالرقيب عبدالله عبده سعد للمحاسبة - ترخيص رقم 2189</p>
          </div>
        </div>
      </footer>

      {/* نافذة التواصل المنبثقة - Contact Modal */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-md" aria-labelledby="contact-modal-title" aria-describedby="contact-modal-description">
          <DialogHeader>
            <DialogTitle id="contact-modal-title" className="text-2xl text-brand-dark">تواصل معنا</DialogTitle>
            <DialogDescription id="contact-modal-description">
              املأ النموذج أدناه وسنتواصل معك قريباً
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <Label htmlFor="contact-name">الاسم الكامل *</Label>
              <Input id="contact-name" required placeholder="أدخل اسمك الكامل" />
            </div>
            
            <div>
              <Label htmlFor="contact-phone">رقم الهاتف *</Label>
              <Input id="contact-phone" required type="tel" placeholder="أدخل رقم هاتفك" />
            </div>
            
            <div>
              <Label htmlFor="contact-email">البريد الإلكتروني</Label>
              <Input id="contact-email" type="email" placeholder="أدخل بريدك الإلكتروني" />
            </div>
            
            <div>
              <Label htmlFor="contact-service">الخدمة المطلوبة</Label>
              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر الخدمة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="مراجعة وتدقيق حسابات">مراجعة وتدقيق حسابات</SelectItem>
                  <SelectItem value="إستشارات مالية وضريبية">إستشارات مالية وضريبية</SelectItem>
                  <SelectItem value="دراسات جدوى">دراسات جدوى</SelectItem>
                  <SelectItem value="تحليل أنظمة مالية وإدارية">تحليل أنظمة مالية وإدارية</SelectItem>
                  <SelectItem value="أخرى">أخرى</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="contact-message">الرسالة</Label>
              <Textarea 
                id="contact-message" 
                placeholder="اكتب رسالتك هنا..."
                className="min-h-[100px]"
              />
            </div>
            
            <Button type="submit" className="w-full bg-gradient-brand hover:opacity-90 transition-brand">
              إرسال الرسالة
              <Mail className="mr-2 h-4 w-4" />
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AccountingWebsite;