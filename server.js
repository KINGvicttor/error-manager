import express from 'express'
import cors from 'cors'
import { PrismaClient } from './generated/prisma/index.js';

//iniciando prisma
const prisma = new PrismaClient();
//iniciando express
const app = express();
//definindo o express para usar json
app.use(express.json());

//autorizando acesso a api
const corsOptions = {
    origin: 'http://localhost:3001',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))

//---------- rotas para soluções ----------
//rota para inserir novas soluções no banco
app.post('/solution', async (req, res) => {
    await prisma.solution.create({
        data: {
            errorCode: req.body.errorCode,
            errorTitle: req.body.errorTitle,
            solutionContent: req.body.solutionContent,
            ratingPositive: 0,
            ratingNegative: 0
        }
    })

    res.status(201).json(req.body);

})

//rota para fazer requisição de todas as soluções
app.get('/solutions', async (req, res) => {

    const solutions = await prisma.solution.findMany()

    res.status(201).json(solutions);
})

//rota para fazer requisição de apenas 1 solução (utilizando id como parametro)
app.get('/solution/:id', async (req, res) => {

    const solutions = await prisma.solution.findUnique({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json(solutions);
})

//rota para editar solução (utilizando id como parametro)
app.put('/solution/:id', async (req, res) => {

    await prisma.solution.update({
        where: {
            id: req.params.id
        },
        data: {
            errorCode: req.body.errorCode,
            errorTitle: req.body.errorTitle,
            solutionContent: req.body.solutionContent,
        }
    })

    res.status(200).json(req.body);
})

//rota para deletar solução (utilizando id como parametro)
app.delete('/solution/:id', async (req, res) => {
    await prisma.solution.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: 'Deletado com sucesso.' });
})

//---------- rotas para avaliações ----------
//rota para inserir novas avaliações no banco
app.post('/rating', async (req, res) => {
    await prisma.rating.create({
        data: {
            errorCode: req.body.errorCode,
            clientCode: req.body.clientCode,
            date: req.body.date,
            rating: req.body.rating,
            ratingText: req.body.ratingText
        }
    })

    res.status(201).json(req.body);

})

//rota para fazer requisição de todas as avaliações
app.get('/ratings', async (req, res) => {

    const ratings = await prisma.rating.findMany()

    res.status(201).json(ratings);
})

//rota para fazer requisição da avaliação de apenas 1 cliente (utilizando clientCode como parametro)
app.get('/rating/:id', async (req, res) => {

    const solutions = await prisma.rating.findUnique({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json(solutions);
})

//rota para adicionar os votos na solução
app.put('/rating/:id', async (req, res) => {

    await prisma.solution.update({
        where: {
            id: req.params.id
        },
        data: {
            ratingPositive: req.body.ratingPositive,
            ratingNegative: req.body.ratingNegative
        }
    })

    res.status(200).json(req.body);
})

//definindo porta 3000 para rodar a api
app.listen(3000)