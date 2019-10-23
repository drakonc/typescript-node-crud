import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost/ts-app-tutorial", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(">>> Database Connected");
  } catch {
    console.log("Error al Conerctar a la base de Datos");
  }
}

export default connect;
