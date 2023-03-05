import { useLogin } from "../../hooks/use.login";

export default function Login() {
  const { login, handleSubmit, handleLogin } = useLogin();

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Enter you email:
        <input
          type="email"
          name="email"
          id="email"
          value={login.email}
          onChange={handleLogin}
          required
        />
      </label>
      <label htmlFor="passwd">
        Enter your password:
        <input
          type="password"
          name="passwd"
          id="passwd"
          value={login.passwd}
          onChange={handleLogin}
          required
        />
      </label>
      <input type="submit" value="Login" />
    </form>
  );
}
