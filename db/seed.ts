import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';

async function main() {
  const prisma = new PrismaClient();
  await prisma.production.deleteMany();

  await prisma.production.createMany({ data: sampleData.production });

  console.log('Database seeded successfully');
}

main();