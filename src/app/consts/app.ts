import { ICourse } from "../interfaces/courses/courses.interface";
import { IUserData } from "../interfaces/user/user.interface";
import { ITMState } from "../interfaces/teachme/teachme.interface";

export const defaultUserData: IUserData = {
  user: {
    firstName: "Dan",
    LastName: "Israeli",
  },
  courses: {
    percentCompletion: 20,
  },
};

export const defaultInitialTMState: ITMState = {
  tmCourses: [] as ICourse[],
  initiated: false,
  debugError: "",
  platformType: "",
  isWebApp: false,
  tmUser: defaultUserData,
};
