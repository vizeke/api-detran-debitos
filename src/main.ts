import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

const ambiente = process.env.NODE_ENV || 'development';
const fs = require( 'fs' );
const pacote = require( '../package.json' );

declare function require(name: string);
if ( process.env.NODE_ENV !== 'production' ){
  dotenv.config();
}

async function bootstrap() {

  // define o protocolo a ser usado no swagger
  let schema: 'http' | 'https' = 'http';
  if ( ambiente === 'production' ) schema = 'https';

  const app = await NestFactory.create( AppModule );
  const options = new DocumentBuilder()
    .setTitle( pacote.name )
    .setDescription( pacote.description )
    .setVersion( pacote.version )
    .addTag( 'api-detran' )
    .build();
  const document = SwaggerModule.createDocument( app, options );

  // para gerar o swagger.json (copiando a saida do console)
  fs.writeFileSync( 'swagger.json', JSON.stringify( document ) );

  SwaggerModule.setup( 'docs', app, document );

  await app.listen( 3001 );
}
bootstrap();