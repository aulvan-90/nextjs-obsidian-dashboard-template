# 🌌 Next.js Obsidian Dashboard Template

Starter kit antarmuka dasbor enterprise modern berbasis **Next.js 16 (App Router)**, **React 19**, dan **Tailwind CSS v4** dengan estetika **Obsidian Cyber-Executive (Dark Mode)** dan **Crisp Studio (Light Mode)**.

Template ini dirancang untuk dapat digunakan ulang (*reusable*) pada berbagai proyek sistem informasi seperti **ERP, CRM, Inventaris, Human Resource (HRIS), Billing/Keuangan, hingga Portal Analitik**.

---

## ✨ Fitur Unggulan

- **💎 Desain Mewah & Eksklusif**: Tema gelap *Deep Obsidian* (`#08090e`) berpadu dengan border mikro semitransparan, bayangan halus, dan aksen warna futuristik (Sky, Indigo, Emerald, Amber, Rose).
- **🌓 Sistem Tema Dinamis**: Beralih antara Dark Mode dan Light Mode seketika menggunakan `next-themes` tanpa kedipan (*zero flash*).
- **🔤 Tipografi Enterprise**: Kombinasi **Plus Jakarta Sans** (UI & Heading) dan **JetBrains Mono** (Metrik, Serial ID, & Format Finansial).
- **📱 Responsif Penuh (Mobile-First)**: Dilengkapi *Sticky Sidebar* di desktop dan *Slide-over Drawer Navigation* di layar tablet & smartphone.
- **🧱 Komponen Modular Siap Pakai**:
  - `StatCard`: Kartu ringkasan metrik / KPI dengan varian badge & warna dinamis.
  - `Navigation`: Sidebar konfigurabel hanya dengan mendefinisikan array item navigasi.
  - `ThemeToggle`: Tombol saklar tema dengan animasi ikon Lucide.
  - Tabel entri data modular dengan indikator status badge.
- **⚡ Super Cepat**: Menggunakan React 19 Server Components dan optimasi rendering bawaan Next.js 16.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
- **UI Library:** [React](https://react.dev/) 19
- **Bahasa:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4 (`@tailwindcss/postcss`)
- **Ikon:** [Lucide React](https://lucide.dev/)
- **Theming:** `next-themes`

---

## 🚀 Panduan Memulai Cepat (Quick Start)

### 1. Kloning Repository
```bash
git clone https://github.com/aulvan-90/nextjs-obsidian-dashboard-template.git nama-proyek-anda
cd nama-proyek-anda
```

### 2. Pasang Dependensi
```bash
npm install
```

### 3. Jalankan Server Pengembangan
```bash
npm run dev
```
Buka browser Anda di **[http://localhost:3000](http://localhost:3000)**.

---

## 📂 Struktur Direktori

```text
├── src/
│   ├── app/
│   │   ├── globals.css      # Variabel warna tema Dark Obsidian & Light Studio
│   │   ├── layout.tsx       # Root layout dengan Font Google & ThemeProvider
│   │   └── page.tsx         # Dasbor utama dengan KPI Cards & Tabel modular
│   ├── components/
│   │   ├── Navigation.tsx   # Sidebar Desktop & Topbar Mobile
│   │   ├── StatCard.tsx     # Komponen kartu statistik / ringkasan metrik
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx # Tombol ganti dark / light mode
│   └── lib/
│       └── utils.ts         # Helper utility class merge (clsx & twMerge)
├── next.config.ts           # Konfigurasi Next.js
├── postcss.config.mjs       # Konfigurasi PostCSS Tailwind v4
├── tsconfig.json            # Konfigurasi TypeScript
├── package.json
└── README.md
```

---

## 🎨 Panduan Kustomisasi

### 1. Mengubah Menu Navigasi
Buka [`src/components/Navigation.tsx`](src/components/Navigation.tsx), ubah array `defaultNavItems`:
```tsx
const defaultNavItems: NavItem[] = [
  { label: "Dasbor", href: "/", icon: LayoutDashboard },
  { label: "Faktur & Tagihan", href: "/invoices", icon: Layers, badge: "3" },
  { label: "Pelanggan", href: "/customers", icon: Users },
  { label: "Laporan Keuangan", href: "/reports", icon: FileText },
  { label: "Pengaturan", href: "/settings", icon: Settings },
];
```

### 2. Menambahkan Kartu KPI Baru
Gunakan komponen `<StatCard />`:
```tsx
import { StatCard } from "@/components/StatCard";
import { DollarSign } from "lucide-react";

<StatCard
  title="Total Pendapatan"
  value="Rp 128.500.000"
  subtitle="+14% dari bulan lalu"
  icon={DollarSign}
  highlightColor="emerald"
  badge={{ text: "Target Tercapai", variant: "emerald" }}
/>
```

---

## 📄 Lisensi
[MIT License](LICENSE) — Bebas digunakan untuk proyek personal maupun komersial.
