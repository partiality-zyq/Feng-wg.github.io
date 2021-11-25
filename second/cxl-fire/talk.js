$(function () {
  // 开始放烟花
  initAnimate();
  $("#yes").click(function (event) {
    modal("那就开始了", function () {
      $(".page_one").addClass("hide");
      $(".page_two").removeClass("hide");
      typeWrite();
        fireworks();
    });
  });
  $("#no").click(function (event) {
    modal("点错了！！", A);
  });
});

function A() {
  modal("不想看吗？", B);
}

function B() {
  modal("要看不上烟花了", C);
}

function C() {
  modal("好吧~那就不看了", D);
}

function D() {
  modal("好吧~那就不看了", E);
}

function E() {
  modal("好吧~那就不看了", F);
}

function F() {
  modal("好吧~那就不看了", G);
}

function G() {
  modal("好吧~那就不看了", H);
}

function H() {
  modal("好吧~那就不看了", I);
}

function I() {
  modal("好吧~那就不看了", J);
}

function J() {
  modal("好吧~那就不看了", function () {
    fireworks();
  });
}

function fireworks() {
  $(".page_one").addClass("hide");
  initAnimate();
}

function modal(content, callback) {
  var tpl =
    '<div class="container">' +
    '<div class="mask"></div>' +
    '<div class="modal">' +
    "<p>" +
    content +
    "</p>" +
    '<button type="button" id="confirm" class="confirm">确定</button>' +
    "</div>" +
    "</div>";
  $("body").append(tpl);
  $(document).on("click", ".confirm", function () {
    $(".container").remove();
    callback();
  });
}
