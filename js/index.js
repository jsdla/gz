/*类似上滑动画*/
function dats () {
  var dots_index = 0;
  setInterval(function () {
    $('.arrow .arrow_img').each(function () {
      if ($(this).index('.arrow .arrow_img') % 3 == dots_index) {
        $(this).siblings().animate({
          'opacity': '0'
        }, 500);
        $(this).animate({
          'opacity': 1
        }, 500)
      }
    });
    dots_index++;
    if (dots_index == 3) {
      dots_index = 0;
    }
  }, 500);
}
/**楼梯第一层动画**/
var first = [
  { 'class': '.z2', 'bottom': '-3.18rem', 'time': 1200 },
  { 'class': '.z3', 'bottom': '-2.9rem', 'time': 2000 },
  { 'class': '.z4', 'bottom': '-3.34rem', 'time': 2600 },
  { 'class': '.z6', 'bottom': '-0.29rem', 'time': 3600 },
  { 'class': '.z7', 'bottom': '0.42rem', 'time': 4400 },
  { 'class': '.z8', 'bottom': '-0.04rem', 'time': 4600 },
  { 'class': '.z9', 'bottom': '0.75rem', 'time': 5000 },
];
/**楼梯第二层动画**/
var second = [
  { 'class': '.z11', 'bottom': '1.45rem', 'time': 3000 },
  { 'class': '.z12', 'bottom': '1.87rem', 'time': 3800 },
  { 'class': '.z13', 'bottom': '2.3rem', 'time': 4300 },
  { 'class': '.z14', 'bottom': '2.72rem', 'time': 4700 },
  { 'class': '.z15', 'bottom': '2.67rem', 'time': 5000 },
];
/**楼梯第三层动画**/
var third = [
  { 'class': '.z10', 'bottom': '4.7rem', 'time': 3300 },
  { 'class': '.z16', 'bottom': '0rem', 'time': 3200 },
  { 'class': '.z17', 'bottom': '0.44rem', 'time': 3500 },
  { 'class': '.z18', 'bottom': '0.15rem', 'time': 4100 },
  { 'class': '.z19', 'bottom': '0.15rem', 'time': 4800 },
]
/**楼梯第四层动画**/
var fourth = [
  { 'class': '.z20', 'bottom': '2.8rem', 'time': 3050 },
  { 'class': '.z21', 'bottom': '-0.25rem', 'time': 3000 },
  { 'class': '.z22', 'bottom': '0.18rem', 'time': 3500 },
  { 'class': '.z23', 'bottom': '-1.8rem', 'time': 4200 },
]
/**第一次升起的四个物体动画**/
var initial = [
  { 'class': '.z24', 'bottom': '0.7rem', 'time': 5000 },
  { 'class': '.z27', 'bottom': '2rem', 'time': 2000 },
  { 'class': '.z30', 'bottom': '1.5rem', 'time': 3000 },
  { 'class': '.z33', 'bottom': '-0.5rem', 'time': 1000 },
]
/**第一站动画**/
var first_station = [
  { 'class': '.z25', 'bottom': '1.86rem', 'time': 3250 },
  { 'class': '.z26', 'bottom': '5.26rem', 'time': 3050 },
]
/**第二站动画**/
var second_station = [
  { 'class': '.z28', 'bottom': '3.58rem', 'time': 3250 },
  { 'class': '.z29', 'bottom': '6.9rem', 'time': 3050 },
]
/**第三站动画**/
var third_station = [
  { 'class': '.z31', 'bottom': '0.3rem', 'time': 3250 },
  { 'class': '.z32', 'bottom': '4.3rem', 'time': 2750 },
]
/**鸽子出现动画**/
var gzshow = [
  { 'class': '.z1', 'bottom': '0rem', 'time': 3250 },
  { 'class': '.gz', 'bottom': '0rem', 'time': 2750 },
]

