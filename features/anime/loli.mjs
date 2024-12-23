const handle = {
  miyxious: ["loli"],
  category: "#anime",
  describe: "Random anime loli",
  run: async (m, { q, conn, repl, Func }) => {
    try {
      let img = await Func.fetchJson('https://raw.githubusercontent.com/Im-Dims/Database-doang-sih/refs/heads/main/loli.json')
      let ya = await Func.random(img)
      conn.sendMessage(m.chat, { image: { url: ya }, caption: "Wangyy wangyy" }, { quoted: m })
    } catch (err) {
      console.log(err)
      return repl(Func.jsonFormat(err))
    }
  }
}

export default handle