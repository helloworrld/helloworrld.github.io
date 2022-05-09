const menu = [
    {
        id:1,
        title:'牛肉',
        category: 'grill',
        price: 65,
        img: "./images/grill-saute/antrikot.jpg",
        desc: '与米饭、蔬菜和两块牛肉一起食用'
    },
    {
        id:2,
        title:'羊排',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/kuzupirzola.jpg",
        desc: 'Serve with rice, vegetables and two pieces lamb chops'
    },
    {
        id:3,
        title:'羊肉串',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/kuzusis.jpg",
        desc: 'Serve with rice, vegetables and four pieces lamb skewers'
    },
    {
        id:4,
        title:'阿达纳串烧',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/adanasis.jpg",
        desc: 'Serve with rice, vegetables and four pieces adana skewers'
    },
    {
        id:5,
        title:'烤鸡',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/pilicizgara.jpg",
        desc: 'Serve with rice, vegetables and two pieces grilled chicken'
    },
    {
        id:6,
        title:'鸡肉串',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/pilicsis.jpg",
        desc: 'Serve with rice, vegetables and four pieces chicken skewers'
    },
    {
        id:7,
        title:'肉丸',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/izgarakofte.jpg",
        desc: 'Serve with rice, vegetables and four pieces meatball'
    },
    {
        id:8,
        title:'混合烤架',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/karisikizgara.jpg",
        desc: 'Desc'
    },
    {
        id:9,
        title:'烤蔬菜',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/sebzeizgara.jpg",
        desc: 'Desc'
    },
    {
        id:10,
        title:'肉片',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/pilicpane.jpg",
        desc: 'Desc'
    },
    {
        id:11,
        title:'炒肝',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/cigersote.jpg",
        desc: 'Desc'
    },
    {
        id:12,
        title:'香菇炒鸡',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/pilicmantarlisote.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:13,
        title:'香菇炒肉',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/etmantarlisote.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:14,
        title:'炒蘑菇',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/mantarsote.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:15,
        title:'砂锅蘑菇',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/guvecmantarli.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:16,
        title:'春卷',
        category: 'starters',
        price: 25,
        img: "./images/starters/sigaraboregi.jpg",
        desc: 'Five pieces spring roll'
    },
    {
        id:17,
        title:'炸土豆',
        category: 'starters',
        price: 25,
        img: "./images/starters/patateskizartmasi.jpg",
        desc: 'Desc'
    },
    {
        id:18,
        title:'酿茄子',
        category: 'starters',
        price: 50,
        img: "./images/starters/imambayildi.jpg",
        desc: 'Eggplant cooked in olive oil with onions, garlic and tomatoes'
    },
    {
        id:19,
        title:'肉酿茄子',
        category: 'starters',
        price: 65,
        img: "./images/starters/karniyarik.jpg",
        desc: 'Eggplant cooked in olive oil with onions and meat, garlic and tomatoes'
    },
    {
        id:21,
        title:'酿葡萄叶',
        category: 'starters',
        price: 35,
        img: "./images/starters/yapraksarma.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:22,
        title:'绿豆',
        category: 'starters',
        price: 35,
        img: "./images/starters/tazefasulye.jpg",
        desc: 'Greenbeans with olive oil'
    },
    {
        id:23,
        title:'波洛蒂豆',
        category: 'starters',
        price: 35,
        img: "./images/starters/barbunyapilaki.jpg",
        desc: 'Borlotti beans with olive oil'
    },
    {
        id:24,
        title:'酸奶',
        category: 'starters',
        price: 25,
        img: "./images/starters/haydari.jpg",
        desc: 'Yoghurt with garlic'
    },
    {
        id:25,
        title:'奶酪盘',
        category: 'starters',
        price: 45,
        img: "./images/starters/peynirtabagi.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:26,
        title:'白饭',
        category: 'starters',
        price: 70,
        img: "./images/starters/pilav.jpg",
        desc: 'A plate of rice'
    },
    {
        id:27,
        title:'汤',
        category: 'starters',
        price: 20,
        img: "./images/starters/corba.jpg",
        desc: 'Desc'
    },
    {
        id:28,
        title:'汤',
        category: 'fish',
        price: 70,
        img: "./images/fish/alabalik.jpg",
        desc: 'Desc'
    },
    {
        id:29,
        title:'海鲷鱼',
        category: 'fish',
        price: 70,
        img: "./images/fish/cipura.jpg",
        desc: 'Desc'
    },
    {
        id:28,
        title:'普通煎蛋卷',
        category: 'omlette',
        price: 70,
        img: "./images/omlette/omlet.jpg",
        desc: 'Desc'
    },
    {
        id:29,
        title:'蘑菇煎蛋卷',
        category: 'omlette',
        price: 70,
        img: "./images/omlette/omlet.jpg",
        desc: 'Desc'
    },
    {
        id:30,
        title:'芝士蛋卷',
        category: 'omlette',
        price: 70,
        img: "./images/omlette/omlet.jpg",
        desc: 'Desc'
    },
    {
        id:31,
        title:'番茄煎蛋卷',
        category: 'omlette',
        price: 70,
        img: "./images/omlette/omlet.jpg",
        desc: 'Desc'
    },
    {
        id:32,
        title:'土豆煎蛋卷',
        category: 'omlette',
        price: 70,
        img: "./images/omlette/omlet.jpg",
        desc: 'Desc'
    },
    {
        id:33,
        title:'混合煎蛋',
        category: 'omlette',
        price: 70,
        img: "./images/omlette/omlet.jpg",
        desc: 'Desc'
    },
    {
        id:34,
        title:'番茄酱意大利面',
        category: 'pasta',
        price: 70,
        img: "./images/pasta/domatessoslumakarna.jpg",
        desc: 'Desc'
    },
    {
        id:35,
        title:'肉酱意大利面',
        category: 'pasta',
        price: 70,
        img: "./images/pasta/kiymasoslumakarna.jpg",
        desc: 'Desc'
    },
    {
        id:36,
        title:'时令沙拉',
        category: 'salad',
        price: 70,
        img: "./images/salad/mevsimsalatasi.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:37,
        title:'绿色的沙拉',
        category: 'salad',
        price: 70,
        img: "./images/salad/yesilsalata.jpg",
        desc: 'Desc'
    },
    {
        id:38,
        title:'金枪鱼沙拉',
        category: 'salad',
        price: 70,
        img: "./images/salad/tonbaliklisalata.jpg",
        desc: 'Desc'
    },
    {
        id:39,
        title:'奶酪沙拉',
        category: 'salad',
        price: 70,
        img: "./images/salad/peynirlisalata.jpg",
        desc: 'Desc'
    },
    {
        id:40,
        title:'布丁',
        category: 'delight',
        price: 70,
        img: "./images/sweets/puding.jpg",
        desc: 'Puding'
    },
    {
        id:41,
        title:'土耳其糖果',
        category: 'delight',
        price: 70,
        img: "./images/sweets/turktatlilari.jpg",
        desc: 'Baklava'
    },
    {
        id:42,
        title:'甜瓜冰淇淋',
        category: 'delight',
        price: 70,
        img: "./images/sweets/dondurmalikavun.jpg",
        desc: 'Desc'
    },
    {
        id:43,
        title:'酸奶加蜂蜜',
        category: 'delight',
        price: 70,
        img: "./images/sweets/balliyogurt.jpg",
        desc: 'Desc'
    },
    {
        id:44,
        title:'冰淇淋',
        category: 'delight',
        price: 70,
        img: "./images/sweets/dondurma.jpg",
        desc: 'Icecream'
    },
    {
        id:45,
        title:'水果',
        category: 'delight',
        price: 70,
        img: "./images/sweets/sezonmeyve.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:46,
        title:'埃菲斯 啤酒',
        category: 'beers',
        price: 25,
        img: "./images/beers/efesfici.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:47,
        title:'博蒙蒂',
        category: 'beers',
        price: 50,
        img: "./images/beers/bomontifiltresiz.jpg",   
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:48,
        title:'黑啤酒',
        category: 'beers',
        price: 60,
        img: "./images/beers/darkbira.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:49,
        title:'阿姆斯特丹',
        category: 'beers',
        price: 80,
        img: "./images/beers/amsterdam.png", 
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:50,
        title:'米勒啤酒',
        category: 'beers',
        price: 60,
        img: "./images/beers/miller.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:51,
        title:'贝克啤酒',
        category: 'beers',
        price: 60,
        img: "./images/beers/becks.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:52,
        title:'Raki',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/raki.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:52,
        title:'伏特加',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/votka.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:53,
        title:'杜松子酒',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/cin.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:54,
        title:'白兰地',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/brendi.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:55,
        title:'科涅克白兰地',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/kanyak.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:56,
        title:'酒',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/likor.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:57,
        title:'绝对',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/absolut.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:58,
        title:'百加得',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/bacardi.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:59,
        title:'马提尼',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/martini.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:60,
        title:'金巴利',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/campari.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:61,
        title:'戈登杜松子酒',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/gordoncin.png",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:62,
        title:'马里布',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/malibu.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:63,
        title:'百利甜酒',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/baileys.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:64,
        title:'弓箭手的酒',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/archers.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:65,
        title:'甘露酒',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/kahlua.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:66,
        title:'苹果浏览器',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/safari.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:67,
        title:'尊尼获加',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/johnniewalker.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:68,
        title:'杰克丹尼',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/jackdaniels.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:69,
        title:'J&B',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/jb.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:70,
        title:'百龄坛',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/ballentines.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:71,
        title:'芝华士',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/chivasregal.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:72,
        title:'龙舌兰酒',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/tequila.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:73,
        title:'百加得可乐',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/bacardi-kola.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:74,
        title:'金巴利橙',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/campari-orange.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:75,
        title:'威士忌苏打水',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/viski-soda.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:76,
        title:'杜松子酒补品',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/cin-tonik.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:77,
        title:'伏特加可乐',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/votka-kola.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:78,
        title:'金菲兹',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/ginfizz.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:79,
        title:'啤酒-可口可乐',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/bira-kola.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:80,
        title:'棉花堡芥末干/干',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/semidryhalbtrocken.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:81,
        title:'棉花堡半干/半干',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/semidryhalbtrocken.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:82,
        title:'棉花堡甜/子',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/semidryhalbtrocken.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:83,
        title:'棉花堡安福拉三重奏',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/semidryhalbtrocken.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:84,
        title:'棉花堡赤霞珠',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/semidryhalbtrocken.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:85,
        title:'棉花堡比诺霞多丽',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/pinotchardonnay.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:86,
        title:'棉花堡设拉子',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/semidryhalbtrocken.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:87,
        title:'可口可乐',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/kola.png",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:88,
        title:'芬达',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/fanta.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:89,
        title:'雪碧',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/sprite.png",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:90,
        title:'冰茶',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/icetea.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:91,
        title:'红牛',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/redbull.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:92,
        title:'史威士',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/schweppes.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:93,
        title:'果汁',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/meyvesuyu.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:94,
        title:'鲜橙汁',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/portakalsuyu.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:95,
        title:'苏打',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/madensuyu.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:96,
        title:'大瓶水',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/bsu.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:97,
        title:'小瓶水',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/su.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:98,
        title:'茶',
        category: 'hotdrinks',
        price: 70,
        img: "./images/hot-drinks/cay.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:99,
        title:'土耳其咖啡',
        category: 'hotdrinks',
        price: 82,
        img: "./images/hot-drinks/turkkahvesi.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:100,
        title:'苹果茶',
        category: 'hotdrinks',
        price: 70,
        img: "./images/hot-drinks/elmacayi.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:101,
        title:'雀巢咖啡',
        category: 'hotdrinks',
        price: 70,
        img: "./images/hot-drinks/nescafe.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:102,
        title:'卡布奇诺',
        category: 'hotdrinks',
        price: 70,
        img: "./images/hot-drinks/cappuccino.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:103,
        title:'热可可',
        category: 'hotdrinks',
        price: 70,
        img: "./images/hot-drinks/sicakcikolata.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:104,
        title:'Kayaş 鸡尾酒',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/kayaskokteyl.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:105,
        title:'欢迎 鸡尾酒',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/hosgeldinkokteyl.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:106,
        title:'乙-五十二',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/b52.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:107,
        title:'海滩上的性爱',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/sexonthebeach.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:108,
        title:'飘香飘香',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/pinekolada.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:109,
        title:'龙舌兰日出',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/tequilasunrise.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:110,
        title:'Calprinia',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/calprinia.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:111,
        title:'玛格丽塔',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/margarita.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:112,
        title:'威士忌酸',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/whiskeysour.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:113,
        title:'炸弹',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/labomba.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:114,
        title:'极好的',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/fantastic.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:115,
        title:'血腥玛丽',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/bloodymary.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:116,
        title:'白色天堂',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/whiteparadise.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:117,
        title:'爱尔兰咖啡',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/irishcoffee.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:118,
        title:'Yeni Raki 20cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/yeniraki.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:119,
        title:'Yeni Raki 35cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/yeniraki.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:120,
        title:'Yeni Raki 50cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/yeniraki.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:121,
        title:'Yeni Raki 70cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/yeniraki.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:122,
        title:'Yeni Raki 100cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/yeniraki.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:123,
        title:'泰基尔达 35cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/tekirdag.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:124,
        title:'泰基尔达 70cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/tekirdag.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:125,
        title:'泰基尔达 100cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/tekirdag.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:126,
        title:'棉花堡黄金香槟 75cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/goldchampagne.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:127,
        title:'果酒',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/meyvesarabi.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
];
const menuItems = document.querySelector('.menu-items');
let allCategory = menu.map(item => {
    return item.category;
});
let categoryCount = allCategory.reduce((acc,item) => {
    if(!acc.includes(item)){
        acc.push(item);
    }
    return acc;
}, []);
categories = ["All", ...categoryCount]; // Kaldırılacak
window.addEventListener('load', categoryCount);
const grill = document.querySelector('.grill');
const starters = document.querySelector('.starters');
const fish = document.querySelector('.fish');
const omlette = document.querySelector('.omlette');
const pasta = document.querySelector('.pasta');
const salads = document.querySelector('.salads');
const sweet = document.querySelector('.sweet');
const beers = document.querySelector('.beers');
const localDrinks = document.querySelector('.local-drinks');
const importDrinks = document.querySelector('.import-drinks');
const mixes = document.querySelector('.mixes');
const coctails = document.querySelector('.coctails');
const coldDrinks = document.querySelector('.cold-drinks');
const hotDrinks = document.querySelector('.hot-drinks');
grill.addEventListener('click', getGrill);
starters.addEventListener('click', getStarters);
fish.addEventListener('click', getFish);
omlette.addEventListener('click', getOmlette);
pasta.addEventListener('click', getPasta);
salads.addEventListener('click', getSalads);
sweet.addEventListener('click', getSweet);
beers.addEventListener('click', getBeers);
localDrinks.addEventListener('click', getLocalDrinks);
importDrinks.addEventListener('click', getImportDrinks);
mixes.addEventListener('click', getMixes);
coctails.addEventListener('click', getCoctails);
coldDrinks.addEventListener('click', getColdDrinks);
hotDrinks.addEventListener('click', getHotDrinks);
//FUNCTIONS
function getAll() {
    listItems = menu.map(item => {
        menuItems.innerHTML += 
        `
        <div class = 'flex-container'>
        <div class = 'img-container'>
        <img src=${item.img} alt=${item.title}>
        </div>
        <div class='menu-info'>
        <div class='menu-title'>
        <h4>${item.title}</h4>
        <h4 class='price'>${item.price}₺</h4>
        </div>
        <div class='menu-text'>${item.desc}</div>
        </div>
        </div>
        `
    });
}
function getGrill() {
    menuItems.innerHTML = '';
    let grill = menu.filter(item => item.category === 'grill').map(item => {
        menuItems.innerHTML += 
        `
        <div class = "flex-container">
        <img src=${item.img} alt = ${item.title}>
        <div class = 'menu-info'>
        <div class = 'menu-title'>
        <h4>${item.title}</h4>
        <h4 class = 'price'>${item.price}₺</h4>
        </div>
        <div class = 'menu-text'>${item.desc}</div>
        </div>
        </div>
        `
    });
}
function getStarters() {
    menuItems.innerHTML = '';
    let starters = menu.filter(item => item.category === 'starters').map(item => {
        menuItems.innerHTML += 
        `
        <div class = "flex-container">
        <img src=${item.img} alt = ${item.title}>
        <div class = 'menu-info'>
        <div class = 'menu-title'>
        <h4>${item.title}</h4>
        <h4 class = 'price'>${item.price}₺</h4>
        </div>
        <div class = 'menu-text'>${item.desc}</div>
        </div>
        </div>
        `
    });
}
function getFish() {
    menuItems.innerHTML = '';
    let fish = menu.filter(item => item.category === 'fish').map(item => {
        menuItems.innerHTML += 
        `
        <div class = "flex-container">
        <img src=${item.img} alt = ${item.title}>
        <div class = 'menu-info'>
        <div class = 'menu-title'>
        <h4>${item.title}</h4>
        <h4 class = 'price'>${item.price}₺</h4>
        </div>
        <div class = 'menu-text'>${item.desc}</div>
        </div>
        </div>
        `
    });
}
function getOmlette() {
    menuItems.innerHTML = '';
    let omlette = menu.filter(item => item.category === 'omlette').map(item => {
        menuItems.innerHTML += 
        `
        <div class = "flex-container">
        <img src=${item.img} alt = ${item.title}>
        <div class = 'menu-info'>
        <div class = 'menu-title'>
        <h4>${item.title}</h4>
        <h4 class = 'price'>${item.price}₺</h4>
        </div>
        <div class = 'menu-text'>${item.desc}</div>
        </div>
        </div>
        `
    });
}
function getPasta() {
    menuItems.innerHTML = '';
    let pasta = menu.filter(item => item.category === 'pasta').map(item => {
        menuItems.innerHTML += 
        `
        <div class = "flex-container">
        <img src=${item.img} alt = ${item.title}>
        <div class = 'menu-info'>
        <div class = 'menu-title'>
        <h4>${item.title}</h4>
        <h4 class = 'price'>${item.price}₺</h4>
        </div>
        <div class = 'menu-text'>${item.desc}</div>
        </div>
        </div>
        `
    });
}
function getSalads() {
    menuItems.innerHTML = '';
    let salad = menu.filter(item => item.category === 'salad').map(item => {
        menuItems.innerHTML += 
        `
        <div class = "flex-container">
        <img src=${item.img} alt = ${item.title}>
        <div class = 'menu-info'>
        <div class = 'menu-title'>
        <h4>${item.title}</h4>
        <h4 class = 'price'>${item.price}₺</h4>
        </div>
        <div class = 'menu-text'>${item.desc}</div>
        </div>
        </div>
        `
    });
}
function getSweet() {
    menuItems.innerHTML = '';
    let sweet = menu.filter(item => item.category === 'delight').map(item => {
        menuItems.innerHTML += 
        `
        <div class = "flex-container">
        <img src=${item.img} alt = ${item.title}>
        <div class = 'menu-info'>
        <div class = 'menu-title'>
        <h4>${item.title}</h4>
        <h4 class = 'price'>${item.price}₺</h4>
        </div>
        <div class = 'menu-text'>${item.desc}</div>
        </div>
        </div>
        `
    });
}
function getBeers() {
    menuItems.innerHTML = '';
    let beers = menu.filter(item => item.category === 'beers').map(item => {
        menuItems.innerHTML += 
        `
        <div class = "flex-container">
        <img src=${item.img} alt = ${item.title}>
        <div class = 'menu-info'>
        <div class = 'menu-title'>
        <h4>${item.title}</h4>
        <h4 class = 'price'>${item.price}₺</h4>
        </div>
        <div class = 'menu-text'>${item.desc}</div>
        </div>
        </div>
        `
    });
}
function getLocalDrinks() {
    menuItems.innerHTML = '';
    let localDrinks = menu.filter(item => item.category === 'localdrinks').map(item => {
        menuItems.innerHTML += 
        `
        <div class = "flex-container">
        <img src=${item.img} alt = ${item.title}>
        <div class = 'menu-info'>
        <div class = 'menu-title'>
        <h4>${item.title}</h4>
        <h4 class = 'price'>${item.price}₺</h4>
        </div>
        <div class = 'menu-text'>${item.desc}</div>
        </div>
        </div>
        `
    });
}
function getImportDrinks() {
    menuItems.innerHTML = '';
    let importDrinks = menu.filter(item => item.category === 'importdrinks').map(item => {
        menuItems.innerHTML += 
        `
        <div class = "flex-container">
        <img src=${item.img} alt = ${item.title}>
        <div class = 'menu-info'>
        <div class = 'menu-title'>
        <h4>${item.title}</h4>
        <h4 class = 'price'>${item.price}₺</h4>
        </div>
        <div class = 'menu-text'>${item.desc}</div>
        </div>
        </div>
        `
    });
}
function getMixes() {
    menuItems.innerHTML = '';
    let mixes = menu.filter(item => item.category === 'mixed').map(item => {
        menuItems.innerHTML += 
        `
        <div class = "flex-container">
        <img src=${item.img} alt = ${item.title}>
        <div class = 'menu-info'>
        <div class = 'menu-title'>
        <h4>${item.title}</h4>
        <h4 class = 'price'>${item.price}₺</h4>
        </div>
        <div class = 'menu-text'>${item.desc}</div>
        </div>
        </div>
        `
    });
}
function getCoctails() {
    menuItems.innerHTML = '';
    let coctails = menu.filter(item => item.category === 'coctails').map(item => {
        menuItems.innerHTML += 
        `
        <div class = "flex-container">
        <img src=${item.img} alt = ${item.title}>
        <div class = 'menu-info'>
        <div class = 'menu-title'>
        <h4>${item.title}</h4>
        <h4 class = 'price'>${item.price}₺</h4>
        </div>
        <div class = 'menu-text'>${item.desc}</div>
        </div>
        </div>
        `
    });
}
function getColdDrinks() {
    menuItems.innerHTML = '';
    let coldDrinks = menu.filter(item => item.category === 'colddrinks').map(item => {
        menuItems.innerHTML += 
        `
        <div class = "flex-container">
        <img src=${item.img} alt = ${item.title}>
        <div class = 'menu-info'>
        <div class = 'menu-title'>
        <h4>${item.title}</h4>
        <h4 class = 'price'>${item.price}₺</h4>
        </div>
        <div class = 'menu-text'>${item.desc}</div>
        </div>
        </div>
        `
    });
}
function getHotDrinks() {
    menuItems.innerHTML = '';
    let hotDrinks = menu.filter(item => item.category === 'hotdrinks').map(item => {
        menuItems.innerHTML += 
        `
        <div class = "flex-container">
        <img src=${item.img} alt = ${item.title}>
        <div class = 'menu-info'>
        <div class = 'menu-title'>
        <h4>${item.title}</h4>
        <h4 class = 'price'>${item.price}₺</h4>
        </div>
        <div class = 'menu-text'>${item.desc}</div>
        </div>
        </div>
        `
    });
}
function urlHandler(value) {
    window.location.assign(`${value}`);
}
//SCROLL
const gridItem = document.querySelectorAll('.grid-item');
const categoriesContainer = document.querySelector('.categories-container');
for(let i = 0; i < gridItem.length; i++){
    gridItem[i].addEventListener('click', scroll);
}

function scroll(){
    console.log('Denemeee');
    window.scrollTo({
        top: 830,
        behavior: 'smooth'
    });
}