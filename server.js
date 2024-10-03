import express from "express"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())


app.post("/eventos", async (req,res) => {
    await prisma.evento.create({
        data:{
            name: req.body.name,
            date: req.body.date,       
            horario: req.body.horario,      
            location: req.body.location,     
            description: req.body.description,  
            participants: req.body.participants, 
        }
    })

    res.status(201).send(req.body)
})

app.get("/eventos", async (req,res) => {

    let eventos = []    

    if(req.query){
        eventos = await prisma.evento.findMany({
            where:{
                id: req.query.id,
                name: req.query.name,
                date: req.query.date,       
                horario: req.query.horario,      
                location: req.query.location,     
                description: req.query.description,  
                participants: req.query.participants
            }
        }) 
    }else{
        eventos = await prisma.evento.findMany()
    }

    res.status(200).send(eventos)
})


app.put("/eventos/:id", async (req,res) => {
    await prisma.evento.update({
        where : {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            date: req.body.date,       
            horario: req.body.horario,      
            location: req.body.location,     
            description: req.body.description,  
            participants: req.body.participants,
        }
    })

    res.status(200).send(req.body)
})

app.delete("/eventos/:id", async (req,res) => {
    await prisma.evento.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json("Evento deletado com sucesos!")
})

app.listen(3000, () => {
    console.log("Server Running!")
    console.log("PORT: 3000")
})