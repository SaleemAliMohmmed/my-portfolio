import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, ShieldCheck, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';

const CookieConsent: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    localStorage.setItem('visitor-tracked', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: isRTL ? 100 : -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: isRTL ? 100 : -100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className={`fixed bottom-6 ${isRTL ? 'right-6' : 'left-6'} z-[100] max-w-sm w-full`}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-blue-100 dark:border-gray-700 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                  <Cookie className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                  aria-label="Close cookie consent banner"
                >
                  <X size={20} />
                </button>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {isRTL ? 'تحسين تجربتك' : 'Enhance your experience'}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {isRTL 
                  ? 'نحن نستخدم ملفات الكويز لحفظ تفضيلاتك وتتبع عدد الزوار لتحسين خدماتنا. هل توافق على ذلك؟' 
                  : 'We use cookies to save your preferences and track visitor statistics to improve our services. Do you agree?'}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAccept}
                  className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-200 dark:shadow-none"
                >
                  <Check size={16} />
                  {isRTL ? 'موافق' : 'Accept'}
                </button>
                <button
                  onClick={handleDecline}
                  className="flex-1 px-4 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-xl text-sm font-semibold transition-all duration-300"
                >
                  {isRTL ? 'رفض' : 'Decline'}
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center gap-2 text-[10px] text-gray-400">
                <ShieldCheck size={12} />
                <span>{isRTL ? 'خصوصيتك محمية دائماً' : 'Your privacy is always protected'}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
