
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Menu, X } from "lucide-react";
import { Logo } from '../Logo';
import { motion } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface HeaderProps {
  tabs: Tab[];
  activeTab: string;
  isMobileMenuOpen: boolean;
  onTabChange: (tabId: string) => void;
  onMobileMenuToggle: () => void;
}

export function Header({ tabs, activeTab, isMobileMenuOpen, onTabChange, onMobileMenuToggle }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-primary shadow-lg' : 'bg-brand-primary'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo and Title */}
          <div 
            className="flex items-center space-x-reverse space-x-3 cursor-pointer"
            onClick={() => onTabChange('home')}
          >
            <Logo className="h-10 w-auto text-white" />
            <div className="text-white">
              <h1 className="text-lg font-bold">عبدالرقيب عبدالله عبده سعد</h1>
              <p className="text-xs opacity-90">محاسب قانوني معتمد - ترخيص رقم 2189</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <TabsList className="bg-white/20 border-white/30">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className="text-white data-[state=active]:bg-white data-[state=active]:text-brand-primary transition-brand"
                >
                  <tab.icon className="ml-2 h-4 w-4" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/20"
            onClick={onMobileMenuToggle}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
