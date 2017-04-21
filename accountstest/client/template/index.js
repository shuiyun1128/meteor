Template.index.helpers({
    islogin:function(){
            return Meteor.userId()
        },
    user:function(){
        return {
            id: Meteor.user()._id,
            username:Meteor.user().username
        }
    }
})
Template.index.events({
    'click #logout':function(event,template){
        Meteor.logout()
    }
})