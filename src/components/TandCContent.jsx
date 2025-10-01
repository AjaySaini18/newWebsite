// src/components/TandCContent.jsx
import React, { useRef, useState } from "react";
import Intro from "/assets/information-line.svg";
import programe from "/assets/reactjs-line.svg";
import article from "/assets/article-line.svg";
import Circle from "/assets/account-circle-line.svg";
import RefreshCw from "/assets/secure-payment-line.svg";
import shield from "/assets/shield-star-line.svg";

const TandCContent = () => {
  const introRef = useRef(null);
  const userRef = useRef(null);
  const paymentRef = useRef(null);
  const programRef = useRef(null);
  const conductRef = useRef(null);
  const contentRef = useRef(null);
  const [active, setActive] = useState("intro");

  const handleScroll = (ref) => {
    const navbarHeight = 80; // adjust if navbar height differs
    if (ref.current) {
      const offsetTop =
        ref.current.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight -
        20;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "intro", label: "Introduction", icon: Intro, ref: introRef },
    { id: "user", label: "User Account", icon: Circle, ref: userRef },
    { id: "payment", label: "Payment", icon: RefreshCw, ref: paymentRef },
    {
      id: "program",
      label: "Use of Programs",
      icon: programe,
      ref: programRef,
    },
    {
      id: "conduct",
      label: "User Conduct Policy",
      icon: shield,
      ref: conductRef,
    },
    { id: "content", label: "User Content", icon: article, ref: contentRef },
  ];

  return (
    <section className="bg-gray-50 font-gilroy font-medium">
      <div className="max-w-full py-12 flex flex-col lg:flex-row gap-8 px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Sidebar (responsive) */}
        {/* Horizontal scroll on small screens, vertical on large */}
        <aside className="lg:w-80 hidden sm:block">
          {/* Small/medium screens - horizontal scrollable tabs */}
          <div className="flex lg:hidden overflow-x-auto space-x-3 bg-[#F5F6FE] rounded-xl p-3 mb-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`flex items-center space-x-1 flex-shrink-0 px-3 py-2 rounded-md text-sm font-semibold transition
                  ${
                    active === item.id
                      ? "bg-white shadow-sm"
                      : "bg-transparent hover:bg-indigo-50"
                  }`}
                onClick={() => {
                  handleScroll(item.ref);
                  setActive(item.id);
                }}
              >
                <img src={item.icon} alt={item.label} className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Large screens - vertical sidebar */}
          <div className="hidden lg:block sticky top-24 bg-[#F5F6FE] rounded-xl p-6 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`flex shadow-xs items-center justify-start space-x-2 w-full cursor-pointer px-4 py-3 rounded-md transition
                  ${
                    active === item.id
                      ? "bg-white shadow-sm"
                      : "bg-transparent hover:bg-indigo-50"
                  }`}
                onClick={() => {
                  handleScroll(item.ref);
                  setActive(item.id);
                }}
              >
                <img src={item.icon} alt={item.label} className="w-5 h-5" />
                <span className="text-sm font-semibold">{item.label}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="bg-[#F5F6FE] p-6 sm:p-10 md:p-14 lg:p-18 rounded-2xl">
            <section ref={introRef} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                This is a legal and binding agreement between you, the user
                (referred to as “user” or “you”) of the Programs, as defined
                below, and Synopix (together with its subsidiaries, and
                international affiliates, hereinafter "Synopix," "us," "we," or
                "our" or “the Company”) stating the terms that govern your use
                of the Platform, as defined below. The website www.upgrad.com
                and mobile apps (collectively referred to as the “Platform”) and
                the information, services and other materials contained therein
                are provided and operated by Synopix. Synopix offers curated and
                specially designed online higher education and industry-relevant
                certification programs and career assistance services
                (“Programs”).
                <br />
                <br />
                Please review our Terms of Use, Privacy Policy and other
                policies available on the Platform (collectively referred to as
                the “Terms”) that govern the use of the Platform and Programs.
                By accepting these Terms in any manner or accessing the website,
                you consent, agree, and undertake to abide, be bound by and
                adhere to the Terms and if you do not agree to these Terms, you
                are not entitled to avail of/use the Programs and any use
                thereafter shall be unauthorised.
              </p>
            </section>

            <section ref={userRef} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                User Accounts, User Registration and Delivery of Services
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Sed vel mauris id lorem feugiat vulputate. Integer et
                arcu malesuada, sollicitudin velit vel, dictum purus.
                Suspendisse vitae congue erat. Proin id metus eros. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Aliquam erat volutpat. Ut fermentum, odio sed
                fermentum vehicula, mauris justo ultricies justo, non pretium
                magna erat sit amet nisl.
                <br />
                <br />
                Curabitur pretium, elit a interdum scelerisque, sem mi pretium
                felis, ac efficitur risus justo eget risus. Vestibulum eget
                ligula non magna accumsan dictum. Etiam finibus justo sit amet
                est commodo, ac lacinia arcu facilisis. Suspendisse tristique,
                est eget fermentum vestibulum, arcu velit maximus justo, eget
                finibus nisl nisl non massa. Cras vehicula nisi vitae tincidunt
                viverra. Aenean gravida, lorem ac efficitur gravida, lacus nisl
                ultricies lorem, vitae euismod ipsum nisi a leo.
              </p>
            </section>

            <section ref={paymentRef} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Payment Terms and Refund Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                All payments must be made in full at the time of purchase,
                unless otherwise stated in a written agreement. We accept
                payments through [specify modes, e.g., credit/debit cards, bank
                transfer, UPI]. Once a payment is processed, an order
                confirmation will be sent via email. Refunds are only applicable
                under specific circumstances such as service non-delivery,
                duplicate payments, or other valid claims reviewed on a
                case-by-case basis. In such cases, refunds will be initiated to
                the original mode of payment within [X–Y] business days. Please
                note that transaction fees, processing charges, or partial
                services already rendered may be deducted from the refund
                amount. By completing a purchase, you acknowledge and agree to
                these payment terms and refund policies.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Sed vel mauris id lorem feugiat vulputate. Integer et
                arcu malesuada, sollicitudin velit vel, dictum purus.
                Suspendisse vitae congue erat. Proin id metus eros. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Aliquam erat volutpat. Ut fermentum, odio sed
                fermentum vehicula, mauris justo ultricies justo, non pretium
                magna erat sit amet nisl.
                <br />
                <br />
                Refund requests, lorem ipsum dolor sit amet, consectetur
                adipiscing elit, at posuere quam fermentum. Integer a ligula
                finibus, tincidunt eros at, bibendum arcu. Vivamus dignissim
                ligula nec dui rhoncus, at finibus mi pulvinar. In semper erat
                in eros malesuada, nec varius velit vestibulum. Duis ultricies
                malesuada magna, in pretium sapien dignissim ac. Proin blandit
                leo nec dui aliquet tempor.
              </p>
            </section>

            <section ref={programRef} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Use of Programs</h2>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Sed vel mauris id lorem feugiat vulputate. Integer et
                arcu malesuada, sollicitudin velit vel, dictum purus.
                Suspendisse vitae congue erat. Proin id metus eros. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Aliquam erat volutpat. Ut fermentum, odio sed
                fermentum vehicula, mauris justo ultricies justo, non pretium
                magna erat sit amet nisl.
                <br />
                <br />
                Curabitur pretium, elit a interdum scelerisque, sem mi pretium
                felis, ac efficitur risus justo eget risus. Vestibulum eget
                ligula non magna accumsan dictum. Etiam finibus justo sit amet
                est commodo, ac lacinia arcu facilisis. Suspendisse tristique,
                est eget fermentum vestibulum, arcu velit maximus justo, eget
                finibus nisl nisl non massa. Cras vehicula nisi vitae tincidunt
                viverra. Aenean gravida, lorem ac efficitur gravida, lacus nisl
                ultricies lorem, vitae euismod ipsum nisi a leo.
              </p>
            </section>

            <section ref={conductRef} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">User Conduct Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Sed vel mauris id lorem feugiat vulputate. Integer et
                arcu malesuada, sollicitudin velit vel, dictum purus.
                Suspendisse vitae congue erat. Proin id metus eros. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Aliquam erat volutpat. Ut fermentum, odio sed
                fermentum vehicula, mauris justo ultricies justo, non pretium
                magna erat sit amet nisl.
                <br />
                <br />
                Curabitur pretium, elit a interdum scelerisque, sem mi pretium
                felis, ac efficitur risus justo eget risus. Vestibulum eget
                ligula non magna accumsan dictum. Etiam finibus justo sit amet
                est commodo, ac lacinia arcu facilisis. Suspendisse tristique,
                est eget fermentum vestibulum, arcu velit maximus justo, eget
                finibus nisl nisl non massa. Cras vehicula nisi vitae tincidunt
                viverra. Aenean gravida, lorem ac efficitur gravida, lacus nisl
                ultricies lorem, vitae euismod ipsum nisi a leo.
              </p>
            </section>

            <section ref={contentRef}>
              <h2 className="text-2xl font-bold mb-4">User Content</h2>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Sed vel mauris id lorem feugiat vulputate. Integer et
                arcu malesuada, sollicitudin velit vel, dictum purus.
                Suspendisse vitae congue erat. Proin id metus eros. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Aliquam erat volutpat. Ut fermentum, odio sed
                fermentum vehicula, mauris justo ultricies justo, non pretium
                magna erat sit amet nisl.
                <br />
                <br />
                Curabitur pretium, elit a interdum scelerisque, sem mi pretium
                felis, ac efficitur risus justo eget risus. Vestibulum eget
                ligula non magna accumsan dictum. Etiam finibus justo sit amet
                est commodo, ac lacinia arcu facilisis. Suspendisse tristique,
                est eget fermentum vestibulum, arcu velit maximus justo, eget
                finibus nisl nisl non massa. Cras vehicula nisi vitae tincidunt
                viverra. Aenean gravida, lorem ac efficitur gravida, lacus nisl
                ultricies lorem, vitae euismod ipsum nisi a leo.
                <br />
                <br />
                Refund requests, lorem ipsum dolor sit amet, consectetur
                adipiscing elit, at posuere quam fermentum. Integer a ligula
                finibus, tincidunt eros at, bibendum arcu. Vivamus dignissim
                ligula nec dui rhoncus, at finibus mi pulvinar. In semper erat
                in eros malesuada, nec varius velit vestibulum. Duis ultricies
                malesuada magna, in pretium sapien dignissim ac. Proin blandit
                leo nec dui aliquet tempor.
              </p>
            </section>
          </div>
        </main>
      </div>
    </section>
  );
};

export default TandCContent;
