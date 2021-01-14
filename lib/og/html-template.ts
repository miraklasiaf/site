export function getHtml(title: string) {
  return `
    <!DOCTYPE html>
    <html>
        <meta charset="utf-8">
        <title>Generated Image</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
            
            html,
            body {
              padding: 0;
              margin: 0;
              width: 100%;
              height: 100%;
            }
            
            * {
              box-sizing: border-box;
            }
            
            .main {
              text-align: center;
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding: 48px;
              background-image: url('https://miraklasiaf.com/static/images/og.png');
            }

            .title {
              margin-top: 150px;
              font-size: 80px;
              word-wrap: break-word;
              letter-spacing: -0.05em;
              font-weight: 600;
              font-family: "Inter", sans-serif;
              color: hsl(53deg, 100%, 50%);
            }
        </style>
        <body>
            <div class="main">
              <h1 class="title">${title}</h1>
            </div>
        </body>
    </html>
`
}
