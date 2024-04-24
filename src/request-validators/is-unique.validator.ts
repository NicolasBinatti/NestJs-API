import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@Injectable()
@ValidatorConstraint({ name: 'IsUnique', async: true })
export class IsUniqueValidator implements ValidatorConstraintInterface {
  private prisma = new PrismaService();

  async validate(value: any, args: ValidationArguments) {
    const entity = args.constraints[0];
    const field = args.constraints[1];

    const result = await (this.prisma[entity] as any).findUnique({ where: { [field]: value } });
    return !result;

  }

  defaultMessage(args: ValidationArguments) {
    return `The input ${args.property} should be unique.`;
  }
}
