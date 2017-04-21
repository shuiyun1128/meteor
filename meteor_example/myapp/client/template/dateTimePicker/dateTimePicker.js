Template.dateTimePicker.onRendered(function(){
    $('#datetimepicker').datetimepicker({
        format: 'yyyy-mm-dd hh:ii',
        autoclose: true
    });
})
Template.dateTimePicker.events({
    'click #click'(events,template){
        Bert.alert('危险警告','danger');
    }
});