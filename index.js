const { modul } = require('./module');
const moment = require('moment-timezone');
const { baileys, boom, chalk, fs, figlet, FileType, path, pino, process, PhoneNumber } = modul;
const { Boom } = boom
const { default: TzyBotIncConnect, useSingleFileAuthState, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, jidDecode, proto } = require("@adiwajshing/baileys")
const {
	default: makeWASocket,
	BufferJSON,
	initInMemoryKeyStore,
	DisconnectReason,
	AnyMessageContent,
        makeInMemoryStore,
	useMultiFileAuthState,
	delay
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('./lib/color')
const colors = require('colors')
const readline = require("readline");
const { uncache, nocache } = require('./lib/loader')
const { start } = require('./lib/spinner')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')

const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const mongoDB = require('./lib/mongoDB')
/*const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

const me = */
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};

const usePairingCode = true
//
require('./case.js')
nocache('../case.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))
require('./index.js')
nocache('../index.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))

function title() {
      console.clear()
      console.log(chalk.yellow(`\n\n               ${chalk.bold.yellow(`[ ${botname} ]`)}\n\n`))
      console.log(color(`< ================================================== >`, 'cyan'))
	console.log(color(`\n${themeemoji} YT CHANNEL: FallXD425`,'magenta'))
console.log(color(`${themeemoji} GITHUB: 4ksanzz `,'magenta'))
console.log(color(`${themeemoji} WA NUMBER: ${owner}`,'magenta'))
console.log(color(`${themeemoji} CREDIT: ${wm}\n`,'magenta'))
}

/*async function TzyBotIncBot() {
    	const { state, saveCreds } = await useMultiFileAuthState('yudamods')
        const TzyBotInc = TzyBotIncConnect({
            printQRInTerminal: true,
            logger: pino({ level: 'fatal' }),
            auth: state,
            browser: [`${botname}`, "bot yudamods", "3.0"],
	    getMessage: async key => {
              return {
                
              }
          }
        })
        store.bind(TzyBotInc.ev)*/
async function TzyBotIncBot() {
const { state, saveCreds } = await useMultiFileAuthState('yudamods')
const TzyBotInc = TzyBotIncConnect({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
browser: ['Chrome (Linux)', '', '']
});
if(usePairingCode && !TzyBotInc.authState.creds.registered) {
		const phoneNumber = await question('Masukan Nomer Yang Aktif Awali Dengan 62:\n');
		const code = await TzyBotInc.requestPairingCode(phoneNumber.trim())
		console.log(`Pairing code: ${code}`)

}

console.log(color(figlet.textSync(`YUDAMODS`, {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
whitespaceBreak: false
}), 'aqua'))

TzyBotInc.ws.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))}})

