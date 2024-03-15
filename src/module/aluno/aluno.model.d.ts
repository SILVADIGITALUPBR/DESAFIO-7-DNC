import knex from '../../service/knex';
import { Aluno, AlunoCreate } from './aluno';

export const getAll = async (): Promise<Aluno[] | []> => {
  return knex('aluno').select();
};

export const store = async (params: AlunoCreate) => {
  return knex('aluno').insert(params);
};

