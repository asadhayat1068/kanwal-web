$(document).ready(function(){
    $("#reverse_vaccinology input.RV_checkbox").on('change',function(){
        $class_name = $(this).attr('data-for');
        $classSelector = "div.panel."+$class_name;
        console.log($classSelector);
        if(this.checked) {
            $("#reverse_vaccinology " + $classSelector).show();
        } else {
            $("#reverse_vaccinology " + $classSelector).hide();
        }
    });
});