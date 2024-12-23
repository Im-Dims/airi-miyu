import fs from "fs"

const handle = {
  miyxious: ["sampah", "tmp"],
  category: "#bot",
  describe: "Melihat file sampah",
  run: async (m, { q, conn }) => {
    let all = await fs.readdirSync("./temp")
    let teks = q.tit("Jumlah Sampah System") + "\n\n"
    teks += `Total : ${all.filter((v) => v.endsWith(".tmp")).map((v) => v).length} Sampah\n\n`
    teks += all.filter((v) => v.endsWith(".tmp")).map((o) => `~${o}~\n`).join("")
    conn.sendteks(m.chat, teks, m)
  }
}

export default handle