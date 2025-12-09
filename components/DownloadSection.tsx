import React from 'react';
import { IconSmartphone } from './Icons';

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-16 sm:py-20 md:py-24 bg-brand-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            准备好一起"上岛"了吗？
          </h2>
          <p className="text-brand-100 text-base sm:text-lg md:text-xl mb-10 leading-relaxed">
            立即下载拼岛App，加入您身边的转运社区。<br />
            新用户注册即送10元运费抵扣券！
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="#" className="hover:opacity-90 transition-opacity">
              <img 
                src={`${import.meta.env.BASE_URL}assets/applestore.png`}
                alt="Download on the App Store" 
                className="h-14 w-auto"
                loading="lazy"
              />
            </a>

            <a href="#" className="hover:opacity-90 transition-opacity">
              <img 
                src={`${import.meta.env.BASE_URL}assets/googleplay.png`}
                alt="Get it on Google Play" 
                className="h-14 w-auto"
                loading="lazy"
              />
            </a>
          </div>

          <div className="mt-12 p-6 bg-white/10 backdrop-blur-md rounded-2xl max-w-sm mx-auto border border-white/20">
             <div className="flex items-center gap-4 text-left">
                <div className="bg-white p-2 rounded-lg">
                    {/* Mock QR */}
                    <div className="w-16 h-16 bg-slate-900"></div>
                </div>
                <div>
                   <p className="font-bold text-white">扫码直接下载</p>
                   <p className="text-xs text-brand-100">支持 iOS & Android</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DownloadSection;