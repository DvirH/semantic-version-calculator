# semantic-version-calculator
A little script written in node js to get the next release version based on the semantic versioning rules 

In order to install the package run on your cli

````
npm install semantic-version-calculator --dev-save
````
Create a js file with the following code

````
const sm = require('semantic-version-calculator')
sm().then(v => {
  console.log(v)
})
````

Facing issues?
1. Verify that your git is accessible through the directory the code is running
2. Verify that you have commits of the following structure:
    <br/>
    fix: fixed bug<br/> 
    feat: added new option<br/>
    fix!: this is a breaking change<br/>
    feat!: this is a breaking change    