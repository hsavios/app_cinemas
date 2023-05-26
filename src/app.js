const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {

   //Criar um registro 
/*    const funcionario = await prisma.Funcionario.create({
      data: {
         nome: 'Felipe Pasetti',
         carteiraDeTrabalho: 45123,
         dataContratacao: "2022-10-07T15:25:43.511Z",
         salario: 2000.00
      }
   })
*/   
   //Criar multiplos registros
/*    const funcionario = await prisma.Funcionario.createMany({
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
 */  

   //Mostrar todos os registros

   // const todosFuncionarios = await prisma.Funcionario.findMany()
   // console.log(todosFuncionarios)

   //Mostrar só um registro

   // const funcionario = await prisma.Funcionario.findUnique({
   //    where: {
   //       idFuncionario:3
   //    }
   // })
   // console.log(funcionario)

   //Atualizar um registro

   // const atualizarFuncionario = await prisma.Funcionario.update({
   //    where: {
   //       idFuncionario: 4
   //    },
   //    data: {
   //       salario: 3000
   //    }
   // })
   // console.log(atualizarFuncionario)

   //Eliminar um registro
   const apagarFuncionario = await prisma.Funcionario.delete({
      where: {
         idFuncionario: 1
      }
   })

}

main()
   .catch( (e) => {
      throw e
   })
   .finally(async () => {
      await prisma.$disconnect()
   })