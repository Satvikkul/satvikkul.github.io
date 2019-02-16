$(window).load(function() {
						$(".preloader").delay(500).fadeOut(500);
						});


function initChulan() {

// functions ------------------
	"use strict";
	
//------------------------------init Superslides-----------------------
    $('#main').animate({"opacity":'1'},{queue:false,duration:500,easing:"easeInOutQuad"});			
		$('h1.animtext').textillate({ in: { effect: 'flipInX',delayScale: 2.5  } });
		setTimeout( function(){		
			$('.fade').animate({"opacity":'1'},{queue:false,duration:900,easing:"easeInOutQuad"});
		},2000);

	$('#slides').superslides({
		animation: 'fade',
		play: 10000
	});	
	
	$('h1.animtext').fitText(1.8,{minFontSize:'20px',maxFontSize:'72px'});
	
// counter ------------------

	function number(num, content, target, duration) {
		if (duration) {
			var count    = 0;
			var speed    = parseInt(duration / num);
			var interval = setInterval(function(){
				if(count - 1 < num) {
					target.html(count);
				}
				else {
					target.html(content);
					clearInterval(interval);
				}
				count++;
			}, speed);
		} 
		else {
			target.html(content);
		}
	}
    function stats(duration) {
		$('.stats .num').each(function() {
			var container = $(this);
			var num = container.attr('data-num');
			var content  = container.attr('data-content');
			number(num, content, container, duration);
        });
	}		
	
// Scroll animation   ----------------------------------------
	
	$('.animaper').appear();
		
	$(document.body).on('appear', '#about div.anim', function() {
		$(this).each(function(){ 			
			setTimeout (function (){				
				$('#about div.anim').animate({opacity:'1', top:'0'},{queue:true,duration:1200});
			}, 600 ); 
		});
	});
	$(document.body).on('appear', '#resume div.anim', function() {
		$(this).each(function(){ 			
			setTimeout (function (){				
				$('#resume div.anim').animate({opacity:'1', top:'0'},{queue:true,duration:1200});
			}, 600 ); 
		});
	});
    	$(document.body).on('appear', '#skills div.anim', function() {
		$(this).each(function(){ 			
			setTimeout (function (){				
				$('#skills div.anim').animate({opacity:'1', top:'0'},{queue:true,duration:1200});
			}, 600 ); 
		});
	});
	$(document.body).on('appear', '#work div.anim', function() {
		$(this).each(function(){ 			
			setTimeout (function (){				
				$('#work div.anim').animate({opacity:'1', top:'0'},{queue:true,duration:1200});
			}, 600 ); 
		});
	});		
	$(document.body).on('appear', '#services div.anim', function() {
		$(this).each(function(){ 			
			setTimeout (function (){				
				$('#services div.anim').animate({opacity:'1', top:'0'},{queue:true,duration:1200});
			}, 600 ); 
		});
	});	
	$(document.body).on('appear', '#contacts div.anim', function() {
		$(this).each(function(){ 			
			setTimeout (function (){				
				$('#contacts div.anim').animate({opacity:'1', top:'0'},{queue:true,duration:1200});
			}, 600 ); 
		});
	});

    var $i = 1;
	$(document.body).on('appear', '.stats', function(e) {
		if ($i === 1) { stats(2600); }
		$i++;
		$('.num').removeClass('scale-small');
	});	
	$(document.body).on('appear', '#facts ul li', function(e) {

		$('#facts ul li').removeClass('scale-small');
	});		
	$(".show-skills").click( function(){
		$(this).find('i').toggleClass('but-rotade');
		$('.piechart-holder').slideToggle(500);
		setTimeout (function (){
			$('.chart').easyPieChart({
				easing: 'easeOutBounce',
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});
				
		}, 500 );
	var text = $('.show-skills').find('span').text();
    $('.show-skills').find('span').text(
        text == "show skills" ? "hide skills" : "show skills");
	});
	

// Navigation + custoum  scripts----------------------------------------
		
	$('#options li').click(function(){
		$('#options li').removeClass('actcat');
		$(this).addClass('actcat');
	});
	
	$('.nav-button').click(function(){
		$('.link-holder').slideToggle(500);	
	});
	
	$("a.scroll-link").bind('click', function(event) {
		event.preventDefault();
		$.scrollTo( 
			$(this).attr('href'),950,{easing:'swing',offset: 0,'axis':'y'} );	
	});

	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 750,
		scrollOffset: 30,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
	});
	
	var ww = $(window).width();

	if( ww < 959){
	
		$('.link-holder').onePageNav({
			currentClass: 'cur',
			changeHash: false,
			scrollSpeed: 750,
			scrollOffset: 30,
			scrollThreshold: 0.5,
			filter: '',
			easing: 'swing',
		});
		$('.link-holder a').click(function(){
			setTimeout (function (){				
				$('.link-holder').slideUp(500);
			}, 600 );
		});		
	}
	
// Mixitup  ----------------------------------------
	
	$('#folio_container').mixitup({
		targetSelector: '.box',
		effects: ['fade','rotateX'],
		easing: 'snap',
		transitionSpeed:700,
		layoutMode: 'grid',
    	targetDisplayGrid: 'inline-block',
    	targetDisplayList: 'block',
	});
			
};


$(document).ready(function(){	
	initChulan();		
});
	$(window).resize(function(){
		var ww4 = $(window).width();
		if( ww4 < 959){
			$('.link-holder').css('display','none')		
		}
		else if (ww4 > 959){
			$('.link-holder').css('display','block')			
		}	
	});

//  definition of mobile browser------------------

	var isMobile = { 
       Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
		
    };
	
// if not mobile ------------------  
	
	trueMobile = isMobile.any();
	
	if (trueMobile == null){
		$('.parallax-facts').parallax("70%", 0.3);
		$('.parallax-testimonials').parallax("70%", 0.3);
		$('.box').hover(function(){
			$(this).find('div.folio-overlay').stop(true,true).animate({opacity:'0.9',left:'10px' , top:'10px'},{queue:true,duration:500,easing:"swing"});
			$(this).find('div.folio-button').addClass('scale-big');	
				},function(){
			$(this).find('div.folio-overlay').stop(true,true).animate({opacity:'0',left:'0' , top:'0'},{queue:true,duration:500,easing:"easeInOutBack"});
			$(this).find('div.folio-button').removeClass('scale-big');
		});	

		$('.start-holder').hover(function(){
			$('.start-decor').addClass('start-rotade');	
				},function(){
			$('.start-decor').removeClass('start-rotade');	
		});	
	}