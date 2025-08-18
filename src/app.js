import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello, secure world!"));
app.get("/healthz", (req, res) => res.json({ ok: true }));

// intentionally simple (no DB, no secrets)
app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
