
import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Location: React.FC = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="location" className="py-32 bg-froota-wood dark:bg-froota-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Info Column */}
          <div className="w-full lg:w-2/5 space-y-12">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.4em] text-froota-pink mb-6">Kontakt & Lokacija</p>
              <h2 className="text-6xl md:text-8xl font-impact text-froota-dark dark:text-white uppercase leading-none tracking-tighter mb-8">
                {t('location.title')}
              </h2>
              <p className="text-xl text-froota-dark/50 dark:text-white/40 leading-relaxed max-w-sm">
                {t('location.subtitle')}
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-center group">
                <div className="w-14 h-14 rounded-3xl bg-white dark:bg-white/5 flex items-center justify-center text-froota-pink shadow-lg shadow-black/5 group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-froota-dark/40 dark:text-white/30 mb-1">{t('location.address')}</p>
                  <p className="text-lg font-bold text-froota-dark dark:text-white">{BUSINESS_INFO.address}, {BUSINESS_INFO.city}</p>
                </div>
              </div>

              <div className="flex gap-6 items-center group">
                <div className="w-14 h-14 rounded-3xl bg-white dark:bg-white/5 flex items-center justify-center text-froota-green shadow-lg shadow-black/5 group-hover:scale-110 transition-transform">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-froota-dark/40 dark:text-white/30 mb-1">{t('location.hours')}</p>
                  <p className="text-lg font-bold text-froota-dark dark:text-white">{BUSINESS_INFO.workingHours}</p>
                </div>
              </div>

              <div className="flex gap-6 items-center group">
                <div className="w-14 h-14 rounded-3xl bg-white dark:bg-white/5 flex items-center justify-center text-froota-pink shadow-lg shadow-black/5 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-froota-dark/40 dark:text-white/30 mb-1">WhatsApp / Mob</p>
                  <p className="text-lg font-bold text-froota-dark dark:text-white">{BUSINESS_INFO.phone}</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <iframe 
                src={BUSINESS_INFO.mapUrl}
                className="w-full h-64 rounded-[40px] shadow-2xl grayscale dark:invert dark:opacity-60 hover:grayscale-0 hover:invert-0 transition-all duration-700"
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                title="Froota Zagreb Map"
              ></iframe>
            </div>
          </div>

          {/* Form Column */}
          <div className="w-full lg:w-3/5">
            <div className="bg-white dark:bg-white/5 rounded-[60px] p-8 md:p-16 border border-white dark:border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-froota-pink/10 blur-[120px] -z-10 group-hover:bg-froota-pink/20 transition-all duration-1000"></div>
              
              <div className="mb-12">
                <h3 className="text-4xl font-impact text-froota-dark dark:text-white uppercase tracking-tight mb-4">{t('location.contact_title')}</h3>
                <p className="text-lg text-froota-dark/50 dark:text-white/40">{t('location.contact_desc')}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-froota-dark/40 dark:text-white/30 ml-2">{t('location.label_name')}</label>
                    <input 
                      required
                      type="text" 
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-froota-wood dark:bg-white/5 border-none rounded-3xl px-8 py-5 text-froota-dark dark:text-white font-bold focus:ring-2 ring-froota-pink transition-all placeholder:text-froota-dark/20" 
                      placeholder="Petar Perić"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-froota-dark/40 dark:text-white/30 ml-2">{t('location.label_email')}</label>
                    <input 
                      required
                      type="email" 
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-froota-wood dark:bg-white/5 border-none rounded-3xl px-8 py-5 text-froota-dark dark:text-white font-bold focus:ring-2 ring-froota-pink transition-all placeholder:text-froota-dark/20" 
                      placeholder="petar@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-froota-dark/40 dark:text-white/30 ml-2">{t('location.label_message')}</label>
                  <textarea 
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-froota-wood dark:bg-white/5 border-none rounded-3xl px-8 py-6 text-froota-dark dark:text-white font-bold focus:ring-2 ring-froota-pink transition-all placeholder:text-froota-dark/20 resize-none" 
                    placeholder="Pitanje..."
                  ></textarea>
                </div>

                <button 
                  disabled={submitted}
                  type="submit" 
                  className={`w-full py-6 rounded-3xl font-impact text-xl uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all ${submitted ? 'bg-froota-green text-froota-dark' : 'bg-froota-pink text-white hover:bg-froota-dark'}`}
                >
                  {submitted ? (
                    <><CheckCircle size={24} /> {t('location.success')}</>
                  ) : (
                    <><Send size={20} /> {t('location.btn_send')}</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
