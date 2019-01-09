import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { PaginaEntity } from '../pagina/pagina.entity';

@Entity('articulo')
export class ArticuloEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  texto: string;
  
  @ManyToOne(
    type => PaginaEntity,
    pagina => pagina.articulo
  )
  pagina: PaginaEntity
}