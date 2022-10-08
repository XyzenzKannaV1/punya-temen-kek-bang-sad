/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/
//𝙱𝚈 𝚈𝙰𝙽𝚉 𝙱𝙾𝚃
javasc = "JavaScript";
node = "Node.js";
baileys = "Baileys MD";
namabot = "Yanz Shop";
saldoYanz = "Rp. $5";
saldo = "Rp. 0";
status = "User";
namaYanz = "𝙸`𝙼 𝚈𝙰𝙽𝚉";
fake = "𝖄𝖆𝖓𝖟 𝕭𝖔𝖙";
a = '```'
id = "62xxx@s.whatsapp.net";
prefixStatus = false;
//settings
require('./config')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, MessageType, text, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const crypto = require('crypto')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const _user = JSON.parse(fs.readFileSync('./database/user.json'))
const { cmdadd } = require("./lib/totalcmd.js");
const { pinterest, wallpaper, wikimedia, porno, hentai, quotesAnime } = require('./lib/scraper')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')
const database = require('./database.json')


module.exports = YANZ = async (YANZ, m, chatUpdate) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const isCreator = [YANZ.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == YANZ.user.id ? true : false
        const quoted = m.quoted ? m.quoted : m
        const fetch = YANZ.fetchStatus(m.sender)
        const mime = (quoted.msg || quoted).mimetype || ''
	const isMedia = /image|video|sticker|audio/.test(mime)
	//BOT KONTOL
const kick = function (from, orangnya) {
      for (let i of orangnya) {
        YANZ.groupRemove(from, [i]);
      }
    };
    const add = function (from, orangnya) {
      YANZ.groupAdd(from, orangnya);
    };
    // Function
        const sendFileFromUrl = async (from, url, caption, mek, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return YANZ.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime === "application/pdf"){
                return YANZ.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: mek })
            }
            if(mime.split("/")[0] === "image"){
                return YANZ.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "video"){
                return YANZ.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "audio"){
                return YANZ.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio'}, {quoted: m })
            }
        }
        const sendButton = (type, from, text, buttons, men, quoted, options) => { 
if (type == 'image') {
YANZ.sendMessage(from, { caption: text, image: options ? options : fs.readFileSync(thumbnail), buttons: buttons, headerType: 'IMAGE', mentions: men }, {quoted: m})
} else if (type == 'video') {
if (options === undefined || options === null) return reply('illegal method, chat owner bot')
YANZ.sendMessage(from, { caption: text, video: options, buttons: buttons, headerType: 'VIDEO', mentions: men }, {quoted: m})
} else if (type == 'location') {
YANZ.sendMessage(from, { caption: text, location: { jpegThumbnail: options ? options : fs.readFileSync(thumbnail) }, buttons: buttons, headerType: 'LOCATION', mentions: men })
} else if (type == 'text') {
YANZ.sendMessage(from, { caption: text, buttons: buttons, headerType: 'TEXT', mentions: men }, {quoted: m})
} else {
m.reply('invalid type, please contact the owner bot')
}
}
const sendButLocation = async (anu, text1, desc1, gam1, but = []) => {
buatpesan = generateWAMessageFromContent(anu, {
    "templateMessage": {
      "hydratedTemplate": {
      	"locationMessage": {
						"degreesLatitude": 0,
						"degreesLongitude": 0,
						"jpegThumbnail": gam1
},
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": but
      }
    }
  }, {quoted: m})
YANZ.relayMessage(anu, buatpesan.message, { messageId: buatpesan.key.id })
}
	//By Yanz
const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
    if (prefix && command) cmdadd();
    const totalhit = JSON.parse(fs.readFileSync("./lib/totalcmd.json"))[0]
      .totalcmd;
const from = mek.key.remoteJid;
    const type = Object.keys(mek.message)[0];
const reply = (teks) => {
      YANZ.sendMessage(util.format(err))
    };

    const sendMess = (hehe, teks) => {
      YANZ.sendMessage(hehe, teks, text);
    };
    const floc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: YANZ, jpgThumbnail: thumb } },
    };
    const fakestatus = (teks) => {
      YANZ.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const fakethumb = (teks, yes) => {
      YANZ.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync("./stik/fake.jpeg"),
        quoted: mek,
        caption: yes,
      });
    };
    const fakegroup = (teks) => {
      YANZ.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    //bismillah
 
//NYOBA
const q = args.join(" ");
const botNumber = YANZ.user.jid;
const botNumberss = YANZ.user.jid + "@c.us";
const isGroup = from.endsWith("@g.us");
    //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return YANZ.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            YANZ.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
                        YANZ.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
	//by Yanz
const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
	const hour_now = moment().format('HH')
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🌄'//'Pagi🌄'
if (hour_now >= '03' && hour_now <= '10') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🌅'//'Pagi 🌅'
} else if (hour_now >= '10' && hour_now <= '14') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🌞'//'Siang 🌞'
} else if (hour_now >= '14' && hour_now <= '17') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 ☀️'//'Soree ☀️'
} else if (hour_now >= '17' && hour_now <= '18') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌠'//'Selamat 🌠'
} else if (hour_now >= '18' && hour_now <= '23') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'//'Malam 🌌'
} else {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'//'Selamat Malam!'
}
	
        // Group
        const groupMetadata = m.isGroup ? await YANZ.groupMetadata(m.chat).catch(e => {}) : ''
        const isGroupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
	    const isBotAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

        // Bot Status
