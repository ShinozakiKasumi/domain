import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { languages, translations } from './i18n';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

// 基础域名数据
const domainData = [
  {
    name: 'asaka.moe',
    tags: ['ACG', 'Blog'],
    flagSvg: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
    countryName: 'Japan / Global'
  },
  {
    name: 'greyfox.dev',
    tags: ['Developer', 'Tech'],
    flagSvg: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/International_Flag_of_Planet_Earth.svg',
    countryName: 'Global'
  },
  {
    name: 'miku.rs',
    tags: ['Short', 'Rust', 'Miku'],
    flagSvg: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg',
    countryName: 'Serbia'
  },
  {
    name: 'zutomayo.org',
    tags: ['Music', 'Fan Club'],
    flagSvg: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/International_Flag_of_Planet_Earth.svg',
    countryName: 'Global'
  },
  {
    name: 'abc.sc',
    tags: ['3-Letter', 'Nav'],
    flagSvg: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg',
    countryName: 'Seychelles'
  }
];

// 液态背景组件
const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-slate-950">
      {/* 模糊发光液滴色块 - 冷色调配置 */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px]"
        animate={{
          x: ['0%', '20%', '0%'],
          y: ['0%', '10%', '0%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-900/10 blur-[120px]"
        animate={{
          x: ['0%', '-20%', '0%'],
          y: ['0%', '-10%', '0%'],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-[30%] left-[40%] w-[40%] h-[40%] rounded-full bg-indigo-900/15 blur-[100px]"
        animate={{
          x: ['-10%', '10%', '-10%'],
          y: ['-10%', '10%', '-10%'],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* 噪点纹理，增加质感 */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
    </div>
  );
};

// 列表项动画配置
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

export default function App() {
  const [langCode, setLangCode] = useState('zh-CN');
  
  const t = translations[langCode] || translations['zh-CN'];

  return (
    <main className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <LiquidBackground />

      <div className="w-full max-w-4xl flex flex-col gap-12">
        {/* Language Switcher */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-2 mb-4"
        >
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => setLangCode(lang.code)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-light transition-all backdrop-blur-md",
                langCode === lang.code
                  ? "bg-cyan-500/20 text-cyan-200 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                  : "bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10"
              )}
            >
              {lang.name}
            </button>
          ))}
        </motion.div>

        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-light tracking-wider text-slate-100">
            {t.title}
          </h1>
          <p className="text-slate-400/80 tracking-wide font-light max-w-lg mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </motion.header>

        {/* Domain List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-4"
        >
          {domainData.map((domain) => {
            const domainT = t.domains[domain.name];

            return (
              <motion.div
                key={domain.name}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl",
                  "bg-slate-900/30 backdrop-blur-xl",
                  "border border-white/5",
                  "hover:bg-slate-800/40 transition-colors duration-500",
                  "shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_30px_-10px_rgba(0,0,0,0.5)]"
                )}
              >
                {/* 微弱的高光 */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
                
                <div className="relative p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                  
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center flex-wrap gap-4">
                      <h2 className="text-2xl font-medium tracking-wide text-slate-100 font-mono flex items-center gap-2">
                        {domain.name}
                      </h2>
                      {domain.flagSvg && (
                        <div className="flex items-center justify-center p-0.5 rounded-sm bg-white/10 ring-1 ring-white/10" title={domain.countryName}>
                          <img 
                            src={domain.flagSvg} 
                            alt={domain.countryName} 
                            className="h-4 w-auto object-cover rounded-[1px] opacity-90"
                            style={{ minWidth: '24px' }}
                          />
                        </div>
                      )}
                      <div className="flex gap-2">
                        {domain.tags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 text-[10px] tracking-wider uppercase rounded-full bg-cyan-900/20 text-cyan-300/80 border border-cyan-800/30">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-slate-300/90 leading-relaxed max-w-2xl font-light">
                        {domainT.desc}
                      </p>
                      <p className="text-xs text-cyan-200/50 leading-relaxed max-w-2xl font-light italic">
                        {domainT.suffix}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 md:gap-8 w-full md:w-auto justify-between md:justify-end border-t border-white/5 md:border-none pt-4 md:pt-0 mt-2 md:mt-0">
                    <div className="flex flex-col items-start md:items-end">
                      <span className="text-xl font-light tracking-wide text-slate-300 flex items-center gap-1">
                        {t.priceText}
                      </span>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-sm font-light transition-colors border border-white/5">
                      {t.acquire}
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Contact */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8 flex flex-col items-center gap-6"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-sm text-slate-400/80 font-light tracking-wide">
            <a 
              href="https://t.me/Akarin2333" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-cyan-400 transition-colors group"
            >
              <span className="p-2 rounded-full bg-white/5 group-hover:bg-cyan-500/10 transition-colors">
                <Send className="w-4 h-4" />
              </span>
              <span>@Akarin2333</span>
            </a>
            
            <a 
              href="mailto:me@abc.sc" 
              className="flex items-center gap-3 hover:text-cyan-400 transition-colors group"
            >
              <span className="p-2 rounded-full bg-white/5 group-hover:bg-cyan-500/10 transition-colors">
                <Mail className="w-4 h-4" />
              </span>
              <span>me@abc.sc</span>
            </a>
          </div>
        </motion.footer>

      </div>
    </main>
  );
}
