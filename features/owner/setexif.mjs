const handle = {
  miyxious: ["setexif"],
  category: "#owner",
  describe: "",
  run: async (m, { q, conn, db, bot, repl }) => {
    if (!m.isOwn) return repl(q.owner)
    let [_a, _b] = m.query.split("|")
    if (!_a) return repl(`Contoh : ${m.command} Nama Spack stiker | Nama Mu`)
    if (!_b) return repl(`Contoh : ${m.command} Nama Spack Stiker | Nama Mu`)
    let i = db.set.findIndex((v) => v[0] == bot)
    db.set[i][1].pack = _a
    db.set[i][1].auth = _b
    repl(`Sukses Atur Exif Stiker Dengan Nama : ${_a} dan author : ${_b}`)
  }
}

export default handle