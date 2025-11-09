import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { FormaPagamentoService } from './forma-pagamento.service';
import { FormaPagamento } from './forma-pagamento.entity';

@Controller('forma-pagamento')
export class FormaPagamentoController {
  constructor(private readonly formaPagamentoService: FormaPagamentoService) {}

  @Post()
  async create(@Body() data: Partial<FormaPagamento>): Promise<FormaPagamento> {
    return this.formaPagamentoService.create(data);
  }

  @Get()
  async findAll(): Promise<FormaPagamento[]> {
    return this.formaPagamentoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<FormaPagamento> {
    return this.formaPagamentoService.findOne(Number(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Partial<FormaPagamento>,
  ): Promise<FormaPagamento> {
    return this.formaPagamentoService.update(Number(id), data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.formaPagamentoService.remove(Number(id));
  }
}