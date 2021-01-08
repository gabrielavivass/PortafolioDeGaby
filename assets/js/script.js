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

//Typeform
(function () {
  var qs,
    js,
    q,
    s,
    d = document,
    gi = d.getElementById,
    ce = d.createElement,
    gt = d.getElementsByTagName,
    id = "typef_orm",
    b = "https://embed.typeform.com/";
  if (!gi.call(d, id)) {
    js = ce.call(d, "script");
    js.id = id;
    js.src = b + "embed.js";
    q = gt.call(d, "script")[0];
    q.parentNode.insertBefore(js, q);
  }
})();

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