/**达到第四个柱子时动画**/
var fifth = [
  { 'class': '.z23', 'bottom': '0rem', 'time': 3000 },
  { 'class': '.gz', 'bottom': '4.8rem', 'time': 3000 },
  { 'class': '.z1', 'bottom': '-1rem', 'time': 300 },
  { 'class': '.z2', 'bottom': '-4.18rem', 'time': 300 },
  { 'class': '.z3', 'bottom': '-4.3rem', 'time': 420 },
  { 'class': '.z4', 'bottom': '-5.74rem', 'time': 720 },
  { 'class': '.z5', 'bottom': '-3rem', 'time': 900 },
  { 'class': '.z6', 'bottom': '-3.29rem', 'time': 1080 },
  { 'class': '.z7', 'bottom': '-3.82rem', 'time': 1020 },
  { 'class': '.z8', 'bottom': '-5.24rem', 'time': 1560 },
  { 'class': '.z9', 'bottom': '-4.95rem', 'time': 1260 },
  { 'class': '.z10', 'bottom': '-1.7rem', 'time': 1200 },
  { 'class': '.z11', 'bottom': '-3.45rem', 'time': 600 },
  { 'class': '.z12', 'bottom': '-3.88rem', 'time': 600 },
  { 'class': '.z13', 'bottom': '-3.5rem', 'time': 1740 },
  { 'class': '.z14', 'bottom': '-3.735rem', 'time': 1500 },
  { 'class': '.z15', 'bottom': '-3.9rem', 'time': 1500 },
  { 'class': '.z16', 'bottom': '-6rem', 'time': 1800 },
  { 'class': '.z17', 'bottom': '-4.44rem', 'time': 1200 },
  { 'class': '.z18', 'bottom': '-4.15rem', 'time': 1200 },
  { 'class': '.z19', 'bottom': '-4.15rem', 'time': 1200 },
  { 'class': '.z20', 'bottom': '-2.8rem', 'time': 1200 },
  { 'class': '.z21', 'bottom': '-4.25rem', 'time': 1200 },
  { 'class': '.z22', 'bottom': '-3.18rem', 'time': 900 },
  { 'class': '.z24', 'bottom': '-4.7rem', 'time': 1200 },
  { 'class': '.z25', 'bottom': '-4rem', 'time': 600 },
  { 'class': '.z26', 'bottom': '-1.6rem', 'time': 1800 },
  { 'class': '.z27', 'bottom': '-6rem', 'time': 2400 },
  { 'class': '.z28', 'bottom': '-3.6rem', 'time': 1800 },
  { 'class': '.z29', 'bottom': '-1.1rem', 'time': 2100 },
  { 'class': '.z30', 'bottom': '-6.5rem', 'time': 2100 },
  { 'class': '.z31', 'bottom': '-4.3rem', 'time': 1200 },
  { 'class': '.z32', 'bottom': '-1.3rem', 'time': 1500 },
  { 'class': '.z33', 'bottom': '-3.5rem', 'time': 900 },
  { 'class': '.z34', 'bottom': '-6rem', 'time': 1800 },
  { 'class': '.z35', 'bottom': '-5rem', 'time': 1500 },
  { 'class': '.z36', 'bottom': '-2rem', 'time': 600 },
]
/**星球出现动画**/
// var sixth =[
// 	{'class':'.star_box1', 'bottom':'6.4rem', 'time':5200},
// 	{'class':'.star_box2', 'bottom':'5.2rem', 'time':5200},
// 	{'class':'.star_box3', 'bottom':'4.55rem', 'time':5200},
// ]

/*
 * 动画1			upSlide			楼梯动画
 * class		对象类名
 * bottom		底部位置
 * time			运动时间
 */
function upSlide (arr) {
  for (var i in arr) {
    $(arr[i]['class']).animate({
      bottom: arr[i]['bottom'],
    }, arr[i]['time'], 'easeInOutBack');
  }
}

/*
 * 动画2			upSlide1		其他物品动画
 * class		对象类名
 * bottom		底部位置
 * time			运动时间
*/

function upSlide1 (arr) {
  for (var i in arr) {
    $(arr[i]['class']).animate({
      bottom: arr[i]['bottom'],
    }, arr[i]['time'], 'easeOutQuart');
  }
}

/*
 * 动画23 		upSlide2		其他物品动画
 * class		对象类名
 * bottom		底部位置
 * time			运动时间
*/
function upSlide2 (arr) {
  for (var i in arr) {
    $(arr[i]['class']).animate({
      bottom: arr[i]['bottom']
    }, arr[i]['time'], 'linear');
  }
}

