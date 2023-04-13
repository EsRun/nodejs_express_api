const app = require("../app");
const http = require("http").Server(app);

const PORT = process.env.PORT || 4444;

http.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`);
});
