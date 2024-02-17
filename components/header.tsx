import { Young_Serif } from "next/font/google";
import Link from "next/link";

const young_serif = Young_Serif({ weight: ["400"], subsets: ["latin"] });

export default function Header() {
  return (
    <nav className="flex justify-between items-center mb-8">
      <Link href="/" className={`text-2xl ${young_serif.className}`}>
        Oishii
      </Link>
      {/* dark theme toggle  */}
    </nav>
  );
}
