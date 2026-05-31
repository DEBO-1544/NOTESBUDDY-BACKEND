import { prisma } from "../src/DB/db.js";
9;
const Seed = async () => {
  const Userdetails = await prisma.dummy_User.createMany({
    data: [
      {
        name: "Debojit",
        email: "dummy@example.com",
      },
      {
        name: "John Doe",
        email: "john@example.com",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
      },
      {
        name: "Alice Johnson",
        email: "alice@example.com",
      },
    ],
  });
};

Seed()
  .then(() => {
    console.log("Seeding completed successfully");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error seeding data:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
