import uploadImage from "../../utils/lib/uploadImage.mjs"

const handle = {
  miyxious: ["imgtourl", "url", "tourl"],
  category: "#tools",
  describe: "Convert image, video, or sticker to URL",
  run: async (m, { q, repl, conn }) => {
    let qu = m.quoted ? m.quoted : m
    let mime = (qu.msg || qu).mimetype || qu.mediaType || ''
    if (!mime || mime == 'conversation') return repl('Apa yang mau di upload ?')
    repl(q.wait)
    let img = await qu.download?.()
    let out = await uploadImage(img, true)
    if (!out) return repl(q.gagal)
    if (typeof out === 'string' || out instanceof String) repl(`[ LINK ]\n${out}`)
    else {
      out = out.result
      let teks = `*[ File Uploaded ]*\n\n`
      teks += `*-* *Host* : ${out.host}\n`
      teks += `*-* *Name* : ${out.filename}\n`
      teks += `*-* *Size* : ${isNaN(out.filesize) ? out.filesize : niceBytes(out.filesize)}\n`
      teks += `*-* *Url* : ${out.url}\n\n`
      teks += q.footer
      repl(teks)
    }
  }
}

async function niceBytes(x) {
  let units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(x, 10) || 0;
  while(n >= 1024 && ++l){
    n = n/1024;
  }
  return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}

export default handle