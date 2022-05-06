const menu = [
    {
        id:1,
        title:'Говядина',
        category: 'grill',
        price: 65,
        img: "./images/grill-saute/antrikot.jpg",
        desc: 'Подавать с рисом, овощами и двумя кусочками говядины'
    },
    {
        id:2,
        title:'Бараньи отбивные',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/kuzupirzola.jpg",
        desc: 'Serve with rice, vegetables and two pieces lamb chops'
    },
    {
        id:3,
        title:'Шашлык из баранины',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/kuzusis.jpg",
        desc: 'Serve with rice, vegetables and four pieces lamb skewers'
    },
    {
        id:4,
        title:'Адана Шашлык',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/adanasis.jpg",
        desc: 'Serve with rice, vegetables and four pieces adana skewers'
    },
    {
        id:5,
        title:'Жареная курица',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/pilicizgara.jpg",
        desc: 'Serve with rice, vegetables and two pieces grilled chicken'
    },
    {
        id:6,
        title:'Куриные шашлычки',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/pilicsis.jpg",
        desc: 'Serve with rice, vegetables and four pieces chicken skewers'
    },
    {
        id:7,
        title:'Фрикадельки',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/izgarakofte.jpg",
        desc: 'Serve with rice, vegetables and four pieces meatball'
    },
    {
        id:8,
        title:'Смешанный гриль',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/karisikizgara.jpg",
        desc: 'Desc'
    },
    {
        id:9,
        title:'Овощи на гриле',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/sebzeizgara.jpg",
        desc: 'Desc'
    },
    {
        id:10,
        title:'Шницель',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/pilicpane.jpg",
        desc: 'Desc'
    },
    {
        id:11,
        title:'Жареная печень',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/cigersote.jpg",
        desc: 'Desc'
    },
    {
        id:12,
        title:'Куриное соте с грибами',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/pilicmantarlisote.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:13,
        title:'Жареное мясо с грибами',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/etmantarlisote.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:14,
        title:'Жареный гриб',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/mantarsote.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:15,
        title:'Запеканка с грибами',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/guvecmantarli.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:16,
        title:'Спринг-ролл',
        category: 'starters',
        price: 25,
        img: "./images/starters/sigaraboregi.jpg",
        desc: 'Five pieces spring roll'
    },
    {
        id:17,
        title:'Жареная картошка',
        category: 'starters',
        price: 25,
        img: "./images/starters/patateskizartmasi.jpg",
        desc: 'Desc'
    },
    {
        id:18,
        title:'Фаршированные баклажаны',
        category: 'starters',
        price: 50,
        img: "./images/starters/imambayildi.jpg",
        desc: 'Eggplant cooked in olive oil with onions, garlic and tomatoes'
    },
    {
        id:19,
        title:'Фаршированные баклажаны с мясом',
        category: 'starters',
        price: 65,
        img: "./images/starters/karniyarik.jpg",
        desc: 'Eggplant cooked in olive oil with onions and meat, garlic and tomatoes'
    },
    {
        id:21,
        title:'Фаршированные виноградные листья',
        category: 'starters',
        price: 35,
        img: "./images/starters/yapraksarma.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:22,
        title:'Зеленая фасоль',
        category: 'starters',
        price: 35,
        img: "./images/starters/tazefasulye.jpg",
        desc: 'Greenbeans with olive oil'
    },
    {
        id:23,
        title:'Бобы Борлотти',
        category: 'starters',
        price: 35,
        img: "./images/starters/barbunyapilaki.jpg", //DEĞİŞTİRİLECEK ***************************
        desc: 'Borlotti beans with olive oil'
    },
    {
        id:24,
        title:'Йогурт',
        category: 'starters',
        price: 25,
        img: "./images/starters/haydari.jpg",
        desc: 'Yoghurt with garlic'
    },
    {
        id:25,
        title:'Сырная тарелка',
        category: 'starters',
        price: 45,
        img: "./images/starters/peynirtabagi.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:26,
        title:'Рис',
        category: 'starters',
        price: 70,
        img: "./images/starters/pilav.jpg",
        desc: 'A plate of rice'
    },
    {
        id:27,
        title:'Суп',
        category: 'starters',
        price: 20,
        img: "./images/starters/corba.jpg",
        desc: 'Desc'
    },
    {
        id:28,
        title:'Форель Рыба',
        category: 'fish',
        price: 70,
        img: "./images/fish/alabalik.jpg",
        desc: 'Desc'
    },
    {
        id:29,
        title:'Рыба морской лещ',
        category: 'fish',
        price: 70,
        img: "./images/fish/cipura.jpg",
        desc: 'Desc'
    },
    {
        id:28,
        title:'Обычный омлет',
        category: 'omlette',
        price: 70,
        img: "./images/omlette/omlet.jpg",
        desc: 'Desc'
    },
    {
        id:29,
        title:'Грибной омлет',
        category: 'omlette',
        price: 70,
        img: "./images/omlette/omlet.jpg",
        desc: 'Desc'
    },
    {
        id:30,
        title:'Сырный омлет',
        category: 'omlette',
        price: 70,
        img: "./images/omlette/omlet.jpg",
        desc: 'Desc'
    },
    {
        id:31,
        title:'Томатный омлет',
        category: 'omlette',
        price: 70,
        img: "./images/omlette/omlet.jpg",
        desc: 'Desc'
    },
    {
        id:32,
        title:'Картофельный омлет',
        category: 'omlette',
        price: 70,
        img: "./images/omlette/omlet.jpg",
        desc: 'Desc'
    },
    {
        id:33,
        title:'Смешанный омлет',
        category: 'omlette',
        price: 70,
        img: "./images/omlette/omlet.jpg",
        desc: 'Desc'
    },
    {
        id:34,
        title:'Паста с томатным соусом',
        category: 'pasta',
        price: 70,
        img: "./images/pasta/domatessoslumakarna.jpg",
        desc: 'Desc'
    },
    {
        id:35,
        title:'Паста с мясным соусом',
        category: 'pasta',
        price: 70,
        img: "./images/pasta/kiymasoslumakarna.jpg",
        desc: 'Desc'
    },
    {
        id:36,
        title:'Сезонный салат',
        category: 'salad',
        price: 70,
        img: "./images/salad/mevsimsalatasi.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:37,
        title:'Зеленый салат',
        category: 'salad',
        price: 70,
        img: "./images/salad/yesilsalata.jpg",
        desc: 'Desc'
    },
    {
        id:38,
        title:'Салат из тунца',
        category: 'salad',
        price: 70,
        img: "./images/salad/tonbaliklisalata.jpg",
        desc: 'Desc'
    },
    {
        id:39,
        title:'сырный салат',
        category: 'salad',
        price: 70,
        img: "./images/salad/peynirlisalata.jpg",
        desc: 'Desc'
    },
    {
        id:40,
        title: 'Пудинг',
        category: 'delight',
        price: 70,
        img: "./images/sweets/puding.jpg",
        desc: 'Puding'
    },
    {
        id:41,
        title:'Турецкие сладости',
        category: 'delight',
        price: 70,
        img: "./images/sweets/turktatlilari.jpg",
        desc: 'Baklava'
    },
    {
        id:42,
        title:'Дыня с мороженым',
        category: 'delight',
        price: 70,
        img: "./images/sweets/dondurmalikavun.jpg",
        desc: 'Desc'
    },
    {
        id:43,
        title:'Йогурт с медом',
        category: 'delight',
        price: 70,
        img: "./images/sweets/balliyogurt.jpg",
        desc: 'Desc'
    },
    {
        id:44,
        title:'Мороженое',
        category: 'delight',
        price: 70,
        img: "./images/sweets/dondurma.jpg",
        desc: 'Icecream'
    },
    {
        id:45,
        title:'Фрукты',
        category: 'delight',
        price: 70,
        img: "./images/sweets/sezonmeyve.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:46,
        title:'Efes Пиво',
        category: 'beers',
        price: 25,
        img: "./images/beers/efesfici.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:47,
        title:'Bomonti non Filter',
        category: 'beers',
        price: 50,
        img: "./images/beers/bomontifiltresiz.jpg",   
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:48,
        title:'Темное пиво',
        category: 'beers',
        price: 60,
        img: "./images/beers/darkbira.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:49,
        title:'Amsterdam',
        category: 'beers',
        price: 80,
        img: "./images/beers/amsterdam.png", 
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:50,
        title:'Miller',
        category: 'beers',
        price: 60,
        img: "./images/beers/miller.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:51,
        title:'Becks',
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
        title:'Vodka',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/votka.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:53,
        title:'Gin',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/cin.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:54,
        title:'Brandy',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/brendi.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:55,
        title:'Cognac',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/kanyak.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:56,
        title:'Liqueur',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/likor.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:57,
        title:'Absolut',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/absolut.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:58,
        title:'Bacardi',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/bacardi.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:59,
        title:'Martini',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/martini.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:60,
        title:'Campari',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/campari.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:61,
        title:'Gordon Gin',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/gordoncin.png",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:62,
        title:'Malibu',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/malibu.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:63,
        title:'Baileys',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/baileys.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:64,
        title:'Archers',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/archers.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:65,
        title:'Kahlua',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/kahlua.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:66,
        title:'Safari',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/safari.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:67,
        title:'Johnnie Walker',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/johnniewalker.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:68,
        title:'Jack Daniels',
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
        title:'Ballentines',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/ballentines.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:71,
        title:'Chivas Regal',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/chivasregal.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:72,
        title:'Tequila',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/tequila.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:73,
        title:'Bacardi-Cola',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/bacardi-kola.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:74,
        title:'Campari-Orange',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/campari-orange.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:75,
        title:'Whiskey-Soda',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/viski-soda.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:76,
        title:'Gin-Tonic',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/cin-tonik.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:77,
        title:'Vodka-Cola',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/votka-kola.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:78,
        title:'Ginfizz',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/ginfizz.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:79,
        title:'Beer-Cola',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/bira-kola.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:80,
        title:'Pamukkale Senfoni Dry/Trocken',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/semidryhalbtrocken.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:81,
        title:'Pamukkale Semidry/Halbtrocken',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/semidryhalbtrocken.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:82,
        title:'Pamukkale Sweet/Süb',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/semidryhalbtrocken.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:83,
        title:'Pamukkale Anfora Trio',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/semidryhalbtrocken.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:84,
        title:'Pamukkale Cabernet Sauvignon',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/semidryhalbtrocken.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:85,
        title:'Pamukkale Pinot Chardonnay',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/pinotchardonnay.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:86,
        title:'Pamukkale Shiraz',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/semidryhalbtrocken.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:87,
        title:'Coca Cola',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/kola.png",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:88,
        title:'Fanta',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/fanta.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:89,
        title:'Sprite',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/sprite.png",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:90,
        title:'чай со льдом',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/icetea.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:91,
        title:'Redbull',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/redbull.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:92,
        title:'Schweppes',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/schweppes.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:93,
        title:'Сок',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/meyvesuyu.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:94,
        title:'Свежий апельсиновый сок',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/portakalsuyu.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:95,
        title:'Сода',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/madensuyu.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:96,
        title:'Большая бутылка воды',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/bsu.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:97,
        title:'Маленькая бутылка воды',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/su.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:98,
        title:'Чай',
        category: 'hotdrinks',
        price: 70,
        img: "./images/hot-drinks/cay.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:99,
        title:'Кофе по-турецки',
        category: 'hotdrinks',
        price: 82,
        img: "./images/hot-drinks/turkkahvesi.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:100,
        title:'Яблочный чай',
        category: 'hotdrinks',
        price: 70,
        img: "./images/hot-drinks/elmacayi.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:101,
        title:'Nescafe',
        category: 'hotdrinks',
        price: 70,
        img: "./images/hot-drinks/nescafe.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:102,
        title:'Cappuccino',
        category: 'hotdrinks',
        price: 70,
        img: "./images/hot-drinks/cappuccino.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:103,
        title:'Горячий шоколад',
        category: 'hotdrinks',
        price: 70,
        img: "./images/hot-drinks/sicakcikolata.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:104,
        title:'Kayaş Коктейль',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/kayaskokteyl.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:105,
        title:'Добро пожаловать Коктейль',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/hosgeldinkokteyl.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:106,
        title:'B-52',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/b52.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:107,
        title:'Sex on the Beach',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/sexonthebeach.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:108,
        title:'Pine Colada',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/pinekolada.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:109,
        title:'Tequila Sunrise',
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
        title:'Margarita',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/margarita.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:112,
        title:'Whisky Sour',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/whiskeysour.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:113,
        title:'La Bomba',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/labomba.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:114,
        title:'Fantastic',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/fantastic.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:115,
        title:'Bloody Mary',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/bloodymary.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:116,
        title:'White Paradise',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/whiteparadise.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:117,
        title:'Irish Coffee',
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
        title:'Tekirdağ 35cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/tekirdag.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:124,
        title:'Tekirdağ 70cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/tekirdag.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:125,
        title:'Tekirdağ 100cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/tekirdag.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:126,
        title:'Pamukkale Gold Champagne 75cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/goldchampagne.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:127,
        title:'Фруктовое вино',
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