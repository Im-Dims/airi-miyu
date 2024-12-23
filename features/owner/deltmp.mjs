import fs from "fs"
import { join } from "path"

const handle = {
  miyxious: ["deltmp", "delsampah"],
  category: "#owner",
  describe: "",
  run: async (m, { q, d, conn }) => {
    if (!m.isOwn) return conn.sendteks(m.chat, q.owner, m)
    let path = join(process.cwd() + "/.tmp/")
    let all = fs.readdirSync(path).filter((v) => v.endsWith(".tmp")).map((v) => v)
    await conn.sendteks(m.chat, `Sedang Membersihkan Sampah System ...\nDalam Waktu : ${all.length * 2} Detik`, m)
    for (let u of all) {
      await q.delay(2000)
      await fs.unlinkSync(path + u)
    }
    conn.sendteks(m.chat, "Sukses!!!\nCache system Telah Bersih...\nSilahkan Cek Dengan Perintah .sampah", m)
  }
}

export default handle