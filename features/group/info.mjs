const handle = {
  miyxious: ["info"],
  category: "#group",
  describe: "Information Atau Administration Group",
  run: async (m, { q, conn, meta, isBotAdmin, isAdmin, repl, db }) => {
    if (!m.isGc) return repl(q.forgc)
    let i = db.grup.findIndex((v) => v[0] == m.chat)
    if (m.query == "link") {
      if (!isBotAdmin) return repl(q.botadmin)
      if (isAdmin) {
        conn.groupInviteCode(m.chat).then((v) => repl(`Link Group\n\nhttps://chat.whatsapp.com/${v}`)).catch((e) => repl(q.gagal))
      } else if (!isAdmin) {
        if (!db.grup[i][1].link) return repl(q.linkadm)
        conn.groupInviteCode(m.chat).then((v) => repl(`Link Group\n\nhttps://chat.whatsapp.com/${v}`)).catch((e) => repl(q.gagal))
      }
    } else if (m.query == "revoke") {
      if (!isBotAdmin) return repl(q.botadmin)
      if (!isAdmin) return repl(q.admin)
      conn.groupRevokeInvite(m.chat).then((v) => repl(q.sukses)).catch((v) => repl(q.gagal))
    } else if (m.query == "group") {
      if (!isBotAdmin) return repl(q.botadmin)
      if (!isAdmin) return repl(q.admin)
      if (meta.announce) {
        conn.groupSettingUpdate(m.chat, "not_announcement").then((v) => repl("Sukses Membuka Group Ini...")).catch((v) => repl(q.gagal))
      } else if (!meta.announce) {
        conn.groupSettingUpdate(m.chat, "announcement").then((v) => repl("Sukses Menutup Group Ini...")).catch((v) => repl(q.gagal))
      }
    } else if (m.query == "info") {
      if (!isBotAdmin) return repl(q.botadmin)
      if (!isAdmin) return repl(q.admin)
      if (!meta.restrict) {
        conn.groupSettingUpdate(m.chat, "locked").then((v) => repl("Sukses Menutup Edit Info Group...")).catch((v) => repl(q.gagal))
      } else if (meta.restrict) {
        conn.groupSettingUpdate(m.chat, "unlocked").then((v) => repl("Sukses Membuka Edit Info Group...")).catch((v) => repl(q.gagal))
      }
    } else if (m.query == "ban") {
      if (!isBotAdmin) return repl(q.botadmin)
      if (!isAdmin) return repl(q.admin)
      if (db.grup[i][1].ban) {
        db.grup[i][1].ban = false
        repl("Miyu Sekarang Di Unban Di Chat Ini...")
      } else if (!db.grup[i][1].ban) {
        db.grup[i][1].ban = true
        repl("Miyu Sekarang Di Ban Di Chat Ini...")
      }
    } else if (m.query == "detect") {
      if (!isBotAdmin) return repl(q.botadmin)
      if (!isAdmin) return repl(q.admin)
      if (db.grup[i][1].ban) {
        db.grup[i][1].detect = false
        repl("Sukses Mematikan Detect Group...")
      } else if (!db.grup[i][1].detect) {
        db.grup[i][1].detect = true
        repl("Sukses Menghidupkan Detect Group...")
      }
    } else if (m.query == "linkgc") {
      if (!isBotAdmin) return repl(q.botadmin)
      if (!isAdmin) return repl(q.admin)
      if (db.grup[i][1].link) {
        db.grup[i][1].link = false
        repl("Link Group Ini Sekarang Hanya Admin Yang Dapat Mengambil...")
      } else if (!db.grup[i][1].link) {
        db.grup[i][1].link = true
        repl("Link Group Ini Sekarang Dapat Di Ambil Oleh Member...")
      }
    } else if (m.query == "antilink") {
      if (!isBotAdmin) return repl(q.botadmin)
      if (!isAdmin) return repl(q.admin)
      if (db.grup[i][1].antilink) {
        db.grup[i][1].antilink = false
        repl("Anti Link Tidak Aktif...")
      } else if (!db.grup[i][1].antilink) {
        db.grup[i][1].antilink = true
        repl("Anti Link Aktif...")
      }
    } else if (m.query == "antivn") {
      if (!isBotAdmin) return repl(q.botadmin)
      if (!isAdmin) return repl(q.admin)
      if (db.grup[i][1].antivn) {
        db.grup[i][1].antivn = false
        repl("Anti VN Tidak Aktif...")
      } else if (!db.grup[i][1].antivn) {
        db.grup[i][1].antivn = true
        repl("Anti VN Aktif...")
      }
    } else if (m.query == "antistik") {
      if (!isBotAdmin) return repl(q.botadmin)
      if (!isAdmin) return repl(q.admin)
      if (db.grup[i][1].antistik) {
        db.grup[i][1].antistik = false
        repl("Anti Stiker Tidak Aktif...")
      } else if (!db.grup[i][1].antistik) {
        db.grup[i][1].antistik = true
        repl("Anti Stiker Aktif...")
      }
    } else if (m.query == "antivid") {
      if (!isBotAdmin) return repl(q.botadmin)
      if (!isAdmin) return repl(q.admin)
      if (db.grup[i][1].antivid) {
        db.grup[i][1].antivid = false
        repl("Anti Video Tidak Aktif...")
      } else if (!db.grup[i][1].antivid) {
        db.grup[i][1].antivid = true
        repl("Anti Video Aktif...")
      }
    } else if (m.query == "antiimg") {
      if (!isBotAdmin) return repl(q.botadmin)
      if (!isAdmin) return repl(q.admin)
      if (db.grup[i][1].antiimg) {
        db.grup[i][1].antiimg = false
        repl("Anti Image Tidak Aktif...")
      } else if (!db.grup[i][1].antiimg) {
        db.grup[i][1].antiimg = true
        repl("Anti Image Aktif...")
      }
    } else if (m.query == "antibot") {
      if (!isBotAdmin) return repl(q.botadmin)
      if (!isAdmin) return repl(q.admin)
      if (db.grup[i][1].antibot) {
        db.grup[i][1].antibot = false
        repl("Anti Bot Tidak Aktif...")
      } else if (!db.grup[i][1].antibot) {
        db.grup[i][1].antibot = true
        repl("Anti Bot Aktif...")
      }
    } else if (m.query == "antitoksik") {
      if (!isBotAdmin) return repl(q.botadmin)
      if (!isAdmin) return repl(q.admin)
      if (db.grup[i][1].antitoksik) {
        db.grup[i][1].antitoksik = false
        repl("Anti Toxic Tidak Aktif...")
      } else if (!db.grup[i][1].antitoksik) {
        db.grup[i][1].antitoksik = true
        repl("Anti Toxic Aktif...")
      }
    } else if (m.query == "antiluar") {
      if (!isBotAdmin) return repl(q.botadmin)
      if (!isAdmin) return repl(q.admin)
      if (db.grup[i][1].antiluar) {
        db.grup[i][1].antiluar = false
        repl("Anti Nomor Luar Tidak Aktif...")
      } else if (!db.grup[i][1].antiluar) {
        db.grup[i][1].antiluar = true
        repl("Anti Nomor Luar Aktif...")
      }
    } else if (m.query == "autostik") {
      if (!isBotAdmin) return repl(q.botadmin)
      if (!isAdmin) return repl(q.admin)
      if (db.grup[i][1].autostik) {
        db.grup[i][1].autostik = false
        repl("Auto Stiker Tidak Aktif...")
      } else if (!db.grup[i][1].autostik) {
        db.grup[i][1].autostik = true
        repl("Auto Stiker Aktif...")
      }
    } else if (m.query == "antivo") {
      if (!isBotAdmin) return repl(q.botadmin)
      if (!isAdmin) return repl(q.admin)
      if (db.grup[i][1].antivo) {
        db.grup[i][1].antivo = false
        repl("Anti View Once Tidak Aktif...")
      } else if (!db.grup[i][1].antivo) {
        db.grup[i][1].antivo = true
        repl("Anti View Once Aktif...")
      }
    } else {
      let info = `INFO GROUP\n\n`
      info += `Nama Group: *${meta.subject}*\n`
      info += `Members: *${meta.size}*\n`
      info += `Pembuat Group: *${meta.owner?.split("@")[0] ?? "Kosong"}*\n`
      info += `Status Anda: *${isAdmin ? "Orang dalam" : "Bukan orang dalam"}*\n`
      info += `Edit info: *${meta.restrict ? "Hanya admin" : "Semua member"}*\n`
      info += `Kirim pesan: ${meta.announce ? "Hanya admin" : "Semua member"}\n`
      info += `Ban group: *${db.grup[i][1].ban ? "iya" : "tidak"}*\n`
      info += `Detect Group: *${db.grup[i][1].detect ? "Online" : "Offline"}*\n`
      info += isAdmin ? `Bagikan link Group: *${db.grup[i][1].link ? "Boleh" : "Jangan"}*\n` : ``
      info += `Anti link: *${db.grup[i][1].antilink ? "hidup" : "mati"}*\n`
      conn.sendMessage(m.chat, { text: info }, { quoted: m })
    }
  }
}

export default handle