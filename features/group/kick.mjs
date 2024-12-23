const handle = {
  miyxious: ["kick", "tendang"],
  category: "#group",
  describe: "Mengeluarkan Member Dari Group",
  run: async (m, { q, conn, isBotAdmin, isAdmin, repl, members }) => {
    if (!isAdmin && !m.isOwn) return repl(q.admin)
    if (!isBotAdmin) return repl(q.botadmin)
    if (m.args[0] == "all") {
      members.filter((v) => v.admin !== "superadmin" && v.id !== conn.createJid(conn.user.id)).map(async (v) => {
        await q.delay(2000)
        await conn.groupParticipantsUpdate(m.chat, [v.id], "remove")
      })
      repl("Sukses Mengeluarkan Semua Member")
    }
    let user = m.rtarget ?? m.mentionedJid ?? m.quoted?.sender ?? m.query.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
    conn.groupParticipantsUpdate(m.chat, user.map((v) => v), "remove").then((v) => repl(q.sukses)).catch((v) => repl(q.gagal))
  }
}

export default handle