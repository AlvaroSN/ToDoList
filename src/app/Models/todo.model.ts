export class todo {

    tittle: String;     //Nombre de la tarea
    priority: number;
    state: number;      //Puede ser "1(pendiente), 2(en proceso) o 3(finalizado)"
    now: any;           //Fecha de creación
    id?: string;
    checked: boolean;

    constructor (tittle: String = '') {
        this.tittle = tittle;
        this.state = 1;
        this.now = Date.now();
        this.priority = 1;
        this.checked = false;
    }
}