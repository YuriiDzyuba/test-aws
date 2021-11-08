import { ConnectionOptions } from 'typeorm';
import { TagEntity } from './tag/tag.entity';
import { UserEntity } from './user/user.entity';
import { ArticleEntity } from './article/article.entity';
import { FollowEntity } from './profile/follow.entity';

const config: ConnectionOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [TagEntity, UserEntity, ArticleEntity, FollowEntity],
    synchronize: false,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations',
    },
};

export default config;
