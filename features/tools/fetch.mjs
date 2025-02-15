import { format } from "util";
import axios from "axios";
import fetch from "node-fetch";

const handle = {
  miyxious: ["fetch", "get"],
  category: "#tools",
  describe: "Retrieve json data from websites",
  run: async (m, { q, repl, conn }) => {
    const text = m.args.length >= 1 ? m.args.join(" ") : (m.quoted && m.quoted.text) || "";
    if (!text) return repl(`Please provide a URL\n\nYou can now use the following options:\n\n* \`--data\`: Send data with the request. You can specify key-value pairs separated by \`&\`.\n* \`--header\`: Specify custom headers. You can specify key-value pairs separated by \`&\`.\n* \`--referer\`: Set the \`Referer\` header.\n* \`--responseType\`: Specify the response type. You can choose from \`json\`, \`arraybuffer\`, \`blob\`, \`document\`, or \`stream\`.\n* \`--method\`: Specify the request method. You can choose from \`GET\`, \`HEAD\`, \`POST\`, \`PUT\`, \`PATCH\`, or \`DELETE\`.`);
    const urlRegex = /\b(https?:\/\/[^\s]+)/gi;
    const urlMatch = text.match(urlRegex);
    const url = urlMatch ? urlMatch[0].trim() : null;
    if (!url) return repl("Where is the url??");
    repl(q.wait)

    let _url = new URL(url);
    let URl = global.API(_url.origin, _url.pathname, Object.fromEntries(_url.searchParams.entries()), "APIKEY");

    let options = {};
    let data = null;
    let method = "GET";
    let responseType = "json";

    const dataFlag = text.includes("--data");
    const headerFlag = text.includes("--header");
    const refererFlag = text.includes("--referer");
    const responseTypeFlag = text.includes("--responseType");
    const methodFlag = text.includes("--method");

    if (dataFlag) {
      const dataArray = text.split("--data")[1].trim().split("&");
      data = {};
      dataArray.forEach((pair) => {
        const [key, value] = pair.split("=");
        data[key] = value;
      });
    }

    if (headerFlag) {
      const headerArray = text.split("--header")[1].trim().split("&");
      options.headers = {};
      headerArray.forEach((pair) => {
        const [key, value] = pair.split("=");
        options.headers[key] = value;
      });
    }

    if (refererFlag) {
      const referer = text.split("--referer")[1].trim();
      options.headers = options.headers || {};
      options.headers.Referer = referer;
    }

    if (responseTypeFlag) {
      const responseTypeValue = text.split("--responseType")[1].trim();
      responseType = responseTypeValue;
    }

    if (methodFlag) {
      const methodValue = text.split("--method")[1].trim().toUpperCase();
      method = methodValue;
    }

    let res;
    if (method === "HEAD") {
      res = await axios.head(URl, options);
    } else if (method === "POST") {
      res = await (await axios.post(URl, data, options)).data;
    } else {
      res = await fetch(URl, {
        method,
        body: data,
        headers: options.headers,
      });
      if (res.headers.get("content-length") > 100 * 1024 * 1024 * 1024) {
        throw `Content-Length: ${res.headers.get("content-length")}`;
      }
    }
    if (method === "HEAD") {
      repl(`${JSON.stringify(res.headers, null, 2)}`);
    } else {
      if (!/text|json/.test(res.headers.get("content-type"))) {
        return conn.sendMedia(m.chat, url, m)
      }
      let txt = await res.buffer();
    try {
      txt = format(JSON.parse(txt + ""));
    } catch (e) {
      txt = txt + "";
    } finally {
      repl(txt.slice(0, 65536) + "");
    }
    }
  }
}

export default handle