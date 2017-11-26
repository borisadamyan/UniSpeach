$(document).ready(function() {
	var link = $('.m-menu-link');
	var menu = $('.m-menu');
	var close = $('.close-menu');
	link.on('click', function(e){
		e.preventDefault();
		menu.toggleClass('active');
		$('.btn-get').hide();
	})
	close.on('click', function (e) {
		e.preventDefault();
		menu.toggleClass('active');
    if($(window).width() > 480){
      $('.btn-get').show();
    }
	})

function hideHeadcontent(){
  $('.head .head-body h1').hide();
  $('.head-body p').hide();
  $('.head-body a.btn').hide();
  $('.logo').css({
    'visibility':'hidden'
  });
 }
function showHeadcontent(){
  $('.head .head-body h1').show();
  $('.head-body p').show();
  $('.head-body a.btn').show();
  $('.logo').css({
    'visibility':'visible'
  });
}  
if($(window).width() <= 480){
  link.on('click', function(e){
    hideHeadcontent();
    $('body .m-menu').css({
      'width': '100%'
    });
    $('body .m-menu .close-menu').css({
      'top': '30px',
      'left': '40px',
    })
  })
  close.on('click', function (e) {
    showHeadcontent();
  })
}

	$('.owl-carousel').owlCarousel({
     	rtl:true,
	    loop:true,
	    margin:10,
	    nav:true,
    responsive:{
        0:{
            items:1
        },
        730:{
        		items:2
        },
        1000:{
            items:3
        },
        1400:{
            items:4
        }
    }
})
	$('.scrollToTop').click(function(){
			$('html, body').animate({scrollTop : 0},800);
				return false;
		});
	$('#menu li a.drop').on('click', function(){
		var self = $(this);
		 $('.tab-content').show();

	});
	$('.tab-content').on('mouseleave', function(){
	$('.tab-content').hide();
		$('.menu li').find('.glyphicon-menu-up').hide();
  	$('.menu li').find('.glyphicon-menu-down').show();
  	$('.menu li.active').removeClass('active')
 	})

	$( window ).resize(function() {
 		$('.m-menu').height( $('.carousel').height());
 		$('.bg-div').width($('s-paralax').width())
	});
  	$('.menu li').on('click', function(){
  		var self = $(this);
  		if(!self.hasClass('active')){
        	$('.menu li').find('.glyphicon-menu-up').hide();
        	$('.menu li').find('.glyphicon-menu-down').show();
        	self.find('.glyphicon-menu-down').hide();
       		self.find('.glyphicon-menu-up').show();
        }else{
        	$('.tab-content').show();
        }
  	})
    $('.m-menu li').on('click', function(){
    	$('.m-menu li').removeClass('active');
    	$('.m-menu li.dropdown').find('.glyphicon-menu-up').hide();
    	$('.m-menu li.dropdown').find('.glyphicon-menu-down').show();
    	$('.m-menu  .dropdown-mob li ').removeClass('active');
    	$('.m-menu  .dropdown-mob').removeClass('active');
    })  
    $('.m-menu li.dropdown').on('click', function(){
        var self = $(this);
        $('.m-menu li.dropdown').removeClass('active');
        self.addClass('active');

        if(self.hasClass('active')){
        	$('.m-menu li.dropdown').find('.glyphicon-menu-up').hide();
        	$('.m-menu li.dropdown').find('.glyphicon-menu-down').show();
        	self.find('.glyphicon-menu-down').hide();
       		self.find('.glyphicon-menu-up').show();
        }

        self.find($('.m-menu .dropdown-mob')).addClass('active');
    });

    $('.m-menu .dropdown-mob li a').on('click', function(){
    	var self = $(this);
    	$('.m-menu  .dropdown-mob li a').removeClass('active');
        self.addClass('active');
       $('li.hidden').click();
       $('.close-menu').click();
    })



		var help = $('form.send-help-massage');
		var write = $('.open-email');
		var close = $('.close-email');

		write.on('click', function(){
			help.addClass('open');
			write.hide();
			close.show();
		})
		close.on('click', function(){
			help.removeClass('open');
			write.show();
			close.hide();
		})


				// var movementStrength = 4;
				// var height = movementStrength / $(window).height();
				// var width = movementStrength / $(window).width();
				// $(".projects").mousemove(function(e){
				//           var pageX = e.pageX - ($(window).width() / 2);
				//           var pageY = e.pageY - ($(window).height() / 2);
				//           var newvalueX = width * pageX * -1 - 15;
				//           var newvalueY = height * pageY * -1 - 15;
				//           $('.projects').css("background-position", newvalueX+"px     "+newvalueY+"px");
				// });

		var element = $('.scroll_hidden');
    $(window).scroll(function(){
        element['fade'+ ($(this).scrollTop() > 0 ? 'In': 'Out')](500);          
    });


		var photo_part_dollar = document.getElementById('photo_part_dollar');
     var parallax = new Parallax(photo_part_dollar, {
        scalarX: 5,
        scalarY: 5,
    });
     var photo_part_dollar_mob = document.getElementById('photo_part_dollar_mob');
     var parallax = new Parallax(photo_part_dollar_mob, {
        scalarX: 7,
        scalarY: 1,
    });

    var photo_part_arrow = document.getElementById('photo_part_arrow');
     var parallax = new Parallax(photo_part_arrow, {
        scalarX: 5,
        scalarY: 5,
    });
     var photo_part_arrow_mob = document.getElementById('photo_part_arrow_mob');
     var parallax = new Parallax(photo_part_arrow_mob, {
        scalarX: 1,
        scalarY: 7,
    });
      var photo_part_lamp = document.getElementById('photo_part_lamp');
     var parallax = new Parallax(photo_part_lamp, {
        scalarX: 5,
        scalarY: 5,
    });
      var photo_part_lamp_mob = document.getElementById('photo_part_lamp_mob');
     var parallax = new Parallax(photo_part_lamp_mob, {
        scalarX: 5,
        scalarY: 5,
    });

});



/*
<script>
  setTimeout( 'location="index.htm";', 5000 );
  location.href = 'thanks.html';
</script> 
*/