import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-white">
              <img 
                src={`${import.meta.env.BASE_URL}assets/logo.png`}
                alt="Pindo Logo" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="font-bold text-lg sm:text-xl">Pindo 拼岛</span>
            </div>
            <p className="text-sm leading-relaxed">
              连接海外华人与转运公司，<br />让拼团更简单，让物流更高效。
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">产品</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features-user" className="hover:text-white transition-colors">用户拼团</a></li>
              <li><a href="#features-merchant" className="hover:text-white transition-colors">商家入驻</a></li>
              <li><a href="#" className="hover:text-white transition-colors">价格计算</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">支持</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">帮助中心</a></li>
              <li><a href="#" className="hover:text-white transition-colors">隐私政策</a></li>
              <li><a href="#" className="hover:text-white transition-colors">用户协议</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">联系我们</h4>
            <ul className="space-y-2 text-sm">
              <li>contact@pindo.app</li>
              <li>商务合作：bd@pindo.app</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Pindo 拼岛 Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;