const menu = [
    {
        id:1,
        title:'쇠고기',
        category: 'grill',
        price: 65,
        img: "./images/grill-saute/antrikot.jpg",
        desc: '밥, 야채, 쇠고기 두 조각과 함께 제공'
    },
    {
        id:2,
        title:'양고기 볶음',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/kuzupirzola.jpg",
        desc: 'Serve with rice, vegetables and two pieces lamb chops'
    },
    {
        id:3,
        title:'양고기 꼬치',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/kuzusis.jpg",
        desc: 'Serve with rice, vegetables and four pieces lamb skewers'
    },
    {
        id:4,
        title:'아다나 꼬치',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/adanasis.jpg",
        desc: 'Serve with rice, vegetables and four pieces adana skewers'
    },
    {
        id:5,
        title:'구운 치킨',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/pilicizgara.jpg",
        desc: 'Serve with rice, vegetables and two pieces grilled chicken'
    },
    {
        id:6,
        title:'치킨 시시',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/pilicsis.jpg",
        desc: 'Serve with rice, vegetables and four pieces chicken skewers'
    },
    {
        id:7,
        title:'미트볼',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/izgarakofte.jpg",
        desc: 'Serve with rice, vegetables and four pieces meatball'
    },
    {
        id:8,
        title:'혼합 그릴',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/karisikizgara.jpg",
        desc: 'Desc'
    },
    {
        id:9,
        title:'구운 야채',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/sebzeizgara.jpg",
        desc: 'Desc'
    },
    {
        id:10,
        title:'슈니첼',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/pilicpane.jpg",
        desc: 'Desc'
    },
    {
        id:11,
        title:'간 볶음',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/cigersote.jpg",
        desc: 'Desc'
    },
    {
        id:12,
        title:'버섯 치킨 소테',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/pilicmantarlisote.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:13,
        title:'버섯 고기 볶음',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/etmantarlisote.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:14,
        title:'버섯볶음',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/mantarsote.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:15,
        title:'버섯 캐서롤',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/guvecmantarli.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:16,
        title:'스프링 롤',
        category: 'starters',
        price: 25,
        img: "./images/starters/sigaraboregi.jpg",
        desc: 'Five pieces spring roll'
    },
    {
        id:17,
        title:'감자 튀김',
        category: 'starters',
        price: 25,
        img: "./images/starters/patateskizartmasi.jpg",
        desc: 'Desc'
    },
    {
        id:18,
        title:'속을 채운 가지',
        category: 'starters',
        price: 50,
        img: "./images/starters/imambayildi.jpg",
        desc: 'Eggplant cooked in olive oil with onions, garlic and tomatoes'
    },
    {
        id:19,
        title:'고기를 넣은 속을 채운 가지',
        category: 'starters',
        price: 65,
        img: "./images/starters/karniyarik.jpg",
        desc: 'Eggplant cooked in olive oil with onions and meat, garlic and tomatoes'
    },
    {
        id:21,
        title:'박제 포도 잎',
        category: 'starters',
        price: 35,
        img: "./images/starters/yapraksarma.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:22,
        title:'강낭콩',
        category: 'starters',
        price: 35,
        img: "./images/starters/tazefasulye.jpg",
        desc: 'Greenbeans with olive oil'
    },
    {
        id:23,
        title:'신장 콩',
        category: 'starters',
        price: 35,
        img: "./images/starters/barbunyapilaki.jpg", //DEĞİŞTİRİLECEK ***************************
        desc: 'Borlotti beans with olive oil'
    },
    {
        id:24,
        title:'요거트',
        category: 'starters',
        price: 25,
        img: "./images/starters/haydari.jpg",
        desc: 'Yoghurt with garlic'
    },
    {
        id:25,
        title:'치즈 플레이트',
        category: 'starters',
        price: 45,
        img: "./images/starters/peynirtabagi.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:26,
        title:'쌀',
        category: 'starters',
        price: 70,
        img: "./images/starters/pilav.jpg",
        desc: 'A plate of rice'
    },
    {
        id:27,
        title:'수프',
        category: 'starters',
        price: 20,
        img: "./images/starters/corba.jpg",
        desc: 'Desc'
    },
    {
        id:28,
        title:'송어',
        category: 'fish',
        price: 70,
        img: "./images/fish/alabalik.jpg",
        desc: 'Desc'
    },
    {
        id:29,
        title:'도미 물고기',
        category: 'fish',
        price: 70,
        img: "./images/fish/cipura.jpg",
        desc: 'Desc'
    },
    {
        id:28,
        title:'플레인 오믈렛',
        category: 'omlette',
        price: 70,
        img: "./images/omlette/omlet.jpg",
        desc: 'Desc'
    },
    {
        id:29,
        title:'버섯 오믈렛',
        category: 'omlette',
        price: 70,
        img: "./images/omlette/omlet.jpg",
        desc: 'Desc'
    },
    {
        id:30,
        title:'치즈 오믈렛',
        category: 'omlette',
        price: 70,
        img: "./images/omlette/omlet.jpg",
        desc: 'Desc'
    },
    {
        id:31,
        title:'토마토 오믈렛',
        category: 'omlette',
        price: 70,
        img: "./images/omlette/omlet.jpg",
        desc: 'Desc'
    },
    {
        id:32,
        title:'감자 오믈렛',
        category: 'omlette',
        price: 70,
        img: "./images/omlette/omlet.jpg",
        desc: 'Desc'
    },
    {
        id:33,
        title:'혼합 오믈렛',
        category: 'omlette',
        price: 70,
        img: "./images/omlette/omlet.jpg",
        desc: 'Desc'
    },
    {
        id:34,
        title:'토마토 소스 파스타',
        category: 'pasta',
        price: 70,
        img: "./images/pasta/domatessoslumakarna.jpg",
        desc: 'Desc'
    },
    {
        id:35,
        title:'미트 소스 파스타',
        category: 'pasta',
        price: 70,
        img: "./images/pasta/kiymasoslumakarna.jpg",
        desc: 'Desc'
    },
    {
        id:36,
        title:'시즌 샐러드',
        category: 'salad',
        price: 70,
        img: "./images/salad/mevsimsalatasi.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:37,
        title:'그린 샐러드',
        category: 'salad',
        price: 70,
        img: "./images/salad/yesilsalata.jpg",
        desc: 'Desc'
    },
    {
        id:38,
        title:'참치 샐러드',
        category: 'salad',
        price: 70,
        img: "./images/salad/tonbaliklisalata.jpg",
        desc: 'Desc'
    },
    {
        id:39,
        title:'치즈 샐러드',
        category: 'salad',
        price: 70,
        img: "./images/salad/peynirlisalata.jpg",
        desc: 'Desc'
    },
    {
        id:40,
        title:'푸딩',
        category: 'delight',
        price: 70,
        img: "./images/sweets/puding.jpg",
        desc: 'Puding'
    },
    {
        id:41,
        title:'터키 과자',
        category: 'delight',
        price: 70,
        img: "./images/sweets/turktatlilari.jpg",
        desc: 'Baklava'
    },
    {
        id:42,
        title:'아이스크림을 곁들인 멜론',
        category: 'delight',
        price: 70,
        img: "./images/sweets/dondurmalikavun.jpg",
        desc: 'Desc'
    },
    {
        id:43,
        title:'꿀 요구르트',
        category: 'delight',
        price: 70,
        img: "./images/sweets/balliyogurt.jpg",
        desc: 'Desc'
    },
    {
        id:44,
        title:'아이스크림',
        category: 'delight',
        price: 70,
        img: "./images/sweets/dondurma.jpg",
        desc: 'Icecream'
    },
    {
        id:45,
        title:'과일',
        category: 'delight',
        price: 70,
        img: "./images/sweets/sezonmeyve.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:46,
        title:'에페스 드래프트',
        category: 'beers',
        price: 25,
        img: "./images/beers/efesfici.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:47,
        title:'Bomonti',
        category: 'beers',
        price: 50,
        img: "./images/beers/bomontifiltresiz.jpg",   
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:48,
        title:'흑맥주',
        category: 'beers',
        price: 60,
        img: "./images/beers/darkbira.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:49,
        title:'암스테르담',
        category: 'beers',
        price: 80,
        img: "./images/beers/amsterdam.png", 
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:50,
        title:'밀러',
        category: 'beers',
        price: 60,
        img: "./images/beers/miller.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:51,
        title:'벡스',
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
        title:'보드카',
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
        title:'브랜디',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/brendi.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:55,
        title:'코냑',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/kanyak.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:56,
        title:'리큐어',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/likor.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:57,
        title:'앱솔루트',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/absolut.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:58,
        title:'바카디',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/bacardi.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:59,
        title:'마티니',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/martini.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:60,
        title:'캄파리',
        category: 'importdrinks',
        price: 70,
        img: "./images/importdrinks/campari.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:61,
        title:'고든 진',
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
        title:'베일리스',
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
        title:'칼루아',
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
        title:'위스키 소다',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/viski-soda.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:76,
        title:'진 토닉',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/cin-tonik.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:77,
        title:'보드카-콜라',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/votka-kola.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:78,
        title:'진 피즈',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/ginfizz.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:79,
        title:'맥주 콜라',
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
        title:'아이스 티',
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
        title:'주스',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/meyvesuyu.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:94,
        title:'신선한 오렌지 주스',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/portakalsuyu.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:95,
        title:'탄산수',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/madensuyu.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:96,
        title:'큰 물병',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/bsu.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:97,
        title:'작은 물병',
        category: 'colddrinks',
        price: 70,
        img: "./images/softdrinks/su.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:98,
        title:'차',
        category: 'hotdrinks',
        price: 70,
        img: "./images/hot-drinks/cay.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:99,
        title:'터키 커피',
        category: 'hotdrinks',
        price: 82,
        img: "./images/hot-drinks/turkkahvesi.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:100,
        title:'애플 티',
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
        title:'카푸치노',
        category: 'hotdrinks',
        price: 70,
        img: "./images/hot-drinks/cappuccino.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:103,
        title:'핫 초콜로테',
        category: 'hotdrinks',
        price: 70,
        img: "./images/hot-drinks/sicakcikolata.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:104,
        title:'Kayaş 칵테일',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/kayaskokteyl.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:105,
        title:'환영 칵테일',
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
        title:'파인 콜라다',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/pinekolada.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:109,
        title:'테킬라 일출',
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
        title:'마가리타',
        category: 'coctails',
        price: 70,
        img: "./images/coctails/margarita.jpg",
        desc: 'Sebze ve pilav ile birlikte antrikot'
    },
    {
        id:112,
        title:'위스키 사워',
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
        title:'블러디 메리',
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
        title:'아이리쉬 커피',
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
        title:'과일 와인',
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

window.addEventListener('load', getAll)
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