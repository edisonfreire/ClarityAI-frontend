import { SignedIn, SignedOut } from "@clerk/nextjs"
import Link from "next/link"

function Hero() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Clarity<span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">AI</span>
      </h1>
      <p className="text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide mt-2">
        Your AI-Powered Mental Wellness Companion
      </p>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Talk to an AI-powered chatbot that helps you journal, reflect, and track your emotional well-being.
      </p>
      <div className="flex justify-center my-10">
        <SignedIn>
          <Link
            href="/dashboard"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
          >
            Dashboard
          </Link>
        </SignedIn>
        <SignedOut>
          <Link
            href="/sign-up"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
          >
            Get Started
          </Link>
        </SignedOut>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src="video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src='video2.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div >
  )
}

export default Hero