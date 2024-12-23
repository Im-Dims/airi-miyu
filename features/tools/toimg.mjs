import { toVid, toVid2, toJpg } from "../../utils/lib/convert.media.lib.mjs"

const handle = {
  miyxious: ["tomedia", "tovideo", "toimg"],
  category: "#tools",
  describe: "convert your sticker into media",
  run: async (m, { q, d, conn, mime, quoted, repl }) => {
    if (!m.quoted) return repl("reply stiker nya")
    if (!/webp/.test(mime)) return repl("Reply stiker jangan selain stiker")
    let path = await quoted.download()
    if (m.quoted.isAnimated == true) {
      let b = await toVid2(path)
      conn.sendvid(m.chat, b, q.sukses, m)
    } else if (m.quoted.isAnimated == false) {
      conn.sendimgbuf(m.chat, await toJpg(path), q.sukses, m)
    }
  }
}

export default handle