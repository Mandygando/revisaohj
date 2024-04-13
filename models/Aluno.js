const mongoose = require('mongoose')

const Alunoschema = mongoose.Schema({

    nome: String,
    //b - Só existem as turmas A, B, C, D e E. Não será possível cadastrar aluno de outras turmas;
    turma: {
        type: String,
        enum: ["A", "B", "C", "D", "E"]
    },

    //a - As notas não podem ser menores que 0 nem maiores que 10;
    notas: [{
        type: Number,
        min: [0, 'Nao pode haver nota menor que 0'],
        max: [10, 'Não pode haver nota maior que 10']
    }],


    //c - A média calculada também deve ser inserida no banco junto com as demais informações;
    media: Number
})

const Aluno = mongoose.model('Aluno', Alunoschema)

module.exports = Aluno