import { useEffect, useMemo } from "react";
import { useUsers } from "../../hooks/use.users";
import { UsersApiRepo } from "../../repo/user.api.repo";
import { RegisterLogin } from "../register.login/register.login";

export default function Home() {
  const repo = useMemo(() => new UsersApiRepo(), []);

  const { users, loadUsers } = useUsers(repo);

  const token = localStorage.getItem("Token");

  useEffect(() => {
    loadUsers();
  }, []);

  console.log(users);

  return (
    <main>
      {!token ? (
        <RegisterLogin></RegisterLogin>
      ) : (
        <section className="home">
          {users.map((item) => {
            return (
              <div key={item.id}>
                <h2>
                  {item.name} {item.surname}
                </h2>
                <ul>
                  {item.friends.map((friend) => (
                    <p>{friend.name}</p>
                  ))}
                </ul>
                <ul>
                  {item.enemies.map((enemy) => (
                    <p>{enemy.name}</p>
                  ))}
                </ul>
                <button>Add friend</button>
                <button>Add enemy</button>
              </div>
            );
          })}
        </section>
      )}
    </main>
  );
}
