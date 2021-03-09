// exersise 1
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findString(astring,alist){
    for (let i=0; i < alist.length; i++){
        if (astring.search(alist[i]) != -1){
            return `found ${alist[i]}`;
        }else{
            return 'not found in string';
        };
    };
};

console.log(findString(dog_string,dog_names));

// exersise 2

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replace(alist){
    for (let i=0; i<alist.length; i++){
        if ( i % 2 == 0){
            alist.splice(i,1,'Even Num')
        };
    };
    return alist
};

console.log(replace(arr));