var texts = [
  { "character": "移动2017旅程", "num": "1" },
  { "character": "行走得千万新春卷", "num": "2" }
]

function substr (arr, time) {
  for (var i in arr) {
    $(arr[i]['class']).fadeIn(time);
  }
}

var tmp = [
  { 'class': '.gz', 'bottom': '1rem', 'left': '1.75rem', 'time': 1000 },
  {
    'class': '.gz', 'bottom': '1.6rem', 'left': '2.6rem', 'time': 500,
    'img': '../../2017static/hwx_annualbill/img/gz11.png'
  },
  {
    'class': '.gz', 'bottom': '2.9rem', 'left': '0.4rem', 'time': 1000,
    'img': '../../2017static/hwx_annualbill/img/gz1.png'
  },
  {
    'class': '.gz', 'bottom': '4rem', 'left': '1.4rem', 'time': 1000,
    'img': '../../2017static/hwx_annualbill/img/gz11.png',
    'call': [
      {
        'func': 'upSlide1',
        'param': first_station
      },
      { 'func': 'sencod_load' }
    ]
  },
]

/*
 * 	arr		数组
 * 	id		下标
 */
function animateCall (arr, id) {
  console.log(id);
  if (!arr[id]) return false;
  if (arr[id]['img']) {
    $(arr[id]['class']).attr("src", arr[id]['img']);
  }
  if (arr[id]['call']) {
    for (var i in arr[id]['call']) {
      var f = window[arr[id]['call'][i]['func']];
      if (arr[id]['call'][i]['param']) {
        f(arr[id]['call'][i]['param']);
      } else {
        f();
      }
    }
  }
  $(arr[id]['class']).animate({
    bottom: arr[id]['bottom'],
    left: arr[id]['left']
  }, arr[id]['time'], 'linear', function () {
    animateCall(arr, id + 1);
  });
}

/**光标显示**/
function cursor_hide () {
  $(".cursor_box").show();
}

var a = null;
var b = 0;
var c;
var time_move;

function pigeon_move (a, c) {
  if (c == 1) {
    clearInterval(time_move);
  } else {
    clearInterval(time_move);
    time_move = setInterval(
      function () {
        b++;
        if (b < 6) {
          $(".gz").attr("src", "../../2017static/hwx_annualbill/img/gz" + a + b + ".png");
        } else {
          b = 0;
        }
      }
      , 80
    );
  }
}

function dong1 () {
  $(".gz").animate({
    bottom: "1rem",
    left: "1.75rem"
  }, 1650, "linear", an2);
  pigeon_move(0, 0);

  function an2 () {
    pigeon_move(1, 1);
    $(".gz").attr("src", "../../2017static/hwx_annualbill/img/gz11.png");
    pigeon_move(1, 0);
    $(".gz").animate({
      bottom: "1.6rem",
      left: "2.6rem"
    }, 1150, "linear", an3);
  }

  function an3 () {
    pigeon_move(1, 1);
    $(".gz").attr("src", "../../2017static/hwx_annualbill/img/gz01.png");
    pigeon_move(0, 0);
    $(".gz").animate({
      bottom: "2.9rem",
      left: "0.4rem"
    }, 2600, "linear", an4);
  };

  function an4 () {
    pigeon_move(0, 1);
    $(".gz").attr("src", "../../2017static/hwx_annualbill/img/gz11.png");
    pigeon_move(1, 0);
    $(".gz").animate({
      bottom: "4rem",
      left: "1.4rem"
    }, 1420, "linear", an5);
  };

  function an5 () {
    pigeon_move(1, 1);
    audio1.pause();
    upSlide1(first_station);
    an6();
  }

  function an6 () {
    $(".cursor_box").animate({
      bottom: "5.5rem",
      left: "3.7rem"
    }, 1500, "linear");
    setTimeout(cursor_hide, 8000);
    /**给电话增加悬浮状态**/
    setTimeout(function () {
      upSlide(second);
      rock();
      $(".top1").hide();
      $(".top2").fadeIn();
      $(".z26").addClass("active");
    }, 2000);
  }
}

