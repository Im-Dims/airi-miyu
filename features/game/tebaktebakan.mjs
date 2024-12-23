import fs from "fs"
import simi from "similarity"
let sensitive = 0.75,
database = {}

const handle = {
  miyxious: ["tebaktebakan"],
  category: "#game",
  describe: "Game Tebak Tebakan",
  run: async (m, { conn, q, d, bb, repl }) => {
    let i = m.chat
    if (i in conn.kimia) return repl("Masih Ada Game Yang Belum Selesai!!!\nMohon Tunggu...")
    let res = JSON.parse(fs.readFileSync(process.cwd() + "/utils/db/tebaktebakan.json")).rendem()
    let soal = res.soal
    let jawaban = res.jawaban
    console.log("Soal: " + soal + "\n" + "Jawaban: " + jawaban)
    let teks = `*Game Tebak Tebakan*\n\nCoba Tebak Soal Ini *${soal}* \nWaktu: ${q.timeoutgame / 1000} Detik\n`
    let teks2 = `Waktu Berakhir :(\nSoal Tebak Tebakan: ${soal}\n\n Jawaban Nya : ${bb(jawaban)}`
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
        repl(`Jawaban Benarr!!!\n\nSoalan:\n${bb(database[i][1])}\nJawaban : ${database[i][2]}`)
        clearTimeout(database[i][3])
        delete database[i]
      }
    }
  }
}

export default handle