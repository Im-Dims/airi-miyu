const handle = {
  miyxious: ["liststore"],
  category: "#database",
  describe: "Melihat toko yang terdaftar",
  run: async (m, { q, conn, bot, db }) => {
    const botDataIndex = db.set.findIndex((v) => v[0] === bot)
    const storeKeys = botDataIndex !== -1 ? Object.keys(db.set[botDataIndex][1].store) : []
    const storeData = botDataIndex !== -1 ? db.set[botDataIndex][1].store : {}
    const stores = storeKeys.length > 0 ? storeKeys.filter((v) => v === v.toUpperCase()).map((storeKey) => {
      const storeInfo = storeData[storeKey]
      const creators = storeInfo.creator.map((creator) => creator.split("@")[0]).join(" - ")
      const createdTime = q.time(new Date() - storeInfo.date)
      const updatedTime = q.time(new Date() - storeInfo.update)
      return `Store: ${storeKey}\nDibuat Oleh: ${creators}\nDibuat Pada: ${createdTime} Yang Lalu\nDiupdate Pada: ${updatedTime}`
    }) : ["Belum ada store yang terdaftar di sini."]
    const message = `Daftar Toko:\n\n${stores.join("\n\n")}`
    conn.sendMessage(m.chat, { text: message }, { quoted: m })
  }
}

export default handle