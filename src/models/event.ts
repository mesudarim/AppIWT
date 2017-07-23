export class Event {
  public id: number = null;
  public eventOwner: string = "";
  public eventName: string = "";
  public when : string;
  public duration : string;
  public where: string;
  public imageUrl: string = "";
  public users = [];
  //public chat = [];
  public galery = [];



  constructor(id, eventName, when, duration, eventOwner, where) {
    this.id = id;
    this.eventName = eventName;
    this.when = when;
    this.duration = duration;
    this.eventOwner = eventOwner;
    this.where = where;
  }
}
