"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Laptop, 
  Users, 
  Wrench, 
  Tag,
  Settings, 
  Menu, 
  X, 
  LogOut
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Dasbor", href: "/", icon: LayoutDashboard },
    { label: "Aset & Perangkat", href: "/assets", icon: Laptop },
    { label: "Karyawan", href: "/employees", icon: Users },
    { label: "Perbaikan", href: "/repairs", icon: Wrench },
    { label: "Kategori", href: "/categories", icon: Tag },
  ];

  return (
    <>
      {/* Mobile Topbar */}
      <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between px-4 py-3 bg-white/90 dark:bg-[#0d1017]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="px-2 py-1 rounded bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black text-xs tracking-tighter">
            KURHANZ
          </div>
          <span className="font-bold text-xs tracking-tight text-slate-900 dark:text-white">
            IT Asset Management
          </span>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Backdrop for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Desktop & Drawer Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-slate-50 dark:bg-[#08090e] border-r border-slate-200 dark:border-slate-800/80 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex flex-col gap-6">
          {/* Logo Header */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="px-2.5 py-1.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black text-xs tracking-tighter flex items-center justify-center shadow-sm">
                KURHANZ
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xs tracking-wider text-slate-900 dark:text-white">
                  PT KURHANZ TRANS
                </span>
                <span className="text-[10px] text-sky-600 dark:text-sky-400 font-mono">
                  IT Asset Management
                </span>
              </div>
            </Link>
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1">
            <span className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase px-2 mb-1">
              Menu Navigasi
            </span>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 group ${
                    isActive
                      ? "bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-500/30 shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/50"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? "text-sky-600 dark:text-sky-400" : "text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"}`} />
                    <span>{item.label}</span>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Session Footer */}
        <div className="p-4 flex flex-col gap-3">
          <div className="p-3 rounded-xl bg-white dark:bg-[#0d1017] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
            <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500 font-bold tracking-wider">
              Sesi Akun (Admin)
            </span>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 dark:border-sky-500/30 flex items-center justify-center text-sky-600 dark:text-sky-400 font-bold text-xs">
                  AD
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Admin IT</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Kendali Penuh</span>
                </div>
              </div>
              <button className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300">
                Ubah
              </button>
            </div>
            <button className="mt-1 w-full py-1.5 rounded-lg border border-rose-200 dark:border-rose-500/30 bg-rose-50 dark:bg-rose-500/5 hover:bg-rose-100 dark:hover:bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer">
              <LogOut className="w-3.5 h-3.5" />
              <span>Keluar (Logout)</span>
            </button>
          </div>

          <div className="flex items-center justify-between px-1 text-[11px] text-slate-400 dark:text-slate-500">
            <Link href="/settings" className="hover:text-slate-700 dark:hover:text-slate-300 flex items-center gap-1.5">
              <Settings className="w-3.5 h-3.5" />
              <span>Pengaturan</span>
            </Link>
            <span className="font-mono text-[10px]">© 2026</span>
          </div>
        </div>
      </aside>
    </>
  );
}
