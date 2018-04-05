// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$('#submit').on("click",function(event) {
  event.preventDefault();
  
  const height = $('#inputHeight').val();
  const width = $('#inputWeight').val();
  
  $('#pixelCanvas').empty();
  
  makeGrid(height,width);
  
});

function makeGrid(height,width) {
    for (i = 0; i < height; i++) {
      $('#pixelCanvas').append($("<tr></tr>"));
      for (j = 0; j < width; j++) {
        $('tr').last().append($("<td></td>"));
      }
    }
}

$('#pixelCanvas').on("click", "td", function() {
  $(this).css("background-color",$('#colorPicker').val())
});
