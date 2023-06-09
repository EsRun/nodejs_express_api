require("dotenv").config();
const express = require("express");
const userRouter = require("./routes/user/user");
const joinRouter = require("./routes/auth/join");
const loginRouter = require("./routes/auth/login");
const helmet = require("helmet");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());

app.use("/user", userRouter);
app.use("/auth/join", joinRouter);
app.use("/auth", loginRouter);

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`);
});
