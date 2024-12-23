const handle = {
  main: async (m, { up, q, d, conn, isBotAdmin, isAdmin, budy, repl, db }) => {
    if (!m.isGc) return
    let i = db.grup.findIndex((v) => v[0] == m.chat)
    if (db.grup[i][1].antivn) {
      if (m.mtype === "audioMessage") {
        await conn.sendteks(m.chat, "[ Anti VN ]\nGroup Ini Dilengkapi Dengan Anti VN\nVN Kamu Akan Di Hapus",
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
      }
    }
  }
}

export default handle