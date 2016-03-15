/*
*	
*	Description dlp_test to show figure
*	by paclema
*
*/

// this line must be at the very beginning of the script
ui.screenMode("immersive");

// forces portrait mode 
ui.screenMode("portrait");

// prevents the app to scroll vertically which is nice when
// you have some inner widgets that might scroll on touch events 
ui.allowScroll(false); 

//ui.toolbar.title("UI examples ---> lalalallala ");
//ui.toolbar.bgColor(55, 155, 155, 255);
//ui.toolbar.show(true);

//ui.showVirtualKeys(true);
ui.backgroundColor(0, 0, 0);
var loopcount = 0;


var l2 = util.loop(5000, function () { 
    if (loopcount%2 == 0) ui.backgroundImageTile("bq_blanco72dpi.png");
    else ui.backgroundImageTile("black.jpg");
    loopcount++ ;
    
}).start();

//this is how you change the speed of the looper
l2.speed(1000);