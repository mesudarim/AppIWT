export class User {
  public email: string = "";
  public userName : string = "";
  public myEvents = [];
  public id: number = null;
  //////  A VIRER, JUSTE POUR VOIS SI CELA MARCHE
  public eventOwner: string = "";

  constructor(email, userName, id) {
    this.email = email;
    this.userName = userName;
    this.id = id
  }
}
