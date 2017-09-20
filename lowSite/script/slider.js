var indexer = 0;
var animateInterval;

function animate(){
        if(indexer == 0){
            $(".slider > #slide1").fadeOut(2000);
            $(".slider > #slide2").fadeIn(2000);
        }
        else if(indexer == 1){
            $(".slider > #slide2").fadeOut(2000);
            $(".slider > #slide3").fadeIn(2000);
        }
        else if(indexer == 2){
            $(".slider > #slide3").fadeOut(2000);
            $(".slider > #slide4").fadeIn(2000);
        }
        else if(indexer == 3){
            $(".slider > #slide4").fadeOut(2000);
            $(".slider > #slide1").fadeIn(2000);
        }

        if(indexer == 3) indexer = 0;
        else indexer++;
    }

    animateInterval = setInterval(animate, 8000);
    animate();