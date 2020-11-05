(function($){
    $('#search').focus().keyup(function(event){
        let input = $(this);
        let val = input.val();
        if (val == ''){
            $('#filter div').show();
            $('#filter span').removeClass('highlighted');
            return true;
        }
        var regexp = '\\b(.*)';
        for (var i in val){
            regexp += '('+val[i]+')(.*)';
        }
        
        regexp += '\\b';
        $('#filter div').show();
        $('#filter').find('.card-body').each(function(){
            let span = $(this);
            let resultats = span.text().match(new RegExp(regexp, 'i'));
            console.log(resultats);
            let string = '';
            if (resultats){
                    for (let i in resultats){
                        if (i>0){
                            if (i%2 ==0){
                                string += '<span class="highlighted">' + resultats[i]+'<span>';
                            } else {
                            string += resultats[i];
                            }    
                        }

                    }
                    span.empty().append(string);
                } else {
                    span.parent().hide();
                }

        });
    });



})(jQuery);