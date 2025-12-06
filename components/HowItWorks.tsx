import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { num: '01', title: '发现拼团', desc: '基于您的位置，推荐周边即将成团的线路。' },
    { num: '02', title: '一键加入', desc: '复制专属地址标签，购物下单寄往转运仓。' },
    { num: '03', title: '进度追踪', desc: 'App 推送包裹入库通知与拼团进度提醒。' },
    { num: '04', title: '支付收货', desc: '拼满自动结算，支付运费后坐等包裹上门。' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">简单的四步流程</h2>
        </div>

        <div className="relative grid md:grid-cols-4 gap-8">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 z-0 transform -translate-y-1/2"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 text-center group">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-brand-100 rounded-full flex items-center justify-center mb-6 group-hover:border-brand-500 transition-colors shadow-sm">
                <span className="text-3xl font-black text-brand-600">{step.num}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-500 px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;