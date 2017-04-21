Template.index.onCreated(function(){
    var template = Template.instance();
    this.seachContent = new ReactiveVar('');
    this.autorun(function(){
        template.subscribe('searchlist', [template.seachContent.get()]);
    })
})
Template.index.helpers({
    list:function(){
        if(List.find()){
            return List.find()            
        }
    },
    user:function(){
        return Meteor.user()
    }
})
Template.index.events({
    'click .delete':function(){
        var id = this._id;
        swal({
            title: "是否删除？",
            text: "",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#bad9f5",
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            html: false
        }, function(isConfirm){
            if (isConfirm) {
                List.remove(id)
            }
        });
    },
    'click #search':function(event,template){
        var val = $("#searchInput").val().trim();
        template.seachContent.set(val)
    },
    'keyup #searchInput':function(event,template){
        var val = $("#searchInput").val().trim();
        if(event.keyCode == 13){
            template.seachContent.set(val)
        };
        if(val == ''){
           template.seachContent.set(val) 
        }
    }
}) 