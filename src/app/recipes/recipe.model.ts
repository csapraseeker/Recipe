export class Recipe {
    public name: string ;
    public description: string ;
    public imapgePath: string; 

    constructor( name: string , desc: string, imagepath: string) {
        this.name = name ;
        this.description = desc;
        this.imapgePath = imagepath;

    }
}