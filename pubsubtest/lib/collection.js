Shoppinglist = new Mongo.Collection('shoppinglist')
Shoppingtype = new Mongo.Collection('shoppingtype'); 

ShoppinglistSchema = new SimpleSchema({
    money:{
        type:Number,
        label:'消费金额'
    },
    mome:{
        type:String,
        label:'消费说明'
    },
    createtime:{
        type:String,
        label:'消费时间'
    },
    type:{
        type:String,
        label:'消费类型'
    }
});
Shoppinglist.attachSchema(ShoppinglistSchema)