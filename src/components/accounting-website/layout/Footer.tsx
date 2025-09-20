import { Facebook, Twitter, Linkedin, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import './Footer.css'

export function Footer() {
  const whatsappMessage = encodeURIComponent("مرحباً، لقد رأيت موقعكم وأعجبني. هل يمكنكم تصميم موقع مشابه لي؟");
  return (
    <footer className="bg-brand-dark text-white py-12 md:py-16 no-print">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-brand-primary">عبدالرقيب عبدالله</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              مكتب محاسبة واستشارات مالية معتمد يقدم خدمات متخصصة للشركات والمؤسسات.
            </p>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center">
                <Phone size={18} className="ml-3 text-brand-primary" />
                <span dir="ltr">+967 777 721 276</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="ml-3 text-brand-primary" />
                <span dir="ltr">+967 783 150 102</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="ml-3 text-brand-primary" />
                <a href="mailto:saadoffice2189@gmail.com" className="hover:text-brand-primary transition-colors">saadoffice2189@gmail.com</a>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="ml-3 text-brand-primary" />
                <span>عدن - المنصورة - التسعين</span>
              </div>
            </div>
          </div>
          
          {/* Location Map */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">موقعنا</h3>
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d44.9167!3d12.7833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQ3JzAwLjAiTiA0NMKwNTUnMDAuMCJF!5e0!3m2!1sen!2sye!4v1234567890123!5m2!1sen!2sye"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع مكتب عبدالرقيب عبدالله عبده سعد"
              ></iframe>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">خدماتنا</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#services" className="hover:text-brand-primary transition-colors">مراجعة وتدقيق الحسابات</a></li>
              <li><a href="#services" className="hover:text-brand-primary transition-colors">استشارات مالية وضريبية</a></li>
              <li><a href="#services" className="hover:text-brand-primary transition-colors">دراسات الجدوى الاقتصادية</a></li>
              <li><a href="#services" className="hover:text-brand-primary transition-colors">تحليل الأنظمة المالية</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-brand-primary transition-colors">من نحن</a></li>
              <li><a href="#services" className="hover:text-brand-primary transition-colors">خدماتنا</a></li>
              <li><a href="#achievements" className="hover:text-brand-primary transition-colors">إنجازاتنا</a></li>
              <li><a href="#team" className="hover:text-brand-primary transition-colors">فريق العمل</a></li>
              <li><a href="#contact" className="hover:text-brand-primary transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">تابعنا</h3>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-white hover:text-brand-primary transition-colors p-2 rounded-full bg-white/10">
                <Facebook size={22} />
              </a>
              <a href="#" className="text-white hover:text-brand-primary transition-colors p-2 rounded-full bg-white/10">
                <Twitter size={22} />
              </a>
              <a href="#" className="text-white hover:text-brand-primary transition-colors p-2 rounded-full bg-white/10">
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} مكتب عبدالرقيب عبدالله عبده سعد للمحاسبة - ترخيص رقم 2189. جميع الحقوق محفوظة.</p>
           <div className="developer-info">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-l4kEEZNj2SvAs7hEs9grCq3sJiD94eB3JO7DHweIo78kbV73dk9WrDLGFONBivbGVSEcrw5Q9XZIz3iDsS-DtMTe7_3XnSz15DORBlhySQUDjT_dNZmnuJnOZVy4ckcgQ2trVgn-KlplvZ8camJOku89d8Xqdmpvzx9-qmLn4IIIdq1DgPAnyGX/s2480/abdullah.webp" 
                 alt="م. عبدالله الحقبي" className="developer-photo" />
            <div>
                <p>تصميم وتطوير: <strong>م. عبدالله الحقبي</strong></p>
                <p className="contact-note">
                    هل تريد موقعًا احترافيًا لعملك؟ تواصل معي الآن!
                </p>
                <a href={`https://wa.me/967774410859?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                    <MessageCircle size={20} /> 
                </a>
            </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
