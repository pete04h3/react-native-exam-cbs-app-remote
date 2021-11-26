class User {
    constructor(id, firstname, lastname, imageUrl, email, studyProgramme, chatToggle, eventToggle, notifications) {
      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.imageUrl = imageUrl;
      this.email = email;
      this.studyProgramme = studyProgramme;
      this.chatToggle = chatToggle;
      this.eventToggle = eventToggle;
      this.notifications = notifications;
    }
  }

  export default User;