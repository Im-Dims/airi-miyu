import { unlinkSync, existsSync } from "fs"
import path from "path"

const handle = {
  miyxious: ["delplugin", "dp"],
  category: "#system",
  describe: "",
  run: async (m, { q, conn, db, repl, text }) => {
    if (!m.isDev) return conn.sendteks(m.chat, q.owner, m)
    if (!text) return conn.sendteks(m.chat, `Salah!!!\nContoh : *.${m.command} owner/bcgc*`, m)
    let cmd = existsSync(path.join(process.cwd(), 'features', `${text}.mjs`))
    if (!cmd) return repl(`Plugin Yang Ingin Kamu Hapus Tidak Ada`)
    await unlinkSync(path.join(process.cwd(), 'features', `${text}.mjs`))
    await repl(`Sukses Menghapus Plugin ${text}.mjs`)
  }
}

export default handle