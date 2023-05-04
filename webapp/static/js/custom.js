$(document).ready(function () {
  $(".MovieListSld").owlCarousel({
    loop: true,
    nav: false,
    lazyLoad: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 4000,
  });
  $(".category-list").owlCarousel({
    loop: true,
    nav: false,
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      425: { items: 2 },
      576: { items: 3 },
      768: { items: 4 },
      992: { items: 5 },
    },
  });
  $(".tvshows-owl").owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      425: { items: 2 },
      576: { items: 3 },
      768: { items: 2 },
      992: { items: 3 },
      1200: { items: 4 },
    },
  });
  $(".episodes-owl").owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      425: { items: 2 },
      576: { items: 3 },
      768: { items: 2 },
      992: { items: 3 },
      1200: { items: 4 },
    },
  });
  $(".sagas-owl").owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      425: { items: 2 },
      576: { items: 3 },
      992: { items: 4 },
      1200: { items: 5 },
    },
  });
  $(document).on("click", ".home-movies .btnstp a", function (event) {
    event.preventDefault();
    var id = $(this).data("tab");
    var $this = $(this);
    var $tab = $("#" + id);
    if ($tab.length) {
      $(".home-movies .btnstp a").removeClass("Current").addClass("ho-naranja");
      $this.addClass("Current").removeClass("ho-naranja");
      $(".apt").addClass("hide");
      $tab.removeClass("hide");
    } else {
      var order = $(this).data("order");
      var type = $(this).data("type");
      $.get(
        { url: "/api/posts", dataType: "html", contentType: "text/html" },
        { order: order, type: type },
        function (data) {
          $newTab = $('<div id="' + id + '" class="apt"></div>');
          var $ul = $('<ul class="MovieList Rows AX A06 B04 C03 E20"></ul>');
          $ul.append(data);
          $newTab.append($ul);
          $(".home-movies").append($newTab);
          $(".home-movies .btnstp a")
            .removeClass("Current")
            .addClass("ho-naranja");
          $this.addClass("Current").removeClass("ho-naranja");
          $(".apt").addClass("hide");
          $newTab.removeClass("hide");
        }
      );
    }
  });
  $(document).on("click", ".home-series .btnstp a", function (event) {
    event.preventDefault();
    var id = $(this).data("tab");
    var $this = $(this);
    var $tab = $("#" + id);
    if ($tab.length) {
      $(".home-series .btnstp a").removeClass("Current").addClass("ho-naranja");
      $this.addClass("Current").removeClass("ho-naranja");
      $(".series_listado").addClass("hide");
      $tab.removeClass("hide");
    } else {
      var order = $(this).data("order");
      var type = $(this).data("type");
      $.get(
        { url: "/api/posts", dataType: "html", contentType: "text/html" },
        { order: order, type: type, count: 12 },
        function (data) {
          $newTab = $('<div id="' + id + '" class="apt"></div>');
          var $ul = $('<ul class="MovieList Rows AX A06 B04 C03 E20"></ul>');
          $ul.append(data);
          $newTab.append($ul);
          $(".home-series").append($newTab);
          $(".home-series .btnstp a")
            .removeClass("Current")
            .addClass("ho-naranja");
          $this.addClass("Current").removeClass("ho-naranja");
          $(".series_listado").addClass("hide");
          $tab.removeClass("hide");
          $tab.owlCarousel({
            loop: false,
            margin: 0,
            nav: false,
            responsiveClass: true,
            responsive: {
              0: { items: 1 },
              425: { items: 2 },
              576: { items: 3 },
              768: { items: 2 },
              992: { items: 3 },
              1200: { items: 4 },
            },
          });
        }
      );
    }
  });
});
$(".aa-tgl").on("click", function () {
  var shwhdd = $(this).attr("data-tgl");
  $("#" + shwhdd).toggleClass("on");
  $(this).toggleClass("on");
});
