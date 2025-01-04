import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './Users/user.module';
import { LoggerMiddleware } from './Users/logger.middleware';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './Users/Guards/roles.guard';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [{
    provide: APP_GUARD,
    useClass: RolesGuard,
  },AppService],
})

export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(LoggerMiddleware)
//       .forRoutes(
//         {path :"user",method:RequestMethod.GET},
//         {path :"user",method:RequestMethod.POST}
//       );
//   }
// }
