import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormaPagamento } from './forma-pagamento.entity';
import { FormaPagamentoService } from './forma-pagamento.service';
import { FormaPagamentoController } from './forma-pagamento.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FormaPagamento])],
  providers: [FormaPagamentoService],
  controllers: [FormaPagamentoController],
})
export class FormaPagamentoModule {}