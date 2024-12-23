import { exec } from "child_process"
import { format } from "util"

const handle = {
  miyxious: ["pull"],
  category: "#system",
  describe: "",
  run: async (m, { conn, d }) => {
    if (!m.isDev) return repl("Lah??, Kamu Siapa?")
    await conn.sendteks(m.chat, "Mengupdate Server..", m)
    await exec("git pull", (stderr, stdout) => {
      if (stderr) return conn.sendteks(m.chat, format(stderr), d.f1(stderr, ""))
      if (stdout) return conn.sendteks(m.chat, format(stdout), d.f1(stdout, ""))
    })
    conn.restart(m)
  }
}

export default handle