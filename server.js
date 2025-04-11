import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

// servidor ouvindo porta 3000
app.listen(PORT, () => {
  console.log("Server listening");
});
