import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {NoticiaService} from "./noticia/noticia.service";

import {TypeOrmModule} from '@nestjs/typeorm';
import {NoticiaEntity} from "./noticia/noticia.entity";
import {NoticiaModule} from "./noticia/noticia.module";
import { ArticuloEntity } from './articulo/articulo.entity';
import { PaginaEntity } from './pagina/pagina.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        port: 32769,
        database: 'web',
        username: 'alex',
        password: '123456',
        synchronize: true,
        dropSchema: false,
        entities: [
          NoticiaEntity,
          ArticuloEntity,
          PaginaEntity

        ]
      }
    ),
    NoticiaModule
  ],  // MODULOS
  controllers: [
    AppController
  ],  // Controllers
  providers: [
    AppService
  ], // Servicios
})
export class AppModule {
}