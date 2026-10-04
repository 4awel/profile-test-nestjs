import { Module } from '@nestjs/common';
import { PrismaDataServices } from '@/core/prisma/prisma-data-service.service';
import { IDataServices } from '@/core/repositories/data-service.repository';

@Module({
	providers: [
		{
			provide: IDataServices,
			useClass: PrismaDataServices,
		},
	],
	exports: [
		IDataServices,
	],
})
export class PrismaDataServicesModule {}
