import Link from "next/link";

function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className=" flex justify-center  text-2xl font-bold">About us</h1>
      <ul>
        <li>
          <Link className="underline" href="/about/contacts">
            Contacts
          </Link>
        </li>
        <li>
          <Link className="underline" href="/about/team">
            Team
          </Link>
        </li>
      </ul>
      {children}
    </div>
  );
}

export default AboutLayout;
