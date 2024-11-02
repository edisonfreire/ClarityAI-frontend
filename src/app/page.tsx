import Hero from "@/components/landing-page/Hero";
import Navbar from "@/components/landing-page/Navbar";
import FeatureSection from "@/components/landing-page/FeatureSection";

// ***** Landing page *****
// Basic funtionality on landing page - ✅
// Clean UI and information about application - almost done
// Sign in - ✅
// Sign up - ✅
// After signing up will to user's dashboard - ✅

// ***** Forward thinking *****
// With auth we need private and public routes, dashboard will be a public route meaning you can view with page without authenticated for new users. - ✅

// ***** Future *****
// Maybe need an About Us page, talking about the team
// Testimonials
// Footer

// Inspo
// https://www.youtube.com/watch?v=EwzWg-Joxq0

export default async function Home() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <FeatureSection />
      </div>
    </div>
  );
}
