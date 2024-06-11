const http = require('http');


const server = http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!');
    } else if (req.method === 'GET' && req.url === '/about') {

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`I am a Self-taught MERN stack developer honed skills in creating web applications with a passion.Highly adaptable and proven aptitude for problem-solving and a knack for rapidly
    assimilating new ideas and technologies. Efficient in managing projects and collaborating effectively, whether working independently or as part of a team.
    `);

    } else if (req.method === 'POST' && req.url === '/data') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const jsonData = JSON.parse(body);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(jsonData));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
});
const port = 3000;
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
