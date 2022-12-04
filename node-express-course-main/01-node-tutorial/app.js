// const { readFile, writeFile} = require('fs')
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async ()=>{
//     try {
//         const first = await readFilePromise('./content/irst.txt', 'utf8')
//         const second = await readFilePromise('./content/second.txt', 'utf8')
       
//         console.log(first,second)
//     }catch(error)
//     {
//         console.log(error)
//     }
// }
// console.log('aman')


//event emitter

// const EventEmitter = require('events')

// const customEmitter = new EventEmitter()

// customEmitter.on('response',(name,id)=>{
//     console.log(`data recieved ${name}, ${id} with argumets`)
    
// })

// customEmitter.on('response',()=>{
//     console.log('data recieved second')
    
// })

// customEmitter.emit('response','man', 23) //this shoukd be after the on events
// we can ass arguments from emit and revice in on funtions

// stream
const{createReadStream}= require('fs')
const stream = createReadStream('./content/big.txt')
stream.on('data',(result)=>
{
    console.log(result)
})