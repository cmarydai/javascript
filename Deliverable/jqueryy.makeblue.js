;(function($){

    $.fn.makeBlue = function(options) {
         var settings = {
             text:true,
             bg:true
        }

        if(options){
           $.extend(settings, options)
        }

        return this.each(function() {
        
            if(settings.text == true){
                $(this).css({
                    "color":"blue"
                });
            }

            if(settings.bg == true){
                $(this).css({
                    "background-color":"#339"
                });
            }
        });
    };

})(jQuery); 

