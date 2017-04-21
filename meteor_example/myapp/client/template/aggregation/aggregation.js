Template.aggregation.onCreated(function(){
    Template.instance().listData = new ReactiveVar();
})
Template.aggregation.onRendered(function(){
    var template = Template.instance();
    template.autorun(function(){
        fetchData(template);
    });  
});
Template.aggregation.events({
    'click #submitCommodity':function(event, instance) {
        var item = $("#item").val();
        var price = parseFloat($("#price").val());
        var quantity =  parseFloat($("#quantity").val());
        var date = $("#date").val();
        if(item&&price&&quantity&&date){
            Aggregation.insert({'item':item,'price':price,'quantity':quantity,'date':date});
        }else{
            alert("请填写数据");
        };
        var template = Template.instance();
        fetchData(template);
    }
});
Template.aggregation.helpers({
    commodityList:function(){
        var listData = Template.instance().listData.get();
        if(listData){
            return _.map(listData ,function(obj,index){
                return {
                    _id:obj._id,
                    item:obj.item,
                    price:obj.price,
                    quantity:obj.quantity,
                    date:obj.date,
                    total:obj.total
                }
            })
        }   
        //return Aggregation.find();
    }
})
function fetchData(template){
    Meteor.call('getData',function(error,response){  
        template.listData.set(response)
    })
}