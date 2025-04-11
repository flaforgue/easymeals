import { Controller, Get, HttpCode } from '@nestjs/common';
import { Unit } from '#/shared';
import { PublicBaseController } from '#/infrastructure/driving/http/public/public-base.controller';
import { UnitReadRepository } from '#/core/shared/units/repositories/unit.read-repository';
import { UnitSerializer } from '#/infrastructure/driving/http/public/shared/unit/outputs/unit.serializer';

@Controller('public/shared/unit')
export class UnitController extends PublicBaseController {
  public constructor(
    private readonly unitReadRepository: UnitReadRepository,
    private readonly unitSerializer: UnitSerializer,
  ) {
    super();
  }

  @Get('/list')
  @HttpCode(200)
  public async list(): Promise<Unit[]> {
    const units = await this.unitReadRepository.getAll();

    return this.unitSerializer.serializeMany(units);
  }
}
