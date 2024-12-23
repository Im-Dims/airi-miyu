const handle = {
  miyxious: ["setnamebot"],
  category: "#owner",
  describe: "",
  run: async (m, { q, conn, quotry, repl }) => {
    if (!m.isOwn) return repl(q.owner)
    if (!quotry) return repl(q.teks)
    if (quotry.length >= 100) return repl("Nama Tidak Boleh Lebih Dari 100 Karakter")
    await conn.updateProfileName(m.query).then((_) => repl(q.sukses)).catch((_) => repl(q.gagal))
  }
}

export default handle