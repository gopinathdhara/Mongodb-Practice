const yargs=require('yargs');
const notes=require('./notes');

yargs.command({ 
    command: 'add', 
    describe: 'Adds two number', 
    builder: { 
        firstNumber: { 
            describe: 'First Number', 
            demandOption: true,  // Required 
            type: 'number'     
        }, 
        secondNumber: {   
            describe: 'Second Number', 
            demandOption: true, 
            type: 'number'
        },
        title: {   
            describe: 'Title', 
            demandOption: true, 
            type: 'string'
        } 
    }, 
  
    // Function for your command 
    handler(argv) { 
        console.log("Result:",  
            (argv.firstNumber),(argv.secondNumber)) 
            notes.addnumber(argv.firstNumber,argv.secondNumber,argv.title)
           //console.log(sum)
    } 
}) 


yargs.command({ 
    command: 'remove', 
    describe: 'Removes two number', 
    builder: { 
        
        title: {   
            describe: 'Title', 
            demandOption: true, 
            type: 'string'
        } 
    }, 
  
    // Function for your command 
    handler(argv) { 
    
            notes.removenumber(argv.title)
           //console.log(sum)
    } 
}) 
   
yargs.parse()