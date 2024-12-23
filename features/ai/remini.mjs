import FormData from "form-data"
import Jimp from "jimp"

const handle = {
  miyxious: ["remini", "hdr"],
  category: "#ai",
  describe: "Fitur ini dapat menjernihkan foto kamu",
  run: async (m, { q, conn, repl }) => {
    conn.enhancer = conn.enhancer ? conn.enhancer : {}
    if (m.sender in conn.enhancer) return repl("Masih Ada Proses Yang Belum Selesai Kak, Silahkan Tunggu Sampai Selesai Yah >//<")
    let quot = m.quoted ? m.quoted : m
    let mime = (quot.msg || quot).mimetype || quot.mediaType || ""
    if (!mime) return repl("Fotonya Mana Kak?")
    if (!/image\/(jpe?g|png)/.test(mime)) return repl(`Mime ${mime} tidak support`)
    else conn.enhancer[m.sender] = true
    repl(q.wait)
    let img = await quot.download?.()
    let error
    try {
      const anu = await processing(img, "enhance")
      conn.sendMessage(m.chat, { image: anu, caption: "Sudah Jadi Kak >//<" }, { quoted: m })
    } catch (er) {
      error = true
    } finally {
      if (error) {
        console.log(error)
        return repl("Proses Gagal :(")
      }
      delete conn.enhancer[m.sender]
    }
  }
}

export default handle

async function processing(urlPath, method) {
  return new Promise(async (resolve, reject) => {
    let Methods = ["enhance", "recolor", "dehaze"]
    Methods.includes(method) ? (method = method) : (method = Methods[0])
    let buffer,
    Form = new FormData(),
    scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method
    Form.append("model_version", 1, { 
      "Content-Transfer-Encoding": "binary",
      contentType: "multipart/form-data; charset=uttf-8",
    })
    Form.append("image", Buffer.from(urlPath), {
      filename: "enhance_image_body.jpg",
      contentType: "image/jpeg",
    })
    Form.submit({
      url: scheme,
      host: "inferenceengine" + ".vyro" + ".ai",
      path: "/" + method,
      protocol: "https:",
      headers: {
        "User-Agent": "okhttp/4.9.3",
        Connection: "Keep-Alive",
        "Accept-Encoding": "gzip",
      },
    },
    function (err, res) {
      if (err) reject()
      let data = []
      res.on("data", function (chunk, resp) {
        data.push(chunk)
      }).on("end", () => {
        resolve(Buffer.concat(data))
      })
      res.on("error", (e) => {
        reject()
      })
    })
  })
}