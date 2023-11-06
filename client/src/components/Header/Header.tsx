import Link from "next/link";

export default function Header() {
  return (
    <>
      <div>
        <Link href="sign-in">Sign In</Link>
        <Link href="sign-up">Sign up</Link>
      </div>
    </>
  );
}
