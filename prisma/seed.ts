import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

async function main() {
  // Sembrar Clientes
  const customer1Id = uuidv4();
  const customer2Id = uuidv4();
  await prisma.customer.createMany({
    data: [
      {
        id: customer1Id,
        customerName: 'Juan Pérez',
        contactName: 'María Pérez',
        contactPhone: '123-456-7890',
        contactEmail: 'juanperez@example.com',
        address: '123 Calle Principal',
      },
      {
        id: customer2Id,
        customerName: 'Ana García',
        contactName: 'Pedro García',
        contactPhone: '987-654-3210',
        contactEmail: 'anagarcia@example.com',
        address: '456 Avenida Elm',
      },
    ],
  });

  // Otras semillas de datos aquí...

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });