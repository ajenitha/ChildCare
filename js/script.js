$(document).ready(function(){
   /*
    var opened;
   $(".header_top").click(function(){
       if(opened!=undefined && opened != $(this).next()){
            $(opened).slideUp(1000);
            $(opened).find("i").attr("class","icon-arrow-down");
       }
       
       var i = $(this).find("i");
       if($(i).hasClass("icon-arrow-up")){
           $(i).attr("class","icon-arrow-down");
       }else{
           $(i).attr("class","icon-arrow-up");
       }
       
       
        $(this).next().slideToggle(1000);
        opened = $(this).next();
   });

   */
   
   $(".menu_offering").hover(function(){
   $(".submenu_offering").slideToggle("1000");
	});
   $(".menu_campus").hover(function(){
   $(".submenu_campus").slideToggle("1000");
	});
   $(function() {
    $( ".pop" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( ".drink" ).click(function() {
      $( ".pop" ).dialog( "open" );
    });
  }); 
   
   
  
	
});

