import { ICourse } from "../components/layout/screens/courses/courses.interface";
import { IUserData, ITMState } from "../app.interface";

export const defaultUserData: IUserData = {
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
