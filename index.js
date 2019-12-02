


 
 


const fs = require(`fs`);
const path = require(`path`);
const inquirer = require(`inquirer`);
const open = require(`open`);
const util = require(`util`);
const pdf = require(`html-pdf`);
const generateHtml = require(`./generateHTML`);
const api = require(`./api`);



const questions = [{
    type:`input`,
    name:`github`,
    message: `What is your Github username?`,
},
{
    type:`list`,
    name:`color`,
    message: "What color do you want to chose from: green, pink, blue?",
    choices:[`green`, `blue`,`pink`, `red`]
    
    
}]
console.log(questions);

const writeFile = util.promisify(fs.writeFile);
function writeToFile(data, fileName) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)

}

function init() {
    inquirer.prompt(questions)
    .then (({github, color})=>{

        api.getUser(github)
        .then(res=>{
            api.getTotalStars(github)
            .then(stars=>{
                return generateHtml({
                    stars,
                    color,
                    res
                })
            })
        .then(async function (html){
            await writeFile(`index.html`, html);
            const readHtml = fs.readFileSync(`index.html`,`utf8`);
            const options = {
                format: `Letter`,
                width: `1000px`,
                height: `900px`,
            };
            pdf.create(readHtml,options).toFile(`gitProfile.pdf`, function (error,response){
                if(error)
                 return console.log(error)
                console.log(response);
            })
        })
        .catch((error)=>{
            console.log(error)
        })

        })
    })
}   
     init();















// fs.writeFile(fileName, (err, data)=>{
//     if(err){
//          console.log(err);
//          return;
//         }
//          else{
//         console.log(data)
//         }
            
//     })
    // fs.readFile('./generateHTML.js',(error, data)=> {
    //     if (error) {
    //         console.log(error)
    //     } else {
    //        console.log(data)
    //     }
      
    // });

 
// const writeToFile = () => {
    
//     colors.forEach(color => {
        
//         fs.writeFile(new PDF(), `utf8`, (err,data)=> {
            
//         if(err){
//             console.log(err);
//             return;
//         }
//         else{
//             console.log(colors)
//         }
    
//     })

// })
// }
// writeToFile();


//     if(userInput.value ===`red`)
//     fs.writeFile(fileNameRed, `utf8`, (err,data)=> {
//         if(userInput.value === `blue`)


       
//     })

// }

// generateHTML(data,color)
   
    

//     if(questions.answer === `red`)
    // fs.writeFile(SimonaRed.pdf,generateHTML(data),() =>{
    //     if(err){
    //         console.log(err)
    //          return;
    //           }
    //            else{
    //            console.log(data)
    //                 }
    //              });
   

    // fs.writeFile(Simona.pdf, (err,data) => { // creates a file ( insert the name file that u want to create(in git bash) and will create a file inside your directory -activity.)
        //         if(err){
        //             console.log(err)
        //             return;
        //         }
        //         else{
        //          console.log(data)
        //         }
        //      });

    //     if(err){
    //         console.log(err)
    //         return;
    // }  
    // console.log(data); 
    //  }
    

// function init() {
    //questions.ask
    //await questions.answer
   

    // init();



// inquirer.prompt(questions).then(answers => {
//   console.log(`Hi ${answers['color']}!`)
// })


// const questions = [
//     {
//         typeUser:`What color u want: chose from green, blue, pink and red `
//     }
  
// ];



    // fs.readFile(`./generateHTML.js`,init(err, data){

    // })
// 
//   const html = require(`./generateHTML`);
//   console.log(html.generateHTML);
// 




// fs.writeFile(fileName, firstName, (err,data) => { // creates a file ( insert the name file that u want to create(in git bash) and will create a file inside your directory -activity.)
    //         if(err){
    //             console.log(err)
    //             return;
    //         }
    //         else{
    //          console.log(data)
    //         }
    //      });
    
//fs write = example== codul de sus creaza un fisier in folderul in care ma aflu acum. am scris in git bash (node index data.txt Simona) si a creat un
//fisier text cu numele meu, care este acum in calc meu 


// const pdfGenerator = require('template-pdf-generator');
// const fs = require('fs');
// const css = require(`./generateHTML`);
// var pdf = require("pdf-creator-node");
// var fs = require('fs');
// var html = fs.readFile('generateHTML.js', 'utf8');

// let data = {
//     name: 'Simona',
//     image: `https://github.com/account`,
//     links:`https://goo.gl/maps/9nNUJrnPwzWXp2g17`,
//     profile:`https://github.com/SimonaDulgheru`,
//     public:`https://github.com/SimonaDulgheru?utf8=%E2%9C%93&tab=repositories&q=&type=public&language=`,
//     followers:`https://github.com/SimonaDulgheru?tab=followers`,
//     stars:`https://github.com/SimonaDulgheru?tab=stars`,
//     following:`https://github.com/SimonaDulgheru?tab=following`,
//   };
  
//  let template = 'generateHTML(data)';
 
//  pdfGenerator(data, template, css).pipe(fs.createWriteStream('out.pdf'));

// module.exports = require(`./generateHTML`)

//  const simonaRed = generateHTML(data)=>{

//  }


// const inquirer = require('inquirer')