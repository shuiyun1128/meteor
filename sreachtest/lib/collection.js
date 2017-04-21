Book = new Mongo.Collection('book'); 
if(Meteor.isServer){
    Book._ensureIndex({
        title:1,
        author:1,
        year:1
    })
}