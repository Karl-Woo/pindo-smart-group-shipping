import React from 'react';
import { IconTrendingUp, IconUsers, IconCreditCard, IconCheckCircle } from './Icons';

const MerchantFeatures: React.FC = () => {
  return (
    <section id="features-merchant" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/30 transform skew-x-12"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1">
            <span className="text-accent-500 font-bold tracking-wider uppercase text-sm">For Merchants</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              让商家“轻运营、高转化”
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              拼岛为转运公司提供完整的拼团数字化解决方案。从获客、拼团管理到结算，全面解决传统模式下的人脉依赖、库存积压与管理混乱问题。
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700 text-accent-500">
                  <IconUsers className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">地理位置精准获客</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    摆脱对团长人脉的单一依赖。通过基于位置的推荐机制，精准触达团长附近的潜在用户，突破增长瓶颈。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700 text-accent-500">
                  <IconCheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">高效管理团批次，持续滚动开团</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    实时展示拼团进度并自动推送关键节点，支持稳定、高频地滚动发起团批次，显著减少人工沟通与客服成本。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700 text-accent-500">
                  <IconCreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">智能分账与支付</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    自动拆分净重、体积重、箱子公摊等费用项，支持复杂计费场景。一键拉起支付并自动催付，让资金结算更高效。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 bg-accent-600 text-white font-bold rounded-lg hover:bg-accent-700 transition-colors">
                申请入驻合作
                <IconTrendingUp className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Visual representation of Merchant Dashboard */}
          <div className="flex-1 w-full">
            <div className="bg-white rounded-xl shadow-2xl p-2 md:p-4 rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden">
                {/* Mock Header */}
                <div className="h-12 border-b border-slate-200 bg-white flex items-center px-4 justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">Pindo Merchant Admin</div>
                </div>
                {/* Mock Content */}
                <div className="p-6">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <div className="text-sm text-slate-500">本月发货量 (kg)</div>
                      <div className="text-3xl font-bold text-slate-800">2,450.5</div>
                    </div>
                    <div className="text-green-600 text-sm font-bold bg-green-100 px-2 py-1 rounded">+12.5%</div>
                  </div>
                  
                  {/* Table Mock */}
                  <div className="w-full bg-white border border-slate-200 rounded-lg overflow-hidden">
                    <div className="bg-slate-100 px-2 sm:px-4 py-2 hidden sm:flex text-xs font-bold text-slate-500 border-b border-slate-200">
                      <div className="w-1/4">团名称</div>
                      <div className="w-1/4">状态</div>
                      <div className="w-1/4">进度</div>
                      <div className="w-1/4 text-right">操作</div>
                    </div>
                    <div className="px-2 sm:px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 text-sm border-b border-slate-100">
                      <div className="w-full sm:w-1/4 font-medium text-slate-800">JSQ 空运普货</div>
                      <div className="w-full sm:w-1/4"><span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">进行中</span></div>
                      <div className="w-full sm:w-1/4 text-slate-500">85%</div>
                      <div className="w-full sm:w-1/4 sm:text-right text-brand-600 cursor-pointer">管理</div>
                    </div>
                    <div className="px-2 sm:px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 text-sm border-b border-slate-100">
                      <div className="w-full sm:w-1/4 font-medium text-slate-800">LIC 海运团</div>
                      <div className="w-full sm:w-1/4"><span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs">待支付</span></div>
                      <div className="w-full sm:w-1/4 text-slate-500">100%</div>
                      <div className="w-full sm:w-1/4 sm:text-right text-brand-600 cursor-pointer">催付</div>
                    </div>
                    <div className="px-2 sm:px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 text-sm">
                      <div className="w-full sm:w-1/4 font-medium text-slate-800">曼岛加急</div>
                      <div className="w-full sm:w-1/4"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">已发货</span></div>
                      <div className="w-full sm:w-1/4 text-slate-500">-</div>
                      <div className="w-full sm:w-1/4 sm:text-right text-brand-600 cursor-pointer">查看</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchantFeatures;