import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 0C7.163 0 0 6.716 0 15c0 2.646.708 5.12 1.94 7.27L0 32l9.93-1.94A15.9 15.9 0 0 0 16 30c8.837 0 16-6.716 16-15S24.837 0 16 0z"
      fill="#25D366"
    />
    <path
      d="M24.26 19.74c-.34-.17-2.02-1-2.33-1.11-.31-.12-.54-.17-.77.17-.23.34-.88 1.11-1.08 1.34-.2.23-.4.26-.74.09-.34-.17-1.43-.53-2.72-1.69-1-0.89-1.67-1.99-1.87-2.33-.2-.34-.02-.53.15-.7.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.7-1.85-1.06-2.53-.28-.68-.57-.59-.77-.6-.2-.01-.43-.01-.66-.01-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.85 0 1.68 1.23 3.3 1.4 3.53.17.23 2.42 3.69 5.86 5.17.82.35 1.46.56 1.96.72.82.26 1.56.22 2.15.13.66-.1 2.02-.83 2.31-1.63.28-.8.28-1.49.2-1.63-.09-.14-.31-.23-.65-.4z"
      fill="#fff"
    />
  </svg>
);

export const WhatsAppButton = () => {
  const phoneNumber = '9677721276'; // Replace with your WhatsApp number
  const message = 'مرحباً، أود الاستفسار عن خدماتكم المحاسبية'; // Replace with your default message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
    >
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1, boxShadow: '0px 0px 15px rgba(37, 211, 102, 0.5)' }}
        whileTap={{ scale: 0.95 }}
      >
        <WhatsAppIcon />
        {/* Tooltip for larger screens */}
        <motion.span 
          className="absolute hidden md:block right-full mr-3 bg-gray-900 text-white text-sm py-2 px-3 rounded-lg whitespace-nowrap"
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
        >
          تواصل معنا عبر الواتساب
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </motion.span>
      </motion.a>
      
      {/* Mobile tooltip */}
      <motion.div
        className="md:hidden absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        الواتساب
      </motion.div>
    </motion.div>
  );
};
