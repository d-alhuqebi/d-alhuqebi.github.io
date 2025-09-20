
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
  selectedService: string;
  onServiceChange: (service: string) => void;
}

export function ContactModal({ isOpen, onOpenChange, onSubmit, selectedService, onServiceChange }: ContactModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" aria-labelledby="contact-modal-title" aria-describedby="contact-modal-description">
        <DialogHeader>
          <DialogTitle id="contact-modal-title" className="text-2xl text-brand-dark">تواصل معنا</DialogTitle>
          <DialogDescription id="contact-modal-description">
            املأ النموذج أدناه وسنتواصل معك قريباً
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={onSubmit} className="space-y-4">
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
            <Select value={selectedService} onValueChange={onServiceChange}>
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
  );
}
