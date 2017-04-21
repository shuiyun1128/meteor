if(Shoppinglist.find().count()==0 && Shoppingtype.find().count()==0){
    var food = Shoppingtype.insert({name:'食物'});//值为此记录的_id
    var traffic = Shoppingtype.insert({name:'交通'});
    var life = Shoppingtype.insert({name:'生活'});
    Shoppinglist.insert({
        money:200,
        mome:'跟朋友吃饭',
        createtime:'2017-2-12',
        type:food
    });
    Shoppinglist.insert({
        money:20,
        mome:'工作餐',
        createtime:'2017-2-14',
        type:food
    });
    Shoppinglist.insert({
        money:100,
        mome:'打车',
        createtime:'2017-2-14',
        type:traffic
    });
    Shoppinglist.insert({
        money:500,
        mome:'买衣服',
        createtime:'2017-2-16',
        type:life
    });
    Shoppinglist.insert({
        money:150,
        mome:'同事聚餐',
        createtime:'2017-2-17',
        type:food
    });
}