import { IFactory } from '@modules/factory/domain/models/IFactory';

export interface IUpdateShoesModel {
  id: string;
  reference: string;
  description: string;
  price_pairs_shoes: number;
  price_pespontador: number;
  price_coladeira: number;
  factory: IFactory;
}
