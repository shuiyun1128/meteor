Template.book.onCreated(function(){
    var template = Template.instance();
    this.searchName = new ReactiveVar('');
    this.oldValue = new ReactiveVar('');
    this.searching = new ReactiveVar(false);
    template.autorun(function(){
        template.subscribe('booklist',template.searchName.get(),function(){
            setTimeout(function() {
                template.searching.set(false);                
            }, 300);
        })
    })
})
Template.book.helpers({
    searching:function(){
        return Template.instance().searching.get();
    },
    searchName:function(){
        return Template.instance().searchName.get();
    },
    list:function(){
        if(Book.find()){
            return Book.find();
        }
    }
})
Template.book.events({ 
    'keyup [name=search]': function(event, template) { 
        var value = event.target.value.trim();
         if(value != '' && event.keyCode == 13){
             Template.instance().searchName.set(value);
             if(Template.instance().searchName.get() != Template.instance().oldValue.get()){
                Template.instance().searching.set(true);
                Template.instance().oldValue.set(value);
             }
         }
         if(value === ''){
             Template.instance().searchName.set(value);
         }
    } 
});