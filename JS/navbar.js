$(function() {
    $('.dropdown-submenu').on('hover',function() { 
        $(this).find('.dropdown-menu').css('display', 'block');
        
    })
    $('.menuWrapper').on('hover', '.dropdown', function() { 
        $(this).find('.dropdown-menu.multi-level').css('display', 'block');
});