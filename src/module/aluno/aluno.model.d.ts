import knex from '../../service/knex';
import { Aluno, AlunoCreate } from './aluno';

export class Aluno {
	private db: Knex
	
constructor (KnexServide : KnexService) {
this.db = KnexService.obterConexao() 
}


getAll = async () => {
return this.db('aluno').select();
}


getAll = async (params: any) => {
return this.db('aluno').insert(params);
}
}