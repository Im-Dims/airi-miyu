const handle = {
  miyxious: ["dellist"],
  category: "#database",
  describe: "Menghapus list store",
  run: async (m, { conn, q, repl, db, bot }) => {
    let [st, nameList] = m.query.split("@")
    if (!st) return repl(`Salah Perintah!!!\nContoh : *.${m.command} jb-store@Mobile legends`)
    if (!nameList) return repl(`Salah Perintah!!!\nContoh : *.${m.command} jb-store@Mobile legends`)
    let store = {
      k: st.toLowerCase(),
      b: st.toUpperCase()
    }
    let i = db.set.findIndex((v) => v[0] == bot)
    if (!db.set[i][1].store[store.k] && !db.set[i][1].store[store.b]) return repl(`Store Yang Kamu Ingin Hapus Listnya Tidak Ada`)
    if (!db.set[i][1].store[store.b].creator.includes(m.sender)) return repl(`Maaf!!!\n\nKamu Siapa?\nKamukan Bukan Owner Dari Store Ini!!!`)
    if (!db.set[i][1].store[store.k][nameList.toLowerCase()]) return repl(`Store Yang Kamu Ingin Hapus Listnya Tidak Ada`)
    delete db.set[i][1].store[store.k][nameList.toLowerCase()]
    db.set[i][1].store[store.b].update = Date.now()
    repl(`Sukses Delete List ${nameList} Dari Store ${store}`)
  }
}

export default handle