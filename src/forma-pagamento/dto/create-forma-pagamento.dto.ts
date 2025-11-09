export class CreateFormaPagamentoDto {
  statusPagamento?: string;
  valorPago?: number;
  tipo: string;
  dataPagamento?: Date;
  bandeiraCartao?: string;
  parcelas?: number;
  comprovante?: string;
}