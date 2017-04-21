Meteor.publish('booklist',function(search){
    var searchinfo = {};
    var projection ={
        limit:10,
        sort:{
            year:1
        }
    }
    var regex = new RegExp(search,'i')
    if(search){
        searchinfo = {
            $or:[
                {title:regex},{author:regex},{year:regex}
                ]
        }
    }
    return Book.find(searchinfo,projection)
})