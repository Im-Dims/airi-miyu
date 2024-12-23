const handle = {
  miyxious: ["respons"],
  category: "#database",
  describe: "Melihat respon list miyu",
  run: async (m, { q, conn, db, bot, repl }) => {
    let [st, nameList] = m.query.split("@")
    if (!st) return
    if (!nameList) return
    let store = {
      k: st.toLowerCase(),
      b: st.toUpperCase()
    }
    let i = db.set.findIndex((v) => v[0] == bot)
    if (!db.set[i][1].store[store.k] && !db.set[i][1].store[store.b]) return
    if (!db.set[i][1].store[store.k][nameList.toLowerCase()]) return repl(`List Itu Tidak Ada Atau Sudah Dihapus Oleh Owner Store Ini`)
    repl(db.set[i][1].store[store.k][nameList.toLowerCase()].isi +
    "\n\n" +
    `Owner Store :\n${db.set[i][1].store[store.b].creator.map((v) => v.split("@")[0]).join("\n")}\nDibuat Pada: ${q.time(Date.now() - db.set[i][1].store[store.b].date)}`
    )
  }
}

export default handle