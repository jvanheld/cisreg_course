// dataTable.js,v 1.0 2012/06/11 12:35:31 jsgarcia Exp
// /export/internal_use/PBGC/cvsroot/regulon_current/Regulon50/Regulon50-war/web/js/dataTable.js
//Begin 
    $(document).ready(function(){ 
        $('.alternateColorTable tr:odd').addClass('tableColorOdd');
        $('.alternateColorTable tr:even').addClass('tableColorEven');
    });

    $(document).ready(function() {
    $('.alternateColorTable tr:odd').mouseover(function(){
        $(this).removeClass('tableColorOdd').addClass('highlight');
    }).mouseout(function(){
        $(this).removeClass('highlight').addClass('tableColorOdd');});
    });
    $(document).ready(function() {
    $('.alternateColorTable tr:even').mouseover(function(){
        $(this).removeClass('tableColorEven').addClass('highlight');
    }).mouseout(function(){
        $(this).removeClass('highlight').addClass('tableColorEven');});
    });
    
    
    // MODIFICA EL COLOR DE LA TABLA Y OVER MAUSE --EVIDENCE--REFERENCE
    $(document).ready(function(){ 
        $('.tableEvRef tr:odd').addClass('tableEvRefColorOdd');
        $('.tableEvRef tr:even').addClass('tableEvRefColorEven');
    });

    $(document).ready(function() {
    $('.tableEvRef tr:odd').mouseover(function(){
        $(this).removeClass('tableEvRefColorOdd').addClass('highlight');
    }).mouseout(function(){
        $(this).removeClass('highlight').addClass('tableEvRefColorOdd');});
    });
    $(document).ready(function() {
    $('.tableEvRef tr:even').mouseover(function(){
        $(this).removeClass('tableEvRefColorEven').addClass('highlight');
    }).mouseout(function(){
        $(this).removeClass('highlight').addClass('tableEvRefColorEven');});
    });
    
    
    
    // MODIFICA EL COLOR DE LA TABLA Y OVER MAUSE --BLUE
    $(document).ready(function(){ 
        $('.alternateColorTableBlue tr:odd').addClass('tableColorBlueOdd');
        $('.alternateColorTableBlue tr:even').addClass('tableColorBlueEven');
    });

    $(document).ready(function() {
    $('.alternateColorTableBlue tr:odd').mouseover(function(){
        $(this).removeClass('tableColorBlueOdd').addClass('highlight');
    }).mouseout(function(){
        $(this).removeClass('highlight').addClass('tableColorBlueOdd');});
    });
    $(document).ready(function() {
    $('.alternateColorTableBlue tr:even').mouseover(function(){
        $(this).removeClass('tableColorBlueEven').addClass('highlight');
    }).mouseout(function(){
        $(this).removeClass('highlight').addClass('tableColorBlueEven');});
    });
    
    
    // MODIFICA EL COLOR DE LA TABLA Y OVER MAUSE --GRAY
    $(document).ready(function(){ 
        $('.alternateColorTable60Porcent tr:odd').addClass('tableColorOdd');
        $('.alternateColorTable60Porcent tr:even').addClass('tableColorEven');
    });

    $(document).ready(function() {
    $('.alternateColorTable60Porcent tr:odd').mouseover(function(){
        $(this).removeClass('tableColorOdd').addClass('highlight');
    }).mouseout(function(){
        $(this).removeClass('highlight').addClass('tableColorOdd');});
    });
    $(document).ready(function() {
    $('.alternateColorTable60Porcent tr:even').mouseover(function(){
        $(this).removeClass('tableColorEven').addClass('highlight');
    }).mouseout(function(){
        $(this).removeClass('highlight').addClass('tableColorEven');});
    });
//End 
