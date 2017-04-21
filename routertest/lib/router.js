Router.configure({
    layoutTemplate:'layout',
})
Router.route('/',{name:'home'},function(){
    this.render('home')
});
Router.route('/aboutus',{name:'aboutus'},function(){
    this.render('aboutus')
});
Router.route('/contactus',function(){
    this.layout('contactus')
});
Router.route('/userslist',function(){
    console.log(this.request.query)
    this.render('userslist',{
        data:function(){
            return {users:Userslist.find()};
        }
    })
});
// Router.route('userslist',{
//     template:'userslist',
//     path:'/userslist',
//     data:function(){
//         return {users:Userslist.find()};
//     }
// })
Router.route('/user/:_id',{name:'userDetail',controller:'userController'})
