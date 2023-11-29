
$(document).ready(function(){
    
    $('body').on({ 'mousemove': function (e){
        console.clear()
        let clientY = e.originalEvent.clientY;
        let clientX = e.originalEvent.clientX;
        $('#cursor').css({
            'left' : (clientX - 12)+'px',
            'top'  : (clientY - 12)+ 'px'
        })

    }})
})
