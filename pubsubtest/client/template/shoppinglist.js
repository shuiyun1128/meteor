Session.set('limit',3);
//模板订阅
// Template.shoppinglist.onCreated(function(){
//     Tracker.autorun(function(){
//         Meteor.subscribe('shoppinglist',{limit:Session.get('limit')})        
//     })
// })
Template.shoppinglist.helpers({
    list:function(){
        var listAndtype = []
        Shoppinglist.find().forEach(function(obj){
            obj.type = Shoppingtype.findOne({_id:obj.type}).name;
            listAndtype.push(obj)
        })
        return listAndtype
        //return Shoppinglist.find();
    },
    cate:function(){
        return Shoppingtype.findOne(this.type)
    }
})
Template.shoppinglist.events({
    'click #more':function(){
        Session.set('limit',Session.get('limit')+3);
    }
})