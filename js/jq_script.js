
function isIntoView(elem)
{
    var documentViewTop = $(window).scrollTop();
    var documentViewBottom = documentViewTop + $(window).height();
    var elementTop = $(elem).offset().top;
    var elementBottom = elementTop + $(elem).height();
    return ((elementBottom <= documentViewBottom) && (elementTop >= documentViewTop));
}
var flag = 0;
$(window).scroll(function(){
    if (isIntoView($('#nss_sts_focus'))){
       if(flag==0){
            $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            
            flag = 1;
       } 
    }
})