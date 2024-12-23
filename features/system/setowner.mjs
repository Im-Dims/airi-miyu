import fs from "fs"

const handle = {
  miyxious: ["setowner"],
  category: "#system",
  describe: "",
  run: async (m, { q, conn, repl }) => {
    if (!m.isDev) return repl("Lah Kamu Siapa?")
    var owner = q.developer
    var user = m.mentionedJid[0] ? m.mentionedJid[0].split("@")[0] : m.quoted ? m.quoted.sender.split("@")[0] : m.query.replace(/[^0-9]/g, "")
    if (!owner.includes(user)) {
      owner.push(user)
      var newOwner = JSON.stringify(owner, null, 2)
      fs.writeFile(process.cwd() + "/Setting/owner.json", newOwner, (err) => {
        if (err) return repl("elorr")
        repl(`Sukses Menambahkan ${user} Sebagai Owner`)
      })
    } else if (owner.includes(user)) {
      let position = owner.indexOf(user)
      owner.splice(position, 1)
      var nowData = JSON.stringify(owner, null, 2)
      fs.writeFile(process.cwd() + "/Setting/owner.json", nowData, (err) => {
        if (err) return repl("elorr")
        repl(`Sukses Menghapus ${user} Sebagai Owner`)
      })
    }
  }
}

export default handle