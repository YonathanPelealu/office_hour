/**
Buatlah sebuah script untuk menampilkan nama & nilai dari siswa di kelas :
Seorang pengajar sedang memeriksa ujian mahasiswa dan akan memberikan desc nilai dari A-E dengan ketentuan sebagai berikut:
 - Nilai 80 - 100: A
 - Nilai 65 - 79: B
 - Nilai 50 - 64: C
 - Nilai 35 - 49: D
 - Nilai 0 - 34: E

 Tampilkan desc nilai dan nama siswa saat pengajar tersebut memasukkan nilai dan nama yang dia inginkan.

NOTED:
Jika nilai mahasiswa kurang dari 0 atau lebih dari 100 maka tampilkan 'Nilai Invalid'
contoh : 
1.
name = 'Rocky'
nilai = '90'
output : 'Nilai Rocky mendapatkan nilai A'

name = 'John Doe'
nilai = '0'
output : 'Nilai Invalid

**/
nama_mahasiswa = "Andi";
nilai = "150";

if (nilai >= 80 && nilai <= 100) {
  console.log("Nilai " + nama_mahasiswa + " mendapatkan nilai A");
} else if (nilai >= 65 && nilai < 80) {
  console.log("Nilai " + nama_mahasiswa + " mendapatkan nilai B");
} else if (nilai >= 50 && nilai < 65) {
  console.log("Nilai " + nama_mahasiswa + " mendapatkan nilai C");
} else if (nilai >= 35 && nilai < 50) {
  console.log("Nilai " + nama_mahasiswa + " mendapatkan nilai D");
} else if (nilai >= 0 && nilai < 35) {
  console.log("Nilai " + nama_mahasiswa + " mendapatkan nilai E");
} else (console.log("Nilai " + nama_mahasiswa + " invalid"));
