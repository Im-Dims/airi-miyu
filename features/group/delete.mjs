const handle = {
  miyxious: ["delete", "del", "d"],
  category: "#group",
  describe: "Menghapus pesan bot / orang di group",
  run: async (m, { q, conn, isBotAdmin, repl }) => {
    if (m.react) return conn.sendMessage(m.chat, { delete: m.rkey })
    if (!m.quoted) return repl("Reply pesan yg ingin kau lenyapkan dari bumi:v")
    if (m.quoted.isBot) {
      conn.sendMessage(m.chat, {
        delete: { 
          remoteJid: m.chat, 
          fromMe: true, 
          id: m.quoted.id, 
          participant: m.quoted.sender 
        }
      })
    } else {
      if (!isBotAdmin) return repl(q.botadmin)
      conn.sendMessage(m.chat, {
        delete: {
          remoteJid: m.chat,
          fromMe: false,
          id: m.quoted ? m.quoted.id : m.id,
          participant: m.quoted ? m.quoted.sender : m.sender
        }
      })
    }
  }
}

export default handle