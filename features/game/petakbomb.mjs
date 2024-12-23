let database = {}

const handle = {
  miyxious: ["tebakbom"],
  category: "#game",
  describe: "Game Tebak Bom Jangan Sampai Kena Bom",
  run: async (m, { q, conn, repl }) => {
    let i = m.sender
    if (i in database) {
      await repl(`Game Mu Masih Belum Selesai`)
      let brd = database[i].board
      return repl(`Tebak Bom\n\n${brd.join("")}`)
    }
    database[i] = {
      petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
      board: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"],
      bomb: 3,
      lolos: 7,
      pick: 0,
      nyawa: ["❤️", "❤️", "❤️"]
    }
    let brd = database[i].board
    await repl(`Tebak Bon\n\n${brd.join("")}\n\nPilih Lah Nomor Tersebut! Dan Jangan Sampai Terkena Bom!\nBomb: ${database[i].bomb}\nNyawa: ${database[i].nyawa.join("")}`)
  },
  main: async (m, { q, conn, repl }) => {
    database = database ?? {}
    let i = m.sender,
      pilih = "🌀",
      bomb = "💣"
    if (i in database) {
      if (!/^[1-9]|10$/i.test(m.text)) return !0
      if (database[i].petak[parseInt(m.text) - 1] === 1) return !0
      if (database[i].petak[parseInt(m.text) - 1] === 2) {
        database[i].board[parseInt(m.text) - 1] = bomb
        database[i].pick++
        database[i].bomb--
        database[i].nyawa.pop()
        let brd = database[i].board
        if (database[i].nyawa.length < 1) {
          await repl(`Game Telah Berakhir...\nKamu Terkena Bomb\n\n ${brd.join("")}\n\nTerpilih: ${database[i].pick}\nNyawamu Habis...`)
          delete database[i]
        } else
          await repl(`Tebak Bom\n\nKamu Terkena Bomb\n ${brd.join("")}\n\nTerpilih: ${database[i].pick}\nSisa Nyawa: ${database[i].nyawa}`)
        return !0
      }
      if (database[i].petak[parseInt(m.text) - 1] === 0) {
        database[i].petak[parseInt(m.text) - 1] = 1
        database[i].board[parseInt(m.text) - 1] = pilih
        database[i].pick++
        database[i].lolos--
        let brd = database[i].board
        if (database[i].lolos < 1) {
          await repl(`*Kamu Berhasil Menebak Semua Nya!*\n${brd.join("")}\n\nTerpilih: ${database[i].pick}\nSisa Nyawa: ${database[i].nyawa}\nBomb: ${database[i].bomb}`)
          delete database[i]
        } else
          repl(`Tebak Bom\n\n${brd.join("")}\n\nTerpilih: ${database[i].pick}\nSisa nyawa: ${database[i].nyawa}\nBomb: ${database[i].bomb}`)
      }
    }
  }
}

export default handle

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5)
}