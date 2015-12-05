$(document).ready(function() {


/************** ACCORDIAN ***********************/

$('#accordion-menu > ul > li:has(ul)').addClass("has-sub");//the the has-sub class to all the elements tht have a submenu

$('#accordion-menu > ul > li > a').click(function() {

	//we want to select the ul next to the clicked a
	var checkElement = $(this).next(); //Each time a link is clicked, select the very next sibling element in the DOM, and assign it to a var
    console.log(checkElement);
	//checkElement.css('font-size', '33px'); 

	//Remove the .active class from all menu items, 
	//and then add the .active class to the menu item that was just clicked. 
	//The active class sets some syles
	$('#accordion-menu li').removeClass('active');
	$(this).closest('li').addClass('active');	//The closest() method returns the first ancestor of the selected element.
                                                //this referts to ul > li > a

    //if an item with an openend submenu is clicked, close it and remove the active class                                    
	if((checkElement.is('ul')) && (checkElement.is(':visible'))) {//if both of conditions are true, it means that the clicked menu item has a visible submenu. 
		                                                          //The correct functionality for this situation is to collapse the sub menu and remove the .active class.
		$(this).closest('li').removeClass('active'); 
		checkElement.slideUp('normal');
	}

	//if the checkElement variable is a UL and if that UL is not visible, it means that we have clicked a menu item 
	//that has a collapsed submenu.
	if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
		$('#accordion-menu ul ul:visible').slideUp('normal');//collapse any opened submenu
		checkElement.slideDown('normal'); //and expand the submenu of the checked element
	}

	//we need to prevent the default functionality of any link that has a submenu.
	//We don't use e.preventDefault() because we don't want to prevent default for all links, just for the ones that have a submenu

	if (checkElement.is('ul')) {
		return false;//returnign false prevents the default functionality
	} else {
		return true;//returning true preserves the default functionality
	}
});


});//end ready