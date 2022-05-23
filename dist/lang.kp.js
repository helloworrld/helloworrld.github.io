const menu = [
    {
        id:1,
        title:'쇠고기',
        category: 'grill',
        price: 110,
        img: "./images/grill-saute/antrikot.jpg"
    },
    {
        id:2,
        title:'양고기 볶음',
        category: 'grill',
        price: 130,
        img: "./images/grill-saute/kuzupirzola.jpg"
    },
    {
        id:3,
        title:'양고기 꼬치',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/kuzusis.jpg"
    },
    {
        id:4,
        title:'아다나 꼬치',
        category: 'grill',
        price: 90,
        img: "./images/grill-saute/adanasis.jpg"
    },
    {
        id:5,
        title:'구운 치킨',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/pilicizgara.jpg"
    },
    {
        id:6,
        title:'치킨 시시',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/pilicsis.jpg"
    },
    {
        id:7,
        title:'미트볼',
        category: 'grill',
        price: 75,
        img: "./images/grill-saute/izgarakofte.jpg"
    },
    {
        id:8,
        title:'혼합 그릴',
        category: 'grill',
        price: 130,
        img: "./images/grill-saute/karisikizgara.jpg"
    },
    {
        id:9,
        title:'구운 야채',
        category: 'grill',
        price: 60,
        img: "./images/grill-saute/sebzeizgara.jpg"
    },
    {
        id:10,
        title:'슈니첼',
        category: 'grill',
        price: 90,
        img: "./images/grill-saute/pilicpane.jpg"
    },
    {
        id:11,
        title:'간 볶음',
        category: 'grill',
        price: 65,
        img: "./images/grill-saute/cigersote.jpg"
    },
    {
        id:12,
        title:'버섯 치킨 소테',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/pilicmantarlisote.jpg"
    },
    {
        id:13,
        title:'버섯 고기 볶음',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/etmantarlisote.jpg"
    },
    {
        id:14,
        title:'버섯볶음',
        category: 'grill',
        price: 70,
        img: "./images/grill-saute/mantarsote.jpg"
    },
    {
        id:15,
        title:'버섯 캐서롤',
        category: 'grill',
        price: 100,
        img: "./images/grill-saute/guvecmantarli.jpg"
    },
    {
        id:16,
        title:'스프링 롤',
        category: 'starters',
        price: 25,
        img: "./images/starters/sigaraboregi.jpg"
    },
    {
        id:17,
        title:'감자 튀김',
        category: 'starters',
        price: 30,
        img: "./images/starters/patateskizartmasi.jpg"
    },
    {
        id:18,
        title:'속을 채운 가지',
        category: 'starters',
        price: 55,
        img: "./images/starters/imambayildi.jpg"
    },
    {
        id:19,
        title:'고기를 넣은 속을 채운 가지',
        category: 'starters',
        price: 70,
        img: "./images/starters/karniyarik.jpg"
    },
    {
        id:21,
        title:'박제 포도 잎',
        category: 'starters',
        price: 35,
        img: "./images/starters/yapraksarma.jpg"
    },
    {
        id:22,
        title:'강낭콩',
        category: 'starters',
        price: 35,
        img: "./images/starters/tazefasulye.jpg"
    },
    {
        id:23,
        title:'신장 콩',
        category: 'starters',
        price: 35,
        img: "./images/starters/barbunyapilaki.jpg"
    },
    {
        id:24,
        title:'요거트',
        category: 'starters',
        price: 25,
        img: "./images/starters/haydari.jpg"
    },
    {
        id:25,
        title:'치즈 플레이트',
        category: 'starters',
        price: 45,
        img: "./images/starters/peynirtabagi.jpg"
    },
    {
        id:26,
        title:'쌀',
        category: 'starters',
        price: 25,
        img: "./images/starters/pilav.jpg"
    },
    {
        id:27,
        title:'수프',
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
        title:'송어',
        category: 'fish',
        price: 70,
        img: "./images/fish/alabalik.jpg"
    },
    {
        id:29,
        title:'도미 물고기',
        category: 'fish',
        price: 85,
        img: "./images/fish/cipura.jpg",
        desc: 'Desc'
    },
    {
        id:28,
        title:'플레인 오믈렛',
        category: 'omlette',
        price: 40,
        img: "./images/omlette/omlet.jpg"
    },
    {
        id:29,
        title:'버섯 오믈렛',
        category: 'omlette',
        price: 45,
        img: "./images/omlette/omlet.jpg"
    },
    {
        id:30,
        title:'치즈 오믈렛',
        category: 'omlette',
        price: 45,
        img: "./images/omlette/omlet.jpg"
    },
    {
        id:31,
        title:'토마토 오믈렛',
        category: 'omlette',
        price: 45,
        img: "./images/omlette/omlet.jpg"
    },
    {
        id:32,
        title:'감자 오믈렛',
        category: 'omlette',
        price: 45,
        img: "./images/omlette/omlet.jpg"
    },
    {
        id:33,
        title:'혼합 오믈렛',
        category: 'omlette',
        price: 45,
        img: "./images/omlette/omlet.jpg"
    },
    {
        id:34,
        title:'토마토 소스 파스타',
        category: 'pasta',
        price: 55,
        img: "./images/pasta/domatessoslumakarna.jpg"
    },
    {
        id:35,
        title:'미트 소스 파스타',
        category: 'pasta',
        price: 55,
        img: "./images/pasta/kiymasoslumakarna.jpg"
    },
    {
        id:36,
        title:'시즌 샐러드',
        category: 'salad',
        price: 25,
        img: "./images/salad/mevsimsalatasi.jpg"
    },
    {
        id:37,
        title:'그린 샐러드',
        category: 'salad',
        price: 25,
        img: "./images/salad/yesilsalata.jpg"
    },
    {
        id:38,
        title:'참치 샐러드',
        category: 'salad',
        price: 45,
        img: "./images/salad/tonbaliklisalata.jpg"
    },
    {
        id:39,
        title:'치즈 샐러드',
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
        title:'푸딩',
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
        title:'아이스크림을 곁들인 멜론',
        category: 'delight',
        price: 70,
        img: "./images/sweets/dondurmalikavun.jpg"
    },
    {
        id:43,
        title:'꿀 요구르트',
        category: 'delight',
        price: 70,
        img: "./images/sweets/balliyogurt.jpg"
    },
    {
        id:44,
        title:'아이스크림',
        category: 'delight',
        price: 30,
        img: "./images/sweets/dondurma.jpg"
    },
    {
        id:45,
        title:'과일',
        category: 'delight',
        price: 35,
        img: "./images/sweets/sezonmeyve.jpg"
    },
    {
        id:46,
        title:'에페스 드래프트',
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
        title:'보몬티',
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
        title:'암스테르담',
        category: 'beers',
        price: 90,
        img: "./images/beers/amsterdam.png"
    },
    {
        id:50,
        title:'밀러',
        category: 'beers',
        price: 75,
        img: "./images/beers/miller.jpg"
    },
    {
        id:51,
        title:'벡스',
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
        title:'보드카',
        category: 'localdrinks',
        price: 50,
        img: "./images/localdrinks/votka.jpg"
    },
    {
        id:53,
        title:'진',
        category: 'localdrinks',
        price: 50,
        img: "./images/localdrinks/cin.jpg"
    },
    {
        id:54,
        title:'브랜디',
        category: 'localdrinks',
        price: 50,
        img: "./images/localdrinks/brendi.jpg"
    },
    {
        id:55,
        title:'코냑',
        category: 'localdrinks',
        price: 50,
        img: "./images/localdrinks/kanyak.jpg"
    },
    {
        id:56,
        title:'리큐어',
        category: 'localdrinks',
        price: 50,
        img: "./images/localdrinks/likor.jpg"
    },
    {
        id:57,
        title:'앱솔루트',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/absolut.jpg"
    },
    {
        id:58,
        title:'바카디',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/bacardi.jpg"
    },
    {
        id:59,
        title:'마티니',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/martini.jpg"
    },
    {
        id:60,
        title:'캄파리',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/campari.jpg"
    },
    {
        id:61,
        title:'고든 진',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/gordoncin.png"
    },
    {
        id:62,
        title:'말리부',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/malibu.jpg"
    },
    {
        id:63,
        title:'베일리스',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/baileys.jpg"
    },
    {
        id:64,
        title:'궁수 리큐어',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/archers.jpg"
    },
    {
        id:65,
        title:'칼루아',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/kahlua.jpg"
    },
    {
        id:66,
        title:'사파리 리큐어',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/safari.jpg"
    },
    {
        id:67,
        title:'조니 워커',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/johnniewalker.jpg"
    },
    {
        id:68,
        title:'잭 다니엘',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/jackdaniels.jpg"
    },
    {
        id:69,
        title:'제이앤비',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/jb.jpg"
    },
    {
        id:70,
        title:'발렌타인',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/ballentines.jpg"
    },
    {
        id:71,
        title:'시바스 리갈',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/chivasregal.jpg"
    },
    {
        id:72,
        title:'테킬라',
        category: 'importdrinks',
        price: 90,
        img: "./images/importdrinks/tequila.jpg"
    },
    {
        id:73,
        title:'바카디콜라',
        category: 'mixed',
        price: 90,
        img: "./images/mixes/bacardi-kola.jpg"
    },
    {
        id:74,
        title:'캄파리-오렌지',
        category: 'mixed',
        price: 90,
        img: "./images/mixes/campari-orange.jpg"
    },
    {
        id:75,
        title:'위스키 소다',
        category: 'mixed',
        price: 90,
        img: "./images/mixes/viski-soda.jpg"
    },
    {
        id:76,
        title:'진 토닉',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/cin-tonik.jpg"
    },
    {
        id:77,
        title:'보드카-콜라',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/votka-kola.jpg"
    },
    {
        id:78,
        title:'진 피즈',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/ginfizz.jpg"
    },
    {
        id:79,
        title:'맥주 콜라',
        category: 'mixed',
        price: 70,
        img: "./images/mixes/bira-kola.jpg"
    },
    {
        id:80,
        title:'파묵칼레 센포니 드라이/트로켄',
        category: 'localdrinks',
        price: 50,
        img: "./images/localdrinks/semidryhalbtrocken.jpg"
    },
    {
        id:81,
        title:'파묵칼레 세미드라이/할브트로켄',
        category: 'localdrinks',
        price: 55,
        img: "./images/localdrinks/semidryhalbtrocken.jpg"
    },
    {
        id:82,
        title:'파묵칼레 스위트/서브',
        category: 'localdrinks',
        price: 60,
        img: "./images/localdrinks/semidryhalbtrocken.jpg"
    },
    {
        id:83,
        title:'파묵칼레 안포라 트리오',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/semidryhalbtrocken.jpg"
    },
    {
        id:84,
        title:'파묵칼레 카베르네 소비뇽',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/semidryhalbtrocken.jpg"
    },
    {
        id:85,
        title:'파묵칼레 피노 샤도네이',
        category: 'localdrinks',
        price: 80,
        img: "./images/localdrinks/pinotchardonnay.jpg"
    },
    {
        id:86,
        title:'Pamukkale Kalecik Karası',
        category: 'localdrinks',
        price: 80,
        img: "./images/localdrinks/w.jpg"
    },
    {
        id:86,
        title:'파묵칼레 쉬라즈',
        category: 'localdrinks',
        price: 80,
        img: "./images/localdrinks/semidryhalbtrocken.jpg"
    },
    {
        id:87,
        title:'코카콜라',
        category: 'colddrinks',
        price: 15,
        img: "./images/softdrinks/kola.png"
    },
    {
        id:88,
        title:'환타',
        category: 'colddrinks',
        price: 15,
        img: "./images/softdrinks/fanta.jpg"
    },
    {
        id:89,
        title:'스프라이트',
        category: 'colddrinks',
        price: 15,
        img: "./images/softdrinks/sprite.png"
    },
    {
        id:90,
        title:'아이스 티',
        category: 'colddrinks',
        price: 15,
        img: "./images/softdrinks/icetea.jpg"
    },
    {
        id:91,
        title:'레드 불',
        category: 'colddrinks',
        price: 30,
        img: "./images/softdrinks/redbull.jpg"
    },
    {
        id:92,
        title:'슈베페스',
        category: 'colddrinks',
        price: 25,
        img: "./images/softdrinks/schweppes.jpg"
    },
    {
        id:93,
        title:'주스',
        category: 'colddrinks',
        price: 25,
        img: "./images/softdrinks/meyvesuyu.jpg"
    },
    {
        id:94,
        title:'신선한 오렌지 주스',
        category: 'colddrinks',
        price: 35,
        img: "./images/softdrinks/portakalsuyu.jpg"
    },
    {
        id:95,
        title:'탄산수',
        category: 'colddrinks',
        price: 15,
        img: "./images/softdrinks/madensuyu.jpg"
    },
    {
        id:96,
        title:'큰 물병',
        category: 'colddrinks',
        price: 15,
        img: "./images/softdrinks/bsu.jpg"
    },
    {
        id:98,
        title:'차',
        category: 'hotdrinks',
        price: 10,
        img: "./images/hot-drinks/cay.jpg"
    },
    {
        id:99,
        title:'터키 커피',
        category: 'hotdrinks',
        price: 25,
        img: "./images/hot-drinks/turkkahvesi.jpg"
    },
    {
        id:100,
        title:'애플 티',
        category: 'hotdrinks',
        price: 15,
        img: "./images/hot-drinks/elmacayi.jpg"
    },
    {
        id:101,
        title:'네스카페',
        category: 'hotdrinks',
        price: 25,
        img: "./images/hot-drinks/nescafe.jpg"
    },
    {
        id:102,
        title:'카푸치노',
        category: 'hotdrinks',
        price: 40,
        img: "./images/hot-drinks/cappuccino.jpg"
    },
    {
        id:103,
        title:'핫 초콜로테',
        category: 'hotdrinks',
        price: 40,
        img: "./images/hot-drinks/sicakcikolata.jpg"
    },
    {
        id:104,
        title:'Kayaş 칵테일',
        category: 'coctails',
        price: 120,
        img: "./images/coctails/kayaskokteyl.jpg"
    },
    {
        id:105,
        title:'환영 칵테일',
        category: 'coctails',
        price: 120,
        img: "./images/coctails/hosgeldinkokteyl.jpg"
    },
    {
        id:106,
        title:'비-오십이',
        category: 'coctails',
        price: 110,
        img: "./images/coctails/b52.jpg"
    },
    {
        id:107,
        title:'해변에서의 섹스',
        category: 'coctails',
        price: 120,
        img: "./images/coctails/sexonthebeach.jpg"
    },
    {
        id:108,
        title:'파인 콜라다',
        category: 'coctails',
        price: 120,
        img: "./images/coctails/pinekolada.jpg"
    },
    {
        id:109,
        title:'테킬라 일출',
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
        title:'마가리타',
        category: 'coctails',
        price: 110,
        img: "./images/coctails/margarita.jpg"
    },
    {
        id:112,
        title:'위스키 사워',
        category: 'coctails',
        price: 120,
        img: "./images/coctails/whiskeysour.jpg"
    },
    {
        id:113,
        title:'라 봄바',
        category: 'coctails',
        price: 140,
        img: "./images/coctails/labomba.jpg"
    },
    {
        id:114,
        title:'판타스틱',
        category: 'coctails',
        price: 140,
        img: "./images/coctails/fantastic.jpg"
    },
    {
        id:115,
        title:'블러디 메리',
        category: 'coctails',
        price: 120,
        img: "./images/coctails/bloodymary.jpg"
    },
    {
        id:116,
        title:'화이트 파라다이스',
        category: 'coctails',
        price: 140,
        img: "./images/coctails/whiteparadise.jpg"
    },
    {
        id:117,
        title:'아이리쉬 커피',
        category: 'coctails',
        price: 120,
        img: "./images/coctails/irishcoffee.jpg"
    },
    {
        id:118,
        title:'예니 라키 20cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/yeniraki.jpg"
    },
    {
        id:119,
        title:'예니 라키 35cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/yeniraki.jpg"
    },
    {
        id:120,
        title:'예니 라키 50cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/yeniraki.jpg"
    },
    {
        id:121,
        title:'예니 라키 70cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/yeniraki.jpg"
    },
    {
        id:122,
        title:'예니 라키 100cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/yeniraki.jpg"
    },
    {
        id:123,
        title:'테키르다그 라키 35cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/tekirdag.jpg"
    },
    {
        id:124,
        title:'테키르다그 라키 70cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/tekirdag.jpg"
    },
    {
        id:125,
        title:'테키르다그 라키 100cl',
        category: 'localdrinks',
        price: 70,
        img: "./images/localdrinks/tekirdag.jpg"
    },
    {
        id:126,
        title:'파묵칼레 골드 샴페인 75cl',
        category: 'localdrinks',
        price: 500,
        img: "./images/localdrinks/goldchampagne.jpg"
    },
    {
        id:127,
        title:'과일 와인',
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