import Knex from 'knex';

export async function seed(knex: Knex) {
    return knex('items').insert([
        { title: 'Lampadas', image: 'lampadas.svg' },
        { title: 'Baterias', image: 'baterias.svg' },
        { title: 'Papeis e Pepelão', image: 'papeis-papelao.svg' },
        { title: 'Residuos Eletronicos', image: 'eletronicos.svg' },
        { title: 'Residuos Organicos', image: 'organicos.svg' },
        { title: 'Óleo de Cozinha', image: 'oleo.svg' },
    ])
}