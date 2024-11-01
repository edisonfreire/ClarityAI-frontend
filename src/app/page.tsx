import Link from "next/link";

// ***** Landing page *****
// Basic funtionality on landing page
// Clean UI and information about application
// Sign in
// Sign up
// After signing up will to user's dashboard

// ***** Forward thinking *****
// With auth we need private and public routes, dashboard will be a public route meaning you can view with page without authenticated for new users.

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl">Clarity AI</h1>
      <h3 className="text-xl">Temporary until dashboard is set up</h3>
      <Link href="/dashboard" className="text-blue-500">Click to go to dashboard</Link>
    </div>
  );
}
