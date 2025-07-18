const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// ✅ 여기가 메인 페이지 확인용 루트입니다!
app.get("/", (req, res) => {
  res.send("✅ Pi 감성정원 백엔드 서버 정상 작동 중!");
});

// ✅ 결제 승인용 라우트
app.post("/payments/approve", (req, res) => {
  const { paymentId } = req.body;
  console.log("✅ 결제 승인 요청됨:", paymentId);
  res.send({ status: "approved" });
});

// ✅ 결제 완료용 라우트
app.post("/payments/complete", (req, res) => {
  const { paymentId, txid } = req.body;
  console.log("✅ 결제 완료됨:", paymentId, "TXID:", txid);
  res.send({ status: "completed" });
});

app.listen(PORT, () => {
  console.log(`🚀 서버 작동 중: http://localhost:${PORT}`);
});
