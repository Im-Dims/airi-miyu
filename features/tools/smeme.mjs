import { toJpg, imgToStiker } from "../../utils/lib/convert.media.lib.mjs"
import uploadImage from "../../utils/lib/uploadImage.mjs"

const handle = {
  miyxious: ["smeme", "stikermeme", "stickermeme"],
  category: "#tools",
  describe: "change to sticker into meme sticker",
  run: async (m, { q, conn, mime, quoted, repl, db, find }) => {
    let [atas, bawah] = m.query.split("|")
    let { b } = find
    if (!atas) atas = " "
    if (!bawah) bawah = " "
    if (!/(image\/(jpe?g|png)|image\/(webp))/.test(mime)) return repl(`Balas stiker dengan teks *.${m.command} teks kesatu , teks kedua*\nAtau Balas gambar / kirim gambar dengan caption *.${m.command} teks kesatu , teks kedua*`)
    let dl = await quoted.download()
    if (/image\/(jpe?g|png)/.test(mime)) {
      let resUrl = await uploadImage(dl)
      let resBuffer = await q.getbuff(`https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${resUrl}`)
      conn.sendstik(m.chat, await imgToStiker(resBuffer, { name: db.set[b][1].pack, author: db.set[b][1].auth }), m)
    } else if (/image\/webp/.test(mime)) {
      if (m.quoted && m.quoted?.isAnimated) return repl("Jangan Stiker beranimasi!")
      let res = await toJpg(dl)
      let resUrl = await uploadImage(res)
      let resBuffer = await q.getbuff(`https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${resUrl}`)
      conn.sendstik(m.chat, await imgToStiker(resBuffer, { name: db.set[b][1].pack, author: db.set[b][1].auth }), m)
    } else repl(`Balas stiker dengan teks *.${m.command} teks kesatu , teks kedua*\nAtau Balas gambar / kirim gambar dengan caption *.${m.command} teks kesatu , teks kedua*`)
  }
}

export default handle