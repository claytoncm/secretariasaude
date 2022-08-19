$(document).ready(function(){
    $('.bt-mega').on('click', function(e){
        $('html').toggleClass('menu-active');
        e.preventDefault();
    });

    $('.mega-menu a').on('click', function(e){    	
    	$(this).toggleClass('ativo');
    	e.preventDefault();
    });
});