function getToday() {
  var i = new Date
    , r = i.getFullYear()
    , n = i.getMonth() + 1
    , t = i.getDate();
  return n < 10 && (n = "0" + n),
  t < 10 && (t = "0" + t),
  r + "-" + n + "-" + t
}
function PrevLoadImg(n, t, i) {
  if (n.files && n.files[0]) {
    var r = new FileReader;
    r.onload = function(n) {
      $("#" + t).attr("src", n.target.result);
      $("#" + t).attr("width", i + "px");
      $("#" + t).parent().show()
    }
    ;
    r.readAsDataURL(n.files[0])
  }
}
function denyEnter() {
  $(window).keydown(function(n) {
    if (n.keyCode == 13 && !$(n.target).is("textarea"))
      return !1
  })
}
function cancelStep() {
  chkvalid = !1;
  CloselayerPop()
}
function setOpacity(n, t) {
  $(n).css({
    opacity: t,
    filter: "alpha(opacity=" + t + ")"
  })
}
function maxLengthCheck(n) {
  n.value.length > n.maxLength && (n.value = n.value.slice(0, n.maxLength))
}
function setWday2KR(n) {
  var t = "";
  switch (n) {
    case "Mon":
      t = "(월)";
      break;
    case "Tue":
      t = "(화)";
      break;
    case "Wed":
      t = "(수)";
      break;
    case "Thu":
      t = "(목)";
      break;
    case "Fri":
      t = "(금)";
      break;
    case "Sat":
      t = "(토)";
      break;
    default:
      t = "(일)"
  }
  return t
}
function replaceWday2KR(n) {
  var t = $(n).val().toUpperCase();
  return t.replace("MON", "(월)").replace("TUE", "(화)").replace("WED", "(수)").replace("THU", "(목)").replace("FRI", "(금)").replace("SAT", "(토)").replace("SUN", "(일)")
}
function initNextAction() {
  $(".chkNext").keyup(function() {
    $(this).val().length == $(this).prop("maxlength") && $(this).next().focus()
  })
}
function autoResize(n) {
  var t;
  t = n.contentDocument ? n.contentDocument.documentElement.scrollHeight + 10 : n.contentWindow.document.body.scrollHeight + 10;
  n.height = t + "px"
}
function View_tab(n, t, i) {
  $("." + t + "> li").removeClass("on");
  $("." + t + n).addClass("on");
  $("." + i).hide();
  $("#" + i + n).show()
}
function viewFile() {
  var i = $(".input_imgmap").html(), n, t;
  $(".mark").focus();
  $("#viewfile").show();
  $(".input_imgmap").show();
  $(".input_googlemap").hide();
  $("#googlenote").hide();
  $("#skin_frame").contents().find(".map_wrap").html(i);
  n = $("#skin_frame").contents().find("#location").offset();
  $("#mCSB_1_container").length > 0 && $("#mCSB_1_container").css({
    top: "-" + n.top + "px"
  });
  t = $("#skin_frame").contents().find(".skin_wrap").height();
  $("#skin_frame").css({
    height: t
  });
  $("#skin_frame").contents().find(" #location").addClass("h_navi")
}
function hiddenFile() {
  var i = $(".input_googlemap").html(), r = $("#map_canvas").html(), u = $("#viewfile").is(":visible"), n, t;
  u == !0 && $("#map_canvas").html(r);
  $("#viewfile").hide();
  $(".input_imgmap").hide();
  $(".input_googlemap").show();
  $("#googlenote").show();
  $("#skin_frame").contents().find(".map_wrap").html(i);
  $("#skin_frame").contents().find("#googlenote").hide();
  n = $("#skin_frame").contents().find("#location").offset();
  $("#mCSB_1_container").length > 0 && $("#mCSB_1_container").css({
    top: "-" + n.top + "px"
  });
  t = $("#skin_frame").contents().find(".skin_wrap").height();
  $("#skin_frame").css({
    height: t
  });
  $("#skin_frame").contents().find(" #location").removeClass("h_navi")
}
function ViewlayerPop(pop_no) {
  var WinHeight = $(window).height(), PopWidth = $("#layerpop" + pop_no).width(), pop_ = eval("document.getElementById('layerpop" + pop_no + "')"), PopHeight;
  $(".foot_a").after('<div id="black"><\/div>');
  $(".layerpop_a").fadeOut(200);
  $("#black").fadeIn(200);
  $(pop_).css({
    marginLeft: -PopWidth / 2
  });
  $(pop_).children(".layerpop_in").css({
    maxHeight: WinHeight - 120
  });
  $("#layerpop1").children(".layerpop_in").css({
    maxHeight: WinHeight - 180 > 400 ? 400 : WinHeight - 180
  });
  $(".layerInv").length > 0 && $("#layerpop1").children(".layerpop_in").css({
    maxHeight: WinHeight - 140 > 400 ? 400 : WinHeight - 140
  });
  PopHeight = $("#layerpop" + pop_no).height();
  WinHeight >= PopHeight ? $(pop_).css({
    marginTop: -PopHeight / 2
  }) : $(pop_).css({
    marginTop: -WinHeight / 2
  });
  $(pop_).fadeIn(200);
  bbb = pop_no;
  aaaa++
}
function CloselayerPop() {
  $(".layerpop_a").hide();
  $("#black, .layerpop_a, .imgareaselect-outer").fadeOut(200)
}
function select_input(n) {
  var t = $(".select_input" + n + " option:selected").val();
  t == "직접입력" && (t = "");
  t == "" ? $("#select_input" + n).val(t).show() : $("#select_input" + n).val(t).hide()
}
