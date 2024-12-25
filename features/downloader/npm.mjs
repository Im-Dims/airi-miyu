import * as cheerio from 'cheerio';
import axios from 'axios';

const handle = {
  miyxious: ["npm", "npmdl"],
  category: "#downloader",
  describe: "Cari dan download package npm kamu di sini",
  run: async (m, { q, d, conn, text, repl, Func }) => {
    try {
      if (!text) return repl(Func.example(m.preff, m.command, 'canvafy'))
      repl(q.wait)
      let pkg = await npmSearch(text)
      let old = new Date()
      let teks = `⼷ *Npm*\n\n`
      teks += `◎ *Title* : ` + pkg.version + '\n'
      teks += `◎ *Version* : ` + pkg.name + '\n'
      teks += `◎ *Author* : ` + pkg.owner + '\n'
      teks += `◎ *Published* : ` + pkg.publishedDate + '\n'
      teks += `◎ *Description* : ` + pkg.description + '\n'
      teks += `◎ *Homepage* : ` + pkg.homepage  + '\n'
      teks += `◎ *Url* : ` + pkg.packageLink + '\n'
      teks += `◎ *Fetching* : ` + `${((new Date - old) * 1)} ms\n\n`
      teks += q.footer
      conn.sendteks(m.chat, teks, m, 
        d.f2(q.header, "https://i.ibb.co/HxNbmxd/npm2.png", pkg.packageLink)
      ).then(async () => {
        conn.sendMessage(m.chat, { 
          document: { url: pkg.downloadLink }, 
          fileName: `${pkg.packageName}-${pkg.version}.tgz`,
          mimetype: 'application/zip', 
          caption: 'Sukses downloading' 
        }, { quoted: m })
      })
    } catch (err) {
      console.log(err)
      return repl(Func.jsonFormat(err))
    }
  }
}

export default handle

async function npmSearch(query) {
  try {
    const response = await axios.get(`https://registry.npmjs.org/${query}`);
    const { name, description } = response.data;
    const version = response.data['dist-tags'].latest;
    const packageLink = `https://www.npmjs.com/package/${name}`;
    const lastSlashIndex = name.lastIndexOf('/');
    const packageName = lastSlashIndex !== -1 ? name.substring(lastSlashIndex + 1) : name;
    const downloadLink = `https://registry.npmjs.org/${name}/-/${packageName}-${version}.tgz`;

    const npmPackageResponse = await axios.get(packageLink);
    const $ = cheerio.load(npmPackageResponse.data);
    const publishedDate = $('time').first().text();
    const owner = response.data.maintainers[0].name;
    const keywords = response.data.keywords;
    const homepage = response.data.homepage;
    const license = response.data.license;
    const dependencies = response.data.dependencies;
    const readme = $('div[class="markdown"]').html();

    return {
      name,
      description,
      version,
      packageLink,
      packageName,
      downloadLink,
      publishedDate,
      owner,
      keywords,
      homepage,
      license,
      dependencies,
      readme
    };
  } catch (err) {
    throw 'Kesalahan saat mencari informasi tentang paket'
  }
}