function dong2 () {
  pigeon_move(0, 1);
  $(".gz").attr("src", "../../2017static/hwx_annualbill/img/gz01.png")
  pigeon_move(0, 0);
  $(".gz").animate({
    bottom: "4.3rem",
    left: "1.1rem"
  }, 600, "linear", an2);

  function an2 () {
    pigeon_move(1, 1);
    $(".gz").attr("src", "../../2017static/hwx_annualbill/img/gz11.png")
    pigeon_move(1, 0);
    $(".gz").animate({
      bottom: "6rem",
      left: "4rem"
    }, 3400, "linear", an3);
  }

  function an3 () {
    pigeon_move(1, 1);
    audio1.pause();
    upSlide1(second_station);
    an4();
  }
  function an4 () {
    /**给WIFI增加悬浮状态**/
    setTimeout(function () {
      $(".z29").addClass("active");
      $(".top2").hide();
      $(".top3").show();
      upSlide(third);
      rock();
    }, 2000);
    $(".cursor_box").animate({
      bottom: "3rem",
      left: "5.2rem"
    }, 1500, "linear");
    setTimeout(cursor_hide, 7000);
    setTimeout(function () {
      $(".one").show();
      $(".second").show();
    }, 8000);
  }
}

function dong3 () {
  $(".cur").attr("rel", 0);
  $(".gz").animate({
    bottom: "6rem",
    left: "4rem"
  }, 1, "swing", an2);

  function an2 () {
    pigeon_move(2, 1);
    $(".gz").attr("src", "../../2017static/hwx_annualbill/img/gz21.png");
    pigeon_move(2, 0);
    $(".gz").animate({
      bottom: "4.9rem",
      left: "4.9rem"
    }, 1400, "linear", an3);
  }

  function an3 () {
    pigeon_move(3, 1);
    $(".gz").attr("src", "../../2017static/hwx_annualbill/img/gz31.png");
    pigeon_move(3, 0);
    $(".gz").animate({
      bottom: "4.35rem",
      left: "4rem"
    }, 1000, "linear", an4);
  }

  function an4 () {
    pigeon_move(2, 1);
    $(".gz").attr("src", "../../2017static/hwx_annualbill/img/gz21.png");
    pigeon_move(2, 0);
    $(".gz").animate({
      bottom: "3.5rem",
      left: "5.5rem"
    }, 1600, "linear", an5);
  }

  function an5 () {
    audio1.pause();
    pigeon_move(2, 1);
    upSlide1(third_station);
    an6();
  }

  function an6 () {
    /**给金币增加悬浮状态**/
    setTimeout(function () {
      $(".top3").hide();
      $(".top2").hide();
      $(".top4").show();
      upSlide(fourth);
      rock();
      $(".z32").addClass("active");
    }, 2000);
    $(".cursor_box").animate({
      bottom: "2.6rem",
      left: "3rem"
    }, 1500, "linear");
    setTimeout(cursor_hide, 6500);
    setTimeout(function () {
      $(".one").show();
      $(".second").show();
      $(".third").show();
    }, 7500);
  }
}

function dong4 () {
  $(".gz").animate({
    bottom: "3.5rem",
    left: "5.5rem"
  }, 1, "linear", an2);

  function an2 () {
    pigeon_move(3, 1);
    $(".gz").attr("src", "../../2017static/hwx_annualbill/img/gz31.png");
    pigeon_move(3, 0);
    $(".gz").animate({
      bottom: "2.35rem",
      left: "4rem"
    }, 2000, "linear", an3);
  }

  function an3 () {
    pigeon_move(0, 1);
    $(".gz").attr("src", "../../2017static/hwx_annualbill/img/gz01.png");
    pigeon_move(0, 0);
    $(".gz").animate({
      bottom: "3rem",
      left: "3.2rem"
    }, 950, "linear", an4);
  }

  function an4 () {
    pigeon_move(0, 1);
    audio1.pause();
    $(".z23").animate({
      bottom: "-2.1rem"
    }, 500, "linear");
    $(".gz").animate({
      bottom: "2.7rem"
    }, 500, "linear", an5);
  }

  function an5 () {
    $(".top").fadeOut();
    $(".z26").removeClass("active");
    $(".z29").removeClass("active");
    $(".z32").removeClass("active");
    setTimeout(function () {
      $(".logo1").hide();
      $("#bgmusic").attr("src", "../../2017static/hwx_annualbill/mp3/3.mp3");
      audio1.loop = false;
      audio1.play();
      $(".gz").attr("src", "../../2017static/hwx_annualbill/img/gz31.png");
      var i = 100;
      setInterval(function () {
        i--;
        if (i < 0) {
          return false;
        } else {
          $(".war").css("background-position-y", +i + "%");
        }
      }, 30);
      upSlide2(fifth);
    }, 20);
    last_show();
  }
}

