import { colors } from '../../theme/colors';

export enum CardStatus {
  PAGO = 'pago',
  EM_ABERTO = 'em aberto',
  EM_ATRASO = 'em atraso',
  REVERTIDO = 'revertido',
}

export interface ICardProps {
  amount: string;
  status: keyof typeof CardStatus;
}

export interface ICardStyledProps {
  color: keyof typeof colors;
}

export interface TCardStatusVariant {
  PAGO: 'success-400';
  EM_ABERTO: 'warning-400';
  EM_ATRASO: 'error-400';
  REVERTIDO: 'neutral-400';
}
