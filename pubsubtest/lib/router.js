Router.route('/',{
    template:'shoppinglist',
    waitOn:function(){
        console.log(Session.get('limit'))
        Meteor.subscribe('shoppinglist',{limit:Session.get('limit')});
        Meteor.subscribe('shoppingtype')
        //Meteor.subscribe('listAndtype',{limit:Session.get('limit')})
    }
})
Router.route('/food',{
    template:'foodlist',
    waitOn:function(){
        //console.log(Shoppingtype.findOne({name:"食物"}))
        Meteor.subscribe('shoppingtype')
        Meteor.subscribe('foodlist',{type:Shoppingtype.findOne({name:"食物"})._id})
    },
    data:function(){
        return {foodlist:Shoppinglist.find()}
    }
})
Router.route('/addaccount',{
    template:'addaccount',
    waitOn:function(){
        return Meteor.subscribe("shoppingtype");
    },
    data:function(){
        return {
            type:Shoppingtype.find()
        }
    }
})