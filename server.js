import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Ruta base de ejemplo
app.get("/", (req, res) => {
  res.json({ message: "API funcionando correctamente 🚀" });
});

// Otra ruta de ejemplo
app.get("/api/hello", (req, res) => {
  res.json({ greeting: "Hola desde el backend de Node.js!" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
