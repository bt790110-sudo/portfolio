import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import Button from "./Button";
import SocialLinks from "./SocialLinks";
import NetworkGraphic from "./NetworkGraphic";
import { profile } from "../data/portfolioData";
import profileImg from "../assets/profile.png";

const typeSequence = profile.roles.flatMap((role) => [role, 1800]);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-28 pb-16 overflow-hidden bg-mist-100 dark:bg-ink-900"
    >
      {/* Ambient background: faint network graphic + soft glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-signal-amber/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-signal-teal/10 blur-3xl" />
        <NetworkGraphic className="absolute top-10 right-6 w-72 h-60 text-ink-500 dark:text-mist-500 hidden lg:block" />
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center w-full">
        {/* Terminal console card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="console-frame rounded-2xl shadow-2xl shadow-ink-900/10 overflow-hidden"
        >
          {/* window chrome */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-ink-600/40">
            <span className="h-3 w-3 rounded-full bg-[#f5605a]" />
            <span className="h-3 w-3 rounded-full bg-[#f5c451]" />
            <span className="h-3 w-3 rounded-full bg-[#5ec26a]" />
            <span className="ml-3 font-mono text-xs text-ink-400 dark:text-mist-500">
              ~/{profile.name.toLowerCase().replace(/\s+/g, "-")} — zsh
            </span>
          </div>

          <div className="p-6 sm:p-10">
            <p className="font-mono text-sm text-signal-teal">
              visitor@portfolio <span className="text-ink-400 dark:text-mist-500">$</span> whoami
            </p>

            <h1 className="font-display mt-4 text-4xl sm:text-6xl font-semibold leading-[1.05] text-ink-900 dark:text-mist-100">
              {profile.name}
            </h1>

            <div className="mt-4 font-mono text-lg sm:text-xl text-signal-amber min-h-[1.75rem]">
              <span aria-hidden="true">&gt; </span>
              <TypeAnimation
                sequence={typeSequence}
                speed={55}
                repeat={Infinity}
                cursor
              />
            </div>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink-400 dark:text-mist-500 max-w-lg">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#projects" variant="primary" icon={FiArrowRight}>
                View projects
              </Button>
              <Button href={profile.resumeUrl} download variant="outline" icon={FiDownload}>
                Download resume
              </Button>
            </div>

            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-signal-amber/25 blur-2xl" />
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-[2rem] overflow-hidden border border-ink-600/50 console-frame">
              <img
                src={profileImg}
                alt={`Portrait of ${profile.name}`}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 console-frame rounded-xl px-4 py-2 font-mono text-xs text-signal-teal shadow-lg">
              status: <span className="text-signal-amber">available for work</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
