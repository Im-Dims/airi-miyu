<p align="center">
<img src="https://pomf2.lain.la/f/oazl5tiw.jpg"
</p>
<p align="center">
<a href="#"><img title="Im-Dims" src="https://img.shields.io/badge/airi-miyu-green?colorA=%23ff0000&colorB=C13584&style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fbolaxd%2FballbotV2.git&count_bg=%23833AB4&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true"/></a>
<a href="#"><img title="Version" src="https://img.shields.io/github/package-json/v/Im-Dims/airi-miyu?color=%23833AB4&logo=github&style=flat-square"></a>
<a href="https://github.com/Im-Dims/airi-miyu/followers/"><img title="Followers" src="https://img.shields.io/github/followers/Im-Dims?color=%23833AB4&logo=github&style=flat-square"></a>
<a href="https://github.com/Im-Dims/airi-miyu/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/Im-Dims/airi-miyu?color=%23833AB4&logo=github&style=flat-square"></a>
<a href="https://github.com/Im-Dims/airi-miyu/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/Im-Dims/airi-miyu?color=%23833AB4&logo=github&style=flat-square"></a>
<a href="#"><img title="MAINTENED" src="https://img.shields.io/badge/MAINTENED-YES-%23833AB4?style=flat-square"/></a>
</p>

### Anjuran :v
bang kasi fork / bintang dulu, gw maksa nih 

### Cara menggunakan Repo ini
Persiapan for termux:
```bash
$ pkg install git
$ pkg install nodejs-lts
$ pkg install imagemagick
$ pkg install ffmpeg
$ git -v
$ nodejs -v
$ npm -v
```

Cara ambil script ini
```bash
$ git clone https://github.com/Im-Dims/airi-miyu
$ cd airi-miyu 
$ npm install
```

Setting dulu di code editor kalian masing masing
```Setting/settings.js```
```js
const config = {
  name: 'Im-Dims', //nama sih
  thumb: "https://pomf2.lain.la/f/oazl5tiw.jpg",
  thumb2: "https://pomf2.lain.la/f/oazl5tiw.jpg",
  video: "https://pomf2.lain.la/f/xh7hfiqt.mp4",
```

Ubah Message fail nya ada di Folder setting.js
```Setting/setting.js```
```js
  connect: 'Bot telah tersambung ke Konneksi server Whatsapp web',
  sukses: 'Berhasil :)',
  gagal: 'Kegagalan :(, mohon ulangi command anda\nJika ini salah Mohon report ke owner',
  owner: 'Khususon Owner',
  forgc: 'Untuk di group :]',
  leave: 'Hai kak, Saya diperintahkan Owner untuk keluar dari group ini :)\nMohon maaf ya kak jika bot punya banyak kesalahan :)\nGood bye kak',
  forimg: 'Kirim image lalu dengan caption command / atau kirim image dulu lalu di reply text command',
  forteks: 'Reply atau tag member atau tulis nomor member setelah command',
  teks: 'Reply teks / masukan karakter setelah command',
  admin: 'Kamu bukan orang dalam-_\nKhusus admin',
  botadmin: 'bot bukan orang dalem-_\nAdminin dong',
  active: 'Sebelom nya sudah aktif :v',
  unactive: 'Sebelom nya sudah tidak aktif :v',
  aslink: 'Pasanglah Link setelah command',
  gcouttime: 'Hai Kak, Bot ini masa aktifnya telah habis, Bot akan keluar otomatis',
  linkadm: 'Admin Group tidak mengijinkan link group untuk di share :)',
  notext: 'Teks nya mana?',
  wait: 'Sek Loading...',
  ok: 'Oke Min',
}

export default config;
```

ubah Nomor owner nya di ```Setting/owner.json```
ubah Nomor Moderator nya di ```Setting/mod.json```
ubah Nomor Premium nya di ```Setting/prems.json```

format dari ```mod.json | owner.json | prems.json``` adalah json seperti contoh dibawah
```js
[
  "62895385006567"
]
```

Jika ingin menambahkan nomor jangan lupa dikasih koma ```( , )```
Contoh: 
```js
[
  "62895385006567",
  "628xxxxxxxxx"
]
```

setelah setting di code editor di termux run lah dengan perintah dibawah ini
```bash
$ npm start
```

### Bagaimana cara menambahakan plugin dan bagaimana syntax nya?
Untuk Cara menambahkan Fitur anda harus membuat plugin dengan format seperti dibawah:
```js
const handle = {
  miyxious: ["command"], // type array string
  category: "#bot", // ini sesuai folder, jika anda menambahkan nya di folder bot maka tulis #bot
  describe: "description command", // type string [ opsional ]
  run: async (m, { q, repl, conn, Func }) => {
    try {
    // isi kodemu di sini
    } catch (err) {
      console.log(err)
      return repl(Func.jsonFormat(err))
    }
  }
}
```

Cara mengetahui parameter yang dikirimkan dari ```function handle```
anda perlu membuka ```msg-upsert.mjs```
pada Variable extra adalah semua komponent / parameter yang dikirim kan dalam bentuk object
```js
    users(m, extra);
    groups(m, extra);
    sets(m, extra);
    printToConsole(m, extra);
    detect(m, extra);
    cmds(m, extra); // Ke function handle
   } catch (e) {
    console.error(e);
   }
```

kita tahu bahwa function ```cmds``` adalah cmd yang berasal dari folder ```feature```
anda membayangkan seolah olah ```msg-upsert.mjs``` dan ```controlers.mjs``` itu seperti handler.js di script plugin yang beredar 
anda harus belajar memahami script plugin local sebelom merubah / menambahkan fitur di script ini 

