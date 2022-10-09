import Link from "next/link";
import { Button } from "reactstrap";

export default function Home() {
  return (
    <div class="homepage-buttons">
        <Link href='/main/sdk' passHref>
          <button class="button button1 center">Enter App</button>
        </Link>
    </div>
  );
}