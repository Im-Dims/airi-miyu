const handle = {
  main: async (m, { up, q, d, conn, isBotAdmin, isAdmin, budy, repl, db }) => {
    if (!m.isGc) return
    let i = db.grup.findIndex((v) => v[0] == m.chat)
    if (db.grup[i][1].antibot) {
      if (up.key.id.startsWith("BAE5") && !up.key.fromMe) {
        await conn.sendteks(m.chat, "[ Anti Bot ]\nBot Lain Terdeteksi, Maaf Kak Kamu Harus Saya Keluarkan",
          d.f1("Notifikasi Keamanan Group", "")
        )
        if (isAdmin) return await repl("Eh ndak jadi, Admin mah bebas:v")
        if (m.isOwn) return await repl("Owner mah bebas ya kan")
        if (!isBotAdmin) return await repl("Aku aja bukan admin gimana mau nge kick :v")
        await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
      }
    }
  }
}

export default handle