const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/AkaShiro22/botwhatsapp2021

Instagram: https://www.instagram.com/akashiro23/

Best regards, AkaShiro.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname, waver) => {
    return `
Haii, *_${pushname}!_* This is *_Urbaee Bot_*, To use my feature check it out below!

*JOIN GC BOT*
https://chat.whatsapp.com/IKcAammH2d3JNKZiEjq5Sv
  
Follow me on Instagram: https://www.instagram.com/akashiro23/_
    
_Also Owner Number: wa.me/62859106999930?text=Assalamualaikum%20owner%20bot%20AkaShiro_
  

And this is feature of this Bot!

*▌│█║▌│ █║▌│█│║▌*
  
*┏━───────────────╮*
*┃➥${prefix}sticker*
*┃➥${prefix}ttp* [COMMAND ERROR]
*┃➥${prefix}stickergif*
*┃➥${prefix}stickergiphy*
*┃➥${prefix}stmg*
*┃➥${prefix}meme*
*┃➥${prefix}nulis*
*┃➥${prefix}quotemaker* [NO RESPONSE]
*┃➥${prefix}rate*
*┃➥${prefix}kapan*
*┃➥${prefix}apakah*
*┃➥${prefix}bisakah*
*┃➥${prefix}infosurah*
*┃➥${prefix}surah*
*┃➥${prefix}tafsir*
*┃➥${prefix}ALaudio*
*┃➥${prefix}jsolat* [NO RESPONSE]
*┃➥${prefix}katakasar*
*┃➥${prefix}klasmen* [NO RESPONSE]
*┃➥${prefix}tiktokpic* [ERROR]
*┃➥${prefix}artinama*
*┃➥${prefix}cekjodoh* [NO RESPONSE]
*┃➥${prefix}zodiak*
*┃➥${prefix}motivasi* [404 NOT FOUND]
*┃➥${prefix}urgay*
*┃➥${prefix}sreddit* [PREMIUM]
*┃➥${prefix}resep*
*┃➥${prefix}stalkig* [NO RESPONSE]
*┃➥${prefix}wiki* [COMMAND ERROR]
*┃➥${prefix}cuaca*
*┃➥${prefix}chord*
*┃➥${prefix}lirik* [COMMAND ERROR]
*┃➥${prefix}movie* [COMMAND ERROR]
*┃➥${prefix}whatanime* [NO RESPONSE]
*┃➥${prefix}aiquote*
*┃➥${prefix}doggo*
*┃➥${prefix}fakta*
*┃➥${prefix}fakboy*
*┃➥${prefix}katabijak*
*┃➥${prefix}quote* [COMMAND ERROR]
*┃➥${prefix}brainly* [COMMAND ERROR]
*┃➥${prefix}cerpen* [COMMAND ERROR]
*┃➥${prefix}cersex* [PREMIUM]
*┃➥${prefix}puisi* [COMMAND ERROR]
*┃➥${prefix}anime*
*┃➥${prefix}kpop*
*┃➥${prefix}memes*
*┃➥${prefix}tts* [NO RESPONSE]
*┃➥${prefix}translate*
*┃➥${prefix}resi*
*┃➥${prefix}covidindo* [COMMAND ERROR]
*┃➥${prefix}ceklokasi* [COMMAND ERROR]
*┃➥${prefix}bapakfont* [COMMAND ERROR]
*┃➥${prefix}linkgc*
*┃➥${prefix}adminList*
*┃➥${prefix}ownergc*
*┃➥${prefix}me*
*┃➥${prefix}listban*
*┃➥${prefix}listblock*
*┃➥${prefix}gcinfo* [COMMAND ERROR]
*┃➥${prefix}dewabatch* [COMMAND ERROR]
*┃➥${prefix}howmuch*
*┃➥${prefix}mtk*
*┃➥${prefix}google* [COMMAND ERROR]
*┃➥${prefix}ptl*
*┃➥${prefix}grupbot*
*┃➥${prefix}read*
*┃➥${prefix}getpic @tagmember*
*┃➥${prefix}santet*
*┃➥${prefix}nyenye*
*┃➥${prefix}saylist*
*┃➥${prefix}addsay*
*┃➥${prefix}say*
*┃➥${prefix}delsay*
*┃➥${prefix}listbacot*
*┃➥${prefix}addbacot*
*┃➥${prefix}bacot*
*┃➥${prefix}delbacot*
*┃➥${prefix}jadian*
*┃➥${prefix}mystat*
*┃➥${prefix}infogempa*
*┃➥${prefix}tod*
*┃➥${prefix}kbbi*
*┃➥${prefix}pornhub* [COMMAND ERROR]
*┃➥${prefix}infobmkg*
*┃➥${prefix}bucin*
*┃➥${prefix}ytsearch* [NO RESPONSE]
*┃➥${prefix}tahta* [COMMAND ERROR]
*┃➥${prefix}artimimpi* [404 NOT FOUND]
*┃➥${prefix}family100* [404 NOT FOUND]
*┃➥${prefix}playstore* [NO RESPONSE]
*┃➥${prefix}shopee* [COMMAND ERROR]
*┃➥${prefix}glitch* [COMMAND ERROR]
*┃➥${prefix}distance* [404 NOT FOUND]
*┃➥${prefix}emojisticker* [COMMAND ERROR]
*┃➥${prefix}jadwalbola* [404 NOT FOUND]
*┃➥${prefix}caklontong* [404 NOT FOUND]
*┃➥${prefix}tebakgambar* [404 NOT FOUND]
*┃➥${prefix}kusonime* [COMMAND ERROR]
*┃➥${prefix}asupan*
*┃➥${prefix}stalktiktok* [COMMAND ERROR]
*┃➥${prefix}logoff* [COMMAND ERROR]
*┃➥${prefix}blackpink* [COMMAND ERROR]
*┃➥${prefix}glowtext* [COMMAND ERROR]
*┃➥${prefix}twitter* [COMMAND ERROR]
*┃➥${prefix}quotesen* [COMMAND ERROR]
*┃➥${prefix}gsmarena* [COMMAND ERROR]
*┃➥${prefix}infoalamat* [COMMAND ERROR]
*┃➥${prefix}detail*
*┃➥${prefix}findsticker* [COMMAND ERROR]
*┃➥${prefix}film* [COMMAND ERROR]
*┃➥${prefix}imgtourl* [COMMAND ERROR]
*┃➥${prefix}myzodiak* [COMMAND ERROR]
*┃➥${prefix}missing* [COMMAND ERROR]
*┃➥${prefix}stalktwit* [COMMAND ERROR]
*┃➥${prefix}silverpb* [COMMAND ERROR]
*┃➥${prefix}goldpb* [COMMAND ERROR]
*┃➥${prefix}darkjokes* [COMMAND ERROR]
*┃➥${prefix}filmapik* [COMMAND ERROR]
*┃➥${prefix}trendingtwit* [COMMAND ERROR]
*┃➥${prefix}githubstalk* 
*┃➥${prefix}fakta2* [COMMAND ERROR]
*┃➥${prefix}memeindo* [NO RESPONSE]
*┃➥${prefix}kodenuklir*
*┃➥${prefix}covid19*
*┃➥${prefix}convertduit*
*┃➥${prefix}iplocation*
*┃➥${prefix}simi* [NO RESPONSE]
*┃➥${prefix}simi2* [ILEGAL]
*┃➥${prefix}bot* [UNDEFINED]
*┃➥${prefix}reverseword*
*┃➥${prefix}happymod*
*┃➥${prefix}shortlink* [COMMAND ERROR]
*┃➥${prefix}filmapikdownload* [COMMAND ERROR]
*┃➥${prefix}stalking* [COMMAND ERROR]
*┃➥${prefix}linknobg* [COMMAND ERROR]
*┃➥${prefix}foliokiri*
*┃➥${prefix}foliokanan* [COMMAND ERROR]
*┃➥${prefix}pinterest* [COMMAND ERROR]
*┃➥${prefix}pinterest2* [COMMAND ERROR]
*┃➥${prefix}raingif* [COMMAND ERROR]
*┃➥${prefix}randomquran* [COMMAND ERROR]
*┃➥${prefix}tr* [COMMAND ERROR]
*┗━───────────────╯*

*▌│█║▌│ █║▌│█│║▌*

⌜D̶o̶w̶n̶l̶o̶a̶d̶e̶r̶ ⌟:

*┏━───────────────╮*
*┃➥${prefix}fb* [COMMAND ERROR]
*┃➥${prefix}ytdl* [Premium]
*┃➥${prefix}fb2* [COMMAND ERROR]
*┃➥${prefix}ig* [NO RESPONSE]
*┃➥${prefix}ig2* [COMMAND ERROR]
*┃➥${prefix}igstory* [Premium]
*┃➥${prefix}play* [COMMAND ERROR]
*┃➥${prefix}play2* [Premium]
*┃➥${prefix}play3 [file]* [COMMAND ERROR]
*┃➥${prefix}tiktok* [COMMAND ERROR]
*┃➥${prefix}tiktok2* [COMMAND ERROR]
*┃➥${prefix}ytmp3*
*┃➥${prefix}ytmp4* [COMMAND ERROR]
*┃➥${prefix}twitter* [COMMAND ERROR]
*┃➥${prefix}joox* [COMMAND ERROR]
*┗━───────────────╯*
 _-_-_-_-_-_-_-_-_-_-_-_-_-_

⌜A̶n̶i̶m̶e̶ ⌟ツ:

*┏━───────────────╮*
*┃➥${prefix}javcosplay* [Premium]
*┃➥${prefix}listnekopoi* [Premium]
*┃➥${prefix}nhpdf [kodenuklir]* [Premium]
*┃➥${prefix}anoboy* [ongoing anime] [Premium]
*┃➥${prefix}rhug* [Premium]
*┃➥${prefix}slap* [Premium]
*┃➥${prefix}waifu* [Premium]
*┃➥${prefix}nsfwgif +18* [Premium]
*┃➥${prefix}bjgif* [Premium]
*┃➥${prefix}cumgif* [Premium]
*┃➥${prefix}kissgif* [Premium]
*┃➥${prefix}rhentai +18* [Premium]
*┃➥${prefix}pussy* [Premium]
*┃➥${prefix}bjanime* [Premium]
*┃➥${prefix}gifhentai +18* [Premium]
*┃➥${prefix}boobs* [Premium]
*┃➥${prefix}randomhentai +18* [Premium]
*┃➥${prefix}randomhug* [Premium]
*┃➥${prefix}baka*
*┃➥${prefix}animeavatar*
*┃➥${prefix}neko*
*┃➥${prefix}rwink* [X <> No Response)
*┃➥${prefix}crygif* [COMMAND SCRIPT ERROR]
*┃➥${prefix}randompat* [Premium]
*┃➥${prefix}loli ツ*
*┃➥${prefix}wallpaper*
*┃➥${prefix}wallpaper2*
*┃➥${prefix}wpanime*
*┃➥${prefix}nekonsfw* [Premium]
*┃➥${prefix}spank* [Premium]
*┃➥${prefix}classic* [Premium]
*┃➥${prefix}kuni* [Premium]
*┃➥${prefix}trapnime* [Premium]
*┃➥${prefix}cuddle* [Premium]
*┃➥${prefix}tickle* [Premium]
*┃➥${prefix}pokegif* [Premium]
*┃➥${prefix}feetgif* [Premium]
*┃➥${prefix}anal* [Premium]
*┃➥${prefix}sologif* [Premium]
*┃➥${prefix}ttgif* [Premium]
*┃➥${prefix}lesbian* [Premium]
*┗━───────────────╯*
_-_-_-_-_-_-_-_-_-_-_-_-_-_

⌜I̶m̶a̶g̶e̶s̶ ⌟:

*┏━───────────────╮*
*┃➥${prefix}ameliandani*
*┃➥${prefix}pictcogan*
*┃➥${prefix}pictcecan*
*┃➥${prefix}aesthetic* [NO RESPONSE]
*┃➥${prefix}images* [COMMAND ERROR]
*┗━───────────────╯*
_-_-_-_-_-_-_-_-_-_-_-_-_-_

⌜t̶e̶n̶t̶a̶n̶g  ̶b̶o̶t̶ ⌟:


*┏━───────────────╮*
*┃➥${prefix}tnc*
*┃➥${prefix}donasi*
*┃➥${prefix}botstat*
*┃➥${prefix}ownerbot* [COMMAND ERROR]
*┃➥${prefix}join*
*┃➥${prefix}reportbug*
*┗━───────────────╯*
 _-_-_-_-_-_-_-_-_-_-_-_-_-_

⌜Owner Bot⌟:

*┏━───────────────╮*
*┃➥${prefix}ban* 
*┃➥${prefix}unban*
*┃➥${prefix}oaddprem*
*┃➥${prefix}odelprem*
*┃➥${prefix}bc* 
*┃➥${prefix}leaveall*
*┃➥${prefix}clearall* 
*┃➥${prefix}setstatus*
*┃➥${prefix}setpic*
*┃➥${prefix}screen*
*┗━───────────────╯*

*┏━━━━━━━━━━━━━━━━━┓*
*┃➥Owner BOT  : AkaShiro*
*┃➥WA Version : ${waver}*
*┗━━━━━━━━━━━━━━━━━┛*

https://github.com/AkaShiro22/botwhatsapp2021

Hope you have a great day!!(￣▽￣)`
}
    
    /*
    Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.
    */
    
exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
*${prefix}welcome*
*${prefix}left*
*${prefix}add*
*${prefix}kick* <reply pesan orang yang ingin dikick>
*${prefix}pkick* <tag member yang ingin dikick>
*${prefix}promote* @tag
*${prefix}opromote* <reply pesan yang ingin dipromote>
*${prefix}odemote* <reply pesan yang ingin didemote>
*${prefix}demote* @tag
*${prefix}infoall*
*${prefix}del*
*${prefix}mutegrup on/off*
*${prefix}seticon* [NO RESPONSE]
*${prefix}revoke link gc*
*${prefix}setgroupname* [NO RESPONSE]
*${prefix}resend* [NO RESPONSE]
*${prefix}bokep* [Premium]
*${prefix}antilink on/off*
*${prefix}edotensei*
*${prefix}oedotensei* <tag member yang ingin diedotensei>
*${prefix}inv* <reply pesan orang yang ingin dikick>
    
_-_-_-_-_-_-_-_-_-_-_-_-_-_
⚠ [ *Owner Group Only* ] ⚠
*${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}

/*
Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.
*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:
https://trakteer.id/noname2021
Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi
Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.
Terimakasih. -AkaShiro -ArugaZ`
}

exports.kodenuklir = () => {
    return `	
     ● KODE NUKLIR ●
‌229144 253687 238577 236509
‌227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364 223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
‌225496 259137 231681 161688
199613 259260 260433 235532 
‌88323 272117 170213 256613
‌258382 224942 258382 224942
     
229144 253687 238577 236509
‌227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364  223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
‌225496 259137 231681 161688
‌199613 259260 260433 235532
‌88323 272117 170213 256613`
}
