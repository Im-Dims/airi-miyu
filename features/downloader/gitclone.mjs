const handle = {
  miyxious: ["gitclone"],
  category: "#downloader",
  describe: "Memudahkan kamu download source dari github",
  run: async (m, { q, conn, repl, Func }) => {
    try {
      if (!m.args[0]) return repl(Func.example(m.preff, m.command, 'https://github.com/ImYanXiao/Elaina-MultiDevice'))
      const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
      if (!regex.test(m.args[0])) return m.reply('URL tidak valid!')
      repl(q.wait)
      let [_, user, repo] = m.args[0].match(regex) || []
      let repp = repo.replace(/.git$/, '')
      let url = `https://api.github.com/repos/${user}/${repp}/zipball`
      let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
      conn.sendMessage(m.chat, { 
        document: { url: url }, 
        fileName: filename, 
        mimetype: 'application/zip', 
        caption: 'Sukses downloading' 
      }, { quoted: m })
    } catch (err) {
      console.log(err)
      return repl(Func.jsonFormat(err))
    }
  }
}

export default handle