/**播放音乐**/
var audio1 = document.getElementById("bgmusic");
document.addEventListener("WeixinJSBridgeReady", function () {
  audio1.play();
}, false);

/**返回点击事件**/

/*
 *  obj       点击对象
 *  bot       鸽子定位底部位置
 *  lef       鸽子定位左边位置
 */
function checkp (obj, bot, lef) {
  $(obj).click(function () {
    if ($(this).attr("rel") == 1) {
      console.log(1);
      return false;
    }
    setTimeout(function () {
      $(".gz").animate({
        bottom: bot,
        left: lef
      }, 20);
    }, 100);
    $(this).attr("rel", 1).siblings(".cur").attr("rel", 0);
  })
}

/**点击第一个石柱返回动画**/
$(".one").click(function () {
  if ($(this).attr("rel") == 1) {
    console.log(1);
    return false;
  }
  setTimeout(function () {
    $(".gz").animate({
      bottom: "4rem",
      left: "1.4rem"
    }, 20);
    $(".top2").show();
    $(".top3").hide();
    $(".top4").hide();
  }, 100);
  $(this).attr("rel", 1).siblings(".cur").attr("rel", 0);
});
/**点击第二个石柱返回动画**/
$(".second").click(function () {
  if ($(this).attr("rel") == 1) {
    console.log(1);
    return false;
  }
  setTimeout(function () {
    $(".gz").animate({
      bottom: "6rem",
      left: "4rem"
    }, 20);
    $(".top2").hide();
    $(".top4").hide();
    $(".top3").show();
  }, 100);
  $(this).attr("rel", 1).siblings(".cur").attr("rel", 0);
});
/**点击第三个石柱返回动画**/
$(".third").click(function () {
  if ($(this).attr("rel") == 1) {
    console.log(1);
    return false;
  }
  setTimeout(function () {
    $(".gz").animate({
      bottom: "3.5rem",
      left: "5.5rem"
    }, 20);
    $(".top2").hide();
    $(".top3").hide();
    $(".top4").show();
  }, 100);
  $(this).attr("rel", 1).siblings(".cur").attr("rel", 0);
});
/***石头声音***/
function rock () {
  $("#bgmusic").attr("src", "../../2017static/hwx_annualbill/mp3/2.mp3");
  audio1.loop = false;
  audio1.play();
}
/***脚步声***/
function step () {
  audio1.src = "../../2017static/hwx_annualbill/mp3/4.mp3";
  audio1.loop = "infinite";
  audio1.play();
}
//点击领取流量劵
$(".top3_btn").click(function () {
  $(".pop2").show();
});
//关闭按钮关闭
$(".close").click(function () {
  $(".pop").hide();
});
//点击继续看账单
$(".pop2 .p3").click(function () {
  $(".pop").hide();
});
/***光标点击事件***/
$(".cursor_box").click(function () {
  $(".q").hide();
  step();
  $(".cur").hide();
  $(this).hide();
  if ($(this).attr("rel") == 0) {
    dong1();
    $(this).attr("rel", 1);
  } else if ($(this).attr("rel") == 1) {
    dong2();
    $(this).attr("rel", 2);
  } else if ($(this).attr("rel") == 2) {
    dong3();
    $(this).attr("rel", 3);
  } else if ($(this).attr("rel") == 3) {
    dong4();
    $(this).attr("rel", 4);
  }
});
/**最后显示的内容**/
function last_show () {
  setTimeout(function () {
    $(".gift").fadeIn();
    $(".return").fadeIn();
    $(".share").fadeIn();
    $(".result").fadeIn();
    $(".last_text").fadeIn();
    $(".star_box").show();
    $(".logo2").show();
    $(".boot").show();
  }, 3000);
  setTimeout(function () {
    $(".star_box").addClass("active");
  }, 4500);
}
/**直接到最后动画**/
function end_last () {
  $(".logo1").hide();
  audio1.src = "../../2017static/hwx_annualbill/mp3/3.mp3";
  $(".gz").attr("src", "../../2017static/hwx_annualbill/img/gz31.png");
  audio1.load();
  audio1.play();
  $(".z26").removeClass("active");
  $(".z29").removeClass("active");
  $(".z32").removeClass("active");
  $(".gz").animate({
    bottom: "-0.7rem",
    left: "3.2rem"
  }, 1, "linear");
  setTimeout(function () {
    var i = 100;
    setInterval(function () {
      i--;
      if (i < 0) {
        return false;
      } else {
        $(".war").css("background-position-y", +i + "%");
      }
    }, 30);
    upSlide2(fifth);
  }, 20);
  last_show();
}

