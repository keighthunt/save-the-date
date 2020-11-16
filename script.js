(function() {

    var card = document.querySelector(' .js-flip-card ');

    setTimeout(function(){ 
        card.classList.add( 'active' );
    }, 4000);

    setTimeout(function(){ 
        card.classList.add( 'done' );
    }, 5500);

    setHeight();
    window.addEventListener('resize', setHeight);

    function setHeight() {
        var width = card.clientWidth;
        var rat1 = 87;
        var rat2 = 100;

        var ratio  = width / rat1;
        var calculated_height = ratio * rat2;

        card.style.height = calculated_height + "px";


        console.log(calculated_height);
    }
}());