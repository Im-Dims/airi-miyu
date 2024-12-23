import fs from "fs"
import JSZIP from "jszip"
import { join } from "path"

const zip = new JSZIP()

const handle = {
  miyxious: ["getsesi"],
  category: "#owner",
  describe: "",
  run: async (m, { q, d, conn }) => {
    try {
      if (!m.isOwn) throw q.owner
      await conn.sendteks(m.chat, `sedang ambil...`, m)
      let sesi = join(process.cwd(), q.session)
      const readSession = await fs.readdirSync(sessi)
      const folder = zip.folder(q.session)
      for (let json of readSession) {
        const jsonSession = await fs.readFileSync(join(sesi, json))
        folder.file(json, jsonSession)
      }
      zip.generateNodeStream({ type: "nodebuffer", streamFiles: true }).pipe(fs.createWriteStream(process.cwd() + `/.tmp/${q.session}.zip`)).on("finish", async () => {
        await conn.senddoclok(m.chat, process.cwd() + `/.tmp/${q.session}.zip`, `${q.session}.zip`, "application/zip", m)
        q.tmp(process.cwd() + `/.tmp/${q.session}.zip`)
      })
    } catch (e) {
      conn.sendteks(m.chat, e, m)
    }
  }
}

export default handle