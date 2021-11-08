import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagModule } from './tag/tag.module';
import ormConfig from './ormConfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthMiddleware } from './user/midleware/auth.middleware';
import { ArticleModule } from './article/article.module';
import { ProfileModule } from './profile/profile.module';
import {TagEntity} from "./tag/tag.entity";
import {UserEntity} from "./user/user.entity";
import {ArticleEntity} from "./article/article.entity";
import {FollowEntity} from "./profile/follow.entity";

    // host: 'localhost',
    // port: 5432,
    // username: 'mediumcloneuser',
    // password: '8848',
    // database: 'mediumclone',


    // type: 'postgres',
    // url: process.env.DATABASE_URL,
    // entities: [TagEntity, UserEntity, ArticleEntity, FollowEntity],



@Module({
    imports: [
        TagModule,
        TypeOrmModule.forRoot(ormConfig),
        UserModule,
        ArticleModule,
        ProfileModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes({
            path: '*',
            method: RequestMethod.ALL,
        });
    }
}
