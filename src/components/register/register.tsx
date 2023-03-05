import { useRegister } from "../../hooks/use.register";

export default function Register() {
  const { register, handleChange, handleRegister } = useRegister();

  return (
    <form onSubmit={handleRegister}>
      <label htmlFor="email">
        Enter your email:
        <input
          type="email"
          name="email"
          id="email"
          value={register.email}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="name">
        Enter your name:
        <input
          type="text"
          name="name"
          id="name"
          value={register.name}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="surname">
        Enter your surname:
        <input
          type="text"
          name="surname"
          id="surname"
          value={register.surname}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="passwd">
        Enter your password:
        <input
          type="password"
          name="passwd"
          id="passwd"
          value={register.passwd}
          onChange={handleChange}
          required
        />
      </label>
      <input type="submit" value="Register" />
    </form>
  );
}
