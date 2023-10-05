export class EventDTO {
    ID: number;
    Title: string;
    DateCreate: Date;
    ID_Type: number;
    TypeName: string;
    DateStart: Date;
    DateEnd: Date;

    public constructor(){
        this.ID = -1;
        this.Title = "";
        this.DateCreate = new Date();
        this.ID_Type = -1;
        this.TypeName = "";
        this.DateStart = new Date();
        this.DateEnd = new Date();
    }
}