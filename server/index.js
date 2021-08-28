import express from "express"; 
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
//package jsona modeule ekleyerek importlarımızı yukardaki gibi yapacağız
import postRoutes from "./routes/posts.js";

dotenv.config(); //.env özelliklerinin process.env ye yükler
const app = express(); //express server oluşturduk
app.use(bodyParser.json({limit: "30mb", extended: true})); //jsonları karşılamasını sağladık ve boyutu arttırdık
app.use(bodyParser.urlencoded({limit: "30mb", extended: true})); 
app.use(cors()); //gidecek http requestlerinde bir sorun yaşamamak için ekledik

app.get("/", (req, res) =>{
    //res.send("Backend Nodejs module works");  //get requestine response mesajı döndük
    res.json({
        author : "Coding with Ozgur",
        message : "Hello world!!!!"
    });
});

//http://localhost:5000/posts
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000; //port belirledik
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL, { 
    useNewUrlParser: true //ekrandaki warninglerin çıkmaması için ekledik
}) // bize bir promise dönücek, başarılıysa then çalışacak
.then(() => {
    console.log('Server is connected to local MongoDB');
    app.listen(PORT, () => {
        console.log('Server is running on port: ' + PORT);
    })
})
.catch((error) => {
    console.error(error.message);
})