var lock_touch = 0;

/**初始动画**/
function start_first () {
  audio1.src = "../../2017static/hwx_annualbill/mp3/1.mp3";
  audio1.load();
  // audio1.play();
  $(".z5").fadeIn(1000);
  $(".z34").fadeIn(2000);
  $(".z35").fadeIn(3000);
  $(".z36").fadeIn(4000);
  $(".top").fadeIn(5000);
  setTimeout(function () {
    $(".arrow").fadeIn();
  }, 2500);
  setTimeout(function () {
    $(".strat_text").fadeIn();
    lock_touch = 1;
  }, 3000);
  upSlide1(gzshow);//鸽子出现动画
  dats(); //上滑动画
  var startX, //触摸时的坐标
    startY,
    x, //滑动的距离
    y,
    aboveY = 0; //设一个全局变量记录上一次内部块滑动的位置
  var inner = document.getElementById("arrow");

  function touchSatrt (e) { //触摸
    e.preventDefault();
    var touch = e.touches[0];
    startY = touch.pageY; //刚触摸时的坐标
  }

  function touchMove (e) { //滑动
    e.preventDefault();
    var touch = e.touches[0];
    y = touch.pageY - startY; //滑动的距离
    //inner.style.webkitTransform = 'translate(' + 0+ 'px, ' + y + 'px)';  //也可以用css3的方式
  }

  function touchEnd (e) { //手指离开屏幕
    e.preventDefault();
    if (lock_touch === 1) {
      /**上滑影藏**/
      $(".strat_text").hide();
      $("#arrow").hide();
      /**出现动画1**/
      upSlide1(initial);
      setTimeout(function () {
        upSlide(first);
        rock();
      }, 4000);
      setTimeout(function () {
        $("#effect").hide();
        $("#effect1").hide();
        $(".top1").show();
        $(".q").show();
        $(".cursor_box").fadeIn();
      }, 9000);
    }
  } //
  document.getElementById("arrow").addEventListener('touchstart', touchSatrt, false);
  document.getElementById("arrow").addEventListener('touchmove', touchMove, false);
  document.getElementById("arrow").addEventListener('touchend', touchEnd, false);
}

$(function () {
  start_first();
  // end_last();
});

/**点击PK规则**/
$(".result").click(function () {
  $(".rule_pop").fadeIn();
});
/**点击领取奖品**/
$(".gift").click(function () {
  $(".gift_pop").fadeIn();
});
function close () {
  $(".popUp").removeClass("is-visible");
}
function show (name) {
  $("." + name + "").addClass("is-visible");
}
$(".share").click(function () {
  show("sharePop");
});
//关闭分享弹窗
$(".sharePop").click(function () {
  close();
});
$(".dovePop").click(function () {
  close();
});
//下拉
$(".old").click(function () {
  $(this).next(".old_cont").slideToggle();
  $(this).toggleClass("active");
});

//点击判断微信弹窗or和我信
var log = 0;      //0为微信
/*
  url   跳转地址
  obj   点击对象
 */
function check_false (url, obj) {
  $(obj).click(function () {
    if (log === 0) {
      $(".ud_hwx").show();
    } else {
      window.location.href = url;
    }
  });
}
check_false("index.html", ".star_box1");//中间星球
check_false("index.html", ".star_box2");//右边
check_false("index.html", ".star_box3");//左边

