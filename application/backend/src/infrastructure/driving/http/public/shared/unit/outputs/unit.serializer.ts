import { BaseSerializer } from '#/infrastructure/driving/http/base.serializer';
import { Injectable } from '@nestjs/common';
import { Unit as PrismaUnit } from '#/prisma/client';
import { Unit, UnitCode } from '#/shared';

@Injectable()
export class UnitSerializer extends BaseSerializer<PrismaUnit, Unit> {
  public serialize(unit: PrismaUnit): Unit {
    return {
      id: unit.id,
      code: unit.code as UnitCode,
      name: unit.name,
      abbreviation: unit.abbreviation,
      illustrationUrl: unit.illustrationUrl,
    };
  }
}
