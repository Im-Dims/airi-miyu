import { format, inspect } from "util"

const handle = {
  miyxious: ["ev", "eval"],
  category: "#system",
  describe: "",
  run: async ( m, { repl, up, conn, q, d, grup, findAdmin, bb, budy, meta, members, admins, isAdmin, isBotAdmin, bot, mime, quoted, quotry, cache, db, find }) => {
    if (!m.isDev) return repl("Lhoo, Kamu Siapa?")
    let i = db.users.findIndex((v) => v[0] == m.sender)
    try {
      let evaling = await eval(!m.query ? Innalillahi_wainna_lillahi_rojiun : m.query)
      conn.sendteks(m.chat, typeof evaling != "string" ? inspect(evaling) : format(evaling), m)
    } catch (e) {
      conn.sendteks(m.chat, (await format(e)) + "\n\n*Kan Sepertinya Harus Banyak Belajar Sayang*\n*Jangan Asal Copas*",
        d.f1(e, "")
      )
    }
  }
}

export default handle