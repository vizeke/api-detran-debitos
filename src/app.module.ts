import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { DetranModule } from './detran/detran.module';
import { RedisConfig } from './detran/common/config/redis.config';
import { VeiculosController } from './detran/controllers/veiculos.controller';
const redisConf = new RedisConfig();

@Module( {
  imports: [ DetranModule ],
} )

export class AppModule implements NestModule {

  configure( consumer: MiddlewareConsumer ) {

    consumer
      .apply( redisConf.cacheWithRedis( process.env.REDIS_CACHE_TIME || '1 hour' ) )
      .forRoutes( VeiculosController );

  }

}
