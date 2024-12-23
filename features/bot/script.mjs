const handle = {
  miyxious: ["source", "sc", "script"],
  category: "#bot",
  describe: "Source code miyu ada di sini",
  run: (m, { q, repl, conn }) => {
    let teks = `[				Source Code				]\n\n`
    teks += `Kunjungi github ${q.name} :\n`
    teks += `${q.home}\n\n`
    teks += `Jangan lupa follow akun github ku ya:v\n`
    teks += `Report jika ada bug di sini : ${q.bug}`
    repl(teks)
  }
}

export default handle