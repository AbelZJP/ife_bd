$(function(){ 
	var i=0;
	var size=$('.banner .img li').size();
	$('.banner .img li').hide();
	$('.banner .img li').eq(0).show();
	$('.banner .num li').eq(0).addClass('active');
	$('.banner .num li').mouseover(function(){ 
		$(this).addClass('active').siblings().removeClass('active');
		var index=$(this).index();
		$('.img li').eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
	})
	function moveR(){ 
		i++;
		if(i==size){ 
			i=0;
		}
		$('.banner .img li').eq(i).fadeIn(300).siblings().fadeOut(300);
		$('.banner .num li').eq(i).addClass('active').siblings().removeClass('active');
	}
	/*function moveL(){ 
		i--;
		if(i==-1){ 
			i==size-1;
		}
		$('.banner .img li').eq(i).fadeIn(300).siblings().fadeOut(300);
		$('.banner .num li').eq(i).addClass('active').siblings().removeClass('active');
	}*/
	var timer=setInterval(moveR,2000);
	$('.banner').hover(function(){ 
		clearInterval(timer);
	},function(){ 
		timer=setInterval(moveR,2000);
	})
})

$(function(){ 
	var i=0;
	var clone=$('.case .banner2 .img li').eq(0).clone();
	$('.case .banner2 .img').append(clone);
	var listSize=$('.case .banner2 .img li').size();
	$('.case .banner2 .num li').eq(0).addClass('on');


	function moveleft(){ 
		i++;
		if(i==listSize){ 
			$('.case .banner2 .img').css({left:0});
			i=1;
		}
		$('.case .banner2 .img').stop().animate({left:-i*1100},500);
	}
	function moveright(){ 
		i--;
		if(i==-1){ 
			$('.case .banner2 .img').css({left:-(listSize-1)*1100});
			i=listSize-2
		}
		$('.case .banner2 .img').stop().animate({left:-i*1100},500);
		$('.case .banner2 .num li').eq(i).addClass('on').siblings().removeClass('on');
	}
	var time=setInterval(moveright,2000);
	$('.case .banner2').hover(function(){ 
		
		clearInterval(time);
	},function(){ 
		time=setInterval(moveright,2000);
	})
	$('.case .banner2 .btn_l').click(function(){ 
		moveleft();
	})
	$('.case .banner2 .btn_r').click(function(){ 
		moveright();
	})
	$('.case .banner2 .num li').mouseover(function(){ 
		var index=$(this).index();
		i=index;
		$('.banner2 .num li').eq(index).addClass('on').siblings().removeClass('on');
		$('.banner2 .img').stop().animate({left:-i*1100},500);
	})

	$('.team .teamer li img').mouseover(function(){ 
		$(this).stop().animate({width:230,height:230},400)
	})
	$('.team .teamer li img').mouseout(function(){ 
		$(this).stop().animate({width:210,height:210},400)
	})
})
$(function(){ 
	$(window).scroll(function(){ 
		var t=$(this).scrollTop();
		if(t>200){ 
			$(".top").stop().fadeIn();
		}else{ 
			$(".top").stop().fadeOut();
		}
	})
	$(".top").click(function(){ 
		$("body,html").stop().animate({scrollTop:0},300);//body用于chrome,html用于IE和FF
	})
})

