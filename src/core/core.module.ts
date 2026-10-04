import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { PrismaModule } from '@/core/prisma/prisma.module';
import { ProfileModule } from '@/core/profile/profile.module';
import { SeedModule } from '@/core/seed/seed.module';
import { IS_DEV_ENV } from '@/shared/utils/is-dev.util';

@Module({
	imports: [
		ConfigModule.forRoot({
			ignoreEnvFile: !IS_DEV_ENV,
			isGlobal: true,
		}),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: true,
			sortSchema: true,
			introspection: true,
			playground: false,
			plugins: [
				ApolloServerPluginLandingPageLocalDefault({
					embed: true,
				}) as any,
			],
		}),
		PrismaModule,
		SeedModule,
		ProfileModule,
	],
})
export class CoreModule {}
