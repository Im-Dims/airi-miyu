const handle = {
  main: async (m, { q, conn, bot, db }) => {
    let i = db.set.findIndex((v) => v[0] == bot)
    if (i === -1 || !db.set[i][1].store[m.command.toLowerCase()]) return
    let store = db.set[i][1].store[m.command.toLowerCase()]
    let list = Object.values(store).length !== 0 
      ? Object.values(store).map((v) => [
          v.tilte, 
          `.respons ${m.command.toLowerCase()}@${v.tilte}`, 
          v.des ? v.des : ""
        ])
      : [
          [
            "Belum Ada List Disini",
            "",
            "Perintah Add List : *.addlist namastore@namalist@namadeskripsi* \nLakukan Lah Sambil Mereply Pesan Isi"
          ]
        ]

    let messageText = `List Message Dari ${m.command}:\n` + list.map((v) => `- ${v[0]}\n  ${v[1]}\n  ${v[2]}`).join("\n")

    await conn.sendMessage(m.chat, { text: messageText }, { quoted: m })
  }
}

export default handle