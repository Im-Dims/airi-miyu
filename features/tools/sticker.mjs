import { imgToStiker, vidToStiker } from "../../utils/lib/convert.media.lib.mjs"

const handle = {
  miyxious: ["sticker", "stiker", "s"],
  category: "#tools",
  describe: "Untuk Membuat Sticker",
  run: async (m, { q, conn, d, quoted, mime, find, repl, db }) => {
    let { b } = find
    if (!quoted) return repl(`Reply Atau Kirim Foto Dengan Caption .${m.command}`)
    if (!/(image\/(jpe?g|png)|video\/(mp4|mov))/.test(mime)) return repl(`Reply Atau Kirim Foto Dengan Caption .${m.command}`)
    let buf = await quoted.download()
    await q.delay(1000)
    if (/image\/(jpe?g|png)/.test(mime)) conn.sendstik(m.chat, await imgToStiker(buf, { 
      name: db.set[b][1].pack, 
      author: db.set[b][1].auth 
    }), m)
    else if (/video\/(mp4|mov)/.test(mime)) conn.sendstik(m.chat, await vidToStiker(buf, { 
      name: db.set[b][1].pack, 
      author: db.set[b][1].auth 
    }), m)
  }
}

export default handle