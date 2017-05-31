$(document).ready(function(){

var images = Array("https://preview.c9users.io/jamesnotfu/dashable/Images/beachhome.jpg", 
                "https://preview.c9users.io/jamesnotfu/dashable/Images/waterfall.jpg", 
                "https://preview.c9users.io/jamesnotfu/dashable/Images/waterfall2.jpg");

var currimg = 0;

function backgroundSwitcher(){

   $('#splash').animate({ opacity: 0 }, 350,function(){

        //finished animating, minifade out and fade new back in           
        $('#splash').animate({ opacity: 0 }, 70,function(){

            currimg++;

            if(currimg > images.length-1){

                currimg=0;

            }

            var newimage = images[currimg];

            //swap out bg src                
            $('#splash').css("background-image", "url("+newimage+")"); 

            //animate fully back in
            $('#splash').animate({ opacity: 1 }, 280,function(){

                //set timer for next
                setTimeout(backgroundSwitcher,3000);

            });

        });

    });

  }
  setTimeout(backgroundSwitcher,5000);

});

$(document).ready(
    head.js("background.js"),backgroundSwitcher()
);