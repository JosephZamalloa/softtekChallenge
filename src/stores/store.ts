import { create } from "zustand";

type IStoredUser = {
  userName: string;
  userLastname: string;
  birthday: string;
  documentType: string;
  documentNumber: string;
  phone: string;
  userType: string;
  selectedPlan: string;
  cost: number;
};

type UserState = {
  userData: IStoredUser;
  updateUserData: (newUserData: Partial<IStoredUser>) => void;
};

const useUserStore = create<UserState>((set) => ({
  userData: {
    userName: "",
    userLastname: "",
    birthday: "",
    documentType: "dni",
    documentNumber: "",
    phone: "",
    userType: "",
    selectedPlan: "",
    cost: 0,
  },
  updateUserData: (newUserData: Partial<IStoredUser>) =>
    set((state) => ({ userData: { ...state.userData, ...newUserData } })),
}));

export default useUserStore;
