jQuery(document).ready(function(){
$('#inchcalc').on('submit', function(evt){
   evt.preventDefault();
   var $centimeters = $('#centimeters');
   var centimeters = $centimeters.val();
   var intocm = $("#centimeters-inches").val();
   axios.get('http://statenweb.mockable.io/conversions/').then(function(result){
      inchestocentimeter = result.data[intocm];
       var total = (centimeters) * ( inchestocentimeter);
       $("#total1").html(total);
   });
}); 

   $('#cmcalc').on('submit', function(evt){
       evt.preventDefault();
       var $inches = $('#inches');
       var inches = $inches.val();
       var cmtoin = $("#inches-centimeters").val();
       $("#inches").html('Loading');
       axios.get('http://statenweb.mockable.io/conversions/').then(function(result){
         centimeterstoinches = result.data[cmtoin];
           var total = (inches) * (centimeterstoinches);
           $("#total").html(total);
       });
   });
});