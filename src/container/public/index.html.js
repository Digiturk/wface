// This function has to return a string or promised string:
function getTemplate (templateParams) {

  var html = `
  <!DOCTYPE html>
  <html lang="en" dir="ltr">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="theme-color" content="#000000">
      <title>${templateParams.webpackConfig.name || templateParams.htmlWebpackPlugin.options.title}</title>
      <link rel="icon" type="image/x-icon" href="assets/wface/favicon.ico">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">      
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
      <style>
        html, body, #root, #root>div.main-page {
          height: 100%
        }
        body {
          margin: 0;
          padding: 0;  
          font-family: sans-serif;
        }
      </style>
    </head>
    <body>
      <noscript>
        You need to enable JavaScript to run this app.
      </noscript>   
      <div id="root"></div>              
    </body>
  </html>
  `
  
  return html;
};

export default getTemplate;