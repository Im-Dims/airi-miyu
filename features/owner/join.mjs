const handle = {
  miyxious: ["join"],
  category: "#owner",
  describe: "",
  run: async (m, { q, conn, repl }) => {
    if (!m.isOwn) return repl(q.owner)
    if (!m.args[0]) return repl(q.aslink)
    if (!q.url(m.args[0])) return repl(q.flink)
    let code = m.args[0].split("whatsapp.com/")[1]
    await conn.groupAcceptInvite(code).then((v) => repl(q.sukses)).catch((e) => repl(q.gagal))
  }
}

export default handle