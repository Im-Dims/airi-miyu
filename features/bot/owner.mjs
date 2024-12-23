const handle = {
  miyxious: ["developer", "owner", "adminbot", "creator"],
  category: "#bot",
  describe: "Melihat kontak developer miyu",
  run: async (m, { q, conn }) => {
    let kontak = [
      [q.ownername, q.developer[0], ""]
    ]
    await conn.sendkon(m.chat, q.name, kontak, m).catch((v) => conn.sendteks(m.chat, q.gagal, m))
  }
}

export default handle