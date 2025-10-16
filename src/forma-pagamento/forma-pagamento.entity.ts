import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FORMA_PAGAMENTO') // nome exato da tabela no banco
export class FormaPagamento {
  @PrimaryGeneratedColumn({ name: 'id_pagamento' })
  id: number;

  @Column({ name: 'status_pagamento', length: 50, nullable: true })
  statusPagamento: string;

  @Column({ name: 'valor_pago', type: 'decimal', precision: 10, scale: 2, nullable: true })
  valorPago: number;

  @Column({ name: 'tipo', length: 50 })
  tipo: string;

  @Column({ name: 'data_pagamento', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  dataPagamento: Date;

  @Column({ name: 'bandeira_cartao', length: 50, nullable: true })
  bandeiraCartao: string;

  @Column({ name: 'parcelas', type: 'int', nullable: true })
  parcelas: number;

  @Column({ name: 'comprovante', length: 255, nullable: true })
  comprovante: string;
}