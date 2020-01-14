const colors = {
  green: {
      wrapperBackground: "rgb(70, 70, 69)",
      headerBackground: "green",
      headerColor: "black",
      photoBorderColor: "white",
      links: "white"
  },
  blue: {
      wrapperBackground: "#5F64D3",
      headerBackground: "#26175A",
      headerColor: "white",
      photoBorderColor: "#73448C",
      links: "white"
  },
  pink: {
      wrapperBackground: "#879CDF",
      headerBackground: "#FF8374",
      headerColor: "black",
      photoBorderColor: "#FEE24C",
      links: "darkgray"
  },
  red: {
      wrapperBackground: "#DE9967",
      headerBackground: "#870603",
      headerColor: "black",
      photoBorderColor: "white",
      links: "darkgray"
  }
};


function generateHTML(data) {
  console.log(data)

  return `<!DOCTYPE html>
  <html lang="en">
  
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
  // <link href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap" rel="stylesheet">
  <title>${data.response.data.name}</title>
      <style>
      @page {
        margin: 0;
      }
     *,
     *::after,
     *::before {
     box-sizing: border-box;
     }
     html, body {
     padding: 0;
     margin: 0;
     }
     html, body, .wrapper {
     height: 100%;
     }
     .wrapper {
     background-color: ${colors[data.color].wrapperBackground};
     padding-top: 100px;
     }
     body {
     background-color: white;
     -webkit-print-color-adjust: exact !important;
     font-family: 'Varela Round', sans-serif;
     }
     main {
     background-color: #E9EDEE;
     height: auto;
     padding-top: 30px;
     }
     h1, h2, h3, h4, h5, h6 {
      font-family: Arial, Helvetica, sans-serif;
     margin: 0 auto;
     }
     h1 {
     font-size: 3em;
     
     }
     h2 {
     font-size: 2.5em;
     
     }
     h3 {
     font-size: 2em;
     padding: 30px;
     margin:20px;
     
     }
     h4 {
     font-size: 2em;
     
     
     }
     h5 {
     font-size: 1.3em;
     
     }
     h6 {
     font-size: 1.2em;
    
     }
     .photo-header {
     position: relative;
     margin: 0 auto;
     margin-bottom: -50px;
     display: flex;
     justify-content: center;
     flex-wrap: wrap;
     background-color: ${colors[data.color].headerBackground};
     color: ${colors[data.color].headerColor};
     padding: 10px;
     width: 95%;
     border-radius: 6px;
     }
     .photo-header img {
     width: 300px;
     height: 300px;
     border-radius: 50%;
     object-fit: cover;
     margin-top: -75px;
     margin-left:42%;
     margin-right:50%;
     border: 6px solid ${colors[data.color].photoBorderColor};
     box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
     }
     .photo-header h1, .photo-header h2, .photo-header h4 {
     width: 100%;
     text-align: center;
     }
     .photo-header h1 {
     margin-top: 10px;
     }
     .links-nav {
     width: 100%;
     text-align: center;
     padding: 20px 0;
     font-size: 1.8em;
     }
     .nav-link {
     display: inline-block;
     margin: 5px 10px;
     }

     
     .workExp-date {
     font-style: italic;
     font-size: .7em;
     text-align: right;
     margin-top: 10px;
     }
     .container {
     padding: 50px;
     padding-left: 100px;
     padding-right: 100px;
     }

     .row-1 {
        display: inline-block;
        margin:20px;
       
       
     }
     .row-2 {
        display: inline-block;
        margin-top:20px;
      }

     .card {
       padding: 15px;
       border-radius: 6px;
       background-color: ${colors[data.color].headerBackground};
       color: ${colors[data.color].headerColor};
       width: 550px;
       height: 300px;
     }
     .card-repos{
         margin-right:50px;
         margin-left:150px;
         margin-bottom: 100px;
     }
     .card-stars{
        margin-right:50px;
        margin-left:150px;
        margin-top:20px;

     }
     .card-followers{
        margin-right:50px;
        margin-left:100px;
        margin-bottom: 100px;

     }
     .card-following{
        margin-right:50px;
        margin-left:110px;
        margin-top:20px;

     }
     
     .col {
     flex: 1;
     text-align: center;
     }

     a, a:hover {
     text-decoration: none;
     color: inherit;
     font-weight: bold;
     }

     @media print { 
      body { 
        zoom: .75; 
      } 
     }
  </style>
</head>
<body>
  <div class="wrapper">
      <div class="container">
            <header class="photo-header">
              <img  src=${data.response.data.avatar_url} />
                  <h1>Hi!</h1>
                  <h2>My name is ${data.response.data.name}</h2>
                  <h4>Currently @ ${data.response.data.company ? `${data.response.data.company}` : "Coding Boot Camp"}</h4>
                    <ul class="links-nav">
                        <li class="nav-link"><a href="http://google.com/maps/place/${data.response.data.location}/"target="blank">${data.response.data.location}</a></li>
                        <li class="nav-link"><a href="${data.response.data.html_url}">Github</a></li>
                        <li class="nav-link"><a href="${data.response.data.blog}">Blog</a></li>
                    </ul>
            </header>
          <main>
              <div class="container">
                  <div class="row">
                      <div class="col">
                          <h3>${data.response.data.bio}</h3>
                      </div>
                  </div>
                  <div class="row-1">
                    <div class="col">
                      <div class="card card-repos">
                        <h3>Public Repositories</h3>
                        <h4>${data.response.data.public_repos}</h4>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card card-stars">
                        <h3>GitHub Stars</h3>
                        <h4>${data.response.stars ? `${data.response.stars}` : "0"}</h4>
                      </div>
                    </div>
                  </div>
                  <div class="row-2">
                    <div class="col">
                      <div class=" card card-followers">
                        <h3>Followers</h3>
                        <h4>${data.response.data.followers}</h4>
                      </div>
                    </div>
                    <div class="col">
                      <div class=" card card-following">
                        <h3>Following</h3>
                        <h4>${data.response.data.following}</h4>
                      </div>
                    </div>
                  </div>
              </div>
          </main>
      </div>
  </div>
</body>
</html>`;
}

module.exports = generateHTML;