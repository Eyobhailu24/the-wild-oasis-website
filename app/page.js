import Link from "next/link";
import Navigation from "./components/Navigation";
export default function Home() {
  return (
    <div>

      <h1>The Wild Oasis. Welcome to paradise</h1>

      <Link href="/cabins">Explore Luxury Cabins</Link>
    </div>
  );
}
