import { readdirSync, readFileSync, createWriteStream } from "fs"
import JSZIP from "jszip"

const zip = new JSZIP()
let path = process.cwd() + "/utils/db/"

const handle = {
  miyxious: ["getdb"],
  category: "#owner",
  describe: "",
  run: async (m, { q, conn, d }) => {
    if (!m.isOwn) return repl(q.owner)
    await conn.sendteks(m.chat, `Sedang Mengambil...`, m)
    let _a = readdirSync(path),
      _b = zip.folder("db")
    for (let _c of _a) {
      let _d = readFileSync(path + _c)
      _b.file(_c, _d)
    }
    zip.generateNodeStream({ type: "nodebuffer", streamFiles: true }).pipe(createWriteStream(process.cwd() + `/.tmp/db.zip`)).on("finish", async () => {
      await conn.senddoclok(m.chat, process.cwd() + `/.tmp/db.zip`, `db.zip`, `application/zip`, m)
      q.tmp(process.cwd() + "/.tmp/db.zip")
    })
  }
}

export default handle