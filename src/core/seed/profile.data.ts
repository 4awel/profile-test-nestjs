import { ProfileInput } from '@/core/repositories/abstracts/props/profile.props';
import { SkillCategory } from '@/core/entity/skill.entity';

export const PROFILE_SEED: ProfileInput = {
	slug: 'main',
	name: 'Денис Журавленко',
	title: 'NestJS backend-разработчик',
	description:
		'Пишу backend на NestJS и TypeScript: Clean Architecture, PostgreSQL с Prisma, GraphQL и REST API, упаковка в Docker / Kubernetes.',
	location: 'Россия / Таиланд, удалённо',
	links: [
		{
			label: 'GitHub',
			url: 'https://github.com/4awel',
		},
		{
			label: 'Telegram',
			url: 'https://t.me/ogChawel',
		},
		{
			label: 'hh.ru',
			url: 'https://hh.ru/resume/ca3777b6ff1129dd5e0039ed1f6b41596e3659',
		},
	],
	skills: [
		{
			name: 'TypeScript',
			category: SkillCategory.LANGUAGE,
		},
		{
			name: 'Node.js',
			category: SkillCategory.LANGUAGE,
		},
		{
			name: 'React/Vue',
			category: SkillCategory.LANGUAGE,
		},
		{
			name: 'NestJS',
			category: SkillCategory.FRAMEWORK,
		},
		{
			name: 'PostgreSQL',
			category: SkillCategory.DATABASE,
		},
		{
			name: 'Prisma',
			category: SkillCategory.DATABASE,
		},
		{
			name: 'Redis',
			category: SkillCategory.DATABASE,
		},
		{
			name: 'GraphQL',
			category: SkillCategory.API,
		},
		{
			name: 'REST',
			category: SkillCategory.API,
		},
		{
			name: 'Docker',
			category: SkillCategory.DEVOPS,
		},
		{
			name: 'Kubernetes',
			category: SkillCategory.DEVOPS,
		},
		{
			name: 'Kafka',
			category: SkillCategory.DEVOPS,
		},
		{
			name: 'Git',
			category: SkillCategory.TOOLS,
		},
		{
			name: 'Claude Code',
			category: SkillCategory.TOOLS,
		},
		{
			name: 'GPT ASTRA',
			category: SkillCategory.TOOLS,
		},
	],
	experience: [
		{
			company: 'ООО Террал Инк',
			position: 'Backend-разработчик (NestJS, PostgreSQL, MongoDB)',
			startDate: new Date('2023-01-12'),
			endDate: new Date('2026-02-08'),
			achievements: [
				'С нуля спроектировал и реализовал серверную часть сервиса видеостриминга на NestJS и Prisma, обеспечив масштабируемость и высокую производительность.',
				'Провёл масштабный рефакторинг серверных компонентов с переходом с архитектуры на [микросервисную / модульную], что позволило улучшить поддержку и расширяемость кода.',
				'Устранил критические уязвимости в модулях оплаты и разграничения прав доступа, обеспечив безопасность и соответствие стандартам безопасности данных.',
				'Оптимизировал обработку и доставку видео, сократив время загрузки на 20% и повысив стабильность воспроизведения в высоком разрешении с использованием MediaMtx',
				'Разработал систему рекомендаций контента на основе распознавания изображений с использованием ML-моделей, что увеличило вовлечённость пользователей на 15%.',
			],
		},
		{
			company: 'ООО Лидер Таск',
			position:
				'Fullstack-разработчик (React / Vue.js, NestJS, PostgreSQL)',
			startDate: new Date('2026-01-09'),
			endDate: new Date('2026-09-20'),
			achievements: [
				'Провёл масштабный рефакторинг серверной части с переходом с сервисной архитектуры на Clean Architecture, что упростило поддержку и расширение кода',
				'Ускорил создание канбан-досок на 30% за счёт рефакторинга и оптимизации логики работы с базой данных, что повысило производительность и удобство использования приложения.',
				'С нуля разработал фронтенд-приложение, включая дизайн интерфейса, и довёл его до продакшена, обеспечив удобный и интуитивно понятный пользовательский опыт.',
				'Спроектировал и реализовал реферальную систему на сервере, от бизнес-логики до запуска в продакшен',
				'Выявил и устранил критическую уязвимость в платёжном модуле, позволявшую подделывать запросы на оплату, обеспечив безопасность финансовых транзакций пользователей.',
				'Инициировал и самостоятельно довёл до релиза новые функции продукта: отложенные задачи и автоповтор задач',
				'Внедрил интеграции с GitHub, GitLab, Google Drive и Яндекс Диском, расширив функциональность приложения и улучшив взаимодействие с внешними сервисами.',
			],
		},
	],
	projects: [
		{
			name: 'Stream service backend',
			description: 'Backend платформы для стриминга на NestJS и Prisma',
			url: 'https://github.com/4awel/Xstream-servece-backend',
			technologies: [
				'NestJS',
				'Prisma',
				'PostgreSQL',
				'Redis',
				'Docker',
				'React/Next',
				'REST API',
				'TypeScript',
			],
		},
		{
			name: 'Spotify clonne',
			description: 'Учебный backend на NestJS',
			url: 'https://github.com/4awel/Backend-nestjs',
			technologies: [
				'NestJS',
				'TypeScript',
				'PostgreSQL',
				'Prisma',
				'Docker',
				'Vue/Nuxt',
				'REST API',
				'Deezer API',
			],
		},
		{
			name: 'Rupdal-coder',
			description: 'сайт для тестирования деплоя (студенческая работа)',
			url: 'https://github.com/4awel/Rupal-coder',
			technologies: [
				'TypeScript',
				'Node.js',
				'NestJS',
				'PostgreSQL',
				'Prisma',
				'Docker',
				'REST API',
				'Vue',
			],
		},
		{
			name: 'Web Cinema',
			description:
				'сайт визитка с админ панелью), возможность менять контент сайта через админ панель',
			url: 'https://github.com/4awel/CinemaProject/tree/main/Desktop/web-cinema/project-cinema',
			technologies: [
				'JavaScript',
				'Node.js',
				'ExpressJS',
				'PostgreSQL',
				'Prisma',
				'Docker',
				'REST API',
				'Vue',
			],
		},
	],
};
