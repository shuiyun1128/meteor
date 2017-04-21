Meteor.methods({ 
    save: function(jsonObj) { 
        return Shoppinglist.insert(jsonObj,function(error,result){
            console.log(Shoppinglist.simpleSchema().namedContext().invalidKeys())
            Shoppinglist.simpleSchema().namedContext().invalidKeys()
        });
    } 
});