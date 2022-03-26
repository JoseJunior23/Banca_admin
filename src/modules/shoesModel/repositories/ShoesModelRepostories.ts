import { EntityRepository, Repository } from 'typeorm';
import { ShoesModel } from '../entities/ShoesModel';

@EntityRepository(ShoesModel)
export class ShoesModelRepository extends Repository<ShoesModel> {
  public async findByRef(reference: string) {
    const shoesModel = await this.findOne({
      where: {
        reference,
      },
    });
    return shoesModel;
  }

  public async findById(id: string) {
    const shoesModel = await this.findOne({
      id,
    });
    return shoesModel;
  }
}