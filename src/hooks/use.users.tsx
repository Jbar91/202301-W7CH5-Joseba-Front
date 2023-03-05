import { useDispatch, useSelector } from "react-redux";
import { UsersApiRepo } from "../repo/user.api.repo";
import { AppDispatch, RootState } from "../store/store";
import * as ac from "../reducer/user/user.actions.creator";
import { User } from "../models/user.model";

export function useUsers(repo: UsersApiRepo) {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  const loadUsers = async () => {
    try {
      const token = localStorage.getItem("Token");
      if (!token) throw new Error("no token");
      const data = await repo.loadUsers(token);
      if (!data) throw new Error("murio");
      dispatch(ac.loadCreator(data));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const createUser = async (newUser: Partial<User>) => {
    try {
      const user = await repo.createUser(newUser);
      if (!user) throw new Error("murio");
      dispatch(ac.createUserCreator(user));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const addFriend = async ()=>{
    
  }

  return {
    users,
    loadUsers,
    createUser,
  };
}
