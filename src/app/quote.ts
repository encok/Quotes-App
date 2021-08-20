// export class Quote {
//     topic :string;
//     description: string;
//     name: string;
// }
export class Quote {
    showDescription: boolean;
    constructor(public topic:string, public description: string, public name:string){
        this.showDescription=false
    }

}
