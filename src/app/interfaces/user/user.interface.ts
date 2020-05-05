interface IUser {
  firstName: string;
  LastName: string;
}
export interface IUserData {
  user: IUser;
  courses: {
    totalProgressBar: number;
  };
}
