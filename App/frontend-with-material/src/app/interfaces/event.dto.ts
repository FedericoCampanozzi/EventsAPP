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

    static copy(copy: EventDTO){
        let e: EventDTO = new EventDTO();

        e.ID = copy.ID;
        e.Title = copy.Title;
        e.DateCreate = copy.DateCreate;
        e.ID_Type = copy.ID_Type;
        e.TypeName = copy.TypeName;
        e.DateStart = copy.DateStart;
        e.DateEnd = copy.DateEnd;

        return e;
    }
}