const handle = {
  miyxious: ["block"],
  category: "#owner",
  describe: "",
  run: async (m, { q, conn, lblock }) => {
    if (!m.isOwn) return conn.sendteks(m.chat, q.owner, m)
    let use = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.query.replace(/[^0-9]/g, "") + q.idwa
    if (!lblock.includes(use)) {
      conn.sendteks(use, "Kamu Telah Di Block Oleh Owner", m)
      await q.delay(3000)
      conn.updateBlockStatus(use, "block").then((v) => conn.sendteks(m.chat, "Sukses Block User Tersebut!!!, Silahkan Lihat di .listblock", m)).catch((e) => conn.sendteks(m.chat, q.gagal, m))
    } else if (lblock.includes(use)) {
      conn.updateBlockStatus(use, "unblock").then((v) => conn.sendteks(m.chat, "Sukses UnBlock User Tersebut!!!, Silahkan Lihat Di .listblock", m)).catch((e) => conn.sendteks(m.chat, q.gagal, m))
      await q.delay(3000)
      conn.sendteks(use, "Anda Telah Di Unblock Oleh Owner", m)
    }
  }
}

export default handle