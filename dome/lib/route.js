Router.configure({
    layoutTemplate:'layout',
    loadingTemplate:'loading'
    
})
Router.route('/',{
    template:'index'
})
Router.route('/addlist',{
    template:'addlist'
})
Router.route('/editlist',{
    template:'addlist',
    waitOn:function(){
        return Meteor.subscribe('searchlist')
    },
    data:function(){
        this.state.set('id',this.params.query.id);
        //console.log(this.params.query.id)
        return List.findOne({_id:this.params.query.id});
    }
})