import knex, {Knex} = from 'knex'
import knexConfig from "../config/knex"

export class KnexService {
  private conn: Knex;ywe

 obterConexao = () => {
   if (!this.conn) {
     
    this.conn = knex(knexConfig)
  }

  return this.conn;
}

}