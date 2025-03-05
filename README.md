**Langkah-langkah Praktikum**<br>
 Persiapan Lingkungan<br>
![image](https://github.com/user-attachments/assets/e0e4e1af-eb35-49aa-aded-8f973c4a1f92) <br>

 Pastikan Node.js dan npm sudah terinstal di komputer Anda. Anda dapat memeriksanya dengan menjalankan perintah berikut di terminal atau command prompt:<br>
 Buat direktori baru untuk proyek Next.js Anda<br>
 Inisialisasi proyek Next.js dengan menjalankan perintah berikut: Perhatikan bahwa App Router belum digunakan<br>
 ![image](https://github.com/user-attachments/assets/3211a609-ece0-4d60-8763-df51c0f5bd30) <br>

 Jalankan aplikasi Next.js dengan perintah:<br>
Aplikasi akan terbuka di browser pada alamat http://localhost:3000.<br>

 Membuat Halaman dengan Server-Side Rendering (SSR)<br>
 Buka file pages/index.tsx di text editor Anda.<br>
 ![image](https://github.com/user-attachments/assets/2ed07daa-04ac-4407-af45-f9458cdbda83) <br>

 Ganti kode di dalamnya dengan kode berikut untuk membuat halaman sederhana:<br>
 Simpan file dan lihat perubahan di browser. Anda akan melihat halaman utama dengan teks "Selamat Datang di Website Saya!".<br>

 Menggunakan Static Site Generation (SSG)<br>
 Buat file baru di direktori pages dengan nama blog.js.<br>
 ![image](https://github.com/user-attachments/assets/408f3e9e-fc70-4873-9295-0808575fc945) <br>

 Tambahkan kode berikut untuk membuat halaman blog dengan SSG:<br>
 Simpan file dan buka http://localhost:3000/blog di browser. Anda akan melihat daftar post yang diambil dari API eksternal.<br>
 ![image](https://github.com/user-attachments/assets/dfd4f7ac-3f62-4e75-ba71-9ee86c2369ae) <br>


 Menggunakan Dynamic Routes<br>
 Buat direktori baru di pages dengan nama blog.<br>
 Buat file di dalam direktori blog dengan nama [slug].js<br>
 ![image](https://github.com/user-attachments/assets/cd3c63cc-1854-4cec-88ee-7e83ba65dac6) <br>

 Tambahkan kode berikut untuk membuat halaman dinamis berdasarkan slug:<br>
 ![image](https://github.com/user-attachments/assets/cbf04862-6eb1-45f9-8040-c15690fe1eeb) <br>

 Simpan file dan buka http://localhost:3000/blog/contoh-post di browser. Anda akan melihat halaman yang menampilkan slug dari URL.<br>

 Menggunakan API Routes<br>
 Pastikan terdapat direktori di pages dengan nama api.<br>
 Buat file di dalam direktori api dengan nama products.js.<br>
 ![image](https://github.com/user-attachments/assets/3b856cd5-f0e0-4070-b429-9ab3639cf7d4) <br>
 Tambahkan kode berikut untuk membuat API route yang mengembalikan daftar produk:<br>
 Buat file baru di pages dengan nama products.js untuk menampilkan daftar produk:<br>
  ![image](https://github.com/user-attachments/assets/7215a527-d04c-4dfc-9109-d8363003bb8f) <br>
 Simpan file dan buka http://localhost:3000/products di browser. Anda akan melihat daftar produk yang diambil dari API route.<br>
 ![image](https://github.com/user-attachments/assets/f1ca63dd-5b84-4b63-a7a2-f01421526457) <br>
 
 Menggunakan Link Component<br>
 Buka file pages/index.tsx dan tambahkan modif dengan kode berikut untuk membuat link ke halaman lain:<br>
 ![image](https://github.com/user-attachments/assets/e9afa597-042c-4edd-b111-6e53e19ed9cd) <br>
 Buat file baru di pages dengan nama about.js untuk halaman "Tentang Kami":<br>
 ![image](https://github.com/user-attachments/assets/def18576-baab-4246-8fa5-8d05fbc10ca8) <br>
 Simpan file dan buka http://localhost:3000 di browser. Klik link "Tentang Kami" untuk navigasi ke halaman tentang.<br>
 ![image](https://github.com/user-attachments/assets/6e1901fb-8f21-4812-907e-c8a1d39f045c) <br>


**Tugas**<br>
1. Buat halaman baru dengan menggunakan Static Site Generation (SSG) yang menampilkan daftar pengguna dari API https://jsonplaceholder.typicode.com/users.<br>
![image](https://github.com/user-attachments/assets/aea3f57d-ec85-4a36-b0ad-0adbe91c364c) <br>
![image](https://github.com/user-attachments/assets/253c8d4e-a4e0-4344-a771-029ad421d0db) <br>


2. Implementasikan Dynamic Routes untuk menampilkan detail pengguna berdasarkan ID.<br>
![image](https://github.com/user-attachments/assets/7db15027-6903-42ae-a933-567f77dec1f8) <br>
![image](https://github.com/user-attachments/assets/e8dec9a0-a19c-4bda-b90c-fe06a449c20f) <br>
![image](https://github.com/user-attachments/assets/cf2524df-150d-4ec2-b630-e10092f19135) <br>




3. Buat API route yang mengembalikan data cuaca dari API eksternal (misalnya, OpenWeatherMap) dan tampilkan data tersebut di halaman front-end.<br>
![image](https://github.com/user-attachments/assets/c5338f99-f6f3-4a99-beaf-45cb1424aa2d) <br>
![image](https://github.com/user-attachments/assets/3467e02b-a02f-4acc-a65f-6ea3e97079d8) <br>
![image](https://github.com/user-attachments/assets/a6db3886-6796-4805-a357-fc187c595d63) <br>
![image](https://github.com/user-attachments/assets/623720d5-3455-42db-a36c-89d9928d81ad) <br>
![image](https://github.com/user-attachments/assets/a54d3fe8-ffc2-49fb-a4c7-c3441ac4e41a) <br>
![image](https://github.com/user-attachments/assets/c5570c20-4063-468c-9126-e5a54a4f1cb2) <br>








**Kesimpulan**<br>
Dalam praktikum ini, Anda telah mempelajari dasar-dasar Next.js, termasuk Server-Side Rendering (SSR), Static Site Generation (SSG), Dynamic Routes, API Routes, dan penggunaan Link Component. Next.js adalah framework yang powerful untuk membangun aplikasi web modern dengan performa tinggi dan pengalaman pengguna yang baik.<br>

