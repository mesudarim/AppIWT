export class Event {
  public id: number = null;
  public eventOwner: string = "";
  public eventName: string = "";
  public startDate : any = "";
  public endDate : any = "";
  public place: string = "";
  public imageUrl: string = "";
  public users = [];



  constructor(id, eventName, startDate, endDate, eventOwner, place) {
    this.id = id;
    this.eventName = eventName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.eventOwner = eventOwner;
    this.place = place
  }
}