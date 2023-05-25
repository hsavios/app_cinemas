const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {

   //Criar registro
   const funcionario = await prisma.Funcionario.createMany({
   data: [
      {
         nome: 'Felipe Pasetti',
         carteiraDeTrabalho: 45123,
         dataContratacao: "2022-10-07T15:25:43.511Z",
         salario: 2000.00
      },
      {
         nome: 'Deusileide Oliveira',
         carteiraDeTrabalho: 323546,
         dataContratacao: "2015-08-13T18:25:43.511Z",
         salario: 2000.00
      }]
   })
   console.log(funcionario)
}

main()
   .catch( (e) => {
      throw e
   })
   .finally(async () => {
      await prisma.$disconnect()
   })