
const draggable = window['vuedraggable'];

//サンプルデータ
//実際はdatabaseからdata取得する
const jdata = [
  {no:1, age:'589', name:'隋の文帝が南朝の陳を滅ぼし南北朝を統一する。'},
  {no:2, age:'593', name:'推古天皇が聖徳太子を摂政とする。'},
  {no:3, age:'593', name:'四天王寺を難波につくる。'},
  {no:4, age:'622', name:'聖徳太子が斑鳩宮（いかるがのみや）で死去する。'},
  {no:5, age:'727', name:'第1回渤海使が送られてくる。'},
  {no:6, age:'729', name:'藤原四子が長屋王に謀反の疑いをかけて自殺させる（長屋王の変）。'},
  {no:7, age:'729', name:'藤原不比等と県犬養橘三千代との間に生まれた光明子が、聖武天皇の皇后となる。'},
  {no:8, age:'1184', name:'源義仲が征夷大将軍になる。'},
  {no:9, age:'1184', name:'財政を扱う公文所、裁判事務を担当する問注所が設置される。'},
  {no:10, age:'1185', name:'平氏が壇ノ浦の戦いで滅びる。'},
  {no:11, age:'1185', name:'源頼朝が守護・地頭の設置を後白河法皇に申し入れる。'},
  {no:12, age:'1205', name:'藤原定家らが『新古今和歌集』を後鳥羽上皇に撰上する｡'},
  {no:13, age:'1206', name:'高弁（明恵）が京都の栂尾の旧寺を再興し高山寺をおこす。'},
  {no:14, age:'1212', name:'鴨長明が『方丈記』を著す。'},
  {no:15, age:'1214', name:'源実朝が『金槐和歌集』を著す。'},
  {no:16, age:'1219', name:'源実朝が暗殺され、源氏は断絶する。'},
  {no:17, age:'1220', name:'慈円が『愚管抄』を著す。'},
  {no:18, age:'1221', name:'後鳥羽上皇が北条義時追討の命令を出し、挙兵。義時は後鳥羽上皇を倒す（承久の乱）。'},
  {no:19, age:'1332', name:'後醍醐天皇が隠岐に流される｡'},
  {no:20, age:'1333', name:'鎌倉幕府が滅亡する。'},
  {no:21, age:'1334', name:'訴訟を扱う雑訴決断所が設置される。'},
  {no:22, age:'1335', name:'北条時行が幕府の再興を目指すが、足利尊氏によって鎮圧される（中先代の乱）。'},
  {no:23, age:'1336', name:'足利尊氏が建武式目を制定する。'},
  {no:24, age:'1391', name:'足利義満が守護大名山名氏清を滅ぼす（明徳の乱）。'},
  {no:25, age:'1392', name:'足利義満が南北朝の合一を行う。'},
  {no:26, age:'1394', name:'足利義満が将軍職を足利義持に譲り、太政大臣となる。'},
  {no:27, age:'1398', name:'足利義満が、京都の北山に鹿苑寺金閣を完成させる。'},
  {no:28, age:'1400', name:'世阿弥が芸術の理論書『風姿花伝』を書き始める。'},
  {no:29, age:'1401', name:'足利義満が明との国交を開始する。'},
  {no:30, age:'1585', name:'豊臣秀吉が関白になる。'}
];

//ゲームモード切替
let gameMode = new Vue({
  el: "#gameMode",
  data: {
    picked:"全範囲モード",
    column:3
  }
});
//ゲーム操作コントローラ
new Vue({
  el:"#gameCtl",
    methods:{
      gameStart : function(event){
        const tmp = jdata.concat();
        game.items=choose_random(tmp,gameMode.column)
        game.answer="init"
        game.show = true
      },
      gameEnd : function(event){
        game.show = false
      }
    }
});

let game = new Vue({
    el: "#quizlist",
    components: {
      'draggable': draggable,
    },
    data: {
      items:[],
      answer:"init",
      //初期は非表示
      show:false
    },
    methods:{
      answerCheck :function(event){
        this.answer="good"
        for (var i=0; i<this.items.length-1;i++){
          if(this.items[i].no > this.items[i+1].no){
            this.answer="bad"
          }else{
          }
        }
      }
    }
  });

function choose_random(arrayData, count) {
  // countが設定されていない場合は1にする
  var count = count || 1;
  var arrayData = arrayData;
  var result = [];
  for (var i = 0; i < count; i++) {
      var arrayIndex = Math.floor(Math.random() * arrayData.length);
      result[i] = arrayData[arrayIndex];
      // 1回選択された値は削除して再度選ばれないようにする
      arrayData.splice(arrayIndex, 1);
  }
  return result;
}


