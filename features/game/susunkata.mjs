import fs from "fs"
import simi from "similarity"
let sensitive = 0.75,
database = {}

const handle = {
  miyxious: ["susunkata"],
  category: "#game",
  describe: "Game Menyusun Kata",
  run: async (m, { conn, q, d, bb, repl }) => {
    let i = m.chat
    if (i in database) return repl("Masih Ada Game Yang Belum Selesi!!!\nMohon Tunggu Sampai Selesai...")
    let res = JSON.parse(fs.readFileSync(process.cwd() + "/utils/db/susunkata.json")).rendem()
    let soal = res.soal
    let jawaban = res.jawaban
    let type = res.tipe
    console.log("Soal: " + soal + "\n" + "Jawaban: " + jawaban)
    let teks = `*Game Susun Kata*\n\nSilahkan Susun Kata Berikut:\n${soal}\nKategori : ${type}\n\nWaktu: ${q.timeoutgame / 1000} Detik\n`
    let teks2 = `Waktu Berakhir :(\n\nJawaban Dari Soal :\n\n${bb(soal)}\n\nAdalah : ${bb(jawaban)}`
    database[i] = [
      await repl(teks),
      soal,
      jawaban.toLowerCase(),
      setTimeout(function () {
        if (database[i]) repl(teks2)
        delete database[i]
      }, q.timeoutgame)
    ]
  },
  main: async (m, { q, conn, bb, budy, repl }) => {
    let i = m.chat
    if (i in database) {
      if (simi(database[i][2], budy.toLowerCase()) >= sensitive) {
        repl(`Jawaban Benarr!!!\n\nSoalan Susun Kata:\n${bb(database[i][1])}\nJawaban : ${database[i][2]}`)
        clearTimeout(database[i][3])
        delete database[i]
      }
    }
  }
}

export default handle