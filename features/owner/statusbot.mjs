const handle = {
  miyxious: ["setstatusbot"],
  category: "#owner",
  describe: "",
  run: async (m, { q, conn, quotry, repl }) => {
    if (!m.isOwn) return repl(q.owner)
    if (!quotry) return repl(q.teks)
    if (quotry.length >= 283) return repl("Teks Tidak Boleh Lebih Dari 139 Karakter")
    await conn.updateProfileStatus(m.query).then((_) => repl(q.sukses)).catch((_) => repl(q.gagal))
  }
}

export default handle