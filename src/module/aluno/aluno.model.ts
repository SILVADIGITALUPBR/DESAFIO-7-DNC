import {Knex} from 'Knex'
import { KnexService } from "../service/Knex"

export class aluno
{

  private db: Knex

constructor (knexService: KnexService) {
  this.db = KnexService.obterConexao ()
  
 }
 
async getall () {

 return this.db ('aluno').select()

};

async store  (params: any) {

 return this.db ( 'aluno').insert(params)

}:

}
