Template.addaccount.events({
    'click #save':function(){
        var saveData = arrayToJson($("#saveForm").serializeArray())
        Meteor.call('save', saveData, function(error, success) { 
            if (error) { 
                console.log('error', error); 
            } 
            if (success) { 
                 //Router.go('/')
            } 
        });
    }
})
function arrayToJson(formArray){
  var dataArray = {};
  $.each(formArray,function(){
    if(dataArray[this.name]){
      if(!dataArray[this.name].push){
        dataArray[this.name] = [dataArray[this.name]];
      }
      dataArray[this.name].push(this.value || '');
    }else{
      dataArray[this.name] = this.value || '';
    }
  });
  return dataArray;
}