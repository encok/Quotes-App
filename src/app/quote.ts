// export class Quote {
//     topic :string;
//     description: string;
//     name: string;
// }
export class Quote {
    showAuthor: boolean;
    constructor(public topic:string, public description: string, public name:string,public author:string, public datePosted: Date,public likes:number, public dislikes:number ){
        this.showAuthor=false
    }
    // public author:string, public datePosted: Date,public likes:number, public dislikes:number
}
