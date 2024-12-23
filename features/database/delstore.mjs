const handle = {
  miyxious: ["delstore"],
  category: "#database",
  describe: "Menghapus toko",
  run: async (m, { conn, q, repl, db, bot }) => {
    if (!m.query) return repl(`Salah Perintah!!!\nContoh : *.${m.command} jb-store`)
    let store = {
      k: m.query.toLowerCase(),
      b: m.query.toUpperCase()
    }
    let i = db.set.findIndex((v) => v[0] == bot)
    if (!db.set[i][1].store[store.k] && !db.set[i][1].store[store.b]) return repl(`Store Yang Ingin Kamu Delete Ga Ada`)
    if (!db.set[i][1].store[store.b].creator.includes(m.sender)) return repl(`Maaf!!!\n\nAnda Kamu Siapa?\nKamu Kan Bukan Owner Dari Store Ini!!!`)
    delete db.set[i][1].store[store.k]
    delete db.set[i][1].store[store.b]
    repl(`Sukses Delete Store : ${store.k} Dari Database`)
  }
}

export default handle