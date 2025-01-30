import { Projecttable } from "./projecttable";
import { Task } from "./task";


export interface Tmemeber {
    id?:number;
    name:string;
    email:string;
    password:string;
    project?:Projecttable[];
    task?:Task[];
}
