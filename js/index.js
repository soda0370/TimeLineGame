
const draggable = window['vuedraggable'];

new Vue({
  el:"#gameCtl",
    methods:{
      gameStart : function(event){
        game.show = true
      },
      gameEnd : function(event){
        game.show = false
      }
    }
});

let gameMode = new Vue({
  el: "#gameMode",
  data: {
    picked:"全範囲モード",
  }
});

let game = new Vue({
    el: "#quizlist",
    components: {
      'draggable': draggable,
    },
    data: {
      items:[
        {no:1, name:'桶狭間の戦い', age:'1560'},
        {no:2, name:'関ケ原の戦い', age:'1600'},
        {no:3, name:'鎌倉幕府', age:'1192'},
        {no:4, name:'本能寺の変', age:'1582'},
        {no:5, name:'長篠の戦', age:'1575'}
      ],
      //初期は非表示
      show:false
    }
  });