import { Module } from '@nestjs/common';
import { DetranModule } from './detran/detran.module';

@Module({
  imports: [DetranModule],
})
export class AppModule {}
