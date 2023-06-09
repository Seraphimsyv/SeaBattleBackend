import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { GameModule } from './modules/game/game.module';


@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    GameModule,
  ]
})
export class AppModule {}
