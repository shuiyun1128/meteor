//发布
Meteor.publish('urllist',function(){
    return UrlList.find()
})
Meteor.publish('aggregation',function(){
    return Aggregation.find()
})