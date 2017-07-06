export class Event {
  public id: number = null;
  public eventName: string = "";
  public startDate : any = "";
  public endDate : any = "";
  public users = [];
  public eventOwner: string = "";


  constructor(id, eventName, startDate, endDate, eventOwner) {
    this.id = id;
    this.eventName = eventName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.eventOwner = eventOwner
  }
}
