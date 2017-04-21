Template.addlist.helpers({
  btnText:function(){
    var id = Router.current().state.get('id');
    if(id){
      return '确认修改'
    }else{
      return '确认添加'
    };
  },
  title:function(){
    var id = Router.current().state.get('id');
    if(id){
      return '修改'
    }else{
      return '添加'
    };
  }
})
Template.addlist.events({
    'click #submit':function(){
        var formJson = arrayToJson($('form').serializeArray());
        formJson.owner = Meteor.userId();
        console.log(formJson)
        var id = Router.current().state.get('id');
        if(id){
          List.update({'_id':id},{$set:formJson},function(error,result){
            console.log(error)
            if(error){
              alert(error)
            }else{
              Router.go('/');
            }
          })
        }else{
          List.insert(formJson,function(error,result){
            console.log(error)
            if(error){
              alert(error)
            }else{
              Router.go('/');
            }
          });
        }
    }
})
Template.registerHelper('equal', function(a,b) {
  return a===b
});
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