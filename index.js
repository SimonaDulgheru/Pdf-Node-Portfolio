


const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const util = require("util");
const open = require("open");
const pdf = require('html-pdf');
const api = require("./api");
const generateHTML = require("./generateHTML");


const questions = [

    {
        type: "list",
        name: "color",
        message: "What is your favorite color?",
        choices: ["green","blue","pink","red"]
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username:"
    },

];

const writeFile = util.promisify(fs.writeFile);

function writetoFile(data, fileName) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
};



function init() {
    inquirer.prompt(questions)
        .then(({ github, color }) => {
            console.log("Searching");
            api.getUser(github)
                .then(response =>
                    api.getTotalStars(github)
                        .then(stars => {
                            console.log(github)
                            console.log(response)
                            return generateHTML({
                                stars, color, response
                            })
                        }
                        ))
                .then(async function (html) {

                    await writeFile("index.html", html);

                    const readHtml = fs.readFileSync('index.html', 'utf8');
                    const options = { 
                        format: 'Letter',
                        width: '1000px',
                        height: '900px'
                        };
                     
                    pdf.create(readHtml, options).toFile('GitProfile.pdf', function(err, res) {
                      if (err) 
                      return console.log(err);
                      console.log(res); 
                    });
            
                })
                .catch(function(error){
                    console.log(error)
                })
        })
}
init();






