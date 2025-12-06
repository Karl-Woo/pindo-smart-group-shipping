import React from 'react';
import { IconX, IconCheckCircle } from './Icons';

const ProblemSolution: React.FC = () => {
  return (
    <section id="problems" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            为什么选择 Pindo 拼岛？
          </h2>
          <p className="text-lg text-slate-600">
            解决传统拼团的“等待长、流程乱、信任难”，为您带来全新的转运体验。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* The Old Way */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <IconX className="w-32 h-32 text-slate-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 flex flex-wrap items-center gap-2">
              <span className="bg-slate-200 text-slate-600 p-2 rounded-lg text-sm whitespace-nowrap">传统方式</span>
              <span className="break-keep">微信群接龙</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IconX className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900">信息混乱响应慢</strong>
                  <p className="text-sm text-slate-500">手动爬楼看消息，团长回复不及时，容易漏单。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconX className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900">拼团周期不确定</strong>
                  <p className="text-sm text-slate-500">不知道何时拼满，货物积压时间长，心理负担大。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconX className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900">地址备注易出错</strong>
                  <p className="text-sm text-slate-500">手动复制粘贴地址，格式不统一，导致寄错丢件。</p>
                </div>
              </li>
            </ul>
          </div>

          {/* The Pindo Way */}
          <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100 relative overflow-hidden shadow-lg group">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <IconCheckCircle className="w-32 h-32 text-brand-400 group-hover:text-brand-600 transition-colors" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-900 mb-6 flex flex-wrap items-center gap-2">
              <span className="bg-brand-200 text-brand-800 p-2 rounded-lg text-sm whitespace-nowrap">Pindo 拼岛 模式</span>
              <span className="break-keep">智能平台化</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IconCheckCircle className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-brand-900">地理位置智能推荐</strong>
                  <p className="text-sm text-brand-700">基于常驻地址，自动推荐周边最近、最快拼团。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconCheckCircle className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-brand-900">实时进度透明化</strong>
                  <p className="text-sm text-brand-700">App推送关键节点（50%, 80%, 截单），心中有数。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconCheckCircle className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-brand-900">一键生成专属标签</strong>
                  <p className="text-sm text-brand-700">自动生成包含团ID的唯一地址标签，扫码即入库。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;