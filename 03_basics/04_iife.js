// Immediately Invoked Function Expressions (IIFE) 
(function chai(){          // jab  function ka name ho to usko named iife khte h
    console.log("DB Connected") //result : DB Connected
})();

((name) => {  // jab  function ka name nhi ho to usko unnamed iife khte h
    console.log(`DB Connected two ${name}`) //result : DB Connected two krishna
})('krishna')