userController = RouteController.extend({
    template:'user',
    data:function(){
        return Userslist.findOne({_id:''+this.params._id})
    }
})