/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}

/*⫘⫘⫘⫘ALL PAYMENT⫘⫘⫘⫘⫘*/
global.pdana = '085883359262' //Dana
global.povo = '085883359262' //Ovo
global.pgopay = '085883359262' //Gopay
global.ppulsa = '085883359262' //Pulsa 
global.ppulsa2 = '085883359262' //Pulsa2
global.psaweria = '-' //Saweria 
/*⫘⫘⫘⫘ GLOBAL NOMOR ⫘⫘⫘⫘⫘*/
global.nomorbot = '6285692114469' //Nomor Bot
global.nomorown = '6285883359262' //Nomor
global.namabot = 'YanzBotz' //Nama bot
global.namaown = 'YanzBotz' //Nama owner
/*⫘⫘⫘⫘GLOBAL JAVA SCRIPT⫘⫘⫘⫘⫘*/
global.javasc = 'JavaScript'
global.node = 'Node.js'
global.saldo = '0'
global.act = {
		wait: 'please wait a moment, processing data...',
		den:'*Sorry You Not Register Yet...*\n\n*.reg* <name>\n*To Regis/Login*',
		proc:'Loading Please Wait..',
		error:'Error :(',
		success:'Success bang!',
		repiar:'This Feature Maintace!',
		botadm:'Jadiin gw admin dulu!',
		admin:'Khusus admin woi!',
		done:'Done!',
		gc:'Only Group Allowed',
		owner:'Only Owner Allowed'
}
/*⫘⫘⫘⫘OTHER⫘⫘⫘⫘⫘*/
global.owner = ['6285883359262','6285692114469']
global.premium = ['628588359262']
global.packname = 'YanzBotz'
global.author = 'YanzBotz'
global.sessionName = 'YanzBot'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '*SUKSES ✓* 〄\n Sukses Di Download !!',
    admin: '*𝗙𝗜𝗧𝗨𝗥 𝗗𝗜 𝗧𝗢𝗟𝗔𝗞* 〄\n Lu Admin? Hanya bisa di akses Admin Group !',
    botAdmin: '*𝗙𝗜𝗧𝗨𝗥 𝗗𝗜 𝗧𝗢𝗟𝗔𝗞* 〄\n Fitur ini Hanya bisa di gunakan ketika Bot Menjadi Admin !',
    owner: '*𝗙𝗜𝗧𝗨𝗥 𝗗𝗜 𝗧𝗢𝗟𝗔𝗞* 〄\n Fitur ini Hanya bisa di akses untuk Owner !',
    group: '*𝗙𝗜𝗧𝗨𝗥 𝗗𝗜 𝗧𝗢𝗟𝗔𝗞* 〄\n Fitur ini Hanya bisa di Akses Di Group !',
    private: '*𝗙𝗜𝗧𝗨𝗥 𝗗𝗜 𝗧𝗢𝗟𝗔𝗞* 〄\n Fitur ini Hanya bisa di akses Di private Chat !',
    bot: '*𝗙𝗜𝗧𝗨𝗥 𝗗𝗜 𝗧𝗢𝗟𝗔𝗞* 〄\n Fitur Ini Hanya Bisa Di Akses Di Nomor Bot !',
    wait: '*𝗟𝗢𝗔𝗗𝗜𝗡𝗚...* 〄\n Silahkan Tunggu Beberapa Menit !',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/YANZ.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
