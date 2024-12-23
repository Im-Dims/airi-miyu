const handle = {
  miyxious: ["demote", "dm"],
  category: "#group",
  describe: "Menurunkan Jabatan Admin Group",
  run: async (m, { q, repl, conn, text, isBotAdmin, isAdmin, participants, Func }) => {
    if (!isAdmin && !m.isOwn) return repl(q.admin)
    if (!isBotAdmin) return repl(q.botadmin)
    if (m.quoted) {
      if (m.quoted.sender === conn.user.id.replace(':10', '')) return conn.sendteks(m.chat, 'Jangan Saya Lah -_', m)
      try {
        let user = m.quoted.sender
        await Func.delay(1 * 200)
        await conn.groupParticipantsUpdate(m.chat, [user], "demote")
        conn.sendteks(m.chat, `Sukses Sayang, Sekarang @${(user || "").replace(/@s\.whatsapp\.net/g, "")} Sekarang bukan admin lagi.`, m, { mentions: [user] })
      } catch (e) {
        console.log(e)
        let user = m.quoted.sender
        await conn.sendteks(m.chat, `Gagal demote @${(user || "").replace(/@s\.whatsapp\.net/g, "")}`, null, { mentions: [user] }, m)
      }
    } else {
      if (!text) return conn.sendteks(m.chat, '*@tag* atau *reply* yang ingin di demote!', m)   
      try {
        let users = m.rtarget ?? m.mentionedJid[0] ?? m.quoted?.sender ?? m.query.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
        await Func.delay(1 * 200)
        const res = await conn.groupParticipantsUpdate(m.chat, [users], "demote")
        conn.sendteks(m.chat, `Sukses Sayang, Sekarang @${(users || "").replace(/@s\.whatsapp\.net/g, "")} Sekarang bukan admin lagi.`, m, { mentions: [users] })
      } catch (e) {
        console.log(e)
        let user = m.mentionedJid[0]
        conn.sendteks(m.chat, `Gagal demote @${(user || "").replace(/@s\.whatsapp\.net/g, "")}`, null, { mentions: [user] }, m)
      }
    }
  }
}

export default handle