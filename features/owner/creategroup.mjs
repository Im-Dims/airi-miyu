const handle = {
  miyxious: ["buatgrup", "creategc"],
  category: "#owner",
  describe: "",
  run: async (m, { q, conn, db, repl }) => {
    if (!m.isOwn) return repl(q.owner)
    if (!m.query) return repl("Masukan Judul Group Nya!")
    const gc = await conn.groupCreate(m.query, [m.sender])
    repl(`Sukses Membuat Group!\n\nLink: https://chat.whatsapp.com/${await conn.groupInviteCode(gc.id)}`)
  }
}

export default handle