### Cara mengubah plugin dalam script Via koding whatsapp
Cara untuk menambahkan atau mengambil plugin yang ada anda bisa menggunakan command ```.gp```, ```.sp```, dan ```.dp```

Jika anda ingin mengambil plugin yang ada anda menggunakan ```.gp``` namacommand
contoh anda ingin mengambil plugin afk maka anda harus menyatakan nya setelah command :
```.gp afk```

Cara untuk menyimpan plugin juga dibuat semudah mungkin, untuk cara menyimpan plugin anda harus menggunakan command : ```.sp```
contoh anda tadi baru saja mengedit plugin afk, untuk menyimpan nya krmbali kedalam plugin tersebut anda harus menggunakan command ```.sp``` Contoh :
```.sp afk```

Untuk penghapusan plugin juga sama, anda cukup memanggil command nya saja

### Apakah auto reload ?
Bot ini auto reload file ketika anda menambahkan script nya via whatsapp, agau menarik permintaan dari github [ pull ]
tapi syarat untuk auto reload ini cukup anda menggunakan PM2 agar dapat reload file dengan sendirinya

### Cara menambahkan command pada menu dan lainnya
Berbeda dengan versi v1.0.1 yang menambahkan nya harus menggunakan command ```.cmdset``` ini harus ditambahkan ketika anda menambahkan plugin kedalam bot

## Apakah plugin ini auto scan ketika ada plugin baru?
secara logistik, cara kerja nya ini akan kusamakan dengan script plugin local, tetapi apa yang membedakan?
bot ini akan jauh lebih ringan dan tanpa menyimpan cache import 
bot ini tidak menggunakan ```?update=${Date.now()}``` yang terus menerus mengimport dan membuat cache caru dan seolah olah seperti membuat sampah 
bot ini dikembangkan dengan cara baru, yang hanya menggunakan PM2 sebagai ```Hot Reload```

### Bagaimana cara menambahkan database baru? 
Anda bisa menambahkan database melalui schema yang saya buat 
path: ```utils/schema```
lihat contoh nya di dalam file users / groups / sets
masing masing adalah db berbeda 

```db users``` adalah db yang digunakan untuk menyimpan m.sender 
seperti afk, rpg dan lainnya

```db groups``` adalah db yang digunakan untuk menyimpan db jid group, 
seperti antilink, antistiker dan lainnya

```db sets``` adalah db yang digunakan untuk menyimpan db bot [ ini juga menyangkut sistem bot dll ]
db sets ini juga bisa dibuat menyimpan db untuk users yang jadi bot, ini akan bekerja sepenuhnya sebagai penyimpanan utama bot 

### Bagaimana cara mengambil data dari db?
Dari sini lebih banyak perbedaan yang signifikan untuk cara pemanggilan db unuk dimanipulasi / di ambil value nya
untuk cara mengambil ```db users``` anda harus membutuhkan
```.findIndex()```
apakah ini anda harus membuat findIndex untuk mencari user? jawaban nya iya 
contoh: 
```js
// ini jika db nya user
let i = db.users.findIndex(v => v[0] == m.sender) 
db.users[i]

 // ini jika db nya group
let g = db.users.findIndex(v => v[0] == m.chat)
db.grups[g]

 // ini jika db nya set
let b = db.users.findIndex(v => v[0] == bot)
db.sets[b]
```
Ini sangat Ribet dan susah :( 

tapi tenang saja saya telah membuatkan function nya di dalam msg-upsert.mjs sebagai parameter kiriman plugin 
cara memanggilnya seperti contoh dibawah ini:

```js 
const handle = async (m, { db, find }) => {
  let { u, g, b } = find
  
  // ketika memanggil user
  db.users[u][1].premium
  
  // ketika memanggil db group
  db.grup[g][1].antilink
  
  // ketika memanggil db set 
  db.set[b][1].antitag
}
```

ini sangat mudah :v 

tetapi masih ada masalah bagaimana jika ```key``` nya bukan m.sender?
pasti tidak bisa jika anda menggunakan ```db.users[u][1].premium``` ini akan mengembalikan user ```m.sender```, bagaimana jika ini ```m.quoted.sender```

tenang saja :) saya telah membuat function nya 
contoh:
```js
const handle = async (m, { db, find }) => {
  let { users, grup } = find 
  
  // ketika memanggil m.quoted 
  db.users[users(m.quoted.sender)][1].premium 
  
  // ketika memanggil group dengan jid 
  db.users[grup('1203739373937@g.us')][1].antilink 
}
```

yeahhh imi menyelesaikan masalah :v
apakah db ini auto reload?
yup betull, saya disini memakai fs, dan menggunakan interval untuk write db setiap 1 detik 
ini sangat meringankan ! :v, dari pada anda menggunakan db dari luar seperti lowdb, terkadang anda kehilangan data saat anda menggunakan library lowdb tersebut 

Jika anda memiliki pertanyaan atau masih bingung dengan penjelasan di readme.md anda bisa tanyakan di group diskusi kami
[![Grup WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/ErCbUNfxNtFF2Ty0SRqmDo)

## Penulis
[![Im-Dims](https://github.com/Im-Dims.png?size=100)](https://github.com/Im-Dims)

## Big Thanks To
[![Amiruldev20](https://github.com/Amiruldev20.png?size=100)](https://github.com/Amiruldev20)
[![Fokusdotid](https://github.com/Fokusdotid.png?size=100)](https://github.com/Fokusdotid)
[![bolaxd](https://github.com/bolaxd.png?size=100)](https://github.com/bolaxd)