// language
const  { ind } = require(`./language`)
lang = ind //language
enter = '\n'
//Yanz Bot
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })
        
        //test command
        //akhir
const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
    const antivirtex = JSON.parse(
      fs.readFileSync("./database/antivirtex.json")
    );
    const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
    const isAntilink = isGroup ? antilink.includes(from) : false;

    const sender = mek.key.fromMe
      ? YANZ.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? YANZ.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
      
      /// hshdhs
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      YANZ.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
      
      //kasih wm gw ajg kalau make
    if (isGroup && isAntilink && !mek.key.fromMe) {
      if (budy.includes("https://chat.whatsapp.com/")) {
        if (isGroupAdmins) return reply("admin bebas");
        m.reply("ANTILINK DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        YANZ.groupRemove(from, [sender]);
      }
    }
        // Public & Self
        if (!YANZ.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
        if (prefixStatus) if (_chats.startsWith(command)) return;

        switch(command) {
	    case 'finish': {
                m.reply('        *STATUS PESANAN*\n\n➪ *STATUS :* 𝙳𝙾𝙽𝙴\n➪ *SISTEM :* 𝙿𝙴𝚁𝙼𝙰𝙽𝙴𝙽\n➪ *NOMINAL :* 10K\n\n*TERIMA KASIH TELAH ORDER*\n         >>NEXT ORDER<<')
            }
            break
case 'antilink':{
        if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
        if (args[0] == "on") {
          if (isAntilink) return m.reply("*_Fitur ini sudah aktif sebelumnya!!_*");
          antilink.push(from);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          m.reply("*_Sukses mengaktifkan antilink!!_*");
        } else if (args[0] == "off") {
          antilink.splice(from, 1);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          m.reply("*_Sukses mematikan antilink!!_*");
        } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink on`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink off`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        }
        break;
case 'y':{
	m.reply(`「 *PAYMENT-GOPAY-DANA-OVO* 」\n\nNO : 085883359262\nAN : YANZ BOT\n\n_Silahkan transfer dengan no yang sudah tertera, Jika sudah harap kirim bukti poto dengan caption *#bukti* untuk di acc oleh admin_`)
	}
	break
case 'bukti': {
                if (!m.quoted) throw 'Kirim gambar dengan caption *#bukti* atau tag gambar yang sudah dikirim dengan caption *#bukti*'
                m.reply('Mohon tunggu ya kak, sedang di acc owner dan bila selesai di acc akan di kasih id untuk mengecek saldo\n\nComtoh : *#ceksaldo*')
                }
                break
case 'ceksaldo': {
                if (!m.quoted) throw 'Silah kan masukan ID deposit kamu\n\nContoh : *CEK ID #R1YANZ21FF*'
                }
                break
case 'gopay2':{
	m.reply('Oke kak, mau deposit berapa?\n\nContoh: *GPY #50.000*')
	}
	break
case 'ovo2':{
	m.reply('Oke kak, mau deposit berapa?\n\nContoh: *OV* #50.000')
	}
	break
case 'dana2':{
	m.reply('Oke kak, mau deposit berapa?\n\nContoh: *DN* #50.000')
	}
	break
case 'gopay': {
	m.reply('اتَّقوا النَّارَ ولو بشقِّ تمرةٍ ، فمن لم يجِدْ فبكلمةٍ طيِّبةٍ\n*“Jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma (sedikit). Jika kamu tidak punya, maka bisa dengan kalimat thayyibah”* [HR. Bukhari 6539, Muslim 1016\n\n*Goopay :* Scan Pp\n𝑀𝑎𝑘𝑎𝑠𝑖ℎ 𝑌𝑎 𝑌𝑔 𝑆𝑢𝑑𝑎ℎ 𝐷𝑜𝑛𝑎𝑠??.` ')
	}
	break
case 'ywjjeja': {
	m.reply('_Maaf Saldomu Tidak Mencukupi Silahkan Deposit Saldo Terlebih Dahulu, Ketik #deposit_\n\nContoh : *#deposit*')
	}
	break
case 'dana': {
	m.reply('_DANA : *085883359262*_\n\n _SAYA CUMAN BISA BILANG TERIMAKASIH ATAS KEMURAHAN HATI TUAN TELAH MEMBERIKAN KAMI BANTUAN.SEMOGA ALLAH MEMBALAS APA YG TUAN BERIKAN KE PADA SAYA_')
	}
	break
case 'ovo': {
	m.reply('اتَّقوا النَّارَ ولو بشقِّ تمرةٍ ، فمن لم يجِدْ فبكلمةٍ طيِّبةٍ\n*“Jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma (sedikit). Jika kamu tidak punya, maka bisa dengan kalimat thayyibah”* [HR. Bukhari 6539, Muslim 1016\n\n*OVO :* NO : 085883359252\n𝑀𝑎𝑘𝑎𝑠𝑖ℎ 𝑌𝑎 𝑌𝑔 𝑆𝑢𝑑𝑎ℎ 𝐷𝑜𝑛𝑎𝑠𝑖.')
	}
	break
case 'done2': {
	m.reply(`*Hallo* ${pushname}👋\n\n      *JANGAN LUPA SAVE*\n*YANZ STORE, DONE NO LUH*\n        *UDAH GW SAVE YA*`)
	}
case 'dsggsg': {
	  YANZ.sendMessage(m.chat, { sticker: fs.readFileSync("./lib/done.webp") }, { quoted: m })
	}
case 'shshehhshs': {
	  YANZ.sendMessage(m.chat, { sticker: fs.readFileSync("./lib/oke.webp") }, { quoted: m })
	}
	break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    YANZ.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    YANZ.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    YANZ.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    YANZ.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    YANZ.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    YANZ.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    YANZ.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await YANZ.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await YANZ.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await YANZ.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	  }
	  break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await YANZ.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await YANZ.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await YANZ.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await YANZ.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await YANZ.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await YANZ.groupUpdateSubject(m.chat, text).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setprofile': case 'setpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw 'Reply Image'
                if (/image/.test(mime)) throw `balas image dengan caption *${prefix + command}*`
                let media = await YANZ.downloadAndSaveMediaMessage(quoted)
                if (!m.isGroup && !isBotAdmins && !isGroupAdmins) {
                    await YANZ.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                } else if (!isCreator) {
                    await YANZ.updateProfilePicture(YANZ.user.id, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                }
            }
            break
            case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
                if (!text) throw 'Masukkan value open/close'
                if (args[0].toLowerCase() === 'close') {
                    await YANZ.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'open') {
                    await YANZ.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await YANZ.groupInviteCode(m.chat)
                YANZ.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await YANZ.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await YANZ.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
           case 'done': {
                let buttons = [
                    {buttonId: 'shshehhshs', buttonText: {displayText: '𝙳𝙾𝙽𝙴 𝙱𝙰𝙽𝙶'}, type: 1}
                ]
                let buttonMessage = {
                    image: {url: 'https://i.ibb.co/GWSVrzq/IMG-20211122-WA0057.jpg' },
                    caption: `*Hallo* ${pushname}👋\n\n      *JANGAN LUPA SAVE*\n*YANZ STORE, DONE NO LUH*\n        *UDAH GW SAVE YA*`,
                    footerText: '*Hallo* ${pushname}👋\n\n      *JANGAN LUPA SAVE*\n*YANZ STORE, DONE NO LUH*\n        *UDAH GW SAVE YA*',
                    buttons: buttons,
                    headerType: 4
                }
                YANZ.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
  
            case 'delete': case 'd': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                YANZ.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await YANZ.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await YANZ.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                        throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await YANZ.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    YANZ.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await YANZ.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await YANZ.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
           case 'mp4': case 'ytmp4':{
                if (!q) return m.reply(lang.wrongFormat(prefix))
                if (!isUrl(q)) return m.reply(lang.wrongFormat(prefix))
                if (!q.includes('youtu.be') && !q.includes('youtube.com')) return m.reply(lang.wrongFormat(prefix))
                await m.reply(lang.wait())
                YANZ.Youtube(text).then(async (data) => {
                    let txt = `*----「 YOUTUBE VIDEO 」----*\n\n`
                    txt += `*📟 Quality :* ${data.medias[1].quality}\n`
                    txt += `*🎞️ Type :* ${data.medias[1].extension}\n`
                    txt += `*💾 Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*📚 Url Source :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    sendFileFromUrl(m.chat, data.thumbnail, txt, m)
                    YANZ.sendMessage(m.chat, {video: {url: data.medias[1].url}})
            	  })
                .catch((err) => {
                    m.reply(lang.err())
                })
                }
            break
            case 'setprofile': case 'setpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw 'Reply Image'
                if (/image/.test(mime)) throw `balas image dengan caption *${prefix + command}*`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                if (!m.isGroup && !isBotAdmins && !isGroupAdmins) {
                    await YANZ.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                } else if (!isCreator) {
                    await YANZ.updateProfilePicture(hisoka.user.id, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                }
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await YANZ.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await YANZ.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
                let media = await YANZ.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'pinterestdjjdjs': {
                m.reply(mess.wait)
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                YANZ.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
            case 'wallpapersjsjs': {
                m.reply(mess.wait)
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                YANZ.sendMessage(m.chat, { image: { url: result.image }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Media Url : ${result.image}` }, { quoted: m })
            }
            break
            case 'wallpapers': {
                m.reply(mess.wait)
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                YANZ.sendMessage(m.chat, { image: { url: result.image }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Media Url : ${result.image}` }, { quoted: m })
            }
            break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': {
                m.reply(mess.wait)
                let anu = await getBuffer(api('zenz', '/api/random/anime/'+command, 'apikey'))
                YANZ.sendMessage(m.chat, { image: { url: anu }, caption: `Download From ${text}` }, { quoted: m})
            }
            break
            case 'wikimediashshs': {
                m.reply(mess.wait)
                anu = wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                YANZ.sendMessage(m.chat, { image: { url: result.image }, caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}` }, { quoted: m })
            }
            break
            case 'pornodhdh': case 'pornshhs': case 'bokepsjjsj': {
                m.reply(mess.wait)
                anu = await porno()
                YANZ.sendMessage(m.chat, { video: { url: 'https://tikporntok.com/'+anu.video }, caption: `⭔ Title : ${anu.title}\n⭔ Viewers : ${anu.views}\n⭔ Tags : ${anu.tags}\n⭔ Likes : ${anu.like}\n⭔ Dislikes : ${anu.dislike}\n⭔ Favourite : ${anu.favorite}\n⭔ Time Upload : ${anu.upload}\n⭔ Description : ${anu.desc}\n⭔ Source : https://tikporntok.com/${anu.source}` }, { quoted: m })
            }
            break
            case 'hentaishshs': {
                m.reply(mess.wait)
                anu = await hentai()
                result = anu[Math.floor(Math.random() * anu.length)]
                YANZ.sendMessage(m.chat, { video: { url: result.video_1 }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.category}\n⭔ Mimetype : ${result.type}\n⭔ Views : ${result.views_count}\n⭔ Shares : ${result.share_count}\n⭔ Source : ${result.link}\n⭔ Media Url : ${result.video_1}` }, { quoted: m })
            }
            break
            case 'quotesanimensns': case 'quoteanimejsjs': {
                anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                YANZ.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquotes': case 'bucinquotes': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                YANZ.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                YANZ.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                YANZ.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await YANZ.sendMessage(m.chat, buttonMessage, { quoted: m })
                YANZ.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'igdl': case 'ig': case 'instagram': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/instagram2', { url: text }, 'apikey'))
                YANZ.sendMessage(m.chat, { video: { url: anu.data[0] }, caption: `Download From ${text}` }, { quoted: m})
            } 
            break
            case 'igdltv': case 'igreels': case 'igdl2': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/instagram', { url: text }, 'apikey'))
                YANZ.sendMessage(m.chat, { video: { url: anu.result.link }, caption: `⭔ Desc : ${anu.result.caption.desc}`}, { quoted: m })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                YANZ.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await YANZ.sendMessage(m.chat, buttonMessage, { quoted: m })
                YANZ.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                YANZ.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pin': case 'pinterest': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                YANZ.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'public': {
                if (!isCreator) throw mess.owner
                YANZ.public = true
                m.reply('```Sukses telah mengubah self menjadi public```')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                YANZ.public = false
                m.reply('```Sukses telah mengubah public menjadi self```')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'owner': case 'creator': {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Dika Ardnt.;;;'
                    + 'FN:Dika Ardnt.\n' // full name
                    + 'ORG:Yanz Bot;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6285883359262:+62 858-8835-9262\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                YANZ.sendMessage(m.chat, { contacts: { displayName: 'Dika Ardnt.', contacts: [{ vcard }] } }, { quoted: m })
            }
            break
            case 'eval': {
                if (!isCreator) return m.reply(mess.owner)
                function Return(sul) {
                    sat = JSON.stringify(sul, null, 2)
                    bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                }
                try {
                    m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                } catch (e) {
                    m.reply(String(e))
                }
            }
            break
            case 'listmenu': case 'menuyanz': case 'helpshsh': case 'Yanz_Bot': {
                anu = `
Hallo kak ${pushname}
    ${ucapanWaktu}
    
 *${tanggal(new Date())}*
 ➪  ${moment().utcOffset('+0700').format('HH:mm')} WIB
 ➪  ${moment().utcOffset('+0800').format('HH:mm')} WITA
 ➪  ${moment().utcOffset('+0900').format('HH:mm')} WIT

Owner : ${namaYanz}
Runtime : ${runtime(process.uptime())}

${readmore}┌──⭓ *Group Menu*
│
│⭔ ${prefix}linkgroup
│⭔ ${prefix}ephemeral [ option ]
│⭔ ${prefix}setpp
│⭔ ${prefix}setname [ text ]
│⭔ ${prefix}group [ option ]
│⭔ ${prefix}add @user
│⭔ ${prefix}kick @user
│⭔ ${prefix}promote @user
│⭔ ${prefix}demote @user
│
└───────⭓

┌──⭓ *Downloader Menu*
│
│⭔ ${prefix}tiktoknowm [ url ]
│⭔ ${prefix}tiktokwm [ url ]
│⭔ ${prefix}tiktokmp3 [ url ]
│⭔ ${prefix}instagram [ url ]
│⭔ ${prefix}ig2 [ url ]
│⭔ ${prefix}igreels [ url ]
│⭔ ${prefix}igtv [ url ]
│⭔ ${prefix}twitter [ url ]
│⭔ ${prefix}twittermp3 [ url ]
│⭔ ${prefix}facebook [ url ]
│⭔ ${prefix}pinterestdl [ url ]
│
└───────⭓

┌──⭓ *Search Menu*
│
│⭔ ${prefix}pinterest [ query ]
│⭔ ${prefix}wallpaper [ query ]
│⭔ ${prefix}wikimedia [ query ]
│⭔ ${prefix}ytsearch [ query ]
│
└───────⭓

┌──⭓ *Random Menu*
│
│⭔ ${prefix}porno
│⭔ ${prefix}hentai
│⭔ ${prefix}quotesanime
│⭔ ${prefix}motivasi
│⭔ ${prefix}dilanquote
│⭔ ${prefix}bucinquote
│⭔ ${prefix}katasenja
│⭔ ${prefix}puisi
│
└───────⭓

┌──⭓ *Image Menu*
│
│⭔ ${prefix}anime
│⭔ ${prefix}waifu
│⭔ ${prefix}husbu
│⭔ ${prefix}neko
│⭔ ${prefix}shinobu
│⭔ ${prefix}megumin
│
└───────⭓

┌──⭓ *Convert Menu*
│
│⭔ ${prefix}toimage
│⭔ ${prefix}sticker
│⭔ ${prefix}tovideo
│⭔ ${prefix}togif
│⭔ ${prefix}tourl
│
└───────⭓

┌──⭓ *Main Menu*
│
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│⭔ ${prefix}delete
│
└───────⭓

┌──⭓ *Owner Menu*
│
│⭔ ${prefix}chat [ option ]
│⭔ ${prefix}join [ linkgc ]
│⭔ ${prefix}leave
│⭔ ${prefix}block @user
│⭔ ${prefix}unblock @user
│
└───────⭓
`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/YANZ.jpg') }, { upload: YANZ.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '𝚈𝙾𝚄𝚃𝚄𝙱𝙴',
                                    url: 'https://youtube.com/channel/UC2Y767o1R7Y2aOd8rC_FUAA'
                                }
                            }, {
                                callButton: {
                                    displayText: '𝙽𝙾 𝙿𝙷𝙾𝙽𝙴 𝙾𝚆𝙽𝙴𝚁',
                                    phoneNumber: '+62 858-8336-9262'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝚂𝙿𝙴𝙴𝙳',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝙾𝚆𝙽𝙴𝚁',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '𝙳𝙾𝙽𝙰𝚂𝙸',
                                    id: 'donasi'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                YANZ.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'menu2': case 'menuyz': case 'helpshsh': case 'menutes': {
                anu = `
Hallo kak ${pushname} Aku adalah bot multi device!!
`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/YANZ.jpg') }, { upload: YANZ.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '𝚈𝙾𝚄𝚃𝚄𝙱𝙴',
                                    url: 'https://youtube.com/channel/UC2Y767o1R7Y2aOd8rC_FUAA'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝙳𝙾𝙽𝙰𝚂𝙸',
                                    id: 'donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝙾𝚆𝙽𝙴𝚁',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '𝙻𝙸𝚂𝚃 𝙼𝙴𝙽𝚄',
                                    id: 'listmenu'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                YANZ.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'donasi': case 'menuyz': case 'helpshsh': case 'menutes': {
                anu = `
*Hai Kak* ${pushname} *Yang Baik*\n*Mau donasi?* _Dikasih Syukur, Gak jadi Gpp :)_\n\n𝑀𝑎𝑘𝑎𝑠𝑖ℎ 𝑌𝑔 𝑆𝑢𝑑𝑎ℎ 𝐷𝑜𝑛𝑎𝑠𝑖 :)
`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/YANZ.jpg') }, { upload: YANZ.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                callButton: {
                                    displayText: '𝙿𝚄𝙻𝚂𝙰',
                                    phoneNumber: '+62 831-4059-5129'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝙶𝙾𝙿𝙰𝚈',
                                    id: 'gopay'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝙳𝙰𝙽𝙰',
                                    id: 'dana'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '𝙾𝚅𝙾',
                                    id: 'ovo'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                YANZ.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break 
case 'menu': case 'menuyz': case 'help': case 'menutes': {
                anu = `
Hallo kak ${pushname}
Salam Kenal, Aku ${namabot}
Asisten Jualan Kamu Masa Kini

Sambil Jualan, Kamu Juga Bisa
Menggunakan Bot Ini Lebih Dari Sekedar Bisnis

*KALENDER*
${a}Hari : ${week} ${weton}${a}
${a}Jam : ${moment().utcOffset('+0700').format('HH:mm')} WIB${a}
${a}Tanggal : ${date}${a}

*INFORMASI KAMU*
${a}Nama : ${pushname}${a}
${a}Nomer : ${m.sender.split('@')[0]}${a}
${a}Bio :${a}
${a}Status : ${status}${a}

*INFORMASI BISNIS KAMU*
${a}Username : ${pushname}${a}
${a}Nomer : ${m.sender.split('@')[0]}${a}
${a}Saldo : ${saldo}${a}

*INFORMASI BOT*
${a}Prefix : ${prefixStatus ? "Multi Prefix" : "No Prefix"}${a}
${a}Owner : ${namaYanz}${a}
${a}Status : Public${a}
${a}Bailyes : ${baileys}${a}
${a}Platfrom : ${node}${a}
${a}Language : ${javasc}${a}
${a}Runtime : ${runtime(process.uptime())}${a}
`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/YANZ.jpg') }, { upload: YANZ.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                quickReplyButton: {
                                    displayText: '𝙱𝙾𝚃 𝙿𝙴𝙳𝙸𝙰',
                                    id: 'pedia'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝙾𝚆𝙽𝙴𝚁',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '𝙼𝙴𝙽𝚄 𝚁𝙴𝙶𝚄𝙻𝙴𝚁',
                                    id: 'menu2'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                YANZ.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'deposit': case 'menuyz': case 'helpshsh': case 'menutes': {
                anu = `
Hallo kak ${pushname}
${ucapanWaktu}

Mau deposit saldo silah kan pilih payment di bawah ini!!
`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/YANZ.jpg') }, { upload: YANZ.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                quickReplyButton: {
                                    displayText: '𝙳𝙰𝙽𝙰',
                                    id: 'dana2'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝙶𝙾𝙿𝙰𝚈',
                                    id: 'gopay2'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '𝙾𝚅𝙾',
                                    id: 'ovo2'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                YANZ.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'pedia': case 'menuyz': case 'helpshsh': case 'menutes': {
                anu = `
Hallo kak ${pushname}
${ucapanWaktu}

Ayo Semangat Berbisnis ✊, Share Sebanyak Mungkin IklanMu
Agentku, Semoga Harimu Menyenangkan 😊

*DATA BISNIS KAMU*
${a}Username : ${pushname}${a}
${a}Nomer : ${m.sender.split('@')[0]}${a}
${a}Saldo : ${saldo}${a}

Silahkan Pilih Menu Dibawah Sesuai Kebutuhan Agent.
`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/YANZ.jpg') }, { upload: YANZ.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                            	quickReplyButton: {
                                    displayText: '𝚃𝙰𝙶𝙸𝙷𝙰𝙽',
                                    id: 'tagihan'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝚃𝙾𝙿 𝚄𝙿',
                                    id: 'topup'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '𝙳𝙴𝙿𝙾𝚂𝙸𝚃 𝚂𝙰𝙻𝙳𝙾',
                                    id: 'deposit'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                YANZ.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'tagihan': case 'menuyz': case 'helpshsh': case 'menutes': {
                anu = `
Hallo kak ${pushname}
${ucapanWaktu}

Silahkan pilih tagihanmu di bawah ini
`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/YANZ.jpg') }, { upload: YANZ.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                            	quickReplyButton: {
                                    displayText: '𝙿𝚄𝙻𝚂𝙰',
                                    id: 'mm'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝙿𝙰𝙺𝙴𝚃 𝙳𝙰𝚃𝙰',
                                    id: 'oke'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                YANZ.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'topup': case 'menuyz': case 'helpshsh': case 'menutes': {
                anu = `
Hallo kak ${pushname}
${ucapanWaktu}

*Mau top up? silah kan pilih di bawah ini!!*
`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/YANZ.jpg') }, { upload: YANZ.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                quickReplyButton: {
                                    displayText: '𝙵𝙵',
                                    id: 'ff'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝙼𝙻',
                                    id: 'ml'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                YANZ.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'ff': case 'menuyz': case 'helpshsh': case 'menutes': {
                anu = `
Hallo kak ${pushname}
Selamat datang di Yanz shop
                
         *FREE FIRE VIA ID*
───────────────────
    DM          HARGA        KODE
───────────────────
5          : Rp 840             #GHJ
20        : RP 2.800         #HDF
50        : RP 6.720         #GNR
70        : RP 9.240         #HJK
100      : RP 13.440       #KON
140      : RP 18.480       #TKN
210      : RP 27.720       #MKH
355      : RP 46.200       #FFB
425      : RP 55.440       #TTD
500      : RP 65.520       #BNJ
720      : RP 92.400       #JHK
1.000   : RP 129.360    #YHT
1.075   : RP 138.600    #THT
1.440   : RP 184.800    #MDF
1.795   : RP 231.000    #MHL
2.000   : RP 252.000    #GNJ
Mingguan : RP 28.000    # MM
Bulanan     : RP 140.000  #MMB

Contoh : *140 DM #TKN*
`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/YANZ.jpg') }, { upload: YANZ.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '𝚈𝙾𝚄𝚃𝚄𝙱𝙴',
                                    url: 'https://youtube.com/channel/UC2Y767o1R7Y2aOd8rC_FUAA'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝙶𝙾𝙿𝙰𝚈',
                                    id: 'y'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝙳𝙰𝙽𝙰',
                                    id: 'y'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '𝙾𝚅𝙾',
                                    id: 'y'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                YANZ.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'ml': case 'menuyz': case 'helpshsh': case 'menutes': {
                anu = `
Hallo kak ${pushname}
Selamat datang di Yanz shop

*Silahkan pilih di bawah ini!!*
                
 *MOBILE LEGENDS VIA ID* 

86💎     : 19.600
172💎   : 39.200
257💎   : 58.800
344💎   : 78.400
430💎   : 98.100
516💎   : 117.800
602💎   : 137.400
706💎   : 156.800
878💎   : 196.000
963💎   : 215.600
1050💎 : 235.200

Starlight = 129.360
Twilight = 129.360
Starlight +  = 294.000
`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/YANZ.jpg') }, { upload: YANZ.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '𝚈𝙾𝚄𝚃𝚄𝙱𝙴',
                                    url: 'https://youtube.com/channel/UC2Y767o1R7Y2aOd8rC_FUAA'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝚂𝙿𝙴𝙴𝙳',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝙾𝚆??𝙴𝚁',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '𝚂𝙲𝚁𝙸𝙿𝚃',
                                    id: 'sc'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                YANZ.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            default:
            if (/Assalamualaikum/.test(m.text)){
         m.reply(`*Hallo* ${pushname} 👋\n\n        *TERIMA KASIH TELAH*\n  *MENGHUBUNGI YANZ STORE*,\n*SILAHKAN BERITAHU APA YANG*\n          *DAPAT KAMI BANTU*`)
}
if (/CEK ID #R1YANZ21FF/.test(m.text)){
         m.reply(`「 *LIST SALDO GOPAY* 」\n\n${a}ID : R1KONT21FF${a}\n${a}Nama  : ${pushname}${a}\n${a}Nomer : ${m.sender.split('@')[0]}${a}\n${a}Saldo : ${saldoYanz}${a}\n\n_Jika ada masalah dengan saldo kamu silahkan hubungi owner ketik *#owner*_`)
}
if (/140 DM #TKN/.test(m.text)){
         m.reply(`Silahkan masukan id free fire kamu\n\nContoh : ID FF #12345678`)
}
if (/5 DM #GHJ/.test(m.text)){
         m.reply(`Silahkan masukan id free fire kamu\n\nContoh : ID FF #12345678`)
}
if (/20 DM #HDF/.test(m.text)){
         m.reply(`Silahkan masukan id free fire kamu\n\nContoh : ID FF #12345678`)
}
if (/50 DM #GNR/.test(m.text)){
         m.reply(`Silahkan masukan id free fire kamu\n\nContoh : ID FF #12345678`)
}
if (/70 DM #HJK/.test(m.text)){
         m.reply(`Silahkan masukan id free fire kamu\n\nContoh : ID FF #12345678`)
}
if (/100 DM #KON/.test(m.text)){
         m.reply(`Silahkan masukan id free fire kamu\n\nContoh : ID FF #12345678`)
}
if (/210 DM #MKH/.test(m.text)){
         m.reply(`Silahkan masukan id free fire kamu\n\nContoh : ID FF #12345678`)
}
if (/355 DM #FFB/.test(m.text)){
         m.reply(`Silahkan masukan id free fire kamu\n\nContoh : ID FF #12345678`)
}
if (/425 DM #TTD/.test(m.text)){
         m.reply(`Silahkan masukan id free fire kamu\n\nContoh : ID FF #12345678`)
}
if (/500 DM #BNJ/.test(m.text)){
         m.reply(`Silahkan masukan id free fire kamu\n\nContoh : ID FF #12345678`)
}
if (/720 DM #JHK/.test(m.text)){
         m.reply(`Silahkan masukan id free fire kamu\n\nContoh : ID FF #12345678`)
}
if (/1000 DM #YHT/.test(m.text)){
         m.reply(`Silahkan masukan id free fire kamu\n\nContoh : ID FF #12345678`)
}
if (/ID FF #/.test(m.text)){
         m.reply(`Hai kak ${pushname}\nSaldomu tidak mencukupi untuk transaksi jual bli saat ini\n\n*INFO TRANSAKSI*\n${a}Nama : ${pushname}${a}\n${a}No Hp : ${m.sender.split('@')[0]}${a}\n${a}Saldo : ${saldo}${a}\n${a}Waktu : ${moment().utcOffset('+0700').format('HH:mm')} WIB${a}\n${a}Tanggal : ${date}${a}\n${a}Pembelian : Diamond ff${a}\n${a}Status : Fail${a}\n\n*INFO BISNIS*\n${a}Nama : ${pushname}${a}\n${a}No Hp : ${m.sender.split('@')[0]}${a}\n${a}Saldo : ${saldo}${a}\n\n_Silahkan Lakukan Deposit Terlebih Dahulu Ketik #deposit_`)
}
if (/GPY #1.000/.test(m.text)){
         m.reply(`「 *DEPOSIT-USER* 」\n\n${a}Nama: ${pushname}${a}\n${a}Nomer : ${m.sender.split('@')[0]}${a}\n${a}Payment : GOPAY${a}\n${a}Jumlah Depo : Rp. 1.000${a}\n\nApakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.\n\n_Ketik *Y* untuk melanjutkan, *N* untuk mengulangin inputan_`)
}
if (/GPY #2.000/.test(m.text)){
         m.reply(`「 *DEPOSIT-USER* 」\n\n${a}Nama: ${pushname}${a}\n${a}Nomer : ${m.sender.split('@')[0]}${a}\n${a}Payment : GOPAY${a}\n${a}Jumlah Depo : Rp. 2.000${a}\n\nApakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.\n\n_Ketik *Y* untuk melanjutkan, *N* untuk mengulangin inputan_`)
}
if (/GPY #3.000/.test(m.text)){
         m.reply(`「 *DEPOSIT-USER* 」\n\n${a}Nama: ${pushname}${a}\n${a}Nomer : ${m.sender.split('@')[0]}${a}\n${a}Payment : GOPAY${a}\n${a}Jumlah Depo : Rp. 3.000${a}\n\nApakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.\n\n_Ketik *Y* untuk melanjutkan, *N* untuk mengulangin inputan_`)
}
if (/GPY #4.000/.test(m.text)){
         m.reply(`「 *DEPOSIT-USER* 」\n\n${a}Nama: ${pushname}${a}\n${a}Nomer : ${m.sender.split('@')[0]}${a}\n${a}Payment : GOPAY${a}\n${a}Jumlah Depo : Rp. 4.000${a}\n\nApakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.\n\n_Ketik *Y* untuk melanjutkan, *N* untuk mengulangin inputan_`)
}
if (/GPY #5.000/.test(m.text)){
         m.reply(`「 *DEPOSIT-USER* 」\n\n${a}Nama: ${pushname}${a}\n${a}Nomer : ${m.sender.split('@')[0]}${a}\n${a}Payment : GOPAY${a}\n${a}Jumlah Depo : Rp. 5.000${a}\n\nApakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.\n\n_Ketik *Y* untuk melanjutkan, *N* untuk mengulangin inputan_`)
}
if (/GPY #6.000/.test(m.text)){
         m.reply(`「 *DEPOSIT-USER* 」\n\n${a}Nama: ${pushname}${a}\n${a}Nomer : ${m.sender.split('@')[0]}${a}\n${a}Payment : GOPAY${a}\n${a}Jumlah Depo : Rp. 6.000${a}\n\nApakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.\n\n_Ketik *Y* untuk melanjutkan, *N* untuk mengulangin inputan_`)
}
if (/GPY #7.000/.test(m.text)){
         m.reply(`「 *DEPOSIT-USER* 」\n\n${a}Nama: ${pushname}${a}\n${a}Nomer : ${m.sender.split('@')[0]}${a}\n${a}Payment : GOPAY${a}\n${a}Jumlah Depo : Rp. 7.000${a}\n\nApakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.\n\n_Ketik *Y* untuk melanjutkan, *N* untuk mengulangin inputan_`)
}
if (/GPY #8.000/.test(m.text)){
         m.reply(`「 *DEPOSIT-USER* 」\n\n${a}Nama: ${pushname}${a}\n${a}Nomer : ${m.sender.split('@')[0]}${a}\n${a}Payment : GOPAY${a}\n${a}Jumlah Depo : Rp. 8.000${a}\n\nApakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.\n\n_Ketik *Y* untuk melanjutkan, *N* untuk mengulangin inputan_`)
}
if (/GPY #9.000/.test(m.text)){
         m.reply(`「 *DEPOSIT-USER* 」\n\n${a}Nama: ${pushname}${a}\n${a}Nomer : ${m.sender.split('@')[0]}${a}\n${a}Payment : GOPAY${a}\n${a}Jumlah Depo : Rp. 9.000${a}\n\nApakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.\n\n_Ketik *Y* untuk melanjutkan, *N* untuk mengulangin inputan_`)
}
if (/GPY #10.000/.test(m.text)){
         m.reply(`「 *DEPOSIT-USER* 」\n\n${a}Nama: ${pushname}${a}\n${a}Nomer : ${m.sender.split('@')[0]}${a}\n${a}Payment : GOPAY${a}\n${a}Jumlah Depo : Rp. 10.000${a}\n\nApakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.\n\n_Ketik *Y* untuk melanjutkan, *N* untuk mengulangin inputan_`)
}
if (/GPY #11.000/.test(m.text)){
         m.reply(`「 *DEPOSIT-USER* 」\n\n\${a}Nama: ${pushname}${a}\n${a}Nomer : ${m.sender.split('@')[0]}${a}\n${a}Payment : GOPAY${a}\n${a}Jumlah Depo : Rp. 11.000${a}\n\nApakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.\n\n_Ketik *Y* untuk melanjutkan, *N* untuk mengulangin inputan_`)
}
if (/GPY #12.000/.test(m.text)){
         m.reply(`「 *DEPOSIT-USER* 」\n\n${a}Nama: ${pushname}${a}\n${a}Nomer : ${m.sender.split('@')[0]}${a}\n${a}Payment : GOPAY${a}\n${a}Jumlah Depo : Rp. 12.000${a}\n\nApakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.\n\n_Ketik *Y* untuk melanjutkan, *N* untuk mengulangin inputan_`)
}

                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        m = String(err)
                        await m.reply(m)
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
