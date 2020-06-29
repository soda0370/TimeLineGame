
import {jdata,wdata,alldata} from './dataset.mjs';

const draggable = window['vuedraggable'];

//ゲームモード切替
let gameMode = new Vue({
  el: "#gameMode",
  data: {
    picked:"all",
    column:3
  }
});
//ゲーム操作コントローラ
new Vue({
  el:"#gameCtl",
    methods:{
      gameStart : function(event){
        let tmp =[];
        if(gameMode.picked==="japan"){
          tmp = jdata.concat();
        }else if(gameMode.picked==="world"){
          tmp = wdata.concat();
        }else{
          tmp = alldata.concat();
        }
        game.items=choose_random(tmp,gameMode.column)
        game.answer="init"
        game.showAnswer=false
        game.show = true
        game.time=0
        game.showEndtime=false
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
      show:false,
      showAnswer:false,
      showEndtime:false,
      time:0,
      endtime:0
    },
    methods:{
      answerCheck :function(event){
        this.showAnswer=true
        this.answer="good"
        this.endtime=this.time
        this.showEndtime=true
        for (var i=0; i<this.items.length-1;i++){
          if(this.items[i].no > this.items[i+1].no){
            this.answer="bad"
          }
        }
      }
    },
    created: function() {
      let that = this;
      this.timer = setInterval(function() {
        that.time++;
      }, 1000);
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


