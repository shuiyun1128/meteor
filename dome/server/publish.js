// Meteor.publish('listdata',function(userId){
//     //console.log(List.find({owner:userId}).fetch())
//     return List.find({owner:userId});
// })
Meteor.publish('searchlist',function(search){
    var searchCondition = {};
    var regex = new RegExp(search,'i')
    searchCondition = {
        $and:[
            {
                $or:[
                    {sellerName:regex},
                    {buyerName:regex},
                    {creditorAmount:regex},
                    {creditorDueDate:regex},
                    {transType:regex},
                    {limitAmout:regex},
                    {approvedAmount:regex}
                ]
            },
            {owner:this.userId}
        ]  
    };
    //console.log(List.find(searchCondition).fetch())
    return List.find(searchCondition)
})