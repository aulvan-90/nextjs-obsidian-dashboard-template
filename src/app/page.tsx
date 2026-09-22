import React from "react";
import { 
  Laptop, 
  Users, 
  Layers, 
  AlertCircle, 
  Plus, 
  Download,
  Activity,
  DollarSign,
  TrendingDown,
  ShieldCheck,
  Bell
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      {/* Top Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono font-bold tracking-widest text-sky-600 dark:text-sky-400 uppercase">
            Overview & Control Dashboard
          </span>
          <h1 className="text-2xl lg:text-3xl font-black tracking-tight text-slate-900 dark:text-white mt-0.5">
            Dasbor Inventaris & Operasional
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Ringkasan status, kalkulator nilai investasi, pengingat garansi, & audit trail.
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <button className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-800 bg-white dark:bg-[#0d1017] hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-200 transition-all flex items-center gap-2 cursor-pointer shadow-sm active:scale-95">
            <Download className="w-3.5 h-3.5" />
            <span>Ekspor Data</span>
          </button>
          <button className="px-4 py-2 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-400 text-white dark:text-slate-950 transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-sky-500/20 active:scale-95">
            <Plus className="w-4 h-4" />
            <span>Tambah Aset Baru</span>
          </button>
        </div>
      </div>

      {/* Row 1: Top 4 Inventory Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {/* Card 1: Total Aset */}
        <div className="card-hover p-4 rounded-xl bg-white dark:bg-gradient-to-b dark:from-[#0f141f] dark:to-[#0a0d14] border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-lg dark:shadow-black/30 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Aset</span>
            <div className="p-1.5 rounded-lg bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-500/20">
              <Laptop className="w-4 h-4" />
            </div>
          </div>
          <div className="my-2">
            <span className="text-3xl font-black tracking-tight text-slate-900 dark:text-white font-mono">67</span>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Seluruh inventaris aktif</p>
          </div>
          <a href="#" className="text-[11px] font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1 mt-1 font-mono">
            Lihat daftar ➔
          </a>
        </div>

        {/* Card 2: Dipinjam Karyawan */}
        <div className="card-hover p-4 rounded-xl bg-white dark:bg-gradient-to-b dark:from-[#0f141f] dark:to-[#0a0d14] border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-lg dark:shadow-black/30 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Dipinjam Karyawan</span>
            <div className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-500/20">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="my-2">
            <span className="text-3xl font-black tracking-tight text-slate-900 dark:text-white font-mono">66</span>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Sedang dialokasikan</p>
          </div>
          <a href="#" className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 mt-1 font-mono">
            Lihat daftar ➔
          </a>
        </div>

        {/* Card 3: Di Gudang IT */}
        <div className="card-hover p-4 rounded-xl bg-white dark:bg-gradient-to-b dark:from-[#0f141f] dark:to-[#0a0d14] border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-lg dark:shadow-black/30 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Di Gudang IT</span>
            <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div className="my-2">
            <span className="text-3xl font-black tracking-tight text-slate-900 dark:text-white font-mono">1</span>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">0 siap pakai • 1 rusak</p>
          </div>
          <a href="#" className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 mt-1 font-mono">
            Lihat daftar ➔
          </a>
        </div>

        {/* Card 4: Perlu Perhatian */}
        <div className="card-hover p-4 rounded-xl bg-white dark:bg-gradient-to-b dark:from-[#0f141f] dark:to-[#0a0d14] border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-lg dark:shadow-black/30 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Perlu Perhatian</span>
            <div className="p-1.5 rounded-lg bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-500/20">
              <AlertCircle className="w-4 h-4" />
            </div>
          </div>
          <div className="my-2">
            <span className="text-3xl font-black tracking-tight text-slate-900 dark:text-white font-mono">0</span>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Rusak ringan, berat & afkir</p>
          </div>
          <a href="#" className="text-[11px] font-semibold text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1 mt-1 font-mono">
            Lihat daftar ➔
          </a>
        </div>
      </div>

      {/* Row 2: Financial Dimension Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Financial 1: Total Investasi */}
        <div className="relative p-5 rounded-2xl bg-gradient-to-br from-sky-50 via-white to-sky-50/30 dark:from-[#0c1424] dark:via-[#090d16] dark:to-[#06090e] border border-sky-200 dark:border-sky-500/30 shadow-md dark:shadow-xl dark:shadow-sky-950/20 overflow-hidden card-hover hover:border-sky-500! dark:hover:border-sky-400! hover:shadow-[0_12px_28px_-6px_rgba(2,132,199,0.2),0_0_24px_rgba(56,189,248,0.25)]!">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-sky-700 dark:text-sky-400 flex items-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5" /> Total Investasi Aset IT
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-500/20 font-bold">
              Capital Expense
            </span>
          </div>
          <div className="mt-3">
            <span className="text-2xl lg:text-3xl font-black tracking-tight text-sky-600 dark:text-sky-400 font-mono">
              Rp 594.299.000
            </span>
            <p className="text-[11px] text-sky-700/80 dark:text-sky-400/80 mt-1">
              ● Terbilang: Lima Ratus Sembilan Puluh Empat Juta Dua Ratus Sembilan Puluh Sembilan Ribu Rupiah
            </p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-2">
              Akumulasi nilai pembelian awal seluruh aset terdaftar di sistem.
            </p>
          </div>
        </div>

        {/* Financial 2: Akumulasi Depresiasi */}
        <div className="relative p-5 rounded-2xl bg-gradient-to-br from-rose-50 via-white to-rose-50/30 dark:from-[#1c0d12] dark:via-[#14080c] dark:to-[#0b0407] border border-rose-200 dark:border-rose-500/30 shadow-md dark:shadow-xl dark:shadow-rose-950/20 overflow-hidden card-hover hover:border-rose-500! dark:hover:border-rose-400! hover:shadow-[0_12px_28px_-6px_rgba(225,29,72,0.2),0_0_24px_rgba(244,63,94,0.25)]!">
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 dark:bg-rose-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
              <TrendingDown className="w-3.5 h-3.5" /> Akumulasi Depresiasi
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-500/20 font-bold">
              Susut 12.8%
            </span>
          </div>
          <div className="mt-3">
            <span className="text-2xl lg:text-3xl font-black tracking-tight text-rose-600 dark:text-rose-400 font-mono">
              Rp 76.293.750
            </span>
            <p className="text-[11px] text-rose-700/80 dark:text-rose-400/80 mt-1">
              ● Terbilang: Tujuh Puluh Enam Juta Dua Ratus Sembilan Puluh Tiga Ribu Tujuh Ratus Lima Puluh Rupiah
            </p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-2">
              Selisih beban penurunan nilai aset yang telah terpakai seiring waktu.
            </p>
          </div>
        </div>

        {/* Financial 3: Nilai Buku Saat Ini */}
        <div className="relative p-5 rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 dark:from-[#0c1c17] dark:via-[#091310] dark:to-[#050b09] border border-emerald-200 dark:border-emerald-500/30 shadow-md dark:shadow-xl dark:shadow-emerald-950/20 overflow-hidden card-hover hover:border-emerald-500! dark:hover:border-emerald-400! hover:shadow-[0_12px_28px_-6px_rgba(5,150,105,0.2),0_0_24px_rgba(16,185,129,0.25)]!">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" /> Nilai Buku Aset Saat Ini
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20 font-bold">
              Net Book Value
            </span>
          </div>
          <div className="mt-3">
            <span className="text-2xl lg:text-3xl font-black tracking-tight text-emerald-600 dark:text-emerald-400 font-mono">
              Rp 518.005.250
            </span>
            <p className="text-[11px] text-emerald-700/80 dark:text-emerald-400/80 mt-1">
              ● Terbilang: Lima Ratus Delapan Belas Juta Lima Ribu Dua Ratus Lima Puluh Rupiah
            </p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-2">
              Estimasi sisa nilai ekonomis bersih seluruh perangkat per hari ini.
            </p>
          </div>
        </div>
      </div>

      {/* Row 3: Warranty Expiry Alert */}
      <div className="p-4 rounded-2xl bg-white dark:bg-[#0d1017] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl dark:shadow-black/40">
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-amber-500 dark:text-amber-400" />
            <h2 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Pengingat Masa Garansi (Warranty Expiry Alert)
            </h2>
          </div>
          <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 hover:underline cursor-pointer">
            8 Perangkat (Lihat Semua) ➔
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {[
            { model: "ASUS ASUS VIVOBOOK A1502ZA i-5", tag: "KHZ-ASSET-LTP-2025-01-26-0002", sn: "N4N0CV038863419" },
            { model: "ASUS Vivobook GO 14/15 E1404F", tag: "KHZ-ASSET-LTP-2025-01-30-0001", sn: "RAN0CV03N168442H" },
            { model: "ASUS ASUS VIVOBOOK 14 A1400EA i7-1165G7", tag: "KHZ-ASSET-LTP-2025-01-31-0014", sn: "N4N0CV038863420" },
            { model: "ASUS Vivobook GO 14/15 E1404F", tag: "KHZ-ASSET-LTP-2025-01-31-0015", sn: "S4N0CV15D63117G" },
          ].map((item, i) => (
            <div
              key={i}
              className="card-hover px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#090c12] border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between"
            >
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{item.model}</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                  {item.tag} • SN: {item.sn}
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold font-mono bg-rose-100 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-900/60">
                Garansi Berakhir
              </span>
            </div>
          ))}
        </div>

        <div className="mt-3 text-center">
          <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400/80 hover:underline cursor-pointer">
            Lihat seluruh 8 perangkat bergaransi berakhir ➔
          </span>
        </div>
      </div>

      {/* Row 4: Recent Activities Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Allocation */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#0d1017] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl dark:shadow-black/40">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Laptop className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" /> Aktivitas Alokasi Terbaru
            </span>
            <span className="text-[11px] font-mono text-sky-600 dark:text-sky-400 hover:underline cursor-pointer">
              Lihat semua ➔
            </span>
          </div>
          <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800/60 font-mono text-xs">
            {[
              { asset: "KHZ-ASSET-LTP-0042", user: "Budi Santoso (Logistik)", date: "22 Sep 2026", type: "Penyerahan Unit" },
              { asset: "KHZ-ASSET-LTP-0038", user: "Dewi Lestari (Finance)", date: "21 Sep 2026", type: "Pengembalian" },
            ].map((al, idx) => (
              <div key={idx} className="py-2.5 px-2 rounded-lg flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors cursor-pointer">
                <div className="flex flex-col font-sans">
                  <span className="text-xs font-medium text-slate-800 dark:text-slate-200">{al.user}</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">{al.asset} • {al.type}</span>
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">{al.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Audit Trail */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#0d1017] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl dark:shadow-black/40">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" /> Log Aktivitas Sistem (Audit Trail)
            </span>
            <span className="text-[10px] font-mono text-slate-400">Aksi Terbaru</span>
          </div>
          <div className="flex flex-col gap-2.5 text-xs">
            {[
              { desc: "Admin IT mengunduh rekap BAST (PDF A4)", time: "14:35:20" },
              { desc: "Upload bukti serah terima unit laptop #0042 sukses", time: "13:12:05" },
            ].map((log, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-[#090c12] border border-slate-200 dark:border-slate-800/60 hover:border-sky-500/40 dark:hover:border-sky-400/40 hover:-translate-y-0.5 transition-all cursor-pointer">
                <span className="text-slate-700 dark:text-slate-300 text-[11px]">{log.desc}</span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">{log.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
