// BDD Ya existe -> synchronize:false
// BDD No existe -> synchronize:true

import { Column, Entity, Index, PrimaryGeneratedColumn, OneToMany, BeforeInsert } from 'typeorm';
import { PaginaEntity } from '../pagina/pagina.entity';

@Entity('noticia')
export class NoticiaEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({
    name: 'titulo_noticia',
    type: 'varchar',
    length: 50
  })
  titulo: string;

  @Column({
    name: 'descripcion_noticia',
    type: 'varchar',
    nullable: true
  })
  descripcion: string;

  @OneToMany(
    type => PaginaEntity,   // Que tabla vamos a relacionar
    pagina => pagina.noticia    // Campo que hace referencia FK
  )
  paginas: PaginaEntity[];

  @BeforeInsert()
  primerConsole(){
    console.log('Este es el primer console');
  }

  @BeforeInsert()
  segundoConsole(){
    console.log(`El titulo es ${this.titulo}`)
  }

}