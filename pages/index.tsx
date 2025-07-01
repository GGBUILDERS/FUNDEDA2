import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <header className="bg-slate-900 py-6 px-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">BlockFunded</h1>
          <nav className="space-x-6">
            <a href="#challenge" className="hover:underline">Challenge</a>
            <a href="#plans" className="hover:underline">Plans</a>
            <a href="#whyus" className="hover:underline">Why Us</a>
            <a href="#faq" className="hover:underline">FAQ</a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-24 px-4 text-center">
        <img src="/bitcoin.jpg" alt="Bitcoin" className="mx-auto mb-6 w-32 rounded-lg shadow-lg" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Become a Funded Trader</h2>
        <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
          Get up to $200,000 in funding with BlockFunded. Trade with confidence and scale your success.
        </p>
        <Button className="text-lg px-8 py-4">Start Challenge</Button>
      </section>

      <section id="plans" className="bg-white text-black py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4">Our Plans</h3>
          <p className="mb-10">Choose the plan that suits your trading goals.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "$10K Account", price: "$99" },
              { title: "$50K Account", price: "$249" },
              { title: "$200K Account", price: "$599" },
            ].map((plan) => (
              <Card key={plan.title} className="rounded-2xl shadow-lg">
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

      <section id="whyus" className="bg-slate-800 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <img src="/defi.jpg" alt="DeFi" className="mx-auto mb-6 w-32 rounded-lg shadow-lg" />
          <h3 className="text-3xl font-bold mb-4">Why Choose BlockFunded?</h3>
          <p className="text-lg">
            We empower traders with real capital, instant feedback, and a world-class platform.
            With transparent rules, fast payouts, and zero hidden fees, BlockFunded is your trusted gateway to professional trading.
          </p>
        </div>
      </section>

      <footer className="bg-slate-900 py-10 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} BlockFunded. All rights reserved.</p>
      </footer>
    </main>
  );
}
