import fs from "fs"
import { join } from "path"

const handle = {
  miyxious: ["menu", "help"],
  category: "#bot",
  describe: "Menginformasikan daftar perintah yang tersedia di miyu",
  run: async (m, { q, d, repl, conn, bot, db, Func }) => {
    try {
      let cmd = Object.values(db.cmd)
      let cates = cmd.map(({ category }) => category).reduce((v, i) => (v.includes(i) ? v : [...v, i]), [])
      let filterCates = q.developer.map((v) => `${v}@s.whatsapp.net`).includes(m.sender) ? cates : cates.filter((v) => v !== "#system" && v !== "#owner")
      let _b = 0
      let running = JSON.parse(fs.readFileSync(join(q.session, "app_run.txt")))
      let topFitur = Object.entries(db.cmd).sort((a, b) => b[1].hit - a[1].hit)
      let totalHit = Object.entries(db.cmd).map((v) => v[1].hit).reduce((a, b) => a + b, 0)
      let teks = `*${q.name}*\n\n` +
      `> *Ram Terpakai* : ${process.memoryUsage.rss().sizeString(0)}\n` +
      `> *Total Hit* : ${totalHit}\n` +
      `> *Total User* : ${db.users.length} User\n` +
      `> *Total Group* : ${db.grup.length} Group\n` +
      `> *Total Fitur* : ${cmd.length}\n` +
      `> *Total Menu* : ${filterCates.length}\n` +
      `> *Sistem Berjalan* :${(Date.now() - running).timers()}\n\n` +
      filterCates.map((c) => `*${c.split("#")[1].toUpperCase()}*\n` + 
      cmd.filter(({ category }) => category === c).map(({ first }, i) => `${i + 1}. ${m.preff + first}`).join("\n")).join("\n\n") +
      `\n\n*Note* : Untuk Mencari Informasi Lainnya Tentang Perintah Kamu Bisa Mengetikan Perintah Dan Menambahkan -i\nContoh: .menu -i`
      conn.sendteks(m.chat, teks, m,
        d.f2(q.header, q.thumb, q.linkch) // Fake thumbnail
      )
    } catch (err) {
      console.log(err)
      return repl(Func.jsonFormat(err))
    }
  }
}

export default handle