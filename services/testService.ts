/**

import * as Common from "./CommonService";

export const year: number = 2017; 

export const languages: string[] = ["Java", "Go", "JavaScript"]; 

export const lanAges: {[key: string]: number} = {"Java": 20, "Go": 8, "JavaScript": 16}; 

export const happy: boolean = true; 

export enum EmployeeType {
    Junior = 0,
    Senior = 1,
    Manager = 2,
    Director = 10
}

export interface NetworkException {
    code: number,
    message: string,
    url?: string
}

export interface Employee {
    name: string,
    age?: number,
    tasks: {[key: string]: number}
}

export function QueryEmployee(age: number): Promise<Employee[]> {
    return webApi<Employee[]>("EmployeeOperator.QueryEmployee", { age })
}

export function OperateEmployeeSalaryByType(type: EmployeeType, amount: number, note: string): Promise<boolean> {
    return webApi<boolean>("EmployeeSalaryOperator.OperateEmployeeSalaryByType", { type, amount, note })
}


export default {
    QueryEmployee,
    OperateEmployeeSalaryByType
}