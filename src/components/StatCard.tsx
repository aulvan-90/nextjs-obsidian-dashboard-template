import React from "react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  badge?: {
    text: string;
    variant: "emerald" | "amber" | "rose" | "sky" | "slate";
  };
  highlightColor?: "sky" | "amber" | "emerald" | "rose" | "indigo";
}

const colorMap = {
  sky: "border-sky-500/20 bg-sky-500/5 text-sky-400",
  amber: "border-amber-500/20 bg-amber-500/5 text-amber-400",
  emerald: "border-emerald-500/20 bg-emerald-500/5 text-emerald-400",
  rose: "border-rose-500/20 bg-rose-500/5 text-rose-400",
  indigo: "border-indigo-500/20 bg-indigo-500/5 text-indigo-400",
};

const badgeMap = {
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  rose: "bg-rose-500/10 text-rose-400 border-rose-500/30",
  sky: "bg-sky-500/10 text-sky-400 border-sky-500/30",
  slate: "bg-slate-500/10 text-slate-400 border-slate-500/30",
};

export function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  badge,
  highlightColor = "sky",
}: StatCardProps) {
  return (
    <div className="relative p-5 rounded-2xl bg-card border border-border shadow-sm hover:border-border/80 transition-all duration-200 flex flex-col justify-between group">
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {title}
          </span>
          <span className="text-2xl lg:text-3xl font-black tracking-tight text-foreground font-mono">
            {value}
          </span>
        </div>
        <div className={`p-2.5 rounded-xl border ${colorMap[highlightColor]} transition-transform group-hover:scale-105`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      {(subtitle || badge) && (
        <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs">
          {subtitle && <span className="text-muted-foreground">{subtitle}</span>}
          {badge && (
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono border ${badgeMap[badge.variant]}`}>
              {badge.text}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
