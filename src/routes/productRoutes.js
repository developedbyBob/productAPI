import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

//Criar um produto
router.post('/', async (req, res) => {
    //extraindo os dados do frontend
    const { name, description, price } = req.body

    //estamos criando um novo registro no banco de dados utilizando o Prisma
    const product = await prisma.product.create({
        data: {name, description, price},
    });

    //respondendo à requisição com um status HTTP 201 
    res.status(201).json(product)
})

//Listar os produtos
router.get('/', async (req, res) => {
    //estamos utilizando o Prisma para fazer uma consulta ao banco de dados
    const products = await prisma.product.findMany()

    res.status(200).json(products)
})

//Editar um produto
router.put('/:id', async (req, res) => {
    //extraindo o parâmetro de ID da URL
    const { id } = req.params

    //extraindo os dados do frontend
    const { name, description, price } = req.body

    /*Aqui, estamos utilizando o Prisma para atualizar um registro na tabela product do banco de dados. O método update é usado para atualizar um registro existente com os novos dados fornecidos. Estamos usando o parâmetro where para especificar qual registro queremos atualizar com base no seu ID. Os novos valores são passados através do parâmetro data.*/
    const product = await prisma.product.update({
        where:{ id: id },
        data: { name, description, price },
    })

    res.status(200).json(product);
})

//Deletar um produto
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    await prisma.product.delete({
        where: { id: id },
    })

    res.status(200).json({message: 'Produto deletado com sucesso!'})
})

export { router }; // Exportando o objeto router
