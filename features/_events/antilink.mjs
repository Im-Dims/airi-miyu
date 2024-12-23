const handle = {
  main: async (m, { up, q, d, conn, isBotAdmin, isAdmin, budy, repl, db }) => {
    let regexp = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
    if (!m.isGc) return
    let i = db.grup.findIndex((v) => v[0] == m.chat)
    if (db.grup[i][1].antilink) {
      if (regexp.exec(budy)) {
        if (budy.includes(`https://chat.whatsapp.com/${await conn.groupInviteCode(m.chat)}`)) return
        await conn.sendteks(m.chat, "[ Anti Link ]\nGroup Ini Dilengkapi Dengan Anti Link\nKamu Melanggar Larangan\nKamu Akan Di Keluarkan",
          d.f1("Notifikasi Keamanan Group", "")
        )
        if (isAdmin) return await repl("Eh ndak jadi, Admin mah bebas:v")
        if (m.isOwn) return await repl("Owner mah bebas ya kan")
        if (!isBotAdmin) return await repl("Aku aja bukan admin gimana mau nge kick :v")
        await conn.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.id,
            participant: m.sender
          }
        })
        await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
      }
    }
  }
}

export default handle