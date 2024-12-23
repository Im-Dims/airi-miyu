import { tmpdir } from 'os'
import NetworkSpeed from 'network-speed'
const anu = new NetworkSpeed()

const handle = {
  miyxious: ["ping", "p"],
  category: "#bot",
  describe: "Mendeteksi jaringan atau kecepatan sistem miyu",
  run: async (m, { repl, conn }) => {
    let old = new Date()
    let download = await getNetworkDownloadSpeed()
    let upload = await getNetworkUploadSpeed()
    let text = '◎ *Download* : ' + download.mbps + ' mbps\n'
    text += '◎ *Upload* : ' + upload.mbps + ' mbps\n'
    text += '◎ *Response* : ' + ((new Date - old) * 1) + ' ms'
    repl(text)
  }
}

export default handle

async function getNetworkUploadSpeed() {
  const options = {
    hostname: 'www.google.com',
    port: 80,
    path: tmpdir(),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  }
  const fileSizeInBytes = 2000000
  const speed = await anu.checkUploadSpeed(options, fileSizeInBytes)
  return speed
}

async function getNetworkDownloadSpeed() {
  const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000'
  const fileSizeInBytes = 500000
  const speed = await anu.checkDownloadSpeed(baseUrl, fileSizeInBytes)
  return speed
}