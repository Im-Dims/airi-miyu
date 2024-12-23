import { wmSticker } from "../../utils/lib/convert.media.lib.mjs"

const handle = {
  miyxious: ["swm", "stikerwm", "wm", "take", "stickerwatermark"],
  category: "#tools",
  describe: "Mengubah stiker wm kalian",
  run: async (m, { q, conn, text, repl }) => {
    if (!m.quoted) return repl('Reply sticker nya')
    let stiker = false
    try {
      let [packname, ...author] = text.split('|')
      author = (author || []).join('|')
      let mime = m.quoted.mimetype || ''
      if (!/webp/.test(mime)) return repl('Reply sticker nya')
      let img = await m.quoted.download()
      if (!img) return repl('Reply sticker nya')
      stiker = await wmSticker(img, { name: packname || '', author: author || '' })
    } catch (e) {
      console.error(e)
      if (Buffer.isBuffer(e)) stiker = e
    } finally {
      if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, {
        asSticker: true
      })
      else return repl(q.gagal)
    }
  }
}

export default handle