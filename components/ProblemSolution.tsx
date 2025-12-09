import React from 'react';
import { IconX, IconCheckCircle } from './Icons';

const ProblemSolution: React.FC = () => {
  return (
    <section id="problems" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            为什么选择拼岛？
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* The Old Way */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <IconX className="w-32 h-32 text-slate-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 flex flex-wrap items-center gap-2">
              <span className="bg-slate-200 text-slate-600 p-2 rounded-lg text-sm whitespace-nowrap">传统方式</span>
              <span className="break-keep">微信群拼团</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IconX className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-base sm:text-lg text-slate-900 mb-1">信息混乱响应慢</strong>
                  <p className="text-sm sm:text-base text-slate-500">手动爬楼看消息，团长回复不及时，容易错过拼团。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconX className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900">拼团周期不确定</strong>
                  <p className="text-sm text-slate-500">不知道什么时候拼满，货物积压时间长，心理负担大。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconX className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900">地址备注易出错</strong>
                  <p className="text-sm text-slate-500">手动填写地址易错漏信息，进而导致丢件漏件。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconX className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900">计费规则不透明</strong>
                  <p className="text-sm text-slate-500">商家说运费多少就是多少，无法核验、没有保障。</p>
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
              <span className="bg-brand-200 text-brand-800 p-2 rounded-lg text-sm whitespace-nowrap">拼岛模式</span>
              <span className="break-keep">智能化平台体验</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IconCheckCircle className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-base sm:text-lg text-brand-900 mb-1">就近推荐适合的拼团</strong>
                  <p className="text-sm sm:text-base text-brand-700">基于你的地址，自动推荐周边最近、最快的拼团。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconCheckCircle className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-brand-900">进度与节点全程透明</strong>
                  <p className="text-sm text-brand-700">App实时推送拼团关键节点（截单、发货、送达），随时掌握进度。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconCheckCircle className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-brand-900">一键生成专属地址标签</strong>
                  <p className="text-sm text-brand-700">一键复制含团标签的专属地址，轻松下单，三重校验确保包裹被精准识别。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconCheckCircle className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-brand-900">计费标准统一透明</strong>
                  <p className="text-sm text-brand-700">平台规范计费方式，净重、体积重、分摊重量清晰展示，杜绝隐形收费。</p>
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