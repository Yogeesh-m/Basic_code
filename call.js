function greet(name,callback){
    console.log(" hi " + name)
    callback()
}

function callme(){
    console.log("how are you")
}
greet("yogi",callme)

function first(name1){
    name1("raj")
}

function second (name3){
    console.log(name3)
}
first(second)