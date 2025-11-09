import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FormaPagamento } from './forma-pagamento.entity';

@Injectable()
export class FormaPagamentoService {
  constructor(
    @InjectRepository(FormaPagamento)
    private readonly formaPagamentoRepository: Repository<FormaPagamento>,
  ) {}

  async create(data: Partial<FormaPagamento>): Promise<FormaPagamento> {
    const novoPagamento = this.formaPagamentoRepository.create(data);
    return this.formaPagamentoRepository.save(novoPagamento);
  }

  async findAll(): Promise<FormaPagamento[]> {
    return this.formaPagamentoRepository.find();
  }

  async findOne(id: number): Promise<FormaPagamento> {
    const pagamento = await this.formaPagamentoRepository.findOne({ where: { id } });
    if (!pagamento) {
      throw new NotFoundException(`Pagamento com ID ${id} não encontrado`);
    }
    return pagamento;
  }

  async update(id: number, data: Partial<FormaPagamento>): Promise<FormaPagamento> {
    const pagamento = await this.findOne(id);
    Object.assign(pagamento, data);
    return this.formaPagamentoRepository.save(pagamento);
  }

  async remove(id: number): Promise<void> {
    const pagamento = await this.findOne(id);
    await this.formaPagamentoRepository.remove(pagamento);
  }
}