import { useState } from "react";
import { UsersApiRepo } from "../repo/user.api.repo";
import { useUsers } from "./use.users";

export function useRegister() {
  const repo = new UsersApiRepo();

  const [register, setRegister] = useState({
    email: "",
    name: "",
    surname: "",
    passwd: "",
  });

  const handleChange = (event: React.SyntheticEvent) => {
    let target = event.target as HTMLInputElement;
    setRegister({ ...register, [target.name]: target.value });
  };

  const { createUser } = useUsers(repo);

  const handleRegister = (event: React.SyntheticEvent) => {
    event.preventDefault();
    createUser(register);
  };

  return {
    register,
    handleChange,
    handleRegister,
  };
}
