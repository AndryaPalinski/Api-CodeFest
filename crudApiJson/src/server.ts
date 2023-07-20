import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

//Iniciar o servirdor.
app.listen(PORT, () => console.log(`Tá funcionando :D`))
