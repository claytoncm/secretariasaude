$(document).ready(function(){
    $('.navbar-toggler').on('click', function(e){
        $('html').toggleClass('menu-active');
        e.preventDefault();
    });

    $('.mega-menu a').on('click', function(e){    	
    	$(this).toggleClass('ativo');
    	e.preventDefault();
    });
});