TzyBotInc.ev.on('messages.upsert', async chatUpdate => {
try {
kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast') return
if (!TzyBotInc.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
m = smsg(TzyBotInc, kay, store)
require('./case')(TzyBotInc, m, chatUpdate, store)
} catch (err) {
console.log(err)}})

	// detect group update
		TzyBotInc.ev.on("groups.update", async (json) => {
			try {
ppgroup = await TzyBotInc.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
			console.log(json)
			const res = json[0];
			if (res.announce == true) {
				await sleep(2000)
				TzyBotInc.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nGroup has been closed by admin, Now only admins can send messages !`,
				});
			} else if (res.announce == false) {
				await sleep(2000)
				TzyBotInc.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nThe group has been opened by admin, Now participants can send messages !`,
				});
			} else if (res.restrict == true) {
				await sleep(2000)
				TzyBotInc.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nGroup info has been restricted, Now only admin can edit group info !`,
				});
			} else if (res.restrict == false) {
				await sleep(2000)
				TzyBotInc.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nGroup info has been opened, Now participants can edit group info !`,
				});
			} else if(!res.desc == ''){
				await sleep(2000)
				TzyBotInc.sendMessage(res.id, { 
					text: `「 Group Settings Change 」\n\n*Group description has been changed to*\n\n${res.desc}`,
				});
      } else {
				await sleep(2000)
				TzyBotInc.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\n*Group name has been changed to*\n\n*${res.subject}*`,
				});
			} 
			
		});
		//
    global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})}
  global.db.chain = _.chain(global.db.data)}
loadDatabase()
    //
TzyBotInc.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await TzyBotInc.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await TzyBotInc.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await TzyBotInc.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
//welcome\\
memb = metadata.participants.length
TzyWlcm = await getBuffer(ppuser)
TzyLft = await getBuffer(ppuser)
                if (anu.action == 'add') {
                const Tzybuffer = await getBuffer(ppuser)
                let TzyName = num
                const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	            const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
	            const xmembers = metadata.participants.length
                Tzybody = `@${TzyName.split("@")[0]} 𝙅𝙤𝙞𝙣𝙚𝙙 𝙏𝙤 𝙂𝙧𝙪𝙥 ${metadata.subject}`
TzyBotInc.sendMessage(anu.id,
 { text: Tzybody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": TzyWlcm,
"sourceUrl": `${wagc}`}}})
                } else if (anu.action == 'remove') {
                	const Tzybuffer = await getBuffer(ppuser)
                    const Tzytime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	                const Tzydate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                	let TzyName = num
                    const Tzymembers = metadata.participants.length
                    Tzybody = `@${TzyName.split("@")[0]} 𝙇𝙚𝙖𝙫𝙞𝙣𝙜 𝙏𝙤 𝙂𝙧𝙪𝙥${metadata.subject}:`
TzyBotInc.sendMessage(anu.id,
 { text: Tzybody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": TzyLft,
"sourceUrl": `${wagc}`}}})
} else if (anu.action == 'promote') {
const Tzybuffer = await getBuffer(ppuser)
const Tzytime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const Tzydate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
let TzyName = num
Tzybody = ` 𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘀🎉 @${TzyName.split("@")[0]}, you have been *promoted* to *admin* 🥳`
   TzyBotInc.sendMessage(anu.id,
 { text: Tzybody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": TzyWlcm,
"sourceUrl": `${wagc}`}}})
} else if (anu.action == 'demote') {
const Tzybuffer = await getBuffer(ppuser)
const Tzytime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const Tzydate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
let TzyName = num
Tzybody = `𝗢𝗼𝗽𝘀‼️ @${TzyName.split("@")[0]}, you have been *demoted* from *admin* 😬`
TzyBotInc.sendMessage(anu.id,
 { text: Tzybody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": TzyLft,
"sourceUrl": `${wagc}`}}})
}
}
} catch (err) {
console.log(err)
}
})

   
TzyBotInc.sendTextWithMentions = async (jid, text, quoted, options = {}) => TzyBotInc.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

TzyBotInc.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

TzyBotInc.ev.on('contacts.update', update => {
for (let contact of update) {
let id = TzyBotInc.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

TzyBotInc.getName = (jid, withoutContact  = false) => {
id = TzyBotInc.decodeJid(jid)
withoutContact = TzyBotInc.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = TzyBotInc.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === TzyBotInc.decodeJid(TzyBotInc.user.id) ?
TzyBotInc.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

TzyBotInc.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

TzyBotInc.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await TzyBotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await TzyBotInc.getName(i)}\nFN:${await TzyBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	TzyBotInc.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }

TzyBotInc.setStatus = (status) => {
TzyBotInc.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

TzyBotInc.public = true

TzyBotInc.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await TzyBotInc.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

TzyBotInc.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await TzyBotInc.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

TzyBotInc.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await TzyBotInc.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

TzyBotInc.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await TzyBotInc.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

TzyBotInc.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

TzyBotInc.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

TzyBotInc.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'}
filename = path.join(__filename, './lib' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data}}

TzyBotInc.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await TzyBotInc.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await TzyBotInc.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}

TzyBotInc.sendText = (jid, text, quoted = '', options) => TzyBotInc.sendMessage(jid, { text: text, ...options }, { quoted })

TzyBotInc.serializeM = (m) => smsg(TzyBotInc, m, store)

TzyBotInc.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update	
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); TzyBotInc.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); TzyBotIncBot(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); TzyBotIncBot(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); TzyBotInc.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); TzyBotInc.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); TzyBotIncBot(); }
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); TzyBotIncBot(); }
else TzyBotInc.end(`Unknown DisconnectReason: ${reason}|${connection}`)
} else if (connection === "open") { TzyBotInc.sendMessage(owner + "@s.whatsapp.net", { text: `*Bot started!*\n\n\n_Don't forget to support, bro :)_\n\nYouTube: https://youtube.com/@YUDAMODS\n\nGitHub: https://github.com/YUDAMODS\n\nInstsgram: https://instagram.com/yudamods\n\nWhatsApp Pm: wa.me/6283842204546\n\n WhatsApp Gc1: https://chat.whatsapp.com/CfxAwJYP6Rl2J4uOwgavBh\n\nWhatsApp Gc2: https://chat.whatsapp.com/CfxAwJYP6Rl2J4uOwgavBh\n\nWhatsApp Gc3: https://chat.whatsapp.com/CfxAwJYP6Rl2J4uOwgavBh\n\nDonate: https://prnt.sc/4RvtjEeIyrFH \n\n\n_*Thanks to*_\n_*4K Sanzz*_\n_*Myself*_\n_*Family*_\n_*Friends who helped me assemble this script*_` }); }
console.log('Connected...', update)
})

TzyBotInc.ev.on('creds.update', await saveCreds)

start('2',colors.bold.white('\nWaiting for New Messages..'))

TzyBotInc.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
TzyBotInc.sendMessage(jid, buttonMessage, { quoted, ...options })
}

TzyBotInc.sendKatalog = async (jid , title = '' , desc = '', gam , options = {}) =>{
let message = await prepareWAMessageMedia({ image: gam }, { upload: TzyBotInc.waUploadToServer })
const tod = generateWAMessageFromContent(jid,
{"productMessage": {
"product": {
"productImage": message.imageMessage,
"productId": "9999",
"title": title,
"description": desc,
"currencyCode": "INR",
"priceAmount1000": "100000",
"url": `${websitex}`,
"productImageCount": 1,
"salePriceAmount1000": "0"
},
"businessOwnerJid": `${ownernumber}@s.whatsapp.net`
}
}, options)
return TzyBotInc.relayMessage(jid, tod.message, {messageId: tod.key.id})
} 

TzyBotInc.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
"hydratedContentText": text,
"locationMessage": {
"jpegThumbnail": img },
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
TzyBotInc.relayMessage(jid, template.message, { messageId: template.key.id })
}

TzyBotInc.sendButImg = async (jid, path, teks, fke, but) => {
let img = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let fjejfjjjer = {
image: img, 
jpegThumbnail: img,
caption: teks,
fileLength: "1",
footer: fke,
buttons: but,
headerType: 4,
}
TzyBotInc.sendMessage(jid, fjejfjjjer, { quoted: m })
}

return TzyBotInc

}

TzyBotIncBot()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})