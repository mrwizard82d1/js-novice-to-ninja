// Arguments and parameters

// Defines a function **argument** for the function
const speak = function(name = 'luigi', time = 'night') {
    console.log(`good ${time}, ${name}`);
}

// Passes a function **parameter** into the function
speak();
speak('mario');
speak('shaun', 'day')
