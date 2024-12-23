const handle = {
  miyxious: ["listblock", "lblock"],
  category: "#bot",
  describe: "Melihat daftar hitam user di miyu",
  run: async (m, { q, d, conn, lblock }) => {
    let teks = q.tit("List Block") + "\n\n"
    teks += `Total: ${lblock.length}\n`
    teks += lblock.map((u) => "wa.me/" + u.split("@")[0]).join("\n")
    conn.sendteks(m.chat, teks, q.name, 
      d.f1("List Block", "")
    )
  }
}

export default handle