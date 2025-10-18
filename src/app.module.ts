import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FormaPagamentoModule } from './forma-pagamento/forma-pagamento.module'; // ← adicione esta linha

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('MYSQL_DB_HOST'),
        port: configService.get<number>('MYSQL_DB_PORT'),
        username: configService.get<string>('MYSQL_DB_USERNAME'),
        password: configService.get<string>('MYSQL_DB_PASSWORD'),
        database: configService.get<string>('MYSQL_DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    FormaPagamentoModule, // ← registre o módulo aqui
  ],
})
export class AppModule {}