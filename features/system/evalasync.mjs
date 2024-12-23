import { format } from "util"
import axios from "axios"
import pretty from "pretty"

const handle = {
  miyxious: ["ev2", "evalasync"],
  category: "#system",
  describe: "",
  run: async (m, { q, d, repl, conn, grup, findAdmin, bb, budy, meta, members, admins, isAdmin, isBotAdmin, bot, mime, quoted, quotry, db }) => {
    if (!m.isDev) return repl("Lhoo, Kamu Siapa?")
    try {
      let evaling = await eval(`(async () => { return ${m.query ? m.query : innalillahi_wainna_ilaihi_rojiuun} })()`)
      conn.sendteks(m.chat, format(evaling), m)
    } catch (e) {
      conn.sendteks(m.chat, (await format(e)) + "\n\n*Kan Sepertinya Harus Banyak Belajar Sayang*\n*Jangan Asal Copas*",
        d.f1(e, "")
      )
    }
  }
}

export default handle