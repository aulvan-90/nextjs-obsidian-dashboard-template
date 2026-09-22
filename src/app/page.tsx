import React from "react";
import { 
  TrendingUp, 
  Users, 
  Layers, 
  AlertCircle, 
  Plus, 
  ArrowUpRight, 
  Download,
  Activity,
  CheckCircle2,
  Clock
} from "lucide-react";
import { StatCard } from "@/components/StatCard";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono font-semibold tracking-wider text-sky-400 uppercase">
            Control Center & Analytics
          </span>
          <h1 className="text-2xl lg:text-3xl font-black tracking-tight text-foreground mt-1">
            Dasbor Utama
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Ringkasan metrik eksekutif, status performa operasional, dan aktivitas sistem terbaru.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-xl text-xs font-semibold border border-border bg-card hover:bg-accent text-foreground transition-all flex items-center gap-2 cursor-pointer shadow-sm">
            <Download className="w-4 h-4" />
            <span>Ekspor Data</span>
          </button>
          <button className="px-4 py-2 rounded-xl text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-sky-500/20">
            <Plus className="w-4 h-4" />
            <span>Entri Baru</span>
          </button>
        </div>
      </div>

      {/* Row 1: KPI Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Entri Aktif"
          value="1,248"
          subtitle="98% beroperasi normal"
          icon={Layers}
          highlightColor="sky"
          badge={{ text: "+12% MoM", variant: "emerald" }}
        />
        <StatCard
          title="Total Pengguna"
          value="342"
          subtitle="Aktif dalam 30 hari"
          icon={Users}
          highlightColor="indigo"
          badge={{ text: "Stabil", variant: "sky" }}
        />
        <StatCard
          title="Proses Berjalan"
          value="84"
          subtitle="Antrian pipeline aktif"
          icon={TrendingUp}
          highlightColor="emerald"
          badge={{ text: "On-Track", variant: "emerald" }}
        />
        <StatCard
          title="Tindakan Diperlukan"
          value="3"
          subtitle="Perlu review admin"
          icon={AlertCircle}
          highlightColor="rose"
          badge={{ text: "Perhatian", variant: "rose" }}
        />
      </div>

      {/* Row 2: Analytics & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Feed / Table Card (2 Cols) */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-card border border-border flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-foreground">Daftar Transaksi / Entri Terbaru</h2>
              <p className="text-xs text-muted-foreground">Tabel modular siap dihubungkan dengan Prisma / API</p>
            </div>
            <button className="text-xs text-sky-400 hover:underline flex items-center gap-1 font-mono">
              Lihat Semua <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-border text-muted-foreground uppercase text-[10px] font-mono tracking-wider">
                <tr>
                  <th className="py-3 px-2">ID / Ref</th>
                  <th className="py-3 px-2">Nama Subjek</th>
                  <th className="py-3 px-2">Kategori</th>
                  <th className="py-3 px-2">Status</th>
                  <th className="py-3 px-2 text-right">Nilai / Nominal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 font-mono">
                {[
                  { id: "REF-2026-001", name: "Pengadaan Laptop Dev", cat: "Hardware", status: "Selesai", val: "Rp 24.500.000", ok: true },
                  { id: "REF-2026-002", name: "Lisensi Cloud Storage", cat: "Software", status: "Diproses", val: "Rp 4.200.000", ok: false },
                  { id: "REF-2026-003", name: "Perbaikan Jaringan Kantor", cat: "Maintenance", status: "Selesai", val: "Rp 1.850.000", ok: true },
                  { id: "REF-2026-004", name: "Monitor UltraWide 34\"", cat: "Hardware", status: "Selesai", val: "Rp 8.900.000", ok: true },
                ].map((row) => (
                  <tr key={row.id} className="hover:bg-accent/40 transition-colors">
                    <td className="py-3 px-2 text-sky-400 font-semibold">{row.id}</td>
                    <td className="py-3 px-2 font-sans font-medium text-foreground">{row.name}</td>
                    <td className="py-3 px-2 text-muted-foreground font-sans">{row.cat}</td>
                    <td className="py-3 px-2">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] ${
                        row.ok ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      }`}>
                        {row.ok ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                        {row.status}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-right text-foreground font-bold">{row.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Side Widget: System Activity Log (1 Col) */}
        <div className="p-6 rounded-2xl bg-card border border-border flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Activity className="w-4 h-4 text-sky-400" />
              <h2 className="text-base font-bold text-foreground">Aktivitas Sistem</h2>
            </div>
            <p className="text-xs text-muted-foreground mb-4">Audit log real-time & event tracking</p>

            <div className="flex flex-col gap-4">
              {[
                { title: "Database Backup Otomatis", desc: "Snapshot database berhasil dibuat", time: "10 menit lalu", color: "sky" },
                { title: "User Baru Terdaftar", desc: "Ahmad Fauzi bergabung ke tim operasional", time: "1 jam lalu", color: "emerald" },
                { title: "Pembaruan Konfigurasi", desc: "Pengaturan SMTP mailer diubah oleh Admin", time: "4 jam lalu", color: "amber" },
                { title: "API Synchronize", desc: "Integrasi webhook selesai tanpa kendala", time: "Kemarin", color: "indigo" },
              ].map((act, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs">
                  <div className="w-2 h-2 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                  <div className="flex flex-col flex-1">
                    <span className="font-semibold text-foreground">{act.title}</span>
                    <span className="text-muted-foreground text-[11px] leading-tight">{act.desc}</span>
                    <span className="text-[10px] text-muted-foreground/80 font-mono mt-0.5">{act.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border/60 text-center">
            <span className="text-[11px] text-muted-foreground font-mono">Status Sistem: 99.98% Uptime</span>
          </div>
        </div>
      </div>
    </div>
  );
}
