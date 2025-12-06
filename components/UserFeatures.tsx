import React from 'react';
import { IconMapPin, IconBell, IconBox, IconTag } from './Icons';

const UserFeatures: React.FC = () => {
  const features = [
    {
      icon: <IconMapPin className="w-8 h-8 text-white" />,
      title: "附近拼团",
      desc: "打开 App 即可查看周边的活跃拼团。优先展示快拼满、同区域的团，让您就近上车，不再舍近求远。",
      color: "bg-brand-500" // Red/Rose
    },
    {
      icon: <IconBell className="w-8 h-8 text-white" />,
      title: "进度实时推送",
      desc: "不用再反复刷群。拼团进度达到 50%、80% 或即将截单时，系统自动发送推送提醒，不错过任何发货窗口。",
      color: "bg-accent-500" // Violet
    },
    {
      icon: <IconTag className="w-8 h-8 text-white" />,
      title: "自动地址标签",
      desc: "系统为每个团生成唯一的地址标签。复制即可购物，转运公司扫码自动识别归类，彻底告别丢件错发。",
      color: "bg-orange-500" // Orange (Warm)
    },
    {
      icon: <IconBox className="w-8 h-8 text-white" />,
      title: "包裹全程管理",
      desc: "支持“授权商家录入”或“手动录入”。包裹入库、打包、称重、付款，全流程状态在 App 内清晰可见。",
      color: "bg-rose-600" // Deep Rose
    }
  ];

  return (
    <section id="features-user" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">User Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            为海外用户打造的极致体验
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`w-14 h-14 rounded-xl ${f.color} flex items-center justify-center mb-6 shadow-lg`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserFeatures;