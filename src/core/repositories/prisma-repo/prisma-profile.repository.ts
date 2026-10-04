import { Injectable } from "@nestjs/common";
import { Profile } from "@/core/entity/profile.entity";
import { PrismaProfileMapper } from "@/core/mappers/profile.mapper";
import { PrismaService } from "@/core/prisma/prisma.service";
import { ProfileRepository } from "@/core/repositories/abstracts/profile.repository";
import { ProfileInput } from "@/core/repositories/abstracts/props/profile.props";

@Injectable()
export class PrismaProfileRepository extends ProfileRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async findFirst(): Promise<Profile | null> {
    const profile = await this.prisma.profile.findFirst({
      orderBy: {
        createdAt: "asc",
      },
    });

    if (!profile) return null;
    return PrismaProfileMapper.toEntity(profile);
  }

  async replace(input: ProfileInput): Promise<void> {
    const { links, skills, experience, projects, ...fields } = input;
    await this.prisma.$transaction(async (tx) => {
      const profile = await tx.profile.upsert({
        where: {
          slug: fields.slug,
        },
        create: fields,
        update: fields,
      });
      await Promise.all([
        tx.link.deleteMany({
          where: {
            profileId: profile.id,
          },
        }),
        tx.skill.deleteMany({
          where: {
            profileId: profile.id,
          },
        }),
        tx.experience.deleteMany({
          where: {
            profileId: profile.id,
          },
        }),
        tx.project.deleteMany({
          where: {
            profileId: profile.id,
          },
        }),
      ]);
      await tx.link.createMany({
        data: links.map((link, order) => ({
          ...link,
          order,
          profileId: profile.id,
        })),
      });
      await tx.skill.createMany({
        data: skills.map((skill, order) => ({
          ...skill,
          order,
          profileId: profile.id,
        })),
      });
      await tx.experience.createMany({
        data: experience.map((item) => ({
          ...item,
          profileId: profile.id,
        })),
      });
      await tx.project.createMany({
        data: projects.map((project, order) => ({
          ...project,
          order,
          profileId: profile.id,
        })),
      });
    });
  }
}
