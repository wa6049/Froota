import React from 'react';
import { Zap, Leaf, Truck, Smile } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-froota-green" />,
      title: t('features.fresh_title'),
      desc: t('features.fresh_desc')
    },
    {
      icon: <Zap className="w-8 h-8 text-froota-orange" />,
      title: t('features.on_spot_title'),
      desc: t('features.on_spot_desc')
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-500" />,
      title: t('features.delivery_title'),
      desc: t('features.delivery_desc')
    },
    {
      icon: <Smile className="w-8 h-8 text-froota-pink" />,
      title: t('features.exotic_title'),
      desc: t('features.exotic_desc')
    }
  ];

  return (
    <section className="py-16 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4">
              <div className="mb-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                {f.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;