const handle = {
  miyxious: ["broadcastgroup", "bcgroup", "bcgc"],
  category: "#owner",
  describe: "",
  run: async (m, { q, d, conn, repl, more, quoted, mime }) => {
    if (!m.isOwn) return repl(q.owner)
    if (!m.query) return repl("Masukan Teksnya Sayang >,<")
    let all = Object.keys(await conn.groupFetchAllParticipating())
    let from = m.sender
    conn.sendteks(m.chat, `Sedang Mengirim Broadcast Ke ${all.length} Grup, Selama ${(q.longbc * all.length) / 1000} Detik`, m)
    let teks = "```--:-- Pengumuman --:--```\n\n" + 
      m.query +
      "\n\n" +
      more +
      "\n" +
      new Date().toLocaleString() +
      "\n" +
      `Oleh: @${from.split("@")[0]}`
    for (let i of all) {
      await q.delay(q.longbc)
      await conn.sendteks(i, teks,  
        d.f1("Broadcast Group", ""), { mentions: [from] }
      )
    }
    conn.sendteks(m.chat, q.sukses, m)
  }
}

export default handle