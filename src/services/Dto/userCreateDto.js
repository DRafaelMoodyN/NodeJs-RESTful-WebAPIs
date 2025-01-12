class UserCreateDto {
  userName;
  email;
  password;
  roles;
  isActive;

  constructor(data) {
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
    this.roles = data.roles;
    this.isActive = data.isActive;
  }
}

export default UserCreateDto;
