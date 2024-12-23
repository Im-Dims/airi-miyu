const handle = {
  miyxious: ["setprem"],
  category: "#owner",
  describe: "",
  run: async (m, { q, conn, db, repl, find }) => {
    let { users } = find
    if (!m.isOwn) return repl(q.owner)
    if (m.quoted) {
      if (!m.args[0]) return repl("Masukan Jumlah Waktu ( Hari )")
      if (!Number(m.args[0])) return repl("Invalid Angka!")
      let ind = users(m.quoted.sender)
      if (ind === -1) return repl("User Tidak Ditemukan! Pastikan User Tersebut Pernah Chat Sekali")
      let jumlah = parseInt(m.args[0]) * 24 * 60 * 60 * 1000
      if (Date.now() > db.users[ind][1].premium) db.users[ind][1].premium = Date.now()
      db.users[ind][1].premium += jumlah
      db.users[ind][1].remindprem = true
      repl(
        `PREMIUM ADD\n\nUser : ${db.users[ind][0].split("@")[0]}\nJumlah Penambahan : ${parseInt(
          m.args[0]
        )} Hari\nTotal Waktu : ${(db.users[ind][1].premium - Date.now()).timers()}`
      )
    } else return repl("Reply User Untuk Menambhakan Premium")
  }
}

export default handle