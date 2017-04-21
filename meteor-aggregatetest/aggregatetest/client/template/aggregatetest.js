Template.aggregatetest.onCreated(function(){
    //var template = Template.instance();//Template实例
    this.currentType = new ReactiveVar('all');//meteor add reactive-var
    this.currentName = new ReactiveVar('all');
    this.total = new ReactiveVar();
    //this 和 template 等价
});
Template.aggregatetest.onRendered(function(){
    var template = Template.instance();
    template.autorun(function(){
        fetchData(template);
    });
});
Template.aggregatetest.helpers({
    investType:function(){
        var all = Aggregatetest.find().fetch();
        return _.uniq(all.map(function(domElement){
            return domElement.type;
        }))
    },
    // currentType:function(){
    //     return Template.instance().currentType.get();
    // },
    investName:function(){
        var currentType = Template.instance().currentType.get();
        var cdt = {};
        //console.log(currentType)
        if(currentType != 'all'){
            cdt = {type:currentType}
        };
        var all = Aggregatetest.find(cdt);
        return _.uniq(all.map(function(domElement){
            return domElement.name;
        }));
    },
    incomeItem:function(){
        var items = Template.instance().total.get();
        if(items){
            return items.map(function(item,index){
                var name = item._id.name;
                return {
                    _id:index,
                    item:{
                        type:item._id.type,
                        name:name?name:'all'
                    },
                    total:item.total
                }
            })
        }
    }
});
Template.aggregatetest.events({
    'change select[name="investType"]':function(event, instance){
        var currentType = event.target.value;
        Template.instance().currentType.set(currentType);
    },
    'change select[name="investName"]':function(event, instance){
        var currentName = event.target.value;
        Template.instance().currentName.set(currentName);
    },
});
function fetchData(template){
    var filter = {
        type:template.currentType.get(),
        name:template.currentName.get()
    };
    Meteor.call('getData',filter,function(error,response){//服务端执行函数返回的错误和结果
        //console.log(response)
        template.total.set(response)
    })
}
