import React from 'react';
import { IconMapPin, IconUsers, IconCheckCircle, IconBox, IconStore } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900">
      
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
              海外华人首选转运拼团平台
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent animate-gradient break-keep">
              就近拼团，智能发货
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-brand-100 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Pindo 拼岛 连接有转运需求的海外华人与优质转运公司。通过地理位置智能撮合，告别繁琐的微信接龙，让拼团更高效、更省心。
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#download" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-brand-700 rounded-xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:bg-brand-50 transition-all flex items-center justify-center gap-2">
                <IconUsers className="w-5 h-5 flex-shrink-0" />
                <span className="whitespace-nowrap">我是用户，要去拼团</span>
              </a>
              <a href="#features-merchant" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-brand-800/50 border border-white/20 text-white rounded-xl font-bold text-base sm:text-lg hover:bg-brand-800/70 backdrop-blur-md transition-all flex items-center justify-center gap-2">
                <IconStore className="w-5 h-5 flex-shrink-0" />
                <span className="whitespace-nowrap">我是商家，想要入驻</span>
              </a>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8 text-brand-200 text-xs sm:text-sm font-medium">
              <div className="flex items-center gap-2">
                <IconCheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                <span className="whitespace-nowrap">智能定位推荐</span>
              </div>
              <div className="flex items-center gap-2">
                <IconCheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                <span className="whitespace-nowrap">实时进度追踪</span>
              </div>
              <div className="flex items-center gap-2">
                <IconCheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                <span className="whitespace-nowrap">透明价格体系</span>
              </div>
            </div>
          </div>

          {/* Hero Visual - Mobile App Mockup */}
          <div className="flex-1 w-full relative group">
            <div className="relative mx-auto w-full max-w-[320px] lg:max-w-[380px] aspect-[9/19] bg-slate-900 rounded-[3rem] shadow-2xl border-8 border-slate-800 overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
               {/* Mock App UI */}
               <div className="absolute top-0 left-0 w-full h-full bg-white flex flex-col">
                  
                  {/* Map View - Using Find Group Image */}
                  <div className="flex-1 bg-slate-200 relative overflow-hidden">
                    {/* Find Group Image */}
                    <img 
                      src={`${import.meta.env.BASE_URL}assets/find group.png`}
                      alt="Find Group Map" 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Animated Blue Location Indicator */}
                    <div className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-xl border-2 border-white">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="absolute inset-0 w-8 h-8 bg-blue-500/30 rounded-full animate-ping"></div>
                    </div>
                  </div>

               </div>
            </div>
            
            {/* Floating Elements */}
            <div className="hidden lg:block absolute top-56 left-0 bg-white p-4 rounded-xl shadow-xl border border-slate-50 animate-float" style={{ animationDuration: '3s', animationDelay: '0s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <IconCheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">您的包裹</p>
                  <p className="text-sm font-bold text-slate-800">已入库</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute bottom-64 left-8 bg-white p-4 rounded-xl shadow-xl border border-slate-50 animate-float" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                  <IconMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">周边发现</p>
                  <p className="text-sm font-bold text-slate-800">3个新团开启</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute top-1/3 -right-8 bg-white p-4 rounded-xl shadow-xl border border-slate-50 animate-float" style={{ animationDuration: '3.2s', animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
                  <IconBox className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">你收藏的团</p>
                  <p className="text-sm font-bold text-slate-800">拼团进度已到90%</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
