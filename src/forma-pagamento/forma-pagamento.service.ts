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

  async criar(dados: Partial<FormaPagamento>): Promise<FormaPagamento> {
    const novo = this.formaPagamentoRepository.create(dados);
    return this.formaPagamentoRepository.save(novo);
  }

  async listarTodos(): Promise<FormaPagamento[]> {
    return this.formaPagamentoRepository.find();
  }

  async buscarPorId(id: number): Promise<FormaPagamento> {
    const forma = await this.formaPagamentoRepository.findOneBy({ id });
    if (!forma) {
      throw new NotFoundException(`Forma de pagamento com ID ${id} não encontrada`);
    }
    return forma;
  }

  async remover(id: number): Promise<void> {
    await this.formaPagamentoRepository.delete(id);
  }
}