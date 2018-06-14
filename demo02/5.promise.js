// example 1
// cook -> buy food
let a = '';
function buy(callback) {
    setTimeout(() => {
        a = 'mashrooms';
        callback(a);
    }, 2000)
}

buy(function cookie(val) {
    console.log(val);
});

// function cookie(){
//     console.log(a);
// }

// cookie();

// example 2
// promise.js is used for solve callback problems
// it has three status, resolve(), reject(), pending()

let p = new Promise((resolve, reject) => {
    setTimeout(function () {
        let a = "mashroom";
        resolve(a)
    }, 2000);
})
p.then((data) => { console.log(data) }, (err) => { console.log(err) })


// example 3
function buyBag() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('buy');
            } else {
                reject('not buy');
            }
        }, Math.random() * 1000);
    });
}

buyBag().then(function (data) {
    console.log(data);
}, function (data) {
    console.log(data);
})

// example 4
function ajax({url='', type='get', dataType='json'}){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open(type,url,true);
        xhr.responseType = dataType;
        xhr.onload = function(){
            if(xhr.status == 200 ){
                resolve(xhr.response);
            }else{
                reject('not found');
            }
        };
        xhr.onerror = function (err){
            reject(err);
        };
        xhr.send();
    })
}