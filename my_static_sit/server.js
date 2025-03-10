const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);
    let extname = path.extname(filePath);
    let contentType = "text/html";

    // تحديد نوع المحتوى بناءً على الامتداد
    switch (extname) {
        case ".css":
            contentType = "text/css";
            break;
        case ".js":
            contentType = "text/javascript";
            break;
        case ".svg":
            contentType = "image/svg+xml";
            break;
        default:
            contentType = "text/html"; // افتراضيًا HTML
    }

    // قراءة الملف وإرساله للمتصفح
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("404 Not Found");
        } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content);
        }
    });
});

server.listen(3333, () => {
    console.log("✅ Server is running at http://localhost:3333/");
});
