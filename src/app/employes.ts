//Tipo especifico para empregado
interface Employee {
    name: string,
    salary: number,
    bonus: number

}
//será possível adicionar elementos, mas não será possível reatribuir o array
const employees: Employee[] =  [];

export default employees;