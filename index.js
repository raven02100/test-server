const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors({ origin: "*" }));
app.get("/", function(req, res) {
  setTimeout(function() {
    res.status(200).json("Hello world");
  }, 1000);
});

app.get("/abc/:ib", (req, res) => {
  res.status(200).json(req.params);
});

app.listen(8000)
// promise.then(function(response) {} - cái function bên trong là 1 câu lệnh chỉ được thực hiện khi promise đã có kết quả //
// local có thể đc coi là máy tính đang chứa server chủ, 8000 là port //
//app.get thì "get" ở đây là 1 câu lệnh chỉ dùng để lấy dữ liệu //
//setTimeout là đặt thời gian hết hạn, mục đích là thực hiện 1 function sau 1 khoảng thời gian hết hạn, có 2 biến - 1 là function, 2 là thời gian hết hạn (đơn vị là millisecond)//