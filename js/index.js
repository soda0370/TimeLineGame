
const draggable = window['vuedraggable'];

new Vue({
    el: "#app",
    components: {
      'draggable': draggable,
    },
    data: {
      items:[
        {no:1, name:'桶狭間の戦い', age:'1560'},
        {no:2, name:'関ケ原の戦い', age:'1600'},
        {no:3, name:'鎌倉幕府', age:'1192'}
      ]
    }
  });