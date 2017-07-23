export class User {
  public id: number = null;
  public email: string;
  public userName : string;
  public userPic: string;
  public password: string;
  public myEvents = [];
  public myFriends = [];
  public myNotifications = [];

  //////  A VIRER, JUSTE POUR VOIS SI CELA MARCHE
  public eventOwner: string = "";

  constructor(email, userName, id, password) {
    this.email = email,
    this.userName = userName,
    this.id = id,
    this.password = password
  }
}
