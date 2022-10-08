YANZ = async (m, { text, YANZ, command, usedPrefix }) => {
const desc = `Example : ${usedPrefix}memfess 628xx|seseorang|hai`.trim()
    text = text;
    text1 = text.split('|')[0]
    text2 = text.split('|')[1]
    text3 = text.split('|')[2]
    if(!text) return m.reply(desc)
    if(!text1.startsWith('628')) return m.reply("*Can only be filled with numbers Indonesian people!, for example: 628xxx*")
    if(!text2) return m.reply("*Please enter your name!*")
    if(!text3) return m.reply("*Please fill in the message!*")
    
    teks = "*M E N F E S S - C H A T*\n\n"
    teks += "  ◦ *Pesan :* " + text3 + "\n"
    teks += "  ◦ *Dari :* " + text2 + "\n\n"
    teks += create 
    YANZ.sendMessage(text1 + "@s.whatsapp.net", {text: teks})
    await YANZ.sendMessage(m.chat,{
	          text: "*M E N F E S S - C H A T*\n\n*Done mengirim pesan menfess kepada " + text1 + "*",
            footer: create,
            buttons: [
              { buttonId: `${usedPrefix}menfesschat ${text1}`, buttonText: { displayText: 'Ajak Chat' }, type: 1 }
              ],
            headerType: 1
	        },{quoted : m})
	}
YANZ.command = /^(me(n|m)fess)$/i
YANZ.private = true
module.exports = YANZ