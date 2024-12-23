const handle = {
  miyxious: ["toenchant", "tc"],
  category: "#tools",
  describe: "Mengconvert bahasa kita ke bahasa enchanting table minecraft",
  run: async (m, { q, repl, text, Func }) => {
    try {
      const charMap = {
        a: "ᔑ",
        b: "ʖ",
        c: "ᓵ",
        d: "↸",
        e: "ᒷ",
        f: "⎓",
        g: "⊣",
        h: "⍑",
        i: "╎",
        j: "⋮",
        k: "ꖌ",
        l: "ꖎ",
        m: "ᒲ",
        n: "リ",
        o: "𝙹",
        p: "!¡",
        q: "ᑑ",
        r: "∷",
        s: "ᓭ",
        t: "ℸ ̣",
        u: "⚍",
        v: "⍊",
        w: "∴",
        x: "̇/",
        y: "||",
        z: "⨅"
      }
      if (!text || typeof text !== "string") return repl("Harap masukkan teks yang ingin convert!")
      const convertToEnchant = async (text) => {
        return new Promise((resolve) => {
          const result = text
            .toLowerCase()
            .split("")
            .map((char) => charMap[char] || char)
            .join("")
          resolve(result)
        })
      }
      const loli = await convertToEnchant(text)
      return repl(`*Input:*\n${text}\n\n*Hasil convert:*\n${loli}`)
    } catch (err) {
      console.log(err)
      return repl(Func.jsonFormat(err))
    }
  },
}

export default handle