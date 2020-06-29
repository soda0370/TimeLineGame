
//サンプルデータ
//実際はdatabaseからdata取得する
export const jdata = [
    {no:1,age:'266',name:'卑弥呼の後継者となった宗女の壹与（いよ）は晋の都・洛陽に使者を派遣する。'},
    {no:2,age:'5世紀',name:'倭の五王（讃・珍・済・興・武）があいついで中国の南朝（宋）に朝貢する（『宋書』倭国伝）。'},
    {no:3,age:'589',name:'隋の文帝が南朝の陳を滅ぼし南北朝を統一する。'},
    {no:4,age:'604',name:'中央集権化を目指して憲法十七条を制定する。'},
    {no:5,age:'630',name:'遣唐使の派遣が始まる（～894年）。'},
    {no:6,age:'663',name:'唐・新羅軍に滅ぼされた百済のため救援軍を送るが、白村江（はくそんこう）の戦いで唐に大敗する。'},
    {no:7,age:'671',name:'天智天皇が近江の大津宮で死去する｡'},
    {no:8,age:'689',name:'持統天皇が飛鳥浄御原令（あすかきよみはらりょう）を施行する。'},
    {no:9,age:'710',name:'元明天皇が唐の長安をモデルとした平城（へいぜい）京に遷都する。'},
    {no:10,age:'720',name:'舎人親王が中心となり『日本書紀』が編集され、元正天皇に奏上される。'},
    {no:11,age:'729',name:'藤原四子が長屋王に謀反の疑いをかけて自殺させる（長屋王の変）。'},
    {no:12,age:'741',name:'国分寺建立の詔が出され、国ごとに国分寺・国分尼寺の建立が命じられる。'},
    {no:13,age:'754',name:'唐から鑑真が来日し、戒律を伝える。'},
    {no:14,age:'765',name:'法相宗の僧の道鏡が太政大臣禅師につく。'},
    {no:15,age:'784',name:'桓武天皇が長岡京に遷都する。'},
    {no:16,age:'805',name:'最澄が唐より帰国し、延暦寺（比叡山）を拠点に天台宗をひらく｡'},
    {no:17,age:'816',name:'空海が唐より帰国し、金剛峰寺（高野山）や教王護国寺（京都）を拠点に、真言宗を伝える｡'},
    {no:18,age:'838',name:'天台僧円仁が唐に入る。'},
    {no:19,age:'888',name:'宇多天皇が前年の橘広相失脚の非を認め、藤原基経を関白とする（阿衡の紛議）。'},
    {no:20,age:'903',name:'菅原道真が死去する。'},
    {no:21,age:'939',name:'藤原純友が瀬戸内海の海賊の頭となって反乱をおこす（藤原純友の乱）。'},
    {no:22,age:'995',name:'藤原道長が内覧となる。'},
    {no:23,age:'1020',name:'藤原道長が法成寺を建立する。'},
    {no:24,age:'1083',name:'清原氏の内紛に介入した源義家が、藤原清衡を助けて清原氏を滅ぼす（後三年の役）。'},
    {no:25,age:'1156',name:'皇位継承を巡り、崇徳上皇と後白河天皇が対立し、後白河天皇側が勝利する（保元の乱）。'},
    {no:26,age:'1177',name:'平氏打倒計画が発覚する（鹿ヶ谷の陰謀）。'},
    {no:27,age:'1183',name:'砺波山（倶利伽羅峠）の戦いで平氏を破った源義仲が入京する。'},
    {no:28,age:'1189',name:'源頼朝が奥州藤原氏を滅ぼし、出羽・陸奥を支配下におく。'},
    {no:29,age:'1199',name:'十三人の合議制が始まり、将軍の権限が制限される。'},
    {no:30,age:'1212',name:'鴨長明が『方丈記』を著す。'},
    {no:31,age:'1221',name:'朝廷監視などのために、京都に六波羅探題が設置される。'},
    {no:32,age:'1232',name:'３代執権北条泰時が御成敗式目を制定する。'},
    {no:33,age:'1251',name:'北条時頼の帰依を受けた蘭渓道隆が鎌倉に建長寺をひらく。'},
    {no:34,age:'1268',name:'８代執権北条時宗がフビライの使いを拒否する。'},
    {no:35,age:'1276',name:'北条実時が私設図書館である金沢文庫を建てる。'},
    {no:36,age:'1293',name:'鎮西探題が設置される。'},
    {no:37,age:'1322',name:'虎関師錬（こかんしれん）が『元亨釈書』を著す。'},
    {no:38,age:'1332',name:'後醍醐天皇が隠岐に流される｡'},
    {no:39,age:'1336',name:'足利尊氏が建武式目を制定する。'},
    {no:40,age:'1341',name:'五山十刹の制が定められる。'},
    {no:41,age:'1354',name:'近江に土一揆が起こる。'},
    {no:42,age:'1371',name:'『太平記』が著される。'},
    {no:43,age:'1394',name:'足利義満が将軍職を足利義持に譲り、太政大臣となる。'},
    {no:44,age:'1409',name:'如拙が『瓢鮎図』を描く。'},
    {no:45,age:'1429',name:'播磨国で土一揆が起こる。'},
    {no:46,age:'1441',name:'「代始の徳政」を要求した嘉吉の徳政一揆が起こる。'},
    {no:47,age:'1457',name:'アイヌ人が大酋長コシャマインを中心に蜂起し和人と戦う。（コシャマインの戦い）'},
    {no:48,age:'1477',name:'応仁の乱が終わるが、将軍の権威は地に落ち、下克上の風潮が強まる。'},
    {no:49,age:'1491',name:'戦国時代始まる。'},
    {no:50,age:'1510',name:'朝鮮の日本人居留民が暴動を起こす（三浦の乱）。'},
    {no:51,age:'1526',name:'今川氏が分国法（家法）『今川仮名目録』を定める。'},
    {no:52,age:'1543',name:'ポルトガル人を乗せた中国人倭寇の船が種子島に漂着し、鉄砲が伝えられる。'},
    {no:53,age:'1555',name:'陶晴賢が毛利元就に滅ぼされる（厳島の戦い）。'},
    {no:54,age:'1567',name:'三好長慶が家臣の松永久秀に滅ぼされる。'},
    {no:55,age:'1573',name:'織田信長が足利義昭を追放し、室町幕府は滅亡する。'},
    {no:56,age:'1580',name:'織田信長が顕如（光佐）の率いる石山本願寺を屈服させ、畿内を平定する。'},
    {no:57,age:'1583',name:'豊臣秀吉が柴田勝家を破る（賎ヶ嶽の戦い）。'},
    {no:58,age:'1586',name:'豊臣秀吉が太政大臣となり、後陽成天皇から豊臣の姓を与えられる。'},
    {no:59,age:'1587',name:'天正通宝を鋳造する。'},
    {no:60,age:'1590',name:'伊達政宗が秀吉に服属し、秀吉が事実上全国を統一する。'},
    {no:61,age:'1594',name:'豊臣秀吉が伏見（桃山）城を築く。'},
    {no:62,age:'1599',name:'前田利長がその母を家康に人質として出す（諸大名の証人のはじめ）。'},
    {no:63,age:'1604',name:'ポルトガル人の独占的利益を阻むため、糸割符制度が作られる。'},
    {no:64,age:'1609',name:'対馬藩が朝鮮と己酉（慶長）約条を結ぶ。'},
    {no:65,age:'1613',name:'伊達政宗が家臣の支倉常長をイスパニアに派遣する。'},
    {no:66,age:'1615',name:'諸大名の行動を規制する武家諸法度（元和令）が出される。'},
    {no:67,age:'1617',name:'狩野探幽が幕府の御用絵師となる。'},
    {no:68,age:'1623',name:'徳川家光が３代将軍となる。'},
    {no:69,age:'1627',name:'吉田光由が『塵劫記』を著す。'},
    {no:70,age:'1633',name:'奉書船以外の海外渡航と日本人の帰国が禁止される。'},
    {no:71,age:'1637',name:'天草四郎時貞が島原の乱を起こす。'},
    {no:72,age:'1642',name:'有田の陶工酒井田柿右衛門が赤絵を完成させる。'},
    {no:73,age:'1649',name:'農民の日常生活を規制した慶安の触書が発令される。'},
    {no:74,age:'1657',name:'徳川光圀が『大日本史』編集に着手。'},
    {no:75,age:'1665',name:'諸大名の証人制（人質制）廃止。'},
    {no:76,age:'1669',name:'アイヌがシャクシャインの戦いで松前氏に敗れる。'},
    {no:77,age:'1671',name:'菱川師宣が浮世絵を始める。'},
    {no:78,age:'1674',name:'関孝和が『発微算法』を著し、和算を大成させる。'},
    {no:79,age:'1682',name:'木下順庵が幕府儒者に登用される。'},
    {no:80,age:'1688',name:'井原西鶴が『日本永代蔵』を著す。'},
    {no:81,age:'1690',name:'孔子廟を湯島に移転する。'},
    {no:82,age:'1698',name:'宮崎友禅が友禅染をはじめ、流行する。'},
    {no:83,age:'1708',name:'貝原益軒が『大和本草』を著す。'},
    {no:84,age:'1711',name:'新井白石が朝鮮通信使の待遇を簡素化する。'},
    {no:85,age:'1714',name:'新井白石が正徳金銀を鋳造し、質量とも慶長金銀に戻す。'},
    {no:86,age:'1717',name:'大岡忠相が町奉行に就任する｡'},
    {no:87,age:'1721',name:'庶民の意見を聞くため、目安箱を評定所の前に置く。'},
    {no:88,age:'1727',name:'青木昆陽の意見を取り入れ、甘藷の栽培が始まる。'},
    {no:89,age:'1742',name:'公事方御定書を制定し、裁判の基準を明確化する｡'},
    {no:90,age:'1755',name:'安藤昌益が『自然真営道』を完成させる。'},
    {no:91,age:'1765',name:'鈴木春信によって多色刷りの錦絵が創始される。（代表作『弾琴美人』『ささやき』）'},
    {no:92,age:'1768',name:'上田秋成が『雨月物語』を著す。'},
    {no:93,age:'1774',name:'前野良沢・杉田玄白らが日本最初の翻訳解剖書である『解体新書』を刊行する。'},
    {no:94,age:'1782',name:'印旛沼の干拓が試みられる。'},
    {no:95,age:'1786',name:'田沼意次が罷免される。'},
    {no:96,age:'1787',name:'全国で天明の打ちこわしが起こる。'},
    {no:97,age:'1789',name:'大槻玄沢が芝蘭堂を開塾する。'},
    {no:98,age:'1792',name:'ロシアの使節ラックスマンが根室に来航する。'},
    {no:99,age:'1797',name:'聖堂学問所が昌平坂学問所と改称され、幕府直属の学問所となる。'},
    {no:100,age:'1802',name:'十返舎一九が『東海道中膝栗毛』を著す｡'},
    {no:101,age:'1806',name:'ロシア船来着の取扱い法を指令する（文化の撫血令）。'},
    {no:102,age:'1811',name:'ロシア人ゴローウニンが国後島で捕えられる（ゴローウニン事件）。'},
    {no:103,age:'1818',name:'英・ゴルドンが浦賀に来航し通商を要求。'},
    {no:104,age:'1824',name:'シーボルトが長崎に鳴滝塾を開く。'},
    {no:105,age:'1828',name:'高橋景保がシーボルトに日本地図を密かに贈り、逮捕される（シーボルト事件）。'},
    {no:106,age:'1832',name:'為永春水が『春色梅児誉美』を著す。'},
    {no:107,age:'1837',name:'越後柏崎で国学者の生田万が乱を起こす。'},
    {no:108,age:'1838',name:'二宮尊徳が小田原藩の財政建て直しに着手する。'},
    {no:109,age:'1841',name:'水野忠邦が、物価の下落をはかるため、株仲間の解散を命じる。'},
    {no:110,age:'1846',name:'アメリカ東インド艦隊司令長官ビッドルが浦賀に来航し、開国を要求する。'},
    {no:111,age:'1856',name:'ハリスが総領事として下田に着任する。'},
    {no:112,age:'1858',name:'福沢諭吉が江戸鉄砲洲に私塾を開く（慶応義塾の初め）。'},
    {no:113,age:'1860',name:'水戸脱藩の志士により、井伊直弼が暗殺される（桜田門外の変）。'},
    {no:114,age:'1862',name:'老中安藤信正が失脚する（坂下門外の変）。'},
    {no:115,age:'1863',name:'生麦事件の報復として、イギリスが鹿児島を砲撃する（薩英戦争）。'},
    {no:116,age:'1864',name:'新撰組が尊攘志士を襲う（池田屋事件）。'},
    {no:117,age:'1865',name:'列国が条約勅許を得る。'},
    {no:118,age:'1866',name:'徳川家茂の死で、第二次長州征討が中止される。'},
    {no:119,age:'1867',name:'山内豊信の説得により、徳川慶喜が大政奉還をなす。'},
    {no:120,age:'1868',name:'神道の国教化を目指し、神仏分離令を出す。'},
    {no:121,age:'1869',name:'東京に都を遷す。'},
    {no:122,age:'1870',name:'大教宣布の詔が出され、神道の国教化が実行される。'},
    {no:123,age:'1871',name:'中央政権体制をつくるため、廃藩置県が断行される。'},
    {no:124,age:'1871',name:'田畑勝手作りが許可される。'},
    {no:125,age:'1872',name:'官営の富岡製糸場が操業を開始し、フランス人技師が技術教育を行う。'},
    {no:126,age:'1872',name:'最初の国立銀行である、第一国立銀行が設立される。'},
    {no:127,age:'1873',name:'森有礼・福沢諭吉らが明六社を創立する。'},
    {no:128,age:'1874',name:'琉球漁民殺害事件をきっかけとして、日本政府が台湾出兵（征台の役）を行う。'},
    {no:129,age:'1875',name:'ロシアとの間で樺太・千島交換条約を結び、樺太をロシア領、千島を日本領とする。'},
    {no:130,age:'1876',name:'日朝修好条規が締結される。'},
    {no:131,age:'1877',name:'内務省主催の内国勧業博覧会が開かれる。'},
    {no:132,age:'1879',name:'琉球藩を廃し、沖縄県とする（琉球処分）。'},
    {no:133,age:'1880',name:'工場払い下げ概則が制定される。'},
    {no:134,age:'1882',name:'参議伊藤博文がヨーロッパに派遣され、憲法調査にあたる。'},
    {no:135,age:'1882',name:'県令の三島通庸の圧制に自由党の県会議長河野広中が反抗する（福島事件）。'},
    {no:136,age:'1884',name:'秩父地方の農民が郡役所・高利貸しなどを襲撃する（秩父事件）。'},
    {no:137,age:'1885',name:'坪内逍遥が『小説神髄』を著す。'},
    {no:138,age:'1886',name:'初代文部大臣森有礼が国家主義的な学校令を公布する。'},
    {no:139,age:'1887',name:'二葉亭四迷が『浮雲』を著す。'},
    {no:140,age:'1888',name:'三宅雪嶺らが政教社を結成し、雑誌『日本人』を発行する。'},
    {no:141,age:'1890',name:'徳富蘇峰が『国民新聞』を発刊する。'},
    {no:142,age:'1890',name:'北里柴三郎が破傷風血清療法を発見する。'},
    {no:143,age:'1892',name:'森鴎外が『即興詩人』を著す。'},
    {no:144,age:'1895',name:'樋口一葉が『たけくらべ』を著す｡'},
    {no:145,age:'1897',name:'高野房太郎・片山潜らにより労働組合期成会が結成される。'},
    {no:146,age:'1898',name:'正岡子規が『歌よみに与ふる書』を著す。'},
    {no:147,age:'1899',name:'雑誌『中央公論』が創刊される。'},
    {no:148,age:'1900',name:'雑誌『明星』が創刊される。'},
    {no:149,age:'1901',name:'官営の八幡製鉄所が操業を開始する。'},
    {no:150,age:'1902',name:'桂太郎内閣が、ロシアとの協調路線を変更し、日英同盟を結ぶ。'},
    {no:151,age:'1904',name:'与謝野晶子が「君死にたまふことなかれ」という反戦詩を発表する。'},
    {no:152,age:'1905',name:'アメリカ大統領セオドア=ルーズヴェルトの仲介で、ポーツマス条約が結ばれる。'},
    {no:153,age:'1906',name:'島崎藤村が『破戒』を著す。'},
    {no:154,age:'1907',name:'第一次日露協約を締結する。'},
    {no:155,age:'1909',name:'伊藤博文がハルビンで安重根に暗殺される。'},
    {no:156,age:'1911',name:'西田幾多郎が『善の研究』を著す。'},
    {no:157,age:'1912',name:'明治天皇が死去し、大正天皇が即位する。'},
    {no:158,age:'1913',name:'桂内閣後、第一次山本権兵衛内閣が成立する。'},
    {no:159,age:'1914',name:'日本が山東半島の青島を占領する。'},
    {no:160,age:'1915',name:'輸出超過となり、大戦景気となる。'},
    {no:161,age:'1917',name:'金の輸出が禁止される。'},
    {no:162,age:'1918',name:'米騒動で寺内内閣が退陣し、原敬内閣ができる。'},
    {no:163,age:'1919',name:'第一次世界大戦の講和会議が開かれ、日本全権として西園寺公望が派遣される（パリ講和会議）。'},
    {no:164,age:'1920',name:'第14回総選挙で立憲政友会が圧勝する。'},
    {no:165,age:'1921',name:'太平洋における勢力の現状維持を確認する四ヵ国条約が締結され、日英同盟が破棄される。'},
    {no:166,age:'1922',name:'日本共産党が非合法政党として結成される。'},
    {no:167,age:'1924',name:'憲政会・立憲政友会・革新倶楽部が第二次護憲運動を展開する。'},
    {no:168,age:'1925',name:'普通選挙法が制定され、満25歳以上の全男子に選挙権が与えられる。'},
    {no:169,age:'1927',name:'田中義一内閣が3週間の支払猶予令（モラトリアム）を実施し、金融恐慌を収束させる。'},
    {no:170,age:'1928',name:'張作霖が、関東軍の陰謀で爆殺される（張作霖爆殺事件）。'},
    {no:171,age:'1929',name:'小林多喜二が『蟹工船』を著す。'},
    {no:172,age:'1931',name:'関東軍が柳条湖で南満州鉄道を爆破した柳条湖事件が発端となり、満州事変が起こる。'},
    {no:173,age:'1932',name:'日本政府が満州国を承認し、日満議定書が調印される。'},
    {no:174,age:'1936',name:'陸軍皇道派の青年将校らが昭和維新を唱え、高橋是清蔵相らを殺害する（二・二六事件）。'},
    {no:175,age:'1937',name:'中国国民政府の首都南京を占領し、中国人を多数虐殺する（南京事件）。'},
    {no:176,age:'1939',name:'第二次世界大戦が勃発する。'},
    {no:177,age:'1940',name:'大日本産業報国会が成立する。'},
    {no:178,age:'1942',name:'ミッドウェー海戦で日本軍が敗北する。'},
    {no:179,age:'1945',name:'東京大空襲がなされる。'},
    {no:180,age:'1945',name:'政治犯が釈放され、治安維持法が廃止となる。'},
    {no:181,age:'1946',name:'寄生地主制の解体を目指し、第一次農地改革が実施される。'},
    {no:182,age:'1946',name:'極東国際軍事裁判が開廷される。'},
    {no:183,age:'1947',name:'労働基準法が制定される｡'},
    {no:184,age:'1947',name:'独占禁止法が制定され、カルテルや企業間の合併が規制される。'},
    {no:185,age:'1949',name:'シャウプが派遣され、所得税中心主義などの税制改革が行われる（シャウプ勧告）。'},
    {no:186,age:'1950',name:'朝鮮戦争の影響で、特需景気が起こる。'},
    {no:187,age:'1952',name:'日華平和条約が結ばれる。'},
    {no:188,age:'1954',name:'日米相互防衛援助協定（ＭＳＡ協定）が締結される。'},
    {no:189,age:'1955',name:'神武景気が始まる（～1957年）。'},
    {no:190,age:'1960',name:'岸信介内閣が、日米相互協力及び安全保障条約（新安保条約）の批准を強行採決する。'},
    {no:191,age:'1964',name:'東京オリンピックが開催される｡'},
    {no:192,age:'1968',name:'小笠原諸島の返還が実現する。'},
    {no:193,age:'1972',name:'日中共同声明が発表され、中華人民共和国との国交が正常化する。'},
    {no:194,age:'1976',name:'ロッキード疑獄が問題化する。'},
    {no:195,age:'1985',name:'電電公社が民営化され、ＮＴＴが発足する。'},
    {no:196,age:'1988',name:'リクルート事件が問題化する。'},
    {no:197,age:'1994',name:'大江健三郎がノーベル文学賞を受賞する。'},
    {no:198,age:'2002',name:'田中耕一がノーベル化学賞を受賞する。'}  
  ];
  
  export const wdata = [
    {no:1, age:'B.C.1600頃', name:'現在確認できる中国最古の王朝である殷王朝が成立'},
    {no:2, age:'B.C.770', name:'周が洛邑に遷都し、以後東周（～256）、春秋（～403）となる'},
    {no:3, age:'B.C.594', name:'アテネの政治家ソロンが改革を行う'},
    {no:4, age:'B.C.522', name:'アケメネス朝ペルシアのダレイオス（ダリウス）１世が即位する'},
    {no:5, age:'B.C.480', name:'サラミスの海戦でテミストクレス率いるアテネ海軍がペルシア海軍を破る'},
    {no:6, age:'B.C.438', name:'ギリシア古典文化の黄金期であり、パルテノン神殿が完成する'},
    {no:7, age:'B.C.334', name:'マケドニアアレクサンドロス大王が全ギリシア軍を率いて東方遠征を開始する'},
    {no:8, age:'B.C.304', name:'エジプトにプトレマイオス朝が成立する'},
    {no:9, age:'B.C.255頃', name:'アム川流域でセレウコス朝から独立したバクトリアが成立する'},
    {no:10, age:'B.C.209', name:'秦で、中国最初の農民反乱である陳勝・呉広の乱が起きる'},
    {no:11, age:'B.C.139', name:'前漢の張騫が大月氏に派遣される'},
    {no:12, age:'B.C.115', name:'前漢の武帝が均輸法を発布する'},
    {no:13, age:'B.C.60', name:'ポンペイウス・カエサル・クラッススによる第１回三頭政治の成立'},
    {no:14, age:'B.C.43', name:'アントニウス・オクタヴィアヌス・レピドゥスによる第２回三頭政治の成立'},
    {no:15, age:'18', name:'王莽の悪政により赤眉の乱が起きる（～27）'},
    {no:16, age:'79', name:'ヴェスヴィウス火山が爆発し、ポンペイが埋没する'},
    {no:17, age:'106', name:'ローマのトラヤヌス帝がダキア（現在のルーマニア）を征服する'},
    {no:18, age:'212', name:'ローマ皇帝カラカラ帝が、ローマ帝国領内のすべての自由民にローマ市民権を与える'},
    {no:19, age:'260', name:'ローマのヴァレリアヌス帝がエデッサの戦いでササン朝のシャープール１世に破れ、捕虜となる'},
    {no:20, age:'313', name:'ローマのコンスタンティヌス帝がミラノ勅令によってキリスト教を公認'},
    {no:21, age:'376', name:'チャンドラグプタ２世が即位し、グプタ朝が最盛期に入る'},
    {no:22, age:'410', name:'西ゴートの王アラリックがローマを一時占領して略奪を行う'},
    {no:23, age:'439', name:'北魏の太武帝が華北を統一し、南北朝時代が始まる'},
    {no:24, age:'481', name:'フランク王国が成立し、クローヴィスが王となる'},
    {no:25, age:'511', name:'フランク王国の王クローヴィスが死亡し、王国を４人の子供に分割する'},
    {no:26, age:'534', name:'東ローマ帝国のユスティニアヌス帝がヴァンダル王国を征服する'},
    {no:27, age:'550', name:'東魏に代わって北斉（～577)が成立する'},
    {no:28, age:'562', name:'新羅の真興王によって仁那が滅ぼされる'},
    {no:29, age:'583', name:'隋の楊堅が都を大興城（長安）に移す'},
    {no:30, age:'598', name:'隋の楊堅が九品中正法を廃止して、科挙制を始める'},
    {no:31, age:'622', name:'ムハンマドが大商人の迫害を受け、メッカからメディナへ逃れる（ヒジュラ）'},
    {no:32, age:'632', name:'ムハンマドが死亡し、アブー＝バクルが初代カリフとなり、正統カリフ時代が始まる'},
    {no:33, age:'661', name:'ムアーウィアがカリフとなり、ウマイヤ朝を創始する（～750）。都はダマスクス'},
    {no:34, age:'676', name:'新羅が朝鮮を統一する'},
    {no:35, age:'714', name:'カール＝マルテルがフランク王国の宮宰になる'},
    {no:36, age:'744', name:'ウイグルが東突厥を滅ぼして王国を建てる'},
    {no:37, age:'755', name:'唐の節度使安禄山とその部下である史思明が中心となり安史の乱を起こす'},
    {no:38, age:'786', name:'アッバース朝第５代カリフのハールーン＝アッラシードが即位する'},
    {no:39, age:'840', name:'キルギスがウイグルを滅ぼす'},
    {no:40, age:'869', name:'アッバース朝のもとで、黒人反乱であるザンジュの乱が起こる'},
    {no:41, age:'882', name:'ノヴゴロド公国のオレグがキエフ公国を建国'},
    {no:42, age:'916', name:'契丹の耶律阿保機が東モンゴルに国を建てる'},
    {no:43, age:'936', name:'契丹の耶律阿保機が後晋から燕雲十六州を譲り受ける'},
    {no:44, age:'947', name:'後漢が成立する。都は開封'},
    {no:45, age:'962', name:'アルプテギンがアフガニスタンにトルコ系イスラム王朝のガズナ朝を建てる'},
    {no:46, age:'987', name:'西フランク王国のカロリング朝が断絶し、パリ伯ユーグ＝カペーが王となってカペー朝が成立する'},
    {no:47, age:'1016', name:'デンマーク王クヌート（カヌート）がデーン朝を開く（イングランドを支配）'},
    {no:48, age:'1042', name:'セルビア大公がビザンツ帝国から独立する'},
    {no:49, age:'1067', name:'セルジューク朝の宰相ニザーム＝アルムルクがバグダード大学を建設'},
    {no:50, age:'1077', name:'アム川流域にセルジューク朝より独立したトルコ系イスラム王朝のホラズム朝が成立する'},
    {no:51, age:'1115', name:'女真族の完顔阿骨打が中国東北部に金を建国する'},
    {no:52, age:'1127', name:'靖康の変を逃れた高宗が南宋を建国する。都は臨安（杭州）'},
    {no:53, age:'1143', name:'カスティリャから独立してポルトガル王国が成立する'},
    {no:54, age:'1176', name:'サラディンがエジプトのイスラム教スンナ（スンニー）派王朝のアイユーブ朝を建てる'},
    {no:55, age:'1190', name:'アッコンでドイツ騎士団が設立される'},
    {no:56, age:'1204', name:'フランス・カペー朝のフィリップ２世がイギリス・プランタジネット朝のジョン王からノルマンディを奪回する'},
    {no:57, age:'1215', name:'イギリスのジョン王がマグナ＝カルタを承認する'},
    {no:58, age:'1225', name:'ベトナムで李朝が滅び、陳朝が成立する'},
    {no:59, age:'1229', name:'モンゴル帝国でオゴタイ＝ハンが即位する'},
    {no:60, age:'1241', name:'ワールシュタット（リーグニッツ）の戦いでモンゴル軍がドイツ・ポーランドの連合軍を破る'},
    {no:61, age:'1250', name:'エジプトにイスラム教スンナ（スンニー）派王朝のマムルーク朝が成立する。首都はカイロ'},
    {no:62, age:'1261', name:'ラテン帝国を倒してビザンツ帝国が再興する'},
    {no:63, age:'1273', name:'神聖ローマ帝国でハプスブルク家のルドルフ１世が皇帝に選ばれる'},
    {no:64, age:'1280', name:'元の科学者郭守敬が授時暦を作成する'},
    {no:65, age:'1294', name:'ローマ教皇にボニファティウス８世が即位する'},
    {no:66, age:'1309', name:'フランスのフィリップ４世が教皇をアヴィニョンに移転させる（教皇のバビロン捕囚）'},
    {no:67, age:'1328', name:'モスクワ大公国が成立する'},
    {no:68, age:'1346', name:'西ヨーロッパでペストが流行し、人口が激減する（～1350）'},
    {no:69, age:'1356', name:'神聖ローマ帝国皇帝のカール４世が金印勅書を発布する'},
    {no:70, age:'1378', name:'教会大分裂（大シスマ）が始まる（～1417）'},
    {no:71, age:'1389', name:'コソヴォの戦いでオスマン帝国がスラブ勢力を破る'},
    {no:72, age:'1399', name:'明で靖難の役が起きる'},
    {no:73, age:'1410', name:'明の永楽帝によるモンゴル遠征が始まる（～1424）'},
    {no:74, age:'1428', name:'ベトナムで黎利が明の支配から独立し、黎朝を建てる'},
    {no:75, age:'1445', name:'ポルトガル人がアフリカ最西端のヴェルデ岬を発見する'},
    {no:76, age:'1453', name:'イギリスとフランスの間の百年戦争が終結する'},
    {no:77, age:'1477', name:'フランスがブルゴーニュ公国を併合する'},
    {no:78, age:'1488', name:'バルトロメウ＝ディアスが喜望峰を発見する'},
    {no:79, age:'1500', name:'ポルトガルの提督カブラルがブラジルに到達する'},
    {no:80, age:'1511', name:'ポルトガルがマラッカ（マラカ）を占領する'},
    {no:81, age:'1522', name:'マルティン＝ルターがザクセン選帝侯フリードリヒの庇護下で新約聖書のドイツ語訳を完成させる'},
    {no:82, age:'1530', name:'ドイツでルター派の諸侯がシュマルカルデン同盟を結ぶ'},
    {no:83, age:'1541', name:'スイスでカルヴァンの宗教改革が始まる'},
    {no:84, age:'1546', name:'シュマルカルデン戦争が起きる（～1547）'},
    {no:85, age:'1556', name:'スペインでフェリペ２世が即位する'},
    {no:86, age:'1559', name:'イギリスのエリザベス１世が統一法を制定する'},
    {no:87, age:'1571', name:'スペイン人がフィリピンにマニラを建設する'},
    {no:88, age:'1580', name:'スペインがポルトガルを併合する（～1640）'},
    {no:89, age:'1583', name:'イエスズ会のマテオ＝リッチが中国に入国する'},
    {no:90, age:'1589', name:'フランスでアンリ４世が即位し、ブルボン朝が成立する'},
    {no:91, age:'1599', name:'女真（女直）のヌルハチが満州文字をつくる'},
    {no:92, age:'1603', name:'日本で徳川家康が江戸幕府を開く'},
    {no:93, age:'1613', name:'ロシアでミハイル＝ロマノフが即位し、ロマノフ朝が成立する'},
    {no:94, age:'1620', name:'ピルグリム＝ファーザーズがメイフラワー号で北アメリカのプリマスに上陸する'},
    {no:95, age:'1624', name:'フランスでリシュリューがルイ１３世の宰相となる'},
    {no:96, age:'1632', name:'リュッツェンの戦いでスウェーデン王グスタフ＝アドルフがワレンシュタイン率いるドイツ皇帝軍を破る'},
    {no:97, age:'1640', name:'イギリスのチャールズ１世が短期議会を招集するが、３週間で解散する'},
    {no:98, age:'1644', name:'マーストンムーアの戦いでクロムウェルが王党派を破る'},
    {no:99, age:'1648', name:'ムガル帝国がアグラからデリーに遷都する'},
    {no:100, age:'1655', name:'ジャマイカがイギリス領となる'},
    {no:101, age:'1661', name:'フランスでルイ１４世による親政が始まる'},
    {no:102, age:'1665', name:'第２次英蘭戦争が起きる（～1667）'},
    {no:103, age:'1673', name:'呉三桂が清に対して三藩の乱を起こす（～1681)'},
    {no:104, age:'1682', name:'ミシシッピ川流域がルイジアナと命名される'},
    {no:105, age:'1688', name:'イギリスで名誉革命が起き、ジェームズ２世が追放される'},
    {no:106, age:'1689', name:'ロシアと清の間でネルチンスク条約が結ばれ、国境が画定する'},
    {no:107, age:'1701', name:'ルイ１４世が孫のスペイン王家継承権を主張し、スペイン継承戦争が始まる（～1713）'},
    {no:108, age:'1709', name:'清で円明園の建設が始まる'},
    {no:109, age:'1716', name:'清で『康煕字典』が完成する'},
    {no:110, age:'1721', name:'北方戦争の講和条約であるニスタット条約が結ばれる'},
    {no:111, age:'1725', name:'清で『古今図書集成』完成する'},
    {no:112, age:'1732', name:'イギリスがジョージア植民地を建設し、１３植民地が成立する'},
    {no:113, age:'1744', name:'北米における植民地をめぐって、イギリスとフランスの間にジョージ王戦争が起きる（～1748）'},
    {no:114, age:'1751', name:'ディドロ・ダランベールらによる『百科全書』の刊行が始まる（～1772）'},
    {no:115, age:'1758', name:'インドでイギリス・フランス間の第３次カーナティック戦争が起こる（～1761）'},
    {no:116, age:'1762', name:'ルソーが『社会契約論』を発表する'},
    {no:117, age:'1765', name:'ワットが蒸気機関を改良する'},
    {no:118, age:'1768', name:'イギリスの冒険家クックの第１次探検が始まる（～1771）'},
    {no:119, age:'1773', name:'アメリカでボストン茶会事件が起きる'},
    {no:120, age:'1775', name:'第２回大陸会議でワシントンが植民地軍総司令官に任命される'},
    {no:121, age:'1776', name:'イギリスの冒険家クックの第３次探検が始まる（～1779）'},
    {no:122, age:'1779', name:'クロンプトンがミュール紡績機を発明する'},
    {no:123, age:'1782', name:'清で『四庫全書』が完成する'},
    {no:124, age:'1785', name:'カートライトが力織機を発明する'},
    {no:125, age:'1789', name:'フランスで球戯場（テニスコート）の誓いがなされる'},
    {no:126, age:'1791', name:'フランスでヴァレンヌ逃亡事件が起きる'},
    {no:127, age:'1792', name:'フランスで立法議会に代わって国民公会が成立する'},
    {no:128, age:'1793', name:'フランスで公安委員会・革命裁判所が設置される'},
    {no:129, age:'1793', name:'フランスで革命暦が採用される'},
    {no:130, age:'1795', name:'プロイセン・オーストリア・ロシアによって第３次ポーランド分割が行われ、ポーランド王国が消滅する'},
    {no:131, age:'1796', name:'清で白蓮教徒の乱が起きる（～1804）'},
    {no:132, age:'1799', name:'ブリュメール１８日のクーデタによりフランスに統領政府が成立し、ナポレオンが第一統領となる'},
    {no:133, age:'1802', name:'国民投票により、ナポレオンが終身統領となる'},
    {no:134, age:'1804', name:'ナポレオンが皇帝に即位し、フランス第一帝政が始まる'},
    {no:135, age:'1806', name:'西南ドイツの諸領邦がナポレオンを盟主とするライン同盟を結成する'},
    {no:136, age:'1811', name:'イギリスでラダイト運動が起きる'},
    {no:137, age:'1813', name:'ライプチヒの戦い（諸国民戦争）で、プロイセン・ロシア・オーストリア同盟軍がナポレオン軍を破る'},
    {no:138, age:'1815', name:'ロシアのアレクサンドル１世の提唱により、神聖同盟が結成される'},
    {no:139, age:'1819', name:'大コロンビア共和国がスペインから独立（その後コロンビア共和国となる）'},
    {no:140, age:'1822', name:'ブラジルが独立を宣言する'},
    {no:141, age:'1825', name:'イギリスのストックトン・ダーリントン間に鉄道が走る'},
    {no:142, age:'1830', name:'フランスのシャルル１０世がアルジェリア出兵を行う'},
    {no:143, age:'1831', name:'マッツィーニが「青年イタリア」を結成する'},
    {no:144, age:'1838', name:'イギリスとアフガニスタンの間で第１次アフガン戦争が起こる（～1842）'},
    {no:145, age:'1843', name:'イギリスと清の間で虎門寨追加条約が結ばれる'},
    {no:146, age:'1846', name:'アメリカ＝メキシコ戦争が起こる（～1848）'},
    {no:147, age:'1848', name:'フランスで四月普通選挙が実施される'},
    {no:148, age:'1848', name:'ハンガリー民族運動が起こる'},
    {no:149, age:'1851', name:'フランスでルイ＝ナポレオンが１８５１年クーデタを起こす'},
    {no:150, age:'1853', name:'ペリーが日本の浦賀に来航する'},
    {no:151, age:'1856', name:'イギリス・フランスと清の間でアロー戦争が起こる（～1860）'},
    {no:152, age:'1859', name:'ダーウィンが『種の起源』を発表する'},
    {no:153, age:'1862', name:'アメリカでホームステッド（自営農地）法が制定される'},
    {no:154, age:'1865', name:'オーストリアのメンデルが「遺伝の法則」を発表する'},
    {no:155, age:'1867', name:'イギリスで第２回選挙法改正がなされる'},
    {no:156, age:'1870', name:'フランスで第三共和政が成立する'},
    {no:157, age:'1875', name:'イギリスがスエズ運河会社の株式をエジプトから買収する'},
    {no:158, age:'1878', name:'ドイツのビスマルクの主催により、ベルリン会議が開かれる'},
    {no:159, age:'1881', name:'エジプトでウラービー（＝パシャ）の反乱が起きる'},
    {no:160, age:'1884', name:'イギリスで第３回選挙法改正がなされる'},
    {no:161, age:'1886', name:'イギリスがビルマ（ミャンマー）を併合する'},
    {no:162, age:'1889', name:'第２インターナショナルが結成される（～1920）'},
    {no:163, age:'1894', name:'朝鮮の支配をめぐって、日本と清の間で日清戦争が起こる（～1895）'},
    {no:164, age:'1895', name:'日本と清の間で下関条約が結ばれる'},
    {no:165, age:'1898', name:'清で戊戌の政変が起こる'},
    {no:166, age:'1899', name:'イギリスとトランスヴァール共和国・オレンジ自由国の間で南アフリカ（南ア）戦争が始まる（～1902）'},
    {no:167, age:'1902', name:'日本とイギリスの間で日英同盟が結ばれる'},
    {no:168, age:'1905', name:'ロシアで血の日曜日事件が起こる'},
    {no:169, age:'1905', name:'インドでベンガル分割令（カーゾン法）が出される'},
    {no:170, age:'1907', name:'ニュージーランドがイギリスの自治領となる'},
    {no:171, age:'1909', name:'アメリカのピアリが北極点に到達する'},
    {no:172, age:'1911', name:'第２次モロッコ事件（アガディール事件）が起こる'},
    {no:173, age:'1913', name:'セルビア・ギリシア・モンテネグロなどとブルガリアの間で第２次バルカン戦争が起こる'},
    {no:174, age:'1914', name:'タンネンベルクの戦いでドイツ軍がロシア軍を破る'},
    {no:175, age:'1916', name:'イギリス・フランス・ロシアによるオスマン帝国領の分割案などがサイクス・ピコ協定で結ばれる'},
    {no:176, age:'1918', name:'アメリカ大統領ウィルソンが十四ヵ条（十四ヵ条の平和原則）を発表する'},
    {no:177, age:'1919', name:'パリ講和会議で連合国とドイツとの間のヴェルサイユ条約が結ばれる'},
    {no:178, age:'1920', name:'国際連盟が設立されるが、アメリカは不参加を決定する'},
    {no:179, age:'1922', name:'ソヴィエト社会主義共和国連邦（ソ連）が成立する'},
    {no:180, age:'1925', name:'上海で五・三十運動が起こる'},
    {no:181, age:'1928', name:'中国で張作霖爆殺事件が起きる'},
    {no:182, age:'1931', name:'イギリスが金本位制を停止する'},
    {no:183, age:'1933', name:'フランクリン＝ローズヴェルトがアメリカ大統領に就任し、ニューディールが始まる'},
    {no:184, age:'1936', name:'フランコの反乱により、スペイン内戦が始まる（～1939）'},
    {no:185, age:'1938', name:'ナチス＝ドイツがオーストリアを併合し、ズデーテン地方の割譲も要求する'},
    {no:186, age:'1940', name:'日独伊三国軍事同盟が成立する'},
    {no:187, age:'1941', name:'日本軍が真珠湾攻撃を行い、太平洋戦争が始まる（～1945）'},
    {no:188, age:'1945', name:'ドイツが無条件降伏し、ヨーロッパでの戦争が終結する'},
    {no:189, age:'1946', name:'ベトナム民主共和国とフランスの間でインドシナ戦争が始まる（～1954）'},
    {no:190, age:'1949', name:'北大西洋条約機構（NATO）が発足する'},
    {no:191, age:'1953', name:'朝鮮休戦協定が結ばれる'},
    {no:192, age:'1956', name:'イスラエルとエジプトの間でスエズ戦争（第２次中東戦争）が起こる（～1957）'},
    {no:193, age:'1961', name:'非同盟諸国首脳会議がベオグラードで開かれる'},
    {no:194, age:'1964', name:'アメリカで公民権法が制定される'},
    {no:195, age:'1971', name:'国連で中華人民共和国の代表権が認められ、台湾が国連から追放される'},
    {no:196, age:'1979', name:'ソ連がアフガニスタンに軍事介入する'},
    {no:197, age:'1988', name:'イラン＝イラク戦争が停戦する'},
    {no:198, age:'1990', name:'イラク軍がクウェートに侵攻する'},
    {no:199, age:'2000', name:'南北両朝鮮首脳会談が実現する（北朝鮮：金正日、韓国：金大中）'}
  ];
  //全範囲データセット
  export const alldata = jdata.concat(wdata);