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
            
            .top-background {
              background-color: #000000;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23614292' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
            }

            .logo {
              width: 100px;
              margin: 0 50px;
            }

            .brand {
              font-family: "Inter", sans-serif;
              font-size: 80px;
              font-weight: 700;
              padding: 30px;
              text-align: center;
              font-weight: bold;
              position: absolute;
              top: 0;
              width: 100%;
              color: #ffffff;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .brand span {
              color: #1f2937;
              font-weight: normal;
              margin-right: 0.2em;
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

            .footer {
              text-align: center;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              font-family: "Inter", sans-serif;
              font-size: 32px;
              font-weight: 700;
              font-style: italic;
              color: #9ca3af;
            }
        </style>
        <body>
            <div class="main top-background">
              <div class="brand">
                <img class="logo" src="https://miraklasiaf.com/static/images/logo.svg">
                Faisal Karim
              </div>

              <h1 class="title">${title}</h1>

              <div class="footer">
                miraklasiaf.com
              </div>
            </div>
        </body>
    </html>
`
}
