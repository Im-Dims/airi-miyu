import fs from "fs"

const handle = {
  miyxious: ["simpan", "addmsg"],
  category: "#owner",
  describe: "",
  run: async (m, { q, quoted, conn, repl }) => {
    if (!m.isOwn) return repl(q.owner)
    if (!/(imageMessage|videoMessage|audioMessage|stickerMessage)/.test(m.quoted?.mtype)) return repl("Reply Gambar / Video / Audio Yang Ingin Di Simpan Ke Mediaku")
    if (!m.query) return repl("Beri Nama File Tersebut...")
    let buf = await m.quoted.download()
    let name = m.query.replace(" ", "-")
    let path = /imageMessage/.test(m.quoted?.mtype) ? `./Media/Image/${name}.jpg` : /videoMessage/.test(m.quoted?.mtype) ? `./Media/Video/${name}.mp4` : /audioMessage/.test(m.quoted?.mtype) ? `./Media/Audio/${name}.mp3` : /stickerMessage/.test(m.quoted?.mtype) ? `./Media/Sticker/${name}.webp` : `./Media/Other/${name}.bin`
    await fs.writeFileSync(path, buf)
    repl(`Sukses Mengirimnd Ke Path ${path}\nDengan Nama ${name}`)
  }
}

export default handle