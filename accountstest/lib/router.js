Router.route('/',{name:'index'},function(){
    this.render('index')
})
Router.route('/login',{name:'login'},function(){
    this.render('login')
})