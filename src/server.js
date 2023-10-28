import http from "node:http";

const server = http.createServer(async (req, res) => {
  return res.end("Hello World 2023!!");
});

server.listen(3333);
