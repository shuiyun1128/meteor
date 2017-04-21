Aggregatetest = new Mongo.Collection('aggregatetest'); 
Meteor.methods({
    getData:function(filter){
        var group = {
            _id:{
                type: '$type'
            },
            total:{
                $sum: '$income'
            }
        };
        if(filter.name !== 'all'){
            group._id.name = '$name';
        };
        if(filter.name === 'all'){
            delete filter.name;
        };
        if(filter.type === 'all'){
            delete filter.type;
        };
        console.log(Aggregatetest.aggregate({
            $match:filter
        }))
        console.log(Aggregatetest.aggregate({
            $match:filter
        },{
            $group:group
        }))
        return Aggregatetest.aggregate({
            $match:filter//过滤出符合条件的数据
        },{
            $group:group//将过滤出的数据按照类型和名称分组
        })
    }
})
