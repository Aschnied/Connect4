$(document).ready(function() {

  $('#redStack, #blueStack').draggable({
    containment: 'document',
    cursor: 'move',
    snap: '.mouth'

  });

  $('.mouth').droppable({
    hoverClass: 'mouth-hover',
    drop: function (e) {
      var column = e.target.innerText;
      console.log('Dropped into column # '+ column;
      // board.place(column)
    }
  })


  // $('mouth').on("dropover", function(e){
  // });

})
