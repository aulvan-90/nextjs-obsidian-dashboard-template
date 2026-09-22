"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Layers, 
  Users, 
  FileText, 
  Settings, 
  Menu, 
  X, 
  Sparkles,
  ChevronRight
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: string | number;
}

const defaultNavItems: NavItem[] = [
  { label: "Dasbor Utama", href: "/", icon: LayoutDashboard },
  { label: "Manajemen Data", href: "/data", icon: Layers, badge: "New" },
  { label: "Pengguna & Tim", href: "/users", icon: Users },
  { label: "Laporan & Audit", href: "/reports", icon: FileText },
  { label: "Pengaturan Sistem", href: "/settings", icon: Settings },
];

export function Navigation({ items = defaultNavItems }: { items?: NavItem[] }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Topbar */}
      <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between px-4 py-3 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="font-bold text-sm tracking-tight text-foreground">
            OBSIDIAN <span className="text-sky-500">CORP</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg border border-border text-foreground hover:bg-accent cursor-pointer"
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
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-card border-r border-border flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 flex flex-col gap-6">
          {/* Logo Header */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:border-sky-500/50 transition-colors">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm tracking-wider text-foreground">
                  ENTERPRISE
                </span>
                <span className="text-[11px] text-muted-foreground font-mono">
                  v1.0.0 • Starter
                </span>
              </div>
            </Link>
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1.5">
            <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase px-2 mb-1">
              Menu Navigasi
            </span>
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                    isActive
                      ? "bg-sky-500/10 text-sky-400 border border-sky-500/30 font-semibold shadow-sm shadow-sky-500/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? "text-sky-400" : "text-muted-foreground"}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-sky-500/20 text-sky-400 border border-sky-500/30">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Session Footer */}
        <div className="p-4 m-3 rounded-2xl bg-accent/50 border border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
              AD
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-foreground leading-tight">Admin System</span>
              <span className="text-[10px] text-muted-foreground font-mono">admin@domain.com</span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </div>
      </aside>
    </>
  );
}
