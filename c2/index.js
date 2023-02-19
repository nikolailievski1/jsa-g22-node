function c2f(celsius) 
{
  let c = celsius;
  let cToF = c * 9 / 5 + 32;
  let message = c+'C is ' + cToF + ' F.';
    console.log(message);
}

function f2c(fahrenheit) 
{
  let f = fahrenheit;
  let fToC = (f - 32) * 5 / 9;
  let message = f+'F is ' + fToC + 'C.';
    console.log(message);
} 
c2f(12);
f2c(100);

const fun = (parm,c) => {
    let r = parm(c) + 100;
    return r;
}

console.log('FUN:', fun(c2f,15));
