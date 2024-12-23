import fs from "fs"
import { join } from "path"

const handle = {
  miyxious: ["dashboard", "dash"],
  category: "#bot",
  describe: "Melihat kondisi system miyu",
  run: async (m, { q, conn, bot, repl, db }) => {
    let _b = 0
    let dir = fs.readdirSync(q.session)
    let running = JSON.parse(fs.readFileSync(join(q.session, "app_run.txt")))
    let size = dir.map((v) => (_b += fs.statSync(join(q.session, v)).size))
    let topFitur = Object.entries(db.cmd).sort((a, b) => b[1].hit - a[1].hit)
    let teks = `DASHBOARD\n\n` +
      `Total Sessions : ${dir.length} Files\n` +
      `Ukuran Sessions : ${_b.sizeString()}\n` +
      `Runtime : ${(Date.now() - running).timers()}\n` +
      `System OS : ${process.platform}\n` +
      `Nodejs Version : ${process.version}\n` +
      `Ram Terpakai : ${process.memoryUsage.rss().sizeString(0)}\n` +
      `Max Ram Server : ${process.env.SERVER_MEMORY ?? 0} MB\n` +
      `Waktu Server : ${process.env.TZ ?? "Tidak diketahui"}\n` +
      `\nTotal Hit : ${Object.entries(db.cmd).map((v) => v[1].hit).reduce((a, b) => a + b)}\n` +
      `Total User : ${db.users.length} Users\n` +
      `Total Group : ${db.grup.length} Groups\n` +
      `Total Fitur : ${Object.keys(db.cmd).length} Fitur\n` +
      `Top Fitur : \n${topFitur.slice(0, 6).map((v, i) => `*${i + 1}. ${v[0]}*\n-> Perintah: ${v[1].first}\n-> Terpakai: ${v[1].hit}X\n-> Terpakai Hari Ini: ${v[1].hittoday}X\n-> Terakhir Dipakai: ${(Date.now() - v[1].lastused).timers()} Yang Lalu`).join("\n")}`
    repl(teks)
  }
}

export default handle