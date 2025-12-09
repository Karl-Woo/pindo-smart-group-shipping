import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { num: '01', title: '发现拼团', desc: '结合智能推荐，快速找到附近可加入的拼团。' },
    { num: '02', title: '下单寄件', desc: '复制专属地址，购物下单寄往转运仓。' },
    { num: '03', title: '进度追踪', desc: 'App 自动推送拼团进度与包裹入库情况，全程掌握最新动态。' },
    { num: '04', title: '支付收货', desc: '发货后自动结算运费，支付完成即可安心等待包裹送达。' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-slate-900">简单四步，完成拼团寄件</h2>
        </div>

        <div className="relative grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 z-0 transform -translate-y-1/2"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 text-center group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-white border-4 border-brand-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:border-brand-500 transition-colors shadow-sm">
                <span className="text-2xl sm:text-3xl font-black text-brand-600">{step.num}</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors duration-300">{step.title}</h3>
              <p className="text-sm sm:text-base text-slate-500 px-2 sm:px-4 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;