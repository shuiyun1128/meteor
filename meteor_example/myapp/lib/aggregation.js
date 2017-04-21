Aggregation = new Mongo.Collection('aggregation');
//计算总价
Meteor.methods({
    getData:function(){
        return Aggregation.aggregate({
            $project:{'item':'$item','price':'$price','quantity':'$quantity','date':'$date','total':{$multiply:['$price','$quantity']}}
        })
    }
})