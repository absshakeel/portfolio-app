/* Script to ensure that the publication animation is triggered accurately in viewport
 * 
 * Credits to Matthew Frey for the inview2 plugin
 */
$("document").ready(function(){
    $('.timeline').bind('inview', function(event, isInView) {
        if (isInView) {
            // element is now visible in the viewport
            var items = document.querySelectorAll(".timeline li");

            for (var i = 0; i < items.length; i++) {
                items[i].classList.add("in-view");
            }
//            console.log("surprise homie");
        } else {
            // element has gone out of viewport
        }
    });


    /*
     * Ensures all the accordion tabs are hiden on page load - initially. 
     */
    $('#collapseOne').collapse("hide");
    $('#collapseOneP2').collapse("hide");
    $('#collapseOneP3').collapse("hide");
    $('#collapseOneP4').collapse("hide");

});