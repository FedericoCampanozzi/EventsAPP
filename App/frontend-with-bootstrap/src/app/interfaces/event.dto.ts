export class EventDTO {
    ID: number;
    Title: string;    
    ID_Type: number;
    TypeName: string;
    DateStart: Date;
    DateEnd: Date;

    public constructor(){
        this.ID = 0;
        this.Title = "";
        this.ID_Type = 0;
        this.TypeName = "";
        this.DateStart = new Date();
        this.DateEnd = new Date();
    }
}