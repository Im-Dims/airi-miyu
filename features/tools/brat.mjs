const handle = {
  miyxious: ["brat", "sbrat"],
  category: "#tools",
  describe: "Create Brat Sticker",
  run: async (m, { q, repl, conn }) => {
    const text = m.args.length >= 1 ? m.args.join(" ") : (m.quoted && m.quoted.text) || ""
    await conn.sendMessage(m.chat, { sticker: { url: `https://apii.ambalzz.biz.id/api/sticker/brat?text=${encodeURIComponent(text)}`}}, { quoted: m })
  }
export default handle
