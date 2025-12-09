import React from 'react';
import { IconMapPin, IconBell, IconBox, IconTag } from './Icons';

const UserFeatures: React.FC = () => {
  const features = [
    {
      icon: <IconMapPin className="w-8 h-8 text-white" />,
      title: "附近拼团",
      desc: "打开 App 即可查看周边的活跃拼团，优先展示距离更近、发货更快的团，让您轻松就近跟团。",
      color: "bg-brand-500" // Red/Rose
    },
    {
      icon: <IconBell className="w-8 h-8 text-white" />,
      title: "进度实时推送",
      desc: "无需反复刷群。截单、打包、发货、送达等关键节点，App自动推送提醒，不错过任何重要进度。",
      color: "bg-accent-500" // Violet
    },
    {
      icon: <IconTag className="w-8 h-8 text-white" />,
      title: "自动地址标签",
      desc: "为每个拼团生成唯一的地址标签，一键复制即可下单，避免错件漏件。",
      color: "bg-orange-500" // Orange (Warm)
    },
    {
      icon: <IconBox className="w-8 h-8 text-white" />,
      title: "包裹精细管理",
      desc: "支持商家代录或自行录入单号，并可添加精细处理备注，让包裹管理与打包更贴合您的个人需求。",
      color: "bg-rose-600" // Deep Rose
    }
  ];

  return (
    <section id="features-user" className="py-16 sm:py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            拼岛，让拼团更简单
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
              {/* Gentle gradient red overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-red-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${f.color} flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}>
                  {f.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserFeatures;