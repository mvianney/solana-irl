'use client'

import { useEffect } from 'react'
import ReadingProgressBar from '@/components/reading-progress-bar'
import GlossaryTerm from '@/components/glossary-term'
import Navbar from '@/components/navbar'

function XIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-navy dark:text-white">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  )
}

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="my-8 md:my-10">
      <div className="connector-line" />
      <div className="scroll-reveal mt-4">
        <img
          src={src}
          alt={alt}
          className="w-full aspect-video object-cover rounded-lg border-2 border-slate-200 dark:border-slate-700 shadow-md dark:shadow-lg"
        />
      </div>
    </div>
  )
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <ReadingProgressBar />
      <main className="w-full">
        {/* Full-Width Header */}
        <header
          className="article-header relative w-full overflow-hidden"
          style={{
            backgroundImage: 'url(/images/backgroundheaderphoto.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="article-header-content">
            <h1 className="article-header-title">Solana IRL</h1>
            <div className="article-header-flag">🇵🇱</div>
          </div>
        </header>

        {/* Article Intro Section */}
        <section className="article-hero">
          <p className="text-sm tracking-widest text-navy dark:text-teal uppercase font-semibold mb-4 text-center">
            The Blockchain That&apos;s Quietly Changing Everyday Life
          </p>
          <p className="article-subtitle text-center italic">
            And no, it&apos;s not about memecoins.
          </p>
        </section>

        {/* Article Content */}
        <article className="article-content">
          {/* Introduction */}
          <section className="article-section">
            <p>
              Ask most people what Solana is, and you&apos;ll get one of three answers: <em>&ldquo;That crypto thing,&rdquo;</em> <em>&ldquo;Isn&apos;t that for trading?&rdquo;</em> or a blank stare. The loudest conversations around Solana have been about token prices, <GlossaryTerm>memecoins</GlossaryTerm>, and <GlossaryTerm>Speculation</GlossaryTerm> — and that noise has drowned out something far more interesting.
            </p>
            <p>
              Solana is being used right now, today, to map roads, move money across borders, connect wireless networks, and power consumer applications that millions of people interact with daily — most of them without even knowing a <GlossaryTerm>Blockchain</GlossaryTerm> is involved.
            </p>
            <p>
              This is the story of what Solana actually is, what it&apos;s actually doing, and why one project built on it is quietly outpacing Google at one of the most fundamental things on the internet.
            </p>
          </section>

          {/* Hero Image */}
          <SectionImage src="/images/Hero_cover-image.webp" alt="Hero cover image for Solana IRL" />

          <div className="article-divider"></div>

          {/* Part 1 */}
          <section className="article-section">
            <h2>Part 1: What Solana Actually Is</h2>

            <h3 className="text-2xl font-bold mb-4 mt-6">Forget Everything You&apos;ve Heard</h3>
            <p>
              Before we get into real-world applications, let&apos;s clear the air.
            </p>
            <p>
              Blockchain technology has a reputation problem. For most people, it conjures images of speculative trading, overnight millionaires, and crashed portfolios. That reputation is not entirely undeserved — a lot of what happens in crypto is speculative. But judging blockchain technology by its loudest users is like judging the internet by spam emails. The <GlossaryTerm>Infrastructure</GlossaryTerm> is far more powerful than the noise around it.
            </p>
            <p>
              Solana is a <GlossaryTerm>blockchain network</GlossaryTerm> — but what that actually means is this: it is a global, open, programmable system that anyone in the world can build on, transact on, and access, without needing permission from a bank, a government, or a corporation.
            </p>
            <p>
              What makes Solana different from earlier blockchain networks is that it was built to be <em>fast enough</em> and <em>cheap enough</em> for real, everyday use.
            </p>
          </section>

          <div className="article-divider"></div>

          <section className="article-section">
            <h3 className="text-2xl font-bold mb-4">Low Fees: Making Everyday Use Possible</h3>
            <p>
              One of the biggest barriers to blockchain adoption has always been cost.
            </p>
            <p>
              On many blockchain networks, sending a simple transaction can cost several dollars in fees. For someone sending $10 to a friend, or earning a small reward for contributing to an app, that cost makes no sense. It&apos;s like paying a $5 ATM fee to withdraw $20.
            </p>
            <p>
              Solana solves this. <GlossaryTerm>Transaction fees</GlossaryTerm> on Solana average around <strong>$0.004</strong> — less than half a cent. This means users can send payments, earn rewards, or interact with applications without worrying about fees eating into their value.
            </p>
            <p>
              This one detail changes everything. When fees are negligible, suddenly a whole new category of use cases becomes possible: <GlossaryTerm>Micro-payments</GlossaryTerm>, real-time rewards, pay-per-use services, and applications that pay users fractions of a cent thousands of times a day.
            </p>
            <p>
              Think of it this way: email only became useful when sending a message stopped costing money. Solana does the same thing for value transfer.
            </p>

            <SectionImage src="/images/LowFeescost.webp" alt="Low fees illustration" />
          </section>

          <div className="article-divider"></div>

          <section className="article-section">
            <h3 className="text-2xl font-bold mb-4">Speed: The Internet Standard, Finally Applied to Blockchain</h3>
            <p>
              Blockchain networks have historically been painfully slow. Bitcoin processes roughly 7 transactions per second. The early internet was slow too — but we adapted our expectations. With blockchain, slow speeds have meant that applications feel clunky, unresponsive, and impractical for anything beyond simple transfers.
            </p>
            <p>
              Solana processes transactions in under a second. For users, this means that whether you&apos;re receiving a payment, earning a reward for contributing data, purchasing a digital ticket, or interacting with a <GlossaryTerm>Decentralized</GlossaryTerm> app — the experience feels instant. It feels like using a normal internet application.
            </p>
            <p>
              This matters enormously for mainstream adoption. Regular people do not tolerate slow software. If a blockchain-powered app takes 10 seconds to confirm a payment while a card payment takes 2 seconds, users will choose the card. Speed is not a luxury — it&apos;s a prerequisite for real-world use.
            </p>

            <SectionImage src="/images/Speed-section.webp" alt="Speed performance illustration" />
          </section>

          <div className="article-divider"></div>

          <section className="article-section">
            <h3 className="text-2xl font-bold mb-4">Scalability: Built for Millions, Not Thousands</h3>
            <p>
              <GlossaryTerm>Scalability</GlossaryTerm> is the ability of a network to handle growing numbers of users without slowing down or becoming more expensive. It is one of the hardest engineering problems in blockchain, and one that most networks have not fully solved.
            </p>
            <p>
              Solana&apos;s architecture was designed from the beginning for scale. The network can handle tens of thousands of transactions per second, with ongoing upgrades — including the <GlossaryTerm>Firedancer</GlossaryTerm> client — targeting over one million transactions per second. As of 2025, Solana processes roughly 90 million transactions daily, with 60 million monthly active users.
            </p>
            <p>
              For context: this is the kind of scale required to support real-world applications. A mapping network that pays thousands of drivers globally. A payment platform used by millions of merchants. A consumer app with users in every country.
            </p>
            <p>
              Solana provides that <GlossaryTerm>Infrastructure</GlossaryTerm>.
            </p>

            <SectionImage src="/images/scalability-section.webp" alt="Scalability illustration" />
          </section>

          <div className="article-divider"></div>

          <section className="article-section">
            <h3 className="text-2xl font-bold mb-4">Composability: Building Blocks That Work Together</h3>
            <p>
              One of Solana&apos;s most underappreciated qualities is <GlossaryTerm>Composability</GlossaryTerm> — the ability for different applications built on the network to connect and interact with each other seamlessly.
            </p>
            <p>
              In traditional software development, building a new product often means rebuilding components that already exist elsewhere. Payment systems, identity verification, data storage — each company builds its own version, separately. This is expensive, slow, and creates fragmented user experiences.
            </p>
            <p>
              On Solana, applications can share data, users, and functionality. A mapping application can connect to a payment layer. A ticketing platform can integrate identity verification from another protocol. A rewards system can plug into multiple applications at once. Developers build on what already exists, creating richer products faster.
            </p>
            <p>
              This composability is why Solana has evolved into an <GlossaryTerm>Ecosystem</GlossaryTerm> rather than just a platform.
            </p>

            <SectionImage src="/images/compactibility-section.webp" alt="Composability illustration" />
          </section>

          <div className="article-divider"></div>

          <section className="article-section">
            <h3 className="text-2xl font-bold mb-4">Global Accessibility: Open to Everyone</h3>
            <p>
              Perhaps the most profound quality of Solana is also the simplest: anyone with an internet connection can participate.
            </p>
            <p>
              This is not trivial. Roughly 1.4 billion adults globally are <GlossaryTerm>Unbanked</GlossaryTerm> — without access to traditional financial services. For these individuals, sending money, receiving payment for work, saving value, or accessing financial tools requires either expensive informal systems or exclusion entirely.
            </p>
            <p>
              Solana changes this equation. There is no application process, no minimum balance, no geographic restriction. A farmer in rural Nigeria, a freelancer in Southeast Asia, and a driver in Poland all have the same access to the same network, on equal terms.
            </p>

            <SectionImage src="/images/globalaccess-section.webp" alt="Global accessibility illustration" />
          </section>

          <div className="article-divider"></div>

          <section className="article-section">
            <h3 className="text-2xl font-bold mb-4">The Foundation Summary</h3>
            <p>
              To bring it all together — Solana is not just a blockchain. It is a foundation for applications that require:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
              <li><strong>Speed</strong> comparable to the web applications people already use</li>
              <li><strong>Fees</strong> low enough to make micro-transactions viable</li>
              <li><strong>Scale</strong> capable of supporting millions of users globally</li>
              <strong><li>Composability</li></strong>
              <li><strong>Accessibility</strong> that removes geographic and financial barriers</li>
            </ul>
            <p>
              These qualities are not ends in themselves. They are the conditions necessary to build applications that solve real problems for real people. And that is exactly what is happening.
            </p>
            <p>
              The next section is proof.
            </p>
          </section>

          <div className="article-divider"></div>

          {/* Part 2 */}
          <section className="article-section">
            <h2>Part 2: Hivemapper — Your Commute, Reimagined</h2>

            <h3 className="text-2xl font-bold mb-4 mt-6">The Problem With Google Maps (That Nobody Talks About)</h3>
            <p>
              Google Maps is one of the most used applications on earth. It works remarkably well. But there is something uncomfortable at the heart of how it works.
            </p>
            <p>
              Every time you open Google Maps, your device sends location data back to Google. Every drive you take, every route you follow, every traffic update you contribute to — all of that data flows to Google, is processed by Google, and generates revenue for Google.
            </p>
            <p>
              In 2023, Google&apos;s mapping and location services contributed to an advertising business worth over $200 billion annually. The data that feeds that machine comes largely from users — from you, from your phone, from your daily movements.
            </p>
            <p>
              Your cut? Zero.
            </p>
            <p>
              This is the <GlossaryTerm>Extractive model</GlossaryTerm> of the internet: companies collect your data, process it into valuable products, and keep the profits. You get a free service in return.
            </p>
            <p>
              But what if there was a different model? What if the people who generated the data actually owned it — and got paid for it? That is exactly what Hivemapper is building.
            </p>

            <SectionImage src="/images/googlemapsproblem-section.webp" alt="Google Maps problem illustration" />
          </section>

          <div className="article-divider"></div>

          <section className="article-section">
            <h3 className="text-2xl font-bold mb-4">What is Hivemapper?</h3>
            <p>
              Hivemapper is a <GlossaryTerm>Decentralized</GlossaryTerm> mapping network built on Solana. Its goal is to build the world&apos;s most accurate, most current map — not by deploying a fleet of company-owned cars, but by recruiting everyday drivers around the world to do it collectively.
            </p>
            <p>
              The concept is straightforward: contributors mount a dashcam on their car, drive their normal routes, and the camera captures continuous street-level imagery. That data is uploaded to the Hivemapper network, processed by AI into usable map intelligence, and the contributor earns <strong><GlossaryTerm>HONEY tokens</GlossaryTerm></strong> as payment.
            </p>
            <p>
              No extra trips. No special skills. Just drive the road you were already going to drive.
            </p>
            <p>
              The result is a living, continuously updated map built by the people who actually live in and move through the world — and owned by the network, not a single corporation.
            </p>

            <SectionImage src="/images/hivemapper.jpeg" alt="What is Hivemapper illustration" />
          </section>

          <div className="article-divider"></div>

          <section className="article-section">
            <h3 className="text-2xl font-bold mb-4">How It Works: Step by Step</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">Step 1 — Mount a Bee Dashcam</h4>
                <p>The hardware is a compact dashcam called the Bee, available through a subscription starting at $19 per month. Once mounted, it operates automatically.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Step 2 — Drive Normally</h4>
                <p>The dashcam records 4K street-level imagery as you drive. No detours, no special routes required. Your everyday commute, errands, and trips all contribute.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Step 3 — Data Uploads Automatically</h4>
                <p>Imagery is uploaded to the Hivemapper network via WiFi or cellular connection. No manual steps needed.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Step 4 — AI Processes the Data</h4>
                <p>The network uses AI to extract map intelligence from the raw imagery — road layouts, signage, lane markings, traffic conditions, and more.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Step 5 — You Earn HONEY Tokens</h4>
                <p>Contributors receive <GlossaryTerm>HONEY tokens</GlossaryTerm> on Solana in exchange for their verified contributions. Rewards are tracked transparently <GlossaryTerm>On-chain</GlossaryTerm>.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Step 6 — The Map Gets Better</h4>
                <p>Every drive makes the global map more accurate, more current, and more complete. The more contributors, the better the map.</p>
              </div>
            </div>

            <SectionImage src="/images/howitworks-section.webp" alt="How It Works illustration" />
          </section>

          <div className="article-divider"></div>

          <section className="article-section">
            <h3 className="text-2xl font-bold mb-4">Hivemapper vs. Google Maps: A Direct Comparison</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-navy/5 dark:bg-teal/10">
                    <th className="border border-border dark:border-slate-600 p-3 text-left font-semibold"></th>
                    <th className="border border-border dark:border-slate-600 p-3 text-left font-semibold">Google Maps</th>
                    <th className="border border-border dark:border-slate-600 p-3 text-left font-semibold">Hivemapper</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border dark:border-slate-600 p-3 font-semibold">Who collects the data?</td>
                    <td className="border border-border dark:border-slate-600 p-3">Google&apos;s own cars + your phone silently</td>
                    <td className="border border-border dark:border-slate-600 p-3">Drivers worldwide, voluntarily</td>
                  </tr>
                  <tr className="bg-navy/5 dark:bg-teal/5">
                    <td className="border border-border dark:border-slate-600 p-3 font-semibold">Who owns the data?</td>
                    <td className="border border-border dark:border-slate-600 p-3">Google</td>
                    <td className="border border-border dark:border-slate-600 p-3">The open network</td>
                  </tr>
                  <tr>
                    <td className="border border-border dark:border-slate-600 p-3 font-semibold">Who profits from the data?</td>
                    <td className="border border-border dark:border-slate-600 p-3">Google ($200B+ ad business)</td>
                    <td className="border border-border dark:border-slate-600 p-3">The contributors</td>
                  </tr>
                  <tr className="bg-navy/5 dark:bg-teal/5">
                    <td className="border border-border dark:border-slate-600 p-3 font-semibold">How often is data refreshed?</td>
                    <td className="border border-border dark:border-slate-600 p-3">Every 1–3 years on average</td>
                    <td className="border border-border dark:border-slate-600 p-3">Continuously, every day</td>
                  </tr>
                  <tr>
                    <td className="border border-border dark:border-slate-600 p-3 font-semibold">Cost to scale globally?</td>
                    <td className="border border-border dark:border-slate-600 p-3">Enormous — fleets, employees, logistics</td>
                    <td className="border border-border dark:border-slate-600 p-3">Near-zero — contributors drive anyway</td>
                  </tr>
                  <tr className="bg-navy/5 dark:bg-teal/5">
                    <td className="border border-border dark:border-slate-600 p-3 font-semibold">Who can access the map data?</td>
                    <td className="border border-border dark:border-slate-600 p-3">Google&apos;s partners (at a price)</td>
                    <td className="border border-border dark:border-slate-600 p-3">Any developer, on open terms</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The most striking line in that table is coverage speed. Traditional mapping companies must plan, fund, and execute mapping expeditions. Hivemapper&apos;s contributors are already driving. The result: Hivemapper has mapped roughly <strong>one-third of all roads on Earth</strong> in under two years — expanding coverage <strong>five times faster</strong> than Google managed with its Street View program.
            </p>
          </section>

          <div className="article-divider"></div>

          <section className="article-section">
            <h3 className="text-2xl font-bold mb-4">Real Clients, Real Money</h3>
            <p>
              It would be easy to dismiss this as an interesting experiment. The client list makes that impossible.
            </p>
            <p>Hivemapper&apos;s data is currently being used by:</p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
              <li><strong>Volkswagen ADMT</strong> — for <GlossaryTerm>Robotaxi</GlossaryTerm> navigation and testing</li>
              <li><strong>Lyft</strong> — for real-time route intelligence</li>
              <li><strong><GlossaryTerm>Mapbox</GlossaryTerm></strong> — a major mapping infrastructure provider</li>
              <li><strong>HERE Technologies</strong> — one of the world&apos;s top 10 global map data companies</li>
              <li><strong>NBC</strong> — for location-based media applications</li>
            </ul>
            <p>
              In October 2025, Bee Maps (the commercial arm of Hivemapper) raised <strong>$32 million</strong> in funding from <GlossaryTerm>Pantera Capital</GlossaryTerm>, LDA Capital, and Borderless Capital — validating the model at institutional scale.
            </p>

            <SectionImage src="/images/enterpriseclient-section.webp" alt="Enterprise clients illustration" />
          </section>

          <div className="article-divider"></div>

          <section className="article-section">
            <h3 className="text-2xl font-bold mb-4">Why This Only Works on Solana</h3>
            <p>
              This is the question that deserves a direct answer, especially for readers skeptical about why blockchain is necessary here at all.
            </p>
            <p>
              Consider what Hivemapper does at operational scale: thousands of drivers globally, each completing dozens of mapping sessions daily. Each session generates a verifiable contribution that must be recorded, validated, and rewarded — in real time.
            </p>
            <p>
              That is potentially millions of transactions per day. And every transaction must cost so little that paying a driver a fraction of a cent in rewards still makes economic sense.
            </p>
            <p>
              On <GlossaryTerm>Ethereum</GlossaryTerm>, average transaction fees range from $2 to $20. Rewarding a driver for five minutes of mapping would cost more in fees than the reward itself. The economics collapse entirely.
            </p>
            <p>
              On Solana, fees average $0.004. Paying thousands of drivers micro-rewards in real time — continuously, globally — is economically viable. The math works. The network handles the volume. The payments arrive instantly.
            </p>
            <p>
              This is not a cosmetic difference. Without Solana&apos;s specific combination of speed, fees, and scale, Hivemapper&apos;s model does not function. The blockchain is not a gimmick layered on top — it is the infrastructure that makes the entire system possible.
            </p>

            <SectionImage src="/images/whysolana-section.webp" alt="Why Solana illustration" />
          </section>

          <div className="article-divider"></div>

          <section className="article-section">
            <h3 className="text-2xl font-bold mb-4">The Bigger Picture: What DePIN Actually Means</h3>
            <p>
              Hivemapper belongs to a category called <GlossaryTerm>DePIN</GlossaryTerm> — Decentralized Physical Infrastructure Networks.
            </p>
            <p>
              In plain English: instead of a single company building and owning physical infrastructure (mapping cars, wireless towers, computing farms), a community of regular people builds it together, contributes to it with hardware they already own, and gets paid fairly for doing so.
            </p>
            <p>
              Hivemapper is DePIN for maps.<br />
              Helium is DePIN for wireless networks.<br />
              Render is DePIN for computing power.
            </p>
            <p>
              The common thread: everyday people own the infrastructure. Everyday people earn from it. No single corporation controls it.
            </p>
            <p>
              This is not a utopian vision. It is operational, today, on Solana.
            </p>

            <SectionImage src="/images/depin-section.webp" alt="DePIN illustration" />
          </section>

          <div className="article-divider"></div>

          {/* Conclusion */}
          <section className="article-section">
            <h2>Conclusion: Solana IRL</h2>
            <p>
              The loudest parts of the crypto world get the most attention. <GlossaryTerm>Memecoins</GlossaryTerm> trend. Token prices dominate headlines. <GlossaryTerm>Speculation</GlossaryTerm> generates noise.
            </p>
            <p>
              But underneath that noise, something quieter and more durable is being built.
            </p>
            <p>
              A driver in Lagos mounts a dashcam and earns <GlossaryTerm>HONEY tokens</GlossaryTerm> mapping roads that have never appeared on any commercial map. A merchant in Warsaw receives a cross-border payment in seconds for less than a cent in fees. A family in rural Indonesia accesses financial services for the first time because all they need is an internet connection.
            </p>
            <p>
              These are not hypothetical use cases. They are happening now, on Solana, because the network was built with the right properties to make them possible.
            </p>
            <p>
              Solana is not a memecoin casino. It is not a trading platform. It is a global, open, programmable foundation — and the applications being built on it are beginning to solve problems that have existed for decades.
            </p>
            <p>
              The real story of Solana is not in the price charts.<br />
              It is on the roads, in the payments, in the networks.<br />
              It is in the real world.
            </p>

            <SectionImage src="/images/conclusion-section.webp" alt="Conclusion illustration" />
          </section>

          <div className="article-divider"></div>

          {/* Sources */}
          <section className="article-sources mb-16">
            <p className="font-semibold mb-2" style={{ color: '#2d3436' }}>Sources:</p>
            <p style={{ color: '#2d3436' }} className="dark:!text-gray-200">
              Hivemapper.com, Bee Maps Press Release (Oct 2025), Pantera Capital, CoinMarketCap, Phantom Learn, Superteam Poland Bounty Brief
            </p>
          </section>

          <div className="article-divider"></div>

          {/* Contact Section */}
          <section className="mt-16 mb-16">
            <h2 className="text-2xl font-bold text-center mb-2" style={{ color: '#0a3d62' }}>
              <span className="dark:!text-[#00d4ff]">Connect &amp; Learn More</span>
            </h2>
            <p className="text-center text-muted-foreground mb-10 text-sm">Follow the people and projects behind this story</p>

            <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
              <a
                href="https://x.com/Beastytho_"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <XIcon />
                <span>@Beastytho_</span>
                <small>Author</small>
              </a>

              <a
                href="https://x.com/Hivemapper"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <XIcon />
                <span>@Hivemapper</span>
                <small>Hivemapper</small>
              </a>

              <a
                href="https://x.com/SuperteamPOL"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <XIcon />
                <span>@SuperteamPOL</span>
                <small>Superteam Poland</small>
              </a>
            </div>

            <p className="text-center text-xs text-muted-foreground dark:text-gray-500 mt-4">
              Images credits to Gemini AI (Nano Banana)
            </p>

            <p className="text-center text-sm text-muted-foreground dark:text-gray-400">
              Written for the Superteam Poland — Solana IRL Bounty 🇵🇱
            </p>
          </section>

          {/* Author Section */}
          <section className="article-author mt-8 pt-12 border-t border-border dark:border-slate-700">
            <div className="flex items-start gap-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="flex-shrink-0">
                <defs>
                  <linearGradient id="sol" x1="0" y1="48" x2="48" y2="0">
                    <stop offset="0%" stopColor="#9945FF"/>
                    <stop offset="50%" stopColor="#14F195"/>
                    <stop offset="100%" stopColor="#00C2FF"/>
                  </linearGradient>
                </defs>
                <rect width="48" height="48" rx="24" fill="url(#sol)"/>
                <path d="M12 30h20l4-4H16l-4 4zm0-8h20l4-4H16l-4 4zm4-8h20l-4-4H12l4 4z" fill="white"/>
              </svg>
              <div>
                <p className="font-semibold" style={{ color: '#2d3436' }}>
                  <span className="dark:!text-white">Solana Research Desk</span>
                </p>
                <p className="text-sm mt-1" style={{ color: '#2d3436' }}>
                  <span className="dark:!text-gray-300">Deep analysis of real-world Solana applications and blockchain infrastructure.</span>
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  )
}
