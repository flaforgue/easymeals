import Link from "next/link";

export default function LandingPage() {
  return (
    <main>
      You might want to <Link href='/home' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">login</Link>
    </main>
  );
}
