function addLoadEvent(func){ 
//将函数作为参数，此函数就是 onload 触发时需要执行的某个函数
    var oldonload=window.onload; 
//将原来的 onload 的值赋给临时变量 oldonload。
    if(typeof window.onload!="function"){ 
    //判断 onload 的类型是否是 function。如果已经执行window.onload=function(){...} 赋值，那么此时 onload 的类型就是 function
    //否，则说明 onload 还没有被赋值，当前任务 func 为第一个加入的任务
        window.onload=func(); 
        //作为第一个任务，给 onload 赋值
    }else{ 
    //是，则说明 onload 已被赋值，onload 中先前已有任务加入
        window.onload=function(){
            oldonload();
            func(); 
            //作为后续任务，追加到先前的任务后面
        }
    }
}