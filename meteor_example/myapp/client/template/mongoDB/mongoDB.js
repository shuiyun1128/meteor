Template.mongoDB.onCreated(function(){
    Session.setDefault('editId_mongoDB',null);
})
Template.mongoDB.events({
    'click #submit':function(){
        var title = $("#title").val();
        var url = $("#url").val();
        if(title&&url){
            UrlList.insert({'title':title,'url':url});
        }else{
            alert('请填写内容')
        }
    },
    'click .edit':function(){
        Session.set('editId_mongoDB',this._id);//this是urlList下的每一条数据对象
    },
    'click .delete':function(){
        if(Session.get('editId_mongoDB') == this._id){
            alert('此行正在编辑');
        }else{
            UrlList.remove(this._id,function(){
                alert('已删除')
            });
        }
    }
});
Template.mongoDB.helpers({
    urlList:function(){
         var list = UrlList.find();
         return list;
    },
    edit:function(_id){
        if(Session.get('editId_mongoDB') == _id){
            return true;
        }
    }
})