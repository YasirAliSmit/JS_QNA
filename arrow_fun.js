// let explore arrow function in JavaScript

// const getName = name => console.log('My Name is ',name);

// getName('Yasir');

const userData = {
    name: 'Yasir',
    surname:'Ali',
    getName : function(){
        let that = this;
    setTimeout(function()  {
        console.log('My Name is ',that.name);
    }, 2000);
}
}
userData.getName(); // this will return undefined because arrow function does not have its own this context, it takes the this value from the enclosing lexical context.