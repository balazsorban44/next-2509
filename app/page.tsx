import { runForm } from "./actions";

export default function Home() {
  return (
    <form action={runForm}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
}
