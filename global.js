// console.log(global)

setTimeout(() => {
    console.log('in time out')
    clearInterval(int)
}, 3000)

const int = setInterval(() => {
    console.log('in the interval')
}, 1000)