import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-slate-950 to-slate-900 text-white min-h-screen font-sans">
      <header className="bg-slate-900 py-6 px-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">BlockFunded</h1>
          <nav className="space-x-6 text-sm md:text-base">
            <a href="#challenge" className="hover:underline">Challenge</a>
            <a href="#plans" className="hover:underline">Plans</a>
            <a href="#why" className="hover:underline">Why Us</a>
            <a href="#faq" className="hover:underline">FAQ</a>
            <a href="#dashboard" className="hover:underline">Dashboard</a>
          </nav>
        </div>
      </header>

      <section className="text-center py-24 px-4 relative">
        <h2 className="text-5xl font-bold mb-4">Become a Funded Trader</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Join BlockFunded and access up to $200,000 in capital. Trade smart. Scale fast.
        </p>
        <Button className="text-lg px-8 py-4">Start Challenge</Button>
        <div className="absolute opacity-10 w-full h-full top-0 left-0 z-0">
          <Image src="/bitcoin.jpg" alt="Bitcoin" layout="fill" objectFit="cover" />
        </div>
      </section>

      <section id="plans" className="bg-white text-black py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Choose Your Plan</h3>
          <p className="mb-10">Flexible funding options tailored to your trading goals.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[{ title: "$10K Account", price: "$99" }, { title: "$50K Account", price: "$249" }, { title: "$200K Account", price: "$599" }].map((plan) => (
              <Card key={plan.title} className="rounded-2xl shadow-xl border border-gray-200">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{plan.title}</h4>
                  <p className="text-lg mb-4">{plan.price}</p>
                  <Button>Get Started</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="bg-slate-800 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Why BlockFunded?</h3>
          <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image src="/decentralized.jpg" alt="Decentralized" width={500} height={300} className="rounded-xl shadow-lg" />
            </div>
            <div className="md:w-1/2 text-left">
              <p className="text-lg leading-relaxed">
                We are not your typical prop firm. BlockFunded empowers traders globally with instant access to capital, fast evaluation, and high profit splits. With a strong focus on decentralization, transparency, and technology — we put the trader first.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-gray-300">
                <li>✔ Instant Funding Options</li>
                <li>✔ Payouts in Crypto or Fiat</li>
                <li>✔ Fair Challenges – No Time Limits</li>
                <li>✔ Full Dashboard Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-8 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} BlockFunded. All rights reserved.</p>
      </footer>
    </main>
  );
}
