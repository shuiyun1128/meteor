Template.select.helpers({
  selectList:function(){return[{name:"中国",selected:"no"},{name:"美国",selected:"yes"}]}
})
//全局helper
Template.registerHelper('equal',function(a,b){
  return a===b;
})