$(document).ready(function(){
  $('#lightbox-cerrar-youtube').click(function(){
            $("#lightbox").hide();
           
            $("#lightbox-panel-youtube").fadeOut("slow");
            $("#lightbox-contenido-youtube").html("");
           
    });
});

function abreLightboxYoutube(){
  $("#lightbox").show();
    $("#lightbox-panel-youtube").fadeIn('slow');
    $("#lightbox-contenido-youtube").html("<iframe width='410' height='304' src='http://www.youtube.com/embed/wRDXMQRdtLg' frameborder='0' allowfullscreen></iframe>");
 
}
