$(document).ready(function() {



	$('#toggleMenu').on('click', function() {

        if ( $(this).hasClass('toggleMenu--open') ) {

            $('#nav > ul > li:not(#toggleMenu)').removeClass('js-showElement');
            $('#nav > ul > li:not(#toggleMenu)').addClass('js-hideElement');
            $(this).removeClass('toggleMenu--open');

        } else {

            $('#nav > ul > li:not(#toggleMenu)').removeClass('js-hideElement');
            $('#nav > ul > li:not(#toggleMenu)').addClass('js-showElement');
            $(this).addClass('toggleMenu--open');

        }

		return false;

	})


	// Disappear submenu
	// ------------------------
	$('body').on('touchend click', function() {

    	// If user taps or clicks on screen, hide the sub menus
    	//$('li.hasSubMenu > ul').css('display', 'none'); 

    	// ISSUE ON TAP - clicking on
    });

    $('li.hasSubMenu').on('mouseleave', function() {

    	$(this).children('ul').removeClass('js-showElement');
        $(this).children('ul').addClass('js-hideElement');

    });





    // Show submenu
	// ------------------------

    $('li.hasSubMenu').on('mouseover keyup click', function(e) {

    	// If either -
    		// tabbing onto an element that has a subMenu
    		// hovering over an element that has a subMenu
    		// clicking on an element that has a subMenu
    	if ( e.keyCode === 9 | e.type === 'mouseover' | e.type === 'click' ) {
    		
    		// Show subMenu
    		$(this).children('ul').removeClass('js-hideElement');
            $(this).children('ul').addClass('js-showElement');
    		return false;
    	}

    });


    // Tabbing through Levels of Submenu
	// ------------------------
    

    $('li.hasSubMenu > ul > li:last-child > a').on('keydown', function(e) {

    	// If tabbing out of the last link in a submenu AND not tabbing into another menu
    	if ( (e.keyCode == 9) && !$(this).parent('li').hasClass('hasSubMenu') ) {


    		// If tabbing out of a third level and there are no other links in the parent subMenu
    		if ( $(this).parent('li').parent('ul').parent('li').parent('ul').parent('li').hasClass('hasSubMenu') 
    			 && $(this).parent('li').parent('ul').parent('li').is(':last-child') ) {

    				// Close the parent submenu (level 2)
    				$(this).parent('li').parent('ul').parent('li').parent('ul').removeClass('js-showElement');
                    $(this).parent('li').parent('ul').parent('li').parent('ul').addClass('js-hideElement');
    		} 


    		// Close this submenu
    		$(this).parent('li').parent('ul').removeClass('js-showElement');
            $(this).parent('li').parent('ul').addClass('js-hideElement');

    	}

    })




})