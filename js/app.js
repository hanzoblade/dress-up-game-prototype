////////////////////// my test start /////////////////////
$( init );

function init() {
  // draggable for hair
    $(".hairItems > img").draggable( { 
      stack: '.body', 
      cursor: 'move',
      snap: '.hairDrop',
      snapTolerance: 20,
      containment: '',
      revert: true

    } ); 

    // droppable for hair
    $('.hairDrop').droppable( {
      accept: '.hairItems > img',
      hoverClass: 'hovered',
      drop: hairDrop

    } );

    // draggable for shirts
    $(".shirtItems > img").draggable( { 
      stack: '.body', 
      cursor: 'move',
      snap: '.shirtDrop',
      snapTolerance: 20,
      containment: '',
      revert: true

    } ); 

    // droppable for shirts
    $('.shirtDrop').droppable( {
      accept: '.shirtItems > img',
      hoverClass: 'hovered',
      drop: shirtDrop

    } );

    function hairDrop( event, ui ) {
      //this is a variable for whatever item you're dragging
        var drag = ui.draggable; 
      //tells what hair ID was dropped on .hairDrop
        console.log('the dragged id is "' + drag.attr('class') + '" was dropped on me'); 
      // alerts you what piece you dropped
        if ( drag.hasClass('hair1') ) {
          alert('This is hair style 1');
        } else if (drag.hasClass('hair2') ){
          alert('This is hair style 2');
        } else if (drag.hasClass('hair3') ){
          alert('This is hair style3');
        } else if (drag.hasClass('hair4') ){
          alert('This is hair style 4');
        }
      // won't revert when you drop it
      ui.draggable.draggable( 'option', 'revert', false );

 
    }  //end hair drop function

    function shirtDrop( event, ui ) {
      //this is a variable for whatever item you're dragging
        var drag = ui.draggable; 
      //tells what hair ID was dropped on .hairDrop
        console.log('the dragged id is "' + drag.attr('class') + '" was dropped on me'); 
      // won't revert when you drop it
      ui.draggable.draggable( 'option', 'revert', false );

 
    }  //end shirt drop function

    function hairReturn (event, ui) {
      var drag = ui.draggable;
      //if another hair style is in #charBody, revert that hair style to default position and replace it with current draggable
    }


//////////////////////// my test end /////////////////////

}