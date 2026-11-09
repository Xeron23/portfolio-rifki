# Rifki Anandita — Studio Redesign

Redesign menyeluruh dari **hasil redesign DEV sebelumnya**, dengan konten dan tautan proyek asli tetap dipertahankan. Tidak ada push, perubahan branch remote, atau deployment dalam paket ini.

## Menjalankan

Gunakan Node.js **22.18+** atau Node.js 24 LTS.

```bash
npm ci
npm run dev
```

Buka `http://localhost:4003`.

```bash
npm test          # 9 tes logika kartu
npm run typecheck
npm run lint
npm run build
npm start         # production, port 4003
```

Script dev menerjemahkan flag `--host` dari preview tools menjadi `--hostname` milik Next.js. Tanpa flag tambahan, tetap memakai port 4003.

## Arah visual dan interaksi

- Palet ivory/paper, charcoal hangat, terracotta, dan olive. Font disertakan lokal sehingga tidak memerlukan Google Fonts.
- Karya ditampilkan sebagai **deck kartu bertumpuk**, satu kartu aktif. Geser horizontal, gunakan tombol sebelumnya/berikutnya, pilih indikator, atau fokuskan deck lalu gunakan tombol panah keyboard.
- Detail proyek memakai native dialog: fokus terkurung di dialog, Escape menutup, dan fokus kembali ke pemicu.
- Hero memakai render Blender kustom API → server → database. Gerakan default sangat ringan. Viewer GLB hanya dimuat setelah tombol “Explore in 3D” ditekan.
- Perangkat tanpa WebGL2 tetap mendapat render Blender dengan penjelasan. `prefers-reduced-motion` mematikan gerakan dekoratif.
- Kontak memakai email asli dan tautan GitHub/LinkedIn asli. Tombol copy hanya mengaku berhasil sesudah operasi clipboard sukses.

## File utama

- `components/studio/StudioPortfolio.tsx`: struktur halaman, navigasi, dialog, kontak.
- `components/studio/ProjectDeck.tsx`: interaksi kartu.
- `components/studio/SceneViewer.tsx`: viewer 3D on-demand dan fallback.
- `app/globals.css`: token warna, tipografi, responsivitas, motion.
- `data/studio.ts`: label editorial dan pengelompokan tampilan.
- `data/index.ts`: data dari redesign sebelumnya, dipertahankan tanpa perubahan. Ekspor template lama di file ini tidak ditampilkan.
- `public/editorial/`: salinan WebP ringan dari screenshot proyek asli.
- `public/recentProject/`: empat aset proyek asli, tetap disertakan.
- `public/cv/`: CV asli.
- `public/studio3d/`: render WebP dan model GLB.
- `design-source/`: file `.blend`, script model/render, master PNG, dan catatan reproduksi.

Lisensi font lokal ada di `public/fonts/LICENSE.txt`. Tidak ada klaim proyek, testimonial, metrik, atau pengalaman baru yang ditambahkan.

## Blender

Model dibuat dengan Blender 4.3.2, bukan gambar stok. Buka `design-source/backend-study.blend`, atau buat ulang:

```bash
blender -b --python design-source/backend-study.py
python3 design-source/optimize-renders.py
```

Script optimisasi memerlukan Pillow. Catatan model lebih lengkap ada di `design-source/README.md`.

## Isi arsip

Paket berisi source aplikasi dan aset yang diperlukan, termasuk source Blender. `node_modules`, `.next`, cache, metadata Git, log render, backup `.blend1`, dan ilustrasi template lama yang tidak digunakan tidak dimasukkan. Dependency lockfile dipertahankan. `CHECKSUMS.sha256` dapat digunakan untuk memeriksa berkas setelah ekstraksi.

Lihat `QA.md` untuk hasil pengujian dan batas verifikasi.
