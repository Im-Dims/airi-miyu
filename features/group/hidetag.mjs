const handle = {
  miyxious: ["ht", "htag", "hidetag"],
  category: "#group",
  describe: "Pengumuman Di Group",
  run: async (m, { q, conn, isAdmin, isBotAdmin, members, quoted, repl, db, bot, d }) => {
    if (!m.isGc) return repl(q.forgc)
    if (!isAdmin) return repl(q.admin)
    if (!quoted) return repl(q.forteks)
    let i = db.set.findIndex((v) => v[0] == bot)
    let ments = db.set[i][1].antitag ? members.map((v) => v.id).filter((v) => !q.developer.map((a) => a + q.idwa).includes(v)) : members.map((v) => conn.createJid(v.id))
    conn.sendteks(m.chat, m.quoted ? m.quoted.text : m.query, 
      d.f1("hidetag group", ""), { mentions: ments }
    )
  }
}

export default handle