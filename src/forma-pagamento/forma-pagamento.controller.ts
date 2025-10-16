import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FormaPagamentoService } from './forma-pagamento.service';
import { FormaPagamento } from './forma-pagamento.entity';

@Controller('forma-pagamento')
export class FormaPagamentoController {
  constructor(private readonly service: FormaPagamentoService) {}

  @Post()
  async criar(@Body() dados: Partial<FormaPagamento>): Promise<FormaPagamento> {
    return this.service.criar(dados);
  }

  @Get()
  async listarTodos(): Promise<FormaPagamento[]> {
    return this.service.listarTodos();
  }

  @Get(':id')
  async buscarPorId(@Param('id') id: number): Promise<FormaPagamento> {
    return this.service.buscarPorId(id);
  }

  @Delete(':id')
  async remover(@Param('id') id: number): Promise<void> {
    return this.service.remover(id);
  }
}