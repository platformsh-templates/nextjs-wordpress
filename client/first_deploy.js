const http = require("http");
const crypto = require('crypto');
const fs = require('fs');

function decode(value) {
	return JSON.parse(Buffer.from(value, 'base64'));
}

// load up our settings file
let rawSettings = fs.readFileSync('deploy/settings.json');
let settings = JSON.parse(rawSettings);

const projectID = `${process.env.PLATFORM_PROJECT}`;
const environment = `${process.env.PLATFORM_BRANCH}`;
const redeployLink = `https://console.platform.sh/projects/${projectID}/${environment}/actions/redeploy`;

// get the admin user name
adminUser = settings.project.admin_user.name
//get admin initial password
let sha1sum = crypto.createHash('sha1');
sha1sum.update(process.env.PLATFORM_PROJECT_ENTROPY);
let initPass = sha1sum.digest('hex');



let backendURL;
let routes = decode(process.env.PLATFORM_ROUTES);
for (route in routes) {
	if (routes[route]['id'] == 'api') {
		backendURL = route;
	}
}

const backendLogin = `${backendURL}wp-login.php`;
const credentialUpdate = `${backendURL}wp-admin/profile.php`

const outputString = `

<!DOCTYPE html>
<html>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <style>
            html, body {
                height: 100%;
                font-family: 'Overpass', sans-serif;
            }
            .container * {
                position: relative;
            }
            a {
                color: #145CC6;
                text-decoration: none;
            }
            a:visited {
                color: #145CC6;
            }
            a:hover {
                text-decoration: underline;
            }
            .container {  display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 15% 75% 10%;
            gap: 0px 0px;
            grid-auto-flow: row;
            grid-template-areas:
                "header"
                "main"
                "footer";
            }

            .header {  display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 20% 1fr;
            gap: 0px 0px;
            grid-auto-flow: row;
            grid-template-areas:
                "callouts"
                "logo-area";
            grid-area: header;
            }

            .callouts {  display: grid;
            grid-template-columns: 40% 1fr;
            grid-template-rows: 1fr;
            gap: 0px 0px;
            grid-auto-flow: row;
            grid-template-areas:
                "callouts-left callouts-right";
            grid-area: callouts;
            }

            .callouts-left { grid-area: callouts-left; }

            .callouts-right {
                grid-area: callouts-right;
                background-color: #ffbdbb;
            }

            .logo-area {  display: grid;
            grid-template-columns: 40% 1fr;
            grid-template-rows: 1fr;
            gap: 0px 0px;
            grid-auto-flow: row;
            grid-template-areas:
                "logo-area-left logo-area-right";
            grid-area: logo-area;
            }

            .logo-area-left {
                grid-area: logo-area-left;
                padding-left: 80px;
            }

            .logo-area-right {
                grid-area: logo-area-right;
                background-color: #ffbdbb;
            }

            .logo {
                margin: 0;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
            }

            .main {  display: grid;
            grid-template-columns: 40% 1fr;
            grid-template-rows: 1fr;
            gap: 0px 0px;
            grid-auto-flow: row;
            grid-template-areas:
                "template-details template-nextsteps";
            grid-area: main;
            }

            .template-details {
                grid-area: template-details;
                padding: 80px 80px 80px 80px;
            }

            .template-details-block {
                /* background-color: yellow; */
                /* border: 1px solid gray; */
                width: 100%;
                height: 100%;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 1fr;
                gap: 0px 0px;
                grid-auto-flow: row;
                grid-template-areas:
                    "template-logo"
                    "template-logo-details";
            }

            .template-logo {
                grid-area: template-logo;
                margin: 40px 40px 20px 40px;
            }

            .template-logo > .api {
                margin: 0;
                position: absolute;
                top: 50%;
                left: 10%;
                transform: translateY(-50%);
                width: 35%;
            }

            .template-logo > .client {
                margin: 0;
                position: absolute;
                top: 50%;
                right: 10%;
                transform: translateY(-50%);
                width: 35%;
            }

            .template-logo-details {
                grid-area: template-logo-details;
                margin: 20px 40px 40px 40px;
                color: #444344;
                align-items: center;
            }

            .template-nextsteps {
                grid-area: template-nextsteps;
                background-color: #ffbdbb;
                padding: 80px 80px 120px 80px;

            }

            .template-instructions-block {
                background-color: white;
                box-shadow: 0 6px 24px rgb(73 71 95 / 35%);
                width: 100%;
                height: 100%;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: .25fr .75fr;
                gap: 0px 0px;
                grid-auto-flow: row;
                grid-template-areas:
                    "details-header"
                    "details-content";

            }

            .details-header {  display: grid;
            grid-template-columns: .45fr 1fr;
            grid-template-rows: 1fr;
            gap: 0px 0px;
            grid-auto-flow: row;
            grid-template-areas:
                "header-col header-colb";
            grid-area: details-header;
            }

            .header-cola {
                grid-area: header-col;
                // background-color: #f4f2f3;
                padding: 20px;
                border-bottom: 1px solid #eae5e7;
                padding-bottom: 16px;
                font-weight: 700;
                font-size: 14px;
                line-height: 1.5;
                letter-spacing: .1em;
                text-transform: uppercase;
                color: #797477;
            }

            .header-colb {
                grid-area: header-colb;
                padding: 20px;
                border-bottom: 1px solid #eae5e7;
                padding-bottom: 16px;
                font-weight: 700;
                font-size: 14px;
                line-height: 1.5;
                letter-spacing: .1em;
                text-transform: uppercase;
                color: #797477;            }


            .details-content {
                display: grid;
                grid-template-columns: .45fr 1fr;
                grid-template-rows: 1fr;
                gap: 0px 0px;
                grid-auto-flow: row;
                grid-template-areas:
                    "content-cola content-colb";
                grid-area: details-content;
            }

            .content-cola {
                grid-area: content-cola;
                // background-color: #f4f2f3;
                padding: 20px;
            }

            .content-colb {

                grid-area: content-colb;
                padding: 20px;

            }

            pre {
                // text-align: center;
                background: #eae5e7;
                padding: 10px 10px 10px 10px;
                white-space: pre-wrap;       /* css-3 */
                white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
                white-space: -pre-wrap;      /* Opera 4-6 */
                white-space: -o-pre-wrap;    /* Opera 7 */
                word-wrap: break-word;       /* Internet Explorer 5.5+ */
            }

            code {
                font-size: 1.1em;
                background: #eae5e7;
                // padding: 2px 10px 2px 10px;
                border-radiux: 2px;
            }

            .footer {
                display: grid;
                grid-template-columns: 40% 1fr;
                grid-template-rows: 1fr;
                gap: 0px 0px;
                grid-auto-flow: row;
                grid-template-areas:
                    "footer-left footer-right";
                grid-area: footer;
            }

            .footer-left { grid-area: footer-left; }

            .footer-right {
                grid-area: footer-right;
                background-color: #ffbdbb;
            }


            html, body , .container {
                height: 100%;
                margin: 0;
            }



        </style>
    </head>
<body>

    <div class="container">
        <div class="header">
          <div class="callouts">
            <div class="callouts-left"></div>
            <div class="callouts-right"></div>
          </div>
          <div class="logo-area">
            <div class="logo-area-left">
                <div class="logo">
                    <a href="https://platform.sh">
                        <img src="https://platform.sh/logos/redesign/Platformsh_logo_black.svg" width="200px">
                    </a>
                </div>
            </div>
            <div class="logo-area-right"></div>
          </div>
        </div>
        <div class="main">
          <div class="template-details">
              <div class="template-details-block">
                <div class="template-logo">
                    <img class="api" src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCA1NjAgNDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiMyMTc1OWIiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJtYXRyaXgoMi40NDg0NCAwIDAgMi40NDg0NCAxMzAgNTAuMDA0OSkiPjxwYXRoIGQ9Im04LjcwOCA2MS4yNmMwIDIwLjgwMiAxMi4wODkgMzguNzc5IDI5LjYxOSA0Ny4yOThsLTI1LjA2OS02OC42ODZjLTIuOTE2IDYuNTM2LTQuNTUgMTMuNzY5LTQuNTUgMjEuMzg4eiIvPjxwYXRoIGQ9Im05Ni43NCA1OC42MDhjMC02LjQ5NS0yLjMzMy0xMC45OTMtNC4zMzQtMTQuNDk0LTIuNjY0LTQuMzI5LTUuMTYxLTcuOTk1LTUuMTYxLTEyLjMyNCAwLTQuODMxIDMuNjY0LTkuMzI4IDguODI1LTkuMzI4LjIzMyAwIC40NTQuMDI5LjY4MS4wNDItOS4zNS04LjU2Ni0yMS44MDctMTMuNzk2LTM1LjQ4OS0xMy43OTYtMTguMzYgMC0zNC41MTMgOS40Mi00My45MSAyMy42ODggMS4yMzMuMDM3IDIuMzk1LjA2MyAzLjM4Mi4wNjMgNS40OTcgMCAxNC4wMDYtLjY2NyAxNC4wMDYtLjY2NyAyLjgzMy0uMTY3IDMuMTY3IDMuOTk0LjMzNyA0LjMyOSAwIDAtMi44NDcuMzM1LTYuMDE1LjUwMWwxOS4xMzggNTYuOTI1IDExLjUwMS0zNC40OTMtOC4xODgtMjIuNDM0Yy0yLjgzLS4xNjYtNS41MTEtLjUwMS01LjUxMS0uNTAxLTIuODMyLS4xNjYtMi41LTQuNDk2LjMzMi00LjMyOSAwIDAgOC42NzkuNjY3IDEzLjg0My42NjcgNS40OTYgMCAxNC4wMDYtLjY2NyAxNC4wMDYtLjY2NyAyLjgzNS0uMTY3IDMuMTY4IDMuOTk0LjMzNyA0LjMyOSAwIDAtMi44NTMuMzM1LTYuMDE1LjUwMWwxOC45OTIgNTYuNDk0IDUuMjQyLTE3LjUxN2MyLjI3Mi03LjI2OSA0LjAwMS0xMi40OSA0LjAwMS0xNi45ODl6Ii8+PHBhdGggZD0ibTYyLjE4NCA2NS44NTctMTUuNzY4IDQ1LjgxOWM0LjcwOCAxLjM4NCA5LjY4NyAyLjE0MSAxNC44NDYgMi4xNDEgNi4xMiAwIDExLjk4OS0xLjA1OCAxNy40NTItMi45NzktLjE0MS0uMjI1LS4yNjktLjQ2NC0uMzc0LS43MjR6Ii8+PHBhdGggZD0ibTEwNy4zNzYgMzYuMDQ2Yy4yMjYgMS42NzQuMzU0IDMuNDcxLjM1NCA1LjQwNCAwIDUuMzMzLS45OTYgMTEuMzI4LTMuOTk2IDE4LjgyNGwtMTYuMDUzIDQ2LjQxM2MxNS42MjQtOS4xMTEgMjYuMTMzLTI2LjAzOCAyNi4xMzMtNDUuNDI2LjAwMS05LjEzNy0yLjMzMy0xNy43MjktNi40MzgtMjUuMjE1eiIvPjxwYXRoIGQ9Im02MS4yNjIgMGMtMzMuNzc5IDAtNjEuMjYyIDI3LjQ4MS02MS4yNjIgNjEuMjYgMCAzMy43ODMgMjcuNDgzIDYxLjI2MyA2MS4yNjIgNjEuMjYzIDMzLjc3OCAwIDYxLjI2NS0yNy40OCA2MS4yNjUtNjEuMjYzLS4wMDEtMzMuNzc5LTI3LjQ4Ny02MS4yNi02MS4yNjUtNjEuMjZ6bTAgMTE5LjcxNWMtMzIuMjMgMC01OC40NTMtMjYuMjIzLTU4LjQ1My01OC40NTUgMC0zMi4yMyAyNi4yMjItNTguNDUxIDU4LjQ1My01OC40NTEgMzIuMjI5IDAgNTguNDUgMjYuMjIxIDU4LjQ1IDU4LjQ1MSAwIDMyLjIzMi0yNi4yMjEgNTguNDU1LTU4LjQ1IDU4LjQ1NXoiLz48L2c+PC9zdmc+" width="100%">
                    <img class="client" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNjYyOTkgOC43ODE4SDEwLjE4OTZWOS4xNDIxMUg2LjA3NzkzVjExLjg1MzlIOS45NDQ0MlYxMi4yMTQySDYuMDc3OTNWMTUuMTkxNEgxMC4yMzY4VjE1LjU1MThINS42NjI5OVY4Ljc4MThaTTEwLjU5NTEgOC43ODE4SDExLjA3NjFMMTMuMjA3NCAxMS43NTkxTDE1LjM4NTggOC43ODE4TDE4LjM0ODggNUwxMy40ODA4IDEyLjA3MkwxNS45ODkzIDE1LjU1MThIMTUuNDg5NUwxMy4yMDc0IDEyLjM4NDlMMTAuOTE1OCAxNS41NTE4SDEwLjQyNTRMMTIuOTUyNyAxMi4wNzJMMTAuNTk1MSA4Ljc4MThaTTE2LjE2ODUgOS4xNDIxMVY4Ljc4MThIMjEuMzI3VjkuMTQyMTFIMTguOTUwNVYxNS41NTE4SDE4LjUzNTZWOS4xNDIxMUgxNi4xNjg1Wk0wIDguNzgxOEgwLjUxODY3NUw3LjY3MDkgMTkuNUw0LjcxNTIzIDE1LjU1MThMMC40MzM4MDEgOS4yOTM4MkwwLjQxNDk0IDE1LjU1MThIMFY4Ljc4MThaTTIxLjI4NTIgMTUuMDgyN0MyMS4yMDA0IDE1LjA4MjcgMjEuMTM2OCAxNS4wMTY5IDIxLjEzNjggMTQuOTMxOUMyMS4xMzY4IDE0Ljg0NjkgMjEuMjAwNCAxNC43ODExIDIxLjI4NTIgMTQuNzgxMUMyMS4zNzEgMTQuNzgxMSAyMS40MzM1IDE0Ljg0NjkgMjEuNDMzNSAxNC45MzE5QzIxLjQzMzUgMTUuMDE2OSAyMS4zNzEgMTUuMDgyNyAyMS4yODUyIDE1LjA4MjdaTTIxLjY5MjkgMTQuNjg2SDIxLjkxNDlDMjEuOTE4IDE0LjgwNjQgMjIuMDA1OCAxNC44ODc0IDIyLjEzNDkgMTQuODg3NEMyMi4yNzkzIDE0Ljg4NzQgMjIuMzYxIDE0LjgwMDQgMjIuMzYxIDE0LjYzNzRWMTMuNjA1MkgyMi41ODcxVjE0LjYzODRDMjIuNTg3MSAxNC45MzE5IDIyLjQxNzUgMTUuMTAwOSAyMi4xMzcgMTUuMTAwOUMyMS44NzM2IDE1LjEwMDkgMjEuNjkyOSAxNC45MzcgMjEuNjkyOSAxNC42ODZaTTIyLjg4MjggMTQuNjcyOEgyMy4xMDY4QzIzLjEyNiAxNC44MTE1IDIzLjI2MTIgMTQuODk5NSAyMy40NTYgMTQuODk5NUMyMy42Mzc3IDE0Ljg5OTUgMjMuNzcwOSAxNC44MDU0IDIzLjc3MDkgMTQuNjc1OUMyMy43NzA5IDE0LjU2NDYgMjMuNjg2MSAxNC40OTc4IDIzLjQ5MzQgMTQuNDUyMkwyMy4zMDU2IDE0LjQwNjdDMjMuMDQyMiAxNC4zNDUgMjIuOTIyMSAxNC4yMTc0IDIyLjkyMjEgMTQuMDAyOUMyMi45MjIxIDEzLjc0MjggMjMuMTM0MSAxMy41Njk4IDIzLjQ1MiAxMy41Njk4QzIzLjc0NzcgMTMuNTY5OCAyMy45NjM3IDEzLjc0MjggMjMuOTc2OCAxMy45ODg3SDIzLjc1NjhDMjMuNzM1NiAxMy44NTQxIDIzLjYxODUgMTMuNzcwMSAyMy40NDkgMTMuNzcwMUMyMy4yNzAzIDEzLjc3MDEgMjMuMTUxMiAxMy44NTYyIDIzLjE1MTIgMTMuOTg3N0MyMy4xNTEyIDE0LjA5MiAyMy4yMjc5IDE0LjE1MTcgMjMuNDE3NyAxNC4xOTYyTDIzLjU3ODEgMTQuMjM1N0MyMy44NzY5IDE0LjMwNTUgMjQgMTQuNDI2OSAyNCAxNC42NDY1QzI0IDE0LjkyNTkgMjMuNzg0IDE1LjEwMDkgMjMuNDM4OSAxNS4xMDA5QzIzLjExNTkgMTUuMTAwOSAyMi44OTg5IDE0LjkzMzkgMjIuODgyOCAxNC42NzI4WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==">

                                </div>
                <div class="template-logo-details">
                    <p>Congrats! You've just deployed the Next.js WordPress demo template for Platform.sh!</p>
                    <p>This template has already configured the multi-app relationship for you, which will work automatically across every development environment you create from this point forward. Be sure to follow the instructions on the right to complete the demo.</p>
                </div>
              </div>
          </div>
          <div class="template-nextsteps">
            <div class="template-instructions-block">
                <div class="details-header">
                    <div class="header-cola">About</div>
                    <div class="header-colb">Next steps</div>
                  </div>
                  <div class="details-content">
                    <div class="content-cola">
                        <p>When you deployed this template, a few things happend.</p>
                        <p>WordPress was fully installed, all of the necessary plugins and settings were configured to communicate with the Next.js frontend, and connection credentials were shared with that frontend application.</p>
                        <p>Now that that's completed, there are only two steps you'll need to take to complete the demo.</p>
                        <p>If anything seems unclear, be sure to check out the <a href="https://github.com/platformsh-templates/nextjs-drupal" target="_blank" rel="noopener noreferrer">README</a> for more details.

                        </div>
                    <div class="content-colb">
                        <p><strong>1. Update your WordPress admin credentials</strong></p>
                        <p>WordPress has been installed, and an admin user was created. <a href="${backendLogin}" target="_blank" rel="noopener noreferrer">Visit the WordPress login page</a>, then <a href="${credentialUpdate}" target="_blank" rel="noopener noreferrer">update your email and password</a> to something more secure.</p>
                        <ul>
                            <li>username: <code>${adminUser}</code></li>
                            <li>password: <code>${initPass}</code></li>
                        </ul>
                        <p><strong>2. Rebuild the environment</strong></p>
                        <p>Platform.sh is secure by default. Part of that security involves read-only access to the file system and container isolation during the build process. Because of this, credentials for the frontend application were not yet available for the first Next.js build.</p>
                        <p>No worries! This will only be the case on this first deployment. To view the final frontend build, all we need to do is rebuild the Platform.sh environment and restart the container.</p>
                        <p>To do this, we just need to add a variable using the <a href="https://docs.platform.sh/development/cli.html" target="_blank" rel="noopener noreferrer">Platform.sh CLI</a>:</p>
                        <pre><code>platform variable:create -p ${projectID} -e ${environment} -l environment --name DEPLOY --value FRIDAY --visible-build=true --prefix=env: -n</code></pre>
                     </div>
                  </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="footer-left"></div>
          <div class="footer-right"></div>
        </div>
      </div>

</body>
</html>
`;

const server = http.createServer(async function(_request, response) {

	response.writeHead(200, { "Content-Type": "text/html" });
	response.end(outputString);
});

// Get PORT and start the server
server.listen(process.env.PORT, function() {
	console.log(`Listening on port ${process.env.PORT}`);
});
