function make()
{
  var chosenWord = document.getElementById("word").value;
  hotdog.innerHTML =
      ' <div class="bun">' +
          '<div class="dog_end1">' + '</div>' +
            '<div class="dog">' +
              '<p id="inside">' + chosenWord + '</p>' +
            '</div>' +
          '<div class="dog_end2">' + '</div>' +
        '</div>';
}
