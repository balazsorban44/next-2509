import { runForm } from "./actions";

export default function Home() {
  return (
    <form action={runForm}>
      <button type="submit">Login</button>
    </form>
  );
}
