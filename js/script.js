/*=============================================
BOTÓN MENÚ
=============================================*/

// selector
var menu = document.querySelector(".hamburger");

// method
function toggleMenu(event) {
  this.classList.toggle("is-active");
  document.querySelector(".menuppal").classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener("click", toggleMenu, false);

/*=============================================
SLIDE BANNER
=============================================*/

$(".fade-slider").jdSlider({
  isSliding: false,
  isAuto: true,
  isLoop: true,
  isDrag: false,
  interval: 7000,
  isCursor: false,
  speed: 3000,
});

$(".verMas").click(function () {
  var vinculo = $(this).attr("vinculo");

  $("html, body").animate(
    {
      scrollTop: $(vinculo).offset().top - 60,
    },
    1000,
    "easeInOutBack"
  );
});

$(".banner .fade-slider").css({ "margin-top": $("header").height() });

/*=============================================
INTERACCIÓN PLANES
=============================================*/

$(".planes .grid-item").mouseover(function () {
  $(this).children("figure").css({ height: "25%", transition: ".5s all" });

  $(".tituloPlan").html($(this).children("figure").children("h1").html());

  $(".descripcionPlan").html(
    $(this).children("figure").children("h1").attr("descripcion")
  );
});

$(".planes .grid-item").mouseout(function () {
  $(this).children("figure").css({ height: "100%", transition: ".5s all" });

  $(".tituloPlan").html($(".tituloPlan").attr("tituloPlan"));

  $(".descripcionPlan").html($(".descripcionPlan").attr("descripcionPlan"));
});

/*=============================================
PLANES MOVIL
=============================================*/

$(".planesMovil").jdSlider({
  wrap: ".slide-inner",
  slideShow: 3,
  slideToScroll: 3,
  isLoop: false,
});

$(".planesMovil li").click(function () {
  $(".modal-title").html($(this).children("a").children("h6").html());
  $(".modal-body img").attr(
    "src",
    $(this).children("a").children("img").attr("src")
  );
  $(".modal-body p").html($(this).children("a").attr("descripcion"));
});

$(".planes .grid-item").click(function () {
  $(".modal-title").html($(this).children("figure").children("h1").html());
  $(".modal-body img").attr("src", $(this).children("img").attr("src"));
  $(".modal-body p").html(
    $(this).children("figure").children("h1").attr("descripcion")
  );
});

/*=============================================
RECORRIDO POR EL PUEBLO
=============================================*/

$(".slidePueblo").jdSlider();
