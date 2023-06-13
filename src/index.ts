import  express, { response }  from "express"
import {v4 as uuidV4} from "uuid"


const app = express()
const PORT = 3000

app.listen(PORT,()=>{console.log("servidor rodando")}) 

app.use(express.json())


const repositorios = []

app.post("/repositorio",(request,response)=>{
  const {techs,url,title} = request.body

    const repositorio = {
          id: uuidV4(), 
          techs,
          url,
          title,
    }

  repositorios.push(repositorio) 

    return response.status(201).json(repositorio)
  })


