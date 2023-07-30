import express from "express";
import axios from "axios";


const app = express();
const port = 8080;
const Api_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

app.use(express.static("public"));

app.get("/", async (req,res) => {
    try{
            const result = await axios.get(Api_URL);
            res.render("index.ejs",{
                meals: result.data.meals
            })
        }catch(error){
            console.log(error.message)
            res.status(404)
        }
})


app.listen(port,() => {
    console.log(`you are now listning on port ${port}`);
})