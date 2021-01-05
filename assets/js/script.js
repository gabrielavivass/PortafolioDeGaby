$(function () {
  $("a").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html,body").animate(
        {
          scrollTop: $(gato).offset().top,
        },
        800,
        function () {
          window.location.hash = gato;
        }
      );
    }
  });
});

//esconder parrafo de tarjetas
$("#titulo").click(function () {
  $("#parrafo").toggle("slow");
});
$("#titulo2").click(function () {
  $("#parrafo2").toggle("slow");
});
$("#titulo3").click(function () {
  $("#parrafo3").toggle("slow");
});
$("#titulo4").click(function () {
  $("#parrafo4").toggle("slow");
});
$("#titulo5").click(function () {
  $("#parrafo5").toggle("slow");
});
$("#titulo6").click(function () {
  $("#parrafo6").toggle("slow");
});
