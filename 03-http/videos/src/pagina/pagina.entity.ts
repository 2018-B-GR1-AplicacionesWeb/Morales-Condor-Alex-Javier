import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { NoticiaEntity } from '../noticia/noticia.entity';
import { ArticuloEntity } from '../articulo/articulo.entity';

@Entity('pagina')
export class PaginaEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero: number;

  @ManyToOne(
    type => NoticiaEntity,
    noticia => noticia.paginas
  )
  noticia: NoticiaEntity;

  @OneToMany(
    type => ArticuloEntity,
    articulo => articulo.pagina
  )
  articulo: ArticuloEntity
}