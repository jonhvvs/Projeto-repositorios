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


app.get("/repositorios",(request,response) => {
 return response.json(repositorios)
  })


app.delete("/repositorio/:id",(request,response) => {
    const {id} = request.params 

    const repositorio = repositorios.findIndex((repositorio) => {repositorio.id === id})

    repositorios.splice(repositorio,1)

    return response.status(204).send()
  })
  
app.get("/repositorio/:id",(request,response)=>{
  const {id} = request.params 

  const repositorio = repositorios.find((repositorio) => {repositorio.id === id})

  return response.json(repositorio)

})
