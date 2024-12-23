import cp, { exec as _exec } from 'child_process'
import { promisify } from 'util'
let exec = promisify(_exec).bind(cp)
import path from "path"

const handle = {
  miyxious: ["getplugin", "gp"],
  category: "#system",
  describe: "",
  run: async (m, { q, conn, text, Func }) => {
    if (!m.isDev) return conn.sendteks(m.chat, q.owner, m)
    try {
      if (!text) return conn.sendteks(m.chat, Func.example(m.preff, m.command, 'menu, or ' + m.preff + m.command + ' system/eval'), m)
      const pluginPath = path.resolve('./features', text + '.mjs')
      if (!fs.existsSync(pluginPath)) {
        const getStructure = (dir, indent = '') => {
          let structure = ''
          const items = fs.readdirSync(dir, { withFileTypes: true })
          items.forEach(item => {
            if (item.isDirectory()) {
              structure += `\n${indent}📂 ${item.name}`
              structure += getStructure(path.join(dir, item.name), indent + '  ')
            } else if (item.isFile() && item.name.endsWith('.mjs')) {
              structure += `\n${indent}📄 ${item.name}`
            }
          })
          return structure
        }
        const structure = getStructure('./features')
        return conn.sendteks(m.chat, `'${text}.mjs' not found!\n\n*Available plugins:*${structure}`, m)
      }
      exec(`cat "${pluginPath}"`, (error, stdout, stderr) => {
        if (error || stderr) return conn.sendteks(m.chat, `Failed to read file:\n${error || stderr}`, m)
        conn.sendteks(m.chat, stdout, m)
      })
    } catch (err) {
      console.log(err)
      return conn.sendteks(m.chat, Func.jsonFormat(err), m)
    }
  }
}

export default handle