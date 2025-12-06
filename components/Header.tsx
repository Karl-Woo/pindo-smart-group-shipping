import React, { useState, useEffect } from 'react';
import { IconMenu, IconX } from './Icons';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: '首页', href: '#hero' },
  { label: '为什么选择我们', href: '#problems' },
  { label: '用户功能', href: '#features-user' },
  { label: '商家入驻', href: '#features-merchant' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <img 
            src="/assets/logo.png" 
            alt="Pindo Logo" 
            className="w-10 h-10 rounded-lg group-hover:opacity-90 transition-opacity"
          />
          <span className={`font-bold text-2xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
            Pindo 拼岛
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(item.href);
                if (element) {
                  const headerOffset = 100;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className={`text-sm font-medium hover:text-brand-500 transition-colors ${
                isScrolled ? 'text-slate-600' : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a 
            href="#download"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#download');
              if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
              isScrolled 
                ? 'bg-brand-600 text-white hover:bg-brand-700' 
                : 'bg-white text-brand-600 hover:bg-brand-50'
            }`}
          >
            立即下载
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <IconX className={isScrolled ? "text-slate-900" : "text-slate-900 md:text-white"} />
          ) : (
            <IconMenu className={isScrolled ? "text-slate-900" : "text-slate-900 md:text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 px-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-slate-600 font-medium py-2 px-2 hover:bg-slate-50 rounded-lg"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                const element = document.querySelector(item.href);
                if (element) {
                  const headerOffset = 100;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#download"
            className="w-full text-center bg-brand-600 text-white py-3 rounded-xl font-semibold mt-2"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              const element = document.querySelector('#download');
              if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
          >
            立即下载 App
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;