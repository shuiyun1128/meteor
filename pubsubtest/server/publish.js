//发布部分消费记录
Meteor.publish('shoppinglist',function(option){
    return Shoppinglist.find({},{limit:option.limit})
})
//发布某个分类下的消费记录
Meteor.publish('foodlist',function(option){
    return Shoppinglist.find({type:option.type})
})
//发布消费类型
Meteor.publish('shoppingtype',function(option){
    return Shoppingtype.find()
})
//发布消费记录和类型的关联数据 利用reywood:publish-composite包
// Meteor.publishComposite('listAndtype',{
//     find:function(option){
//         console.log(option+"1")
//         return Shoppinglist.find();
//     },
//     children:[
//         {
//             find:function(list){
//                 return Shoppingtype.find({_id:list.type})
//             }
//         }
//     ]
// })