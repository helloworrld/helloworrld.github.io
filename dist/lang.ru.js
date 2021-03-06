const menu = [
    {
        id:1,
        title:'Говядина',
        category: 'grill',
        price: 110,
        img: "./images/grill-saute/antrikot.jpg"
    },
    {
        id:2,
        title:'Бараньи отбивные',
        category: 'grill',
        price: 130,
        img: "./images/grill-saute/kuzupirzola.jpg"
    },
    {
        id:3,
        title:'Шашлык из баранины',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/kuzusis.jpg"
    },
    {
        id:4,
        title:'Адана Шашлык',
        category: 'grill',
        price: 90,
        img: "./images/grill-saute/adanasis.jpg"
    },
    {
        id:5,
        title:'Жареная курица',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/pilicizgara.jpg"
    },
    {
        id:6,
        title:'Куриные шашлычки',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/pilicsis.jpg"
    },
    {
        id:7,
        title:'Фрикадельки',
        category: 'grill',
        price: 75,
        img: "./images/grill-saute/izgarakofte.jpg"
    },
    {
        id:8,
        title:'Смешанный гриль',
        category: 'grill',
        price: 130,
        img: "./images/grill-saute/karisikizgara.jpg"
    },
    {
        id:9,
        title:'Овощи на гриле',
        category: 'grill',
        price: 60,
        img: "./images/grill-saute/sebzeizgara.jpg"
    },
    {
        id:10,
        title:'Шницель',
        category: 'grill',
        price: 90,
        img: "./images/grill-saute/pilicpane.jpg"
    },
    {
        id:11,
        title:'Жареная печень',
        category: 'grill',
        price: 65,
        img: "./images/grill-saute/cigersote.jpg"
    },
    {
        id:12,
        title:'Куриное соте с грибами',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/pilicmantarlisote.jpg"
    },
    {
        id:13,
        title:'Жареное мясо с грибами',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/etmantarlisote.jpg"
    },
    {
        id:14,
        title:'Жареный гриб',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/mantarsote.jpg"
    },
    {
        id:15,
        title:'Запеканка с грибами',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/guvecmantarli.jpg"
    },
    {
        id:15,
        title:'кальмары рагу',
        category: 'grill',
        price: 130,
        img: "./images/grill-saute/squid.jpg"
    },
    {
        id:16,
        title:'Спринг-ролл',
        category: 'starters',
        price: 25,
        img: "./images/starters/sigaraboregi.jpg"
    },
    {
        id:17,
        title:'Жареная картошка',
        category: 'starters',
        price: 30,
        img: "./images/starters/patateskizartmasi.jpg"
    },
    {
        id:18,
        title:'Фаршированные баклажаны',
        category: 'starters',
        price: 55,
        img: "./images/starters/imambayildi.jpg"
    },
    {
        id:19,
        title:'Фаршированные баклажаны с мясом',
        category: 'starters',
        price: 70,
        img: "./images/starters/karniyarik.jpg"
    },
    {
        id:21,
        title:'Фаршированные виноградные листья',
        category: 'starters',
        price: 35,
        img: "./images/starters/yapraksarma.jpg"
    },
    {
        id:22,
        title:'Зеленая фасоль',
        category: 'starters',
        price: 35,
        img: "./images/starters/tazefasulye.jpg"
    },
    {
        id:23,
        title:'Бобы Борлотти',
        category: 'starters',
        price: 35,
        img: "./images/starters/barbunyapilaki.jpg"
    },
    {
        id:24,
        title:'Йогурт',
        category: 'starters',
        price: 25,
        img: "./images/starters/haydari.jpg"
    },
    {
        id:25,
        title:'Сырная тарелка',
        category: 'starters',
        price: 45,
        img: "./images/starters/peynirtabagi.jpg"
    },
    {
        id:26,
        title:'Рис',
        category: 'starters',
        price: 25,
        img: "./images/starters/pilav.jpg"
    },
    {
        id:27,
        title:'Суп',
        category: 'starters',
        price: 25,
        img: "./images/starters/corba.jpg"
    },
    {
        id:28,
        title:'Humus',
        category: 'starters',
        price: 20,
        img: "./images/starters/humus.jpg"
    },
    {
        id:28,
        title:'Acı Sos',
        category: 'starters',
        price: 35,
        img: "./images/starters/aci-sos.jpg"
    },
    {
        id:28,
        title:'Форель Рыба',
        category: 'fish',
        price: 70,
        img: "./images/fish/alabalik.jpg"
    },
    {
        id:29,
        title:'Рыба морской лещ',
        category: 'fish',
        price: 85,
        img: "./images/fish/cipura.jpg"
    },
    {
        id:28,
        title:'Обычный омлет',
        category: 'omlette',
        price: 40,
        img: "./images/omlette/omlet.jpg"
    },
    {
        id:29,
        title:'Грибной омлет',
        category: 'omlette',
        price: 45,
        img: "./images/omlette/omlet.jpg"
    },
    {
        id:30,
        title:'Сырный омлет',
        category: 'omlette',
        price: 45,
        img: "./images/omlette/omlet.jpg"
    },
    {
        id:31,
        title:'Томатный омлет',
        category: 'omlette',
        price: 45,
        img: "./images/omlette/omlet.jpg"
    },
    {
        id:32,
        title:'Картофельный омлет',
        category: 'omlette',
        price: 45,
        img: "./images/omlette/omlet.jpg"
    },
    {
        id:33,
        title:'Смешанный омлет',
        category: 'omlette',
        price: 45,
        img: "./images/omlette/omlet.jpg"
    },
    {
        id:34,
        title:'Паста с томатным соусом',
        category: 'pasta',
        price: 55,
        img: "./images/pasta/domatessoslumakarna.jpg"
    },
    {
        id:35,
        title:'Паста с мясным соусом',
        category: 'pasta',
        price: 55,
        img: "./images/pasta/kiymasoslumakarna.jpg"
    },
    {
        id:36,
        title:'Сезонный салат',
        category: 'salad',
        price: 25,
        img: "./images/salad/mevsimsalatasi.jpg"
    },
    {
        id:37,
        title:'Зеленый салат',
        category: 'salad',
        price: 25,
        img: "./images/salad/yesilsalata.jpg"
    },
    {
        id:38,
        title:'Салат из тунца',
        category: 'salad',
        price: 45,
        img: "./images/salad/tonbaliklisalata.jpg"
    },
    {
        id:39,
        title:'сырный салат',
        category: 'salad',
        price: 40,
        img: "./images/salad/peynirlisalata.jpg"
    },
    {
        id:39,
        title:'Mantarlı Salata',
        category: 'salad',
        price: 45,
        img: "./images/salad/mantarlisalata.jpg"
    },
    {
        id:40,
        title: 'Пудинг',
        category: 'delight',
        price: 25,
        img: "./images/sweets/puding.jpg"
    },
    {
        id:41,
        title:'Baklava',
        category: 'delight',
        price: 40,
        img: "./images/sweets/turktatlilari.jpg"
    },
    {
        id:41,
        title:'Dondurmalı Baklava',
        category: 'delight',
        price: 70,
        img: "./images/sweets/dondurmalibaklava.jpg"
    },
    {
        id:42,
        title:'Дыня с мороженым',
        category: 'delight',
        price: 70,
        img: "./images/sweets/dondurmalikavun.jpg"
    },
    {
        id:43,
        title:'Йогурт с медом',
        category: 'delight',
        price: 70,
        img: "./images/sweets/balliyogurt.jpg"
    },
    {
        id:44,
        title:'Мороженое',
        category: 'delight',
        price: 30,
        img: "./images/sweets/dondurma.jpg"
    },
    {
        id:45,
        title:'Фрукты',
        category: 'delight',
        price: 35,
        img: "./images/sweets/sezonmeyve.jpg"
    },
    {
        id:46,
        title:'Эфес Пиво',
        category: 'beers',
        price: 40,
        img: "./images/beers/efesfici.jpg"
    },
    {
        id:47,
        title:'Efes Malt',
        category: 'beers',
        price: 45,
        img: "./images/beers/efesmalt.jpg"
    },
    {
        id:47,
        title:'Efes Özel Seri',
        category: 'beers',
        price: 45,
        img: "./images/beers/efesozelseri.jpg"
    },
    {
        id:47,
        title:'Efes Xtra',
        category: 'beers',
        price: 50,
        img: "./images/beers/efesxtra.jpg"
    },
    {
        id:47,
        title:'Tuborg',
        category: 'beers',
        price: 45,
        img: "./images/beers/tuborg.jpg"
    },
    {
        id:47,
        title:'Tuborg Amber',
        category: 'beers',
        price: 50,
        img: "./images/beers/tuborgamber.jpg"
    },
    {
        id:47,
        title:'Tuborg Filtresiz',
        category: 'beers',
        price: 50,
        img: "./images/beers/tuborgfiltresiz.jpg"
    },
    {
        id:47,
        title:'Бомонти без фильтра',
        category: 'beers',
        price: 50,
        img: "./images/beers/bomontifiltresiz.jpg"
    },
    {
        id:47,
        title:'Bomonti Filtresiz Ipa',
        category: 'beers',
        price: 50,
        img: "./images/beers/bomontiipa.jpg"
    },
    {
        id:47,
        title:'Bud',
        category: 'beers',
        price: 50,
        img: "./images/beers/bud.jpg"
    },
    {
        id:47,
        title:'Carlsberg',
        category: 'beers',
        price: 80,
        img: "./images/beers/carlsberg.jpg"
    },
    {
        id:47,
        title:'Corona',
        category: 'beers',
        price: 50,
        img: "./images/beers/corona.jpg"
    },
    {
        id:47,
        title:'Blanc',
        category: 'beers',
        price: 75,
        img: "./images/beers/blanc.jpg"
    },
    {
        id:47,
        title:'Desperados',
        category: 'beers',
        price: 80,
        img: "./images/beers/desperados.jpg"
    },
    {
        id:47,
        title:'Duvel',
        category: 'beers',
        price: 60,
        img: "./images/beers/duvel.jpg"
    },
    {
        id:47,
        title:'Leffe Blonde',
        category: 'beers',
        price: 80,
        img: "./images/beers/leffe.jpeg"
    },
    {
        id:47,
        title:'Sol',
        category: 'beers',
        price: 75,
        img: "./images/beers/sol.jpeg"
    },
    {
        id:47,
        title:'Guiness',
        category: 'beers',
        price: 90,
        img: "./images/beers/guiness.jpg"
    },
    {
        id:49,
        title:'Амстердам',
        category: 'beers',
        price: 90,
        img: "./images/beers/amsterdam.png"
    },
    {
        id:50,
        title:'Миллер',
        category: 'beers',
        price: 75,
        img: "./images/beers/miller.jpg"
    },
    {
        id:51,
        title:'Бекс',
        category: 'beers',
        price: 75,
        img: "./images/beers/becks.jpg"
    },
    {
        id:51,
        title:'Weihenstephaner Hefe weIssbier',
        category: 'beers',
        price: 75,
        img: "./images/beers/weihenstephaner-hefe.png"
    },
    {
        id:51,
        title:'Weihenstephaner Vitus',
        category: 'beers',
        price: 90,
        img: "./images/beers/weihenstephaner-vitus.png"
    },
    {
        id:51,
        title:'Grimbergen Blonde',
        category: 'beers',
        price: 80,
        img: "./images/beers/grimbergen-blonde.jpg"
    },
    {
        id:51,
        title:'Grimbergen Double Ambree',
        category: 'beers',
        price: 80,
        img: "./images/beers/grimbergen-double-ambree.jpg"
    },
    {
        id:52,
        title:'Raki',
        category: 'localdrinks',
        price: 45,
        img: "./images/localdrinks/raki.jpg"
    },
    {
        id:52,
        title:'Водка',
        category: 'localdrinks',
        price: 50,
        img: "./images/localdrinks/votka.jpg"
    },
    {
        id:53,
        title:'Джин',
        category: 'localdrinks',
        price: 50,
        img: "./images/localdrinks/cin.jpg"
    },
    {
        id:54,
        title:'бренди',
        category: 'localdrinks',
        price: 50,
        img: "./images/localdrinks/brendi.jpg"
    },
    {
        id:55,
        title:'коньяк',
        category: 'localdrinks',
        price: 50,
        img: "./images/localdrinks/kanyak.jpg"
    },
    {
        id:56,
        title:'Ликер',
        category: 'localdrinks',
        price: 50,
        img: "./images/localdrinks/likor.jpg"
    },
    {
        id:57,
        title:'Абсолют',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/absolut.jpg"
    },
    {
        id:58,
        title:'Бакарди',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/bacardi.jpg"
    },
    {
        id:59,
        title:'мартини',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/martini.jpg"
    },
    {
        id:60,
        title:'Кампари',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/campari.jpg"
    },
    {
        id:61,
        title:'Гордон Джин',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/gordoncin.png"
    },
    {
        id:62,
        title:'Малибу',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/malibu.jpg"
    },
    {
        id:63,
        title:'Бейлис',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/baileys.jpg"
    },
    {
        id:64,
        title:'Archers',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/archers.jpg"
    },
    {
        id:65,
        title:'Калуа',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/kahlua.jpg"
    },
    {
        id:66,
        title:'ликер сафари',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/safari.jpg"
    },
    {
        id:67,
        title:'Джонни Уокер',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/johnniewalker.jpg"
    },
    {
        id:68,
        title:'Jack Daniels',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/jackdaniels.jpg"
    },
    {
        id:69,
        title:'J&B',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/jb.jpg"
    },
    {
        id:70,
        title:'Баллантины',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/ballentines.jpg"
    },
    {
        id:71,
        title:'Chivas Regal',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/chivasregal.jpg"
    },
    {
        id:72,
        title:'Текила',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/tequila.jpg"
    },
    {
        id:73,
        title:'Бакарди-Кола',
        category: 'mixed',
        price: 90,
        img: "./images/mixes/bacardi-kola.jpg"
    },
    {
        id:74,
        title:'Кампари-Оранж',
        category: 'mixed',
        price: 90,
        img: "./images/mixes/campari-orange.jpg"
    },
    {
        id:75,
        title:'Виски-Сода',
        category: 'mixed',
        price: 90,
        img: "./images/mixes/viski-soda.jpg"
    },
    {
        id:76,
        title:'Джин Тоник',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/cin-tonik.jpg"
    },
    {
        id:77,
        title:'Водка-Кола',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/votka-kola.jpg"
    },
    {
        id:78,
        title:'Гинфизз',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/ginfizz.jpg"
    },
    {
        id:79,
        title:'пиво-кола',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/bira-kola.jpg"
    },
    {
        id:80,
        title:'Памуккале Сенфони Драй/Трокен',
        category: 'localdrinks',
        price: 50,
        img: "./images/localdrinks/semidryhalbtrocken.jpg"
    },
    {
        id:81,
        title:'Памуккале Полусухое/Хальбтрокен',
        category: 'localdrinks',
        price: 55,
        img: "./images/localdrinks/semidryhalbtrocken.jpg"
    },
    {
        id:82,
        title:'Памуккале Сладкий/Süb',
        category: 'localdrinks',
        price: 60,
        img: "./images/localdrinks/semidryhalbtrocken.jpg"
    },
    {
        id:83,
        title:'Памуккале Анфора Трио',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/semidryhalbtrocken.jpg"
    },
    {
        id:84,
        title:'Памуккале Каберне Совиньон',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/semidryhalbtrocken.jpg"
    },
    {
        id:85,
        title:'Памуккале Пино Шардоне',
        category: 'localdrinks',
        price: 80,
        img: "./images/localdrinks/pinotchardonnay.jpg"
    },
    {
        id:86,
        title:'Pamukkale Kalecik Karası',
        category: 'localdrinks',
        price: 80,
        img: "./images/localdrinks/semidryhalbtrocken.jpg"
    },
    {
        id:86,
        title:'Памуккале Шираз',
        category: 'localdrinks',
        price: 80,
        img: "./images/localdrinks/semidryhalbtrocken.jpg"
    },
    {
        id:87,
        title:'Кока-Кола',
        category: 'colddrinks',
        price: 15,
        img: "./images/softdrinks/kola.png"
    },
    {
        id:88,
        title:'фанта',
        category: 'colddrinks',
        price: 15,
        img: "./images/softdrinks/fanta.jpg"
    },
    {
        id:89,
        title:'Спрайт',
        category: 'colddrinks',
        price: 15,
        img: "./images/softdrinks/sprite.png"
    },
    {
        id:90,
        title:'чай со льдом',
        category: 'colddrinks',
        price: 15,
        img: "./images/softdrinks/icetea.jpg"
    },
    {
        id:91,
        title:'Ред Булл',
        category: 'colddrinks',
        price: 30,
        img: "./images/softdrinks/redbull.jpg"
    },
    {
        id:92,
        title:'Швепс',
        category: 'colddrinks',
        price: 25,
        img: "./images/softdrinks/schweppes.jpg"
    },
    {
        id:93,
        title:'Сок',
        category: 'colddrinks',
        price: 25,
        img: "./images/softdrinks/meyvesuyu.jpg"
    },
    {
        id:94,
        title:'Свежий апельсиновый сок',
        category: 'colddrinks',
        price: 35,
        img: "./images/softdrinks/portakalsuyu.jpg"
    },
    {
        id:95,
        title:'Сода',
        category: 'colddrinks',
        price: 15,
        img: "./images/softdrinks/madensuyu.jpg"
    },
    {
        id:96,
        title:'Большая бутылка воды',
        category: 'colddrinks',
        price: 15,
        img: "./images/softdrinks/bsu.jpg"
    },
    {
        id:98,
        title:'Чай',
        category: 'hotdrinks',
        price: 10,
        img: "./images/hot-drinks/cay.jpg"
    },
    {
        id:99,
        title:'Кофе по-турецки',
        category: 'hotdrinks',
        price: 25,
        img: "./images/hot-drinks/turkkahvesi.jpg"
    },
    {
        id:100,
        title:'Яблочный чай',
        category: 'hotdrinks',
        price: 15,
        img: "./images/hot-drinks/elmacayi.jpg"
    },
    {
        id:101,
        title:'Нескафе',
        category: 'hotdrinks',
        price: 25,
        img: "./images/hot-drinks/nescafe.jpg"
    },
    {
        id:102,
        title:'Капучино',
        category: 'hotdrinks',
        price: 40,
        img: "./images/hot-drinks/cappuccino.jpg"
    },
    {
        id:103,
        title:'Горячий шоколад',
        category: 'hotdrinks',
        price: 40,
        img: "./images/hot-drinks/sicakcikolata.jpg"
    },
    {
        id:104,
        title:'Кайас Коктейль',
        category: 'coctails',
        price: 120,
        img: "./images/coctails/kayaskokteyl.jpg"
    },
    {
        id:105,
        title:'Добро пожаловать Коктейль',
        category: 'coctails',
        price: 120,
        img: "./images/coctails/hosgeldinkokteyl.jpg"
    },
    {
        id:106,
        title:'Б-52',
        category: 'coctails',
        price: 110,
        img: "./images/coctails/b52.jpg"
    },
    {
        id:107,
        title:'Секс на пляже',
        category: 'coctails',
        price: 120,
        img: "./images/coctails/sexonthebeach.jpg"
    },
    {
        id:108,
        title:'Пина Колада',
        category: 'coctails',
        price: 120,
        img: "./images/coctails/pinekolada.jpg"
    },
    {
        id:109,
        title:'Текила санрайз',
        category: 'coctails',
        price: 120,
        img: "./images/coctails/tequilasunrise.jpg"
    },
    {
        id:110,
        title:'Mojito',
        category: 'coctails',
        price: 100,
        img: "./images/coctails/mojito.jpg"
    },
    {
        id:111,
        title:'Маргарита',
        category: 'coctails',
        price: 110,
        img: "./images/coctails/margarita.jpg"
    },
    {
        id:112,
        title:'Виски Сауэр',
        category: 'coctails',
        price: 120,
        img: "./images/coctails/whiskeysour.jpg"
    },
    {
        id:113,
        title:'Бомба',
        category: 'coctails',
        price: 140,
        img: "./images/coctails/labomba.jpg"
    },
    {
        id:114,
        title:'Фантастический',
        category: 'coctails',
        price: 140,
        img: "./images/coctails/fantastic.jpg"
    },
    {
        id:115,
        title:'Кровавая Мэри',
        category: 'coctails',
        price: 120,
        img: "./images/coctails/bloodymary.jpg"
    },
    {
        id:116,
        title:'Белый рай',
        category: 'coctails',
        price: 140,
        img: "./images/coctails/whiteparadise.jpg"
    },
    {
        id:117,
        title:'Кофе по-ирландски',
        category: 'coctails',
        price: 120,
        img: "./images/coctails/irishcoffee.jpg"
    },
    {
        id:118,
        title:'Новая ракы 20cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/yeniraki.jpg"
    },
    {
        id:119,
        title:'Новая ракы 35cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/yeniraki.jpg"
    },
    {
        id:120,
        title:'Новая ракы 50cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/yeniraki.jpg"
    },
    {
        id:121,
        title:'Новая ракы 70cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/yeniraki.jpg"
    },
    {
        id:122,
        title:'Новая ракы 100cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/yeniraki.jpg"
    },
    {
        id:123,
        title:'Текирдаг 35cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/tekirdag.jpg"
    },
    {
        id:124,
        title:'Текирдаг 70cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/tekirdag.jpg"
    },
    {
        id:125,
        title:'Текирдаг 100cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/tekirdag.jpg"
    },
    {
        id:126,
        title:'Золотое шампанское Памуккале 75cl',
        category: 'localdrinks',
        price: 500,
        img: "./images/localdrinks/goldchampagne.jpg"
    },
    {
        id:127,
        title:'Фруктовое вино',
        category: 'localdrinks',
        price: 400,
        img: "./images/localdrinks/meyvesarabi.jpg"
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
        <div>
        <img src=${item.img} alt = ${item.title}>
        </div>
        <div class = 'menu-info'>
        <div class = 'menu-title'>
        <h4>${item.title}</h4>
        <h4 class = 'price'>${item.price}₺</h4>
        </div>
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
        </div>
        </div>
        `
    });
}
function urlHandler(value) {
    window.location.assign(`${value}`);
}
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