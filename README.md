# Portfolio Kevin Azzaky

Website portfolio pribadi Kevin Azzaky untuk menampilkan profil, bidang yang sedang dipelajari, tech stack, serta berbagai project web, mobile, backend, dan IoT.

## Fitur

- Tampilan modern dan responsif untuk desktop maupun perangkat mobile
- Dukungan dua bahasa: Indonesia dan Inggris
- Navigasi aktif berdasarkan posisi halaman
- Daftar project lengkap dengan kategori, teknologi, repository, dan demo
- Animasi saat elemen masuk ke layar
- Tombol download CV
- Informasi kontak dan tautan GitHub
- Tombol kembali ke bagian atas halaman

## Teknologi

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- JavaScript (ES Modules)
- ESLint

## Menjalankan Project

Pastikan Node.js dan npm sudah terpasang, kemudian jalankan perintah berikut:

```bash
git clone https://github.com/kevinazzaky/portfolio.git
cd portfolio
npm install
npm run dev
```

Buka alamat yang ditampilkan Vite di terminal, biasanya `http://localhost:5173`.

## Script

| Perintah | Keterangan |
| --- | --- |
| `npm run dev` | Menjalankan development server |
| `npm run build` | Membuat production build |
| `npm run preview` | Menampilkan hasil production build secara lokal |
| `npm run lint` | Memeriksa kualitas kode dengan ESLint |

## Struktur Folder

```text
portofolio-kevin/
|-- public/              # File publik, favicon, dan CV
|-- src/
|   |-- assets/          # Gambar yang digunakan pada website
|   |-- components/      # Komponen antarmuka
|   |-- data/            # Data project dan terjemahan
|   |-- App.jsx          # Komponen utama aplikasi
|   |-- App.css          # Styling komponen aplikasi
|   |-- index.css        # Styling global
|   `-- main.jsx         # Entry point React
|-- index.html
|-- package.json
`-- vite.config.js
```

## Mengubah Konten

- Data project dapat diperbarui melalui `src/data/Projects.js`.
- Teks bahasa Indonesia dan Inggris berada di `src/data/translations.js`.
- Informasi kontak berada di `src/components/Contact.jsx`.
- File CV berada di `public/CV-Kevin-Azzaky.pdf`.
- Gambar profil dan gambar pendukung berada di `src/assets/`.

## Build Production

Jalankan:

```bash
npm run build
```

Hasil build akan tersedia di folder `dist/` dan dapat di-deploy ke layanan hosting statis seperti Vercel, Netlify, atau GitHub Pages.

## Kontak

- WhatsApp: [0815-2950-0457](https://wa.me/6281529500457)
- Instagram: [@kevinazzakyy](https://www.instagram.com/kevinazzakyy/)
- GitHub: [github.com/kevinazzaky](https://github.com/kevinazzaky)

## Lisensi

Project ini dibuat untuk keperluan portfolio pribadi. Seluruh konten profil, CV, dan aset pribadi merupakan milik Kevin Azzaky.
