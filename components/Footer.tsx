import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 mb-12">
          {/* Logo and Description */}
          <div className="flex-1 max-w-md">
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

          {/* Contact Section */}
          <div className="flex-1 max-w-md">
            <h4 className="text-white font-bold mb-4 text-lg">联系我们</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-slate-500 mr-2">客户服务：</span>
                <a
                  href="mailto:support@pindo.info"
                  className="text-slate-300 hover:text-white transition-colors underline decoration-slate-600 hover:decoration-slate-400"
                >
                  support@pindo.info
                </a>
              </li>
              <li>
                <span className="text-slate-500 mr-2">商务合作：</span>
                <a
                  href="mailto:business@pindo.info"
                  className="text-slate-300 hover:text-white transition-colors underline decoration-slate-600 hover:decoration-slate-400"
                >
                  business@pindo.info
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} 深圳拼岛信息科技有限公司 版权所有<br />粤ICP备2025494749号</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;