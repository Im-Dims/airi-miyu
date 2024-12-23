import { writeFileSync } from "fs"
import path from 'path'

const handle = {
  miyxious: ["saveplugin", "sf"],
  category: "#system",
  describe: "",
  run: async (m, { q, conn, repl, bot, db }) => {
    conn.file = conn.file ? conn.file : {}
    if (!m.isDev) return repl("Lah??, Kamu Siapa?")
    if (!m.quoted)return repl(`Mau Simpan Plugin Dengan Dengan Perintah, Reply Teks Script Nya Sayang`)
    if (!text) return repl(`Mau Simpan Plugin Di Path apa?`)
    await writeFileSync(path.join(process.cwd(), 'features', `${text}.mjs`), m.quoted.text)
    await repl(`Sukses Menyimpan Di Path ${text}`)
  }
}

export default handle