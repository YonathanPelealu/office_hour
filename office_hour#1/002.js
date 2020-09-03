/**
---------------------
First Letter Grouping
---------------------

Diberikan sebuah variabel `name`. Buatlah sebuah script untuk menampilkan nama tersebut
berada di group ke-berapa, dengan aturan sebagai berikut:
- Jika huruf pertama dari `name` adalah a, b, c, d maka tampilkan 'Masuk group pertama'
- Jika huruf pertama dari `name` adalah e, f, g, h maka tampilkan 'Masuk group kedua'
- Selain itu tampilkan 'Masuk group terakhir'

Contoh:
- `name` = 'daniel', output: 'Masuk group pertama'
- `name` = 'immelda', output: 'Masuk group kedua'
- `name` = 'taufik', output: 'Masuk group terakhir'
- `name` = 'sergei', output: 'Masuk group terakhir'

*/

var name = 'mahfud'; // Isi nama disini

// Code disini
var huruf = name.substring(0, 1);

var kelompok_pertama = ['a', 'b', 'c', 'd'];
var kelompok_kedua = ['e', 'f', 'g', 'h'];

// console.log(huruf);
// console.log('Huruf pertama dari '+ name +' adalah '+huruf);


if (huruf == kelompok_pertama[0] || huruf == kelompok_pertama[1] || huruf == kelompok_pertama[2] || huruf == kelompok_pertama[3]) {
  console.log('Masuk kelompok pertama');
} else if (huruf == kelompok_kedua[0] || huruf == kelompok_kedua[1] || huruf == kelompok_kedua[2] || huruf == kelompok_kedua[3]) {
  console.log('Masuk kelompok kedua');
} else (console.log('Masuk group terahir'));