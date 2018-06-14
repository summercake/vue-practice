let str = require('./a.js');
import x from './b.js';
console.log(str);
console.log(x);

// es6
let a = b => c => d => b + c + d;

// es7
let obj = {
    school: 'zfpx'
};
let obj1 = {
    school: 8
};
let newObj = { ...obj,
    ...obj1
};

import './index.css';
import './style.less';