HTTP.call('GET', 'http://localhost:3003/posts',{params:{a:1}},function(error, response) { 
    if (error) { 
        console.log('error', error); 
    }else{
        if (response) { 
          console.log(response)
        }
    } 
});
HTTP.call('POST', 'http://localhost:3003/posts',{
    // data:{
    //     "id":1,
    //     "title": "测试1",
    //     "author": "aa"
    //     },
        query:'b=2'
    },function(error, response) { 
    if (error) { 
        console.log('error', error); 
    }else{
        if (response) { 
          console.log(response)
        }
    } 
});
HTTP.call('PUT', 'http://localhost:3003/posts/1',{
    data:{
        "author": "aaaa"
        }
    },function(error, response) { 
    if (error) { 
        console.log('error', error); 
    }else{
        if (response) { 
          console.log(response)
        }
    } 
});
HTTP.call('DELETE', 'http://localhost:3003/posts/8',{},function(error, response) { 
    if (error) { 
        console.log('error', error); 
    }else{
        if (response) { 
          console.log(response)
        }
    } 
});