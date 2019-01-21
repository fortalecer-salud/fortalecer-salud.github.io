$( document ).ready(function() {
    //GTM Functions
    function gtmEvents(event, category, action, label){
        return  window.dataLayer.push({
            'event': event,
            'category': category,
            'action': action,
            'label': label
        });
    }

    //Marcaciones promociones
     $('#promociones .card').find('a').click(function(e){
         console.log('prod y posicion', $(this).data('product') ,$(this).data('position'))
        gtmEvents('virtualEvent', 'Cyber Seguros', 'Clic botón', $(this).data('product') +' - '+ $(this).data('position'));
     })    
 });

