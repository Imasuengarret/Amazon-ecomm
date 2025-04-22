import {formatCurrency} from '../scripts/utils/money.js'

console.log('test suite: formatCurrency');
console.log('convert cents into dollar');

if(formatCurrency(2095) === '20.95'){
    console.log('passed');
}else {
    console.log('failed');   
}
console.log('workss with zero(0)');
if(formatCurrency(0) === '0.00'){
    console.log('passed');
}else {
    console.log('failed');   
};
console.log('rounds up to the nearest cents');
if (formatCurrency(2000.5) === '20.01') {
    console.log('passed');
} else {
    console.log('failed');
}
/* these are called test cases 1. basic test cases and edge cases */
// group of related test is called a test suite