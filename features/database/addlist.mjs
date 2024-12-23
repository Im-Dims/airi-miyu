const handle = {
  miyxious: ["addlist", "addstore"],
  category: "#database",
  describe: "Menambahkan list store",
  run: async (m, { conn, q, repl, db, bot }) => {
    if (!m.quoted && !m.query) return repl(`Salah!!!\nContoh : *.${m.command} jb-store@Mobile Legends@Ini Adalah Store Mobile Legends,* Sambil Mereply Isian List Nya`)
    let [st, nameList, desc] = m.query.split("@")
    if (!st) return repl(`Salah Perintah!!!\nContoh : *.${m.command} jb-store@Mobile Legends@Ini Adalah Store Mobile Legends,* Sambil Mereply Isian List Nya`)
    if (!nameList) return repl(`Salah Perintah!!!\nContoh : *.${m.command} jb-store@Mobile Legends@Ini Adalah Store Mobile Legends,* Sambil Mereply Isian List Nya`)
    let store = {
      k: st.toLowerCase(),
      b: st.toUpperCase()
    }
    let i = db.set.findIndex((v) => v[0] == bot)
    if (!db.set[i][1].store[store.k] && !db.set[i][1].store[store.b]) return repl(`Store Yang Kamu Ingin Add Listnya Tidak Ada\nAdd Store Dengan Perintah .cstore *nama store*\nAtau Cari Nama Store Dengan Perintah .liststore`)
    if (!db.set[i][1].store[store.b].creator.includes(m.sender)) return repl(`Maaf!!!\n\nKamu Siapa?\nKamukan Bukan Ownerku!!!`, m)
    db.set[i][1].store[store.k][nameList.toLowerCase()] = {}
    db.set[i][1].store[store.k][nameList.toLowerCase()].tilte = nameList.toLowerCase()
    db.set[i][1].store[store.k][nameList.toLowerCase()].des = desc
    db.set[i][1].store[store.k][nameList.toLowerCase()].isi = m.quoted.text
    db.set[i][1].store[store.b].update = Date.now()
    repl(`Sukses Add List Ke Store ${store.k} Dengan Nama List ${nameList}\n${desc ? `Dengan Deskripsi : ${desc}` : ""}`)
  }
}

export default handle