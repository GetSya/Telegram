const fs = require('fs')
const config = JSON.parse(fs.readFileSync(`./config.json`))

exports.start = async(lol, name) => {
    text = `[ JOJO BOT TELEGRAM]
    
Hello ${name}!
Nama : Jojo Bot Telegram
Language : JavaScript
Engine : Node Js
Owner : [Klik here](https://t.me/sofunsyabi)
    
Type : /help
`
    await lol.replyWithMarkdown(text, { disable_web_page_preview: true })
}

exports.help = async(lol, name, user_id) => {
    text = `Hello ${name}!!\nIm Jojo Bot!!\n👇Please Choose One👇`
    options = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Info Bot 📛', callback_data: 'inpo-' + user_id },
                ],
                [
                    { text: 'Tulis Buku 📒', callback_data: 'nulis-' + user_id },
                    { text: 'Tulis Folio 📄', callback_data: 'folio-' + user_id },
                    { text: 'Text Pro 📸', callback_data: 'textpro-' + user_id },
                    { text: 'Random Text 💬', callback_data: 'random-' + user_id },
                ],
                [
                    { text: 'Donasi 💰', callback_data: 'donasi-' + user_id },
                ],
            ]
        }
    }
    try {
        await lol.editMessageText(text, options)
    } catch {
        await lol.reply(text, options)
    }
}

exports.islami = async(lol, user_id) => {
    prefix = config.prefix
    text = `Islami Menu :

❏ ${prefix}listsurah
❏ ${prefix}alquran no_surah
❏ ${prefix}alquran no_surah/no_ayat
❏ ${prefix}alquran no_surah/no_ayat1-no_ayat2
❏ ${prefix}alquranaudio no_surah
❏ ${prefix}alquranaudio no_surah/no_ayat
❏ ${prefix}asmaulhusna
❏ ${prefix}kisahnabi
❏ ${prefix}jadwalsholat daerah
`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.nulis = async(lol, user_id) => {
    prefix = config.prefix
    text = `[ BUKU ]
/nuliskanan Teks
/nuliskiri Teks`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.textpro = async(lol, user_id) => {
    prefix = config.prefix
    text = `[ TEXT PRO ]
❏ ${prefix}glitch Text
/❏ ${prefix}glitchtt Text|Text
❏ ${prefix}pornhub Text|Text
❏ ${prefix}toxic Text
❏ ${prefix}wolflogo Text|Text
❏ ${prefix}gameover Text|Text
❏ ${prefix}lolimaker Text`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.donasi = async(lol, user_id) => {
    prefix = config.prefix
    text = `◪ *DONASI*
  │
  ├─ ❏ GOPAY
  ├─ ❏ 088213292687
  ├─ ❏ OVO
  ├─ ❏ 088213292687
  ├─ ❏ PULSA
  ├─ ❏ 081319944917
  ├─ ❏ PULSA2
  ├─ ❏ 088213292687
  ├─ ❏ INSTAGRAM
  └─ ❏ https://www.instagram.com/sofunsyabi.id`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.inpo = async(lol, user_id) => {
    prefix = config.prefix
    text = `       𝗜𝗡𝗙𝗢 𝗕𝗢𝗧


𝗡𝗮𝗺𝗮 𝗕𝗼𝘁 : 𝗝𝗼𝗷𝗼 𝗥𝗲𝗯𝗼𝗿𝗻
𝗢𝘄𝗻𝗲𝗿 : @sofunsyabi
𝗟𝗮𝗻𝗴𝘂𝗮𝗴𝗲 : 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁
𝗘𝗻𝗴𝗶𝗻𝗲 : 𝗡𝗼𝗱𝗲 𝗝𝘀

𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤
- 𝘈𝘮𝘦𝘭 - 𝘊𝘢𝘯𝘻 (Amel)
- 𝘏𝘢𝘳𝘥𝘪𝘢𝘯𝘵𝘰 (Anto)
- 𝘈𝘳𝘢𝘴𝘺𝘢 (Arsya)
- 𝘓𝘰𝘭 ~ 𝘏𝘶𝘮𝘢𝘯 (LolHuman.xzy)
`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.folio = async(lol, user_id) => {
    prefix = config.prefix
    text = `[ FOLIO ]
❏ ${prefix}foliokanan Teks
❏ ${prefix}foliokiri Teks`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.random = async(lol, user_id) => {
    prefix = config.prefix
    text = `[ RANDOM ]
❏ ${prefix}quotes
❏ ${prefix}quotesislami`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.downloader = async(lol, user_id) => {
    prefix = config.prefix
    text = `Downloader Menu :

❏ ${prefix}ytplay query
❏ ${prefix}ytsearch query
❏ ${prefix}ytmp3 link
❏ ${prefix}ytmp4 link
❏ ${prefix}tiktoknowm link
❏ ${prefix}tiktokmusic link
❏ ${prefix}tiktokmusic link
❏ ${prefix}twitterimage link
❏ ${prefix}spotify link
❏ ${prefix}spotifysearch query
❏ ${prefix}jooxplay query
❏ ${prefix}zippyshare link
❏ ${prefix}pinterest query
❏ ${prefix}pinterestdl link
❏ ${prefix}pixiv query
❏ ${prefix}pixivdl pixiv_id
`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.movie = async(lol, user_id) => {
    prefix = config.prefix
    text = `Movie & Story Menu :

❏ ${prefix}drakorongoing
❏ ${prefix}lk21 query
❏ ${prefix}wattpad url_wattpad
❏ ${prefix}wattpadsearch query
❏ ${prefix}cerpen
❏ ${prefix}ceritahoror
`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}


exports.anime = async(lol, user_id) => {
    prefix = config.prefix
    text = `Anime Menu :

❏ ${prefix}wait
❏ ${prefix}manga query
❏ ${prefix}anime query
❏ ${prefix}character query
❏ ${prefix}kusonime url_kusonime
❏ ${prefix}kusonimesearch query
❏ ${prefix}otakudesu url_otakudesu
❏ ${prefix}otakudesusearch query
`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.randtext = async(lol, user_id) => {
    prefix = config.prefix
    text = `Random Text Menu :

❏ ${prefix}quotes
❏ ${prefix}quotesdilan
❏ ${prefix}quotesanime
❏ ${prefix}quotesimage
❏ ${prefix}faktaunik
❏ ${prefix}katabijak
❏ ${prefix}pantun
❏ ${prefix}bucin
❏ ${prefix}randomnama
`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.randimage = async(lol, user_id) => {
    prefix = config.prefix
    text = `Radom Image Menu :

❏ ${prefix}art
❏ ${prefix}bts
❏ ${prefix}exo
❏ ${prefix}elf
❏ ${prefix}loli
❏ ${prefix}neko
❏ ${prefix}waifu
❏ ${prefix}shota
❏ ${prefix}husbu
❏ ${prefix}sagiri
❏ ${prefix}shinobu
❏ ${prefix}megumin
❏ ${prefix}wallnime
❏ ${prefix}chiisaihentai
❏ ${prefix}trap
❏ ${prefix}blowjob
❏ ${prefix}yaoi
❏ ${prefix}ecchi
❏ ${prefix}hentai
❏ ${prefix}ahegao
❏ ${prefix}hololewd
❏ ${prefix}sideoppai
❏ ${prefix}animefeets
❏ ${prefix}animebooty
❏ ${prefix}animethighss
❏ ${prefix}hentaiparadise
❏ ${prefix}animearmpits
❏ ${prefix}hentaifemdom
❏ ${prefix}lewdanimegirls
❏ ${prefix}biganimetiddies
❏ ${prefix}animebellybutton
❏ ${prefix}hentai4everyone
❏ ${prefix}bj
❏ ${prefix}ero
❏ ${prefix}cum
❏ ${prefix}feet
❏ ${prefix}yuri
❏ ${prefix}trap
❏ ${prefix}lewd
❏ ${prefix}feed
❏ ${prefix}eron
❏ ${prefix}solo
❏ ${prefix}gasm
❏ ${prefix}poke
❏ ${prefix}anal
❏ ${prefix}holo
❏ ${prefix}tits
❏ ${prefix}kuni
❏ ${prefix}kiss
❏ ${prefix}erok
❏ ${prefix}smug
❏ ${prefix}baka
❏ ${prefix}solog
❏ ${prefix}feetg
❏ ${prefix}lewdk
❏ ${prefix}waifu
❏ ${prefix}pussy
❏ ${prefix}femdom
❏ ${prefix}cuddle
❏ ${prefix}hentai
❏ ${prefix}eroyuri
❏ ${prefix}cum_jpg
❏ ${prefix}blowjob
❏ ${prefix}erofeet
❏ ${prefix}holoero
❏ ${prefix}classic
❏ ${prefix}erokemo
❏ ${prefix}fox_girl
❏ ${prefix}futanari
❏ ${prefix}lewdkemo
❏ ${prefix}wallpaper
❏ ${prefix}pussy_jpg
❏ ${prefix}kemonomimi
❏ ${prefix}nsfw_avatar
`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.phoxy = async(lol, user_id) => {
    prefix = config.prefix
    text = `Photo Oxy Menu :

❏ ${prefix}shadow text
❏ ${prefix}cup text
❏ ${prefix}cup1 text
❏ ${prefix}romance text
❏ ${prefix}smoke text
❏ ${prefix}burnpaper text
❏ ${prefix}lovemessage text
❏ ${prefix}undergrass text
❏ ${prefix}love text
❏ ${prefix}coffe text
❏ ${prefix}woodheart text
❏ ${prefix}woodenboard text
❏ ${prefix}summer3d text
❏ ${prefix}wolfmetal text
❏ ${prefix}nature3d text
❏ ${prefix}underwater text
❏ ${prefix}golderrose text
❏ ${prefix}summernature text
❏ ${prefix}letterleaves text
❏ ${prefix}glowingneon text
❏ ${prefix}fallleaves text
❏ ${prefix}flamming text
❏ ${prefix}harrypotter text
❏ ${prefix}carvedwood text
❏ ${prefix}tiktok text1 text2
❏ ${prefix}arcade8bit text1 text2
❏ ${prefix}battlefield4 text1 text2
❏ ${prefix}pubg text1 text2
`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}


exports.ephoto = async(lol, user_id) => {
    prefix = config.prefix
    text = `Ephoto 360 Menu :

❏ ${prefix}wetglass text
❏ ${prefix}multicolor3d text
❏ ${prefix}watercolor text
❏ ${prefix}luxurygold text
❏ ${prefix}galaxywallpaper text
❏ ${prefix}lighttext text
❏ ${prefix}beautifulflower text
❏ ${prefix}puppycute text
❏ ${prefix}royaltext text
❏ ${prefix}heartshaped text
❏ ${prefix}birthdaycake text
❏ ${prefix}galaxystyle text
❏ ${prefix}hologram3d text
❏ ${prefix}greenneon text
❏ ${prefix}glossychrome text
❏ ${prefix}greenbush text
❏ ${prefix}metallogo text
❏ ${prefix}noeltext text
❏ ${prefix}glittergold text
❏ ${prefix}textcake text
❏ ${prefix}starsnight text
❏ ${prefix}wooden3d text
❏ ${prefix}textbyname text
❏ ${prefix}writegalacy text
❏ ${prefix}galaxybat text
❏ ${prefix}snow3d text
❏ ${prefix}birthdayday text
❏ ${prefix}goldplaybutton text
❏ ${prefix}silverplaybutton text
❏ ${prefix}freefire text
❏ ${prefix}cartoongravity text
❏ ${prefix}anonymhacker text
❏ ${prefix}anonymhacker text
❏ ${prefix}mlwall text
❏ ${prefix}pubgmaskot text
❏ ${prefix}aovwall text
❏ ${prefix}logogaming text
❏ ${prefix}fpslogo text
❏ ${prefix}avatarlolnew text
❏ ${prefix}lolbanner text
❏ ${prefix}avatardota text
`
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}

exports.messageError = async(lol) => {
    await lol.reply(`Error! Please report to the [${config.owner}](${config.ownerLink}) about this`, { parse_mode: "Markdown", disable_web_page_preview: true })
}