export class EventDTO {
    id: number;
    title: string;
    datecreate: Date;
    idtype: number;
    typename: string;
    datestart: Date;
    dateend: Date;

    public constructor(){
        this.id = -1;
        this.title = "";
        this.datecreate = new Date();
        this.idtype = -1;
        this.typename = "";
        this.datestart = new Date();
        this.dateend = new Date();
    }

    static copy(copy: EventDTO){
        let e: EventDTO = new EventDTO();

        e.id = copy.id;
        e.title = copy.title;
        e.datecreate = copy.datecreate;
        e.idtype = copy.idtype;
        e.typename = copy.typename;
        e.datestart = copy.datestart;
        e.dateend = copy.dateend;

        return e;
    }
}