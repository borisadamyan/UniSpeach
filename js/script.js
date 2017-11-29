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
  $('.logo_in_mob').css({
    'visibility':'hidden'
  });
 }
function showHeadcontent(){
  $('.head .head-body h1').show();
  $('.head-body p').show();
  $('.head-body a.btn').show();
  $('.logo_in_mob').css({
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



		var help = $('.help');
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

		var element = $('.scroll_hidden');
    var btn = $('.scroll_hidden .btn-get a');
    btn.css({
              'border': '1px solid rgba(255, 255, 255, .502)',
              'background-color' : 'transparent'
            })
    btn.on('mouseover', function(){
      $(this).css({
              'border' : '1px solid #1eafba',
              'background-color' : '#1eafba'
            })
    })
    btn.on('mouseleave', function(){
      $(this).css({
             'border': '1px solid rgba(255, 255, 255, .502)',
            'background-color' : 'transparent'
            })
    })
    $(window).scroll(function(){
        element['display'+ ($(this).scrollTop() > 0 ? 'block': 'none')];
        if(($(this).scrollTop() > 0)){
            element.css({
            'background': 'rgba(119, 103, 215, .8)',
          })
            btn.css({
              'border' : '1px solid #1eafba',
              'background-color' : '#1eafba'
            })
        } else{
            element.css({
            'background': 'transparent',
          })
             btn.css({
              'border': '1px solid rgba(255, 255, 255, .502)',
              'background-color' : 'transparent'
            })
        }  
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