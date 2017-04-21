Template.registerHelper('isActive', function(argument) {
    if(Router.current().route.getName() === argument){
        return 'active'
    }
});
