import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

declare function require(name: string);
if ( process.env.NODE_ENV !== 'production' ){
  dotenv.config();
}

async function bootstrap() {
  const app = await NestFactory.create( AppModule );
  const pacote = require( '../package.json' );
  const options = new DocumentBuilder()
    .setTitle( pacote.name )
    .setDescription( pacote.description )
    .setVersion( pacote.version )
    .addTag( 'api-detran' )
    .build();
  const document = SwaggerModule.createDocument( app, options );
  SwaggerModule.setup( 'docs', app, document );

  await app.listen( 3000 );
}
bootstrap();