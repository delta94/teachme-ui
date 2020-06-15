import { ICourse } from "../components/layout/screens/courses/interface";
import { IUserData, ITMState } from "../app.interface";

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
