import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fff8f6]">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff8f6] via-[#fdeff4] to-[#fff8f6]" />

      {/* Blur Circles */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-rose-100/50 blur-3xl" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">

        <motion.p
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="tracking-[8px] uppercase text-[#9b6b6b]"
        >
          Wedding Invitation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: .3, duration: 1 }}
          className="mt-8 text-7xl md:text-8xl font-bold text-[#7c2946]"
          style={{ fontFamily: "Great Vibes" }}
        >
          Динара
        </motion.h1>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: .8 }}
          className="my-6"
        >
          <Heart
            size={42}
            className="text-rose-500 fill-rose-500"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: .6 }}
          className="text-7xl md:text-8xl font-bold text-[#7c2946]"
          style={{ fontFamily: "Great Vibes" }}
        >
          Ардақ
        </motion.h2>

        <motion.p
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:1 }}
          className="mt-10 text-center max-w-2xl text-xl text-[#5b4d4d]"
        >
          Сізді өміріміздегі ең қуанышты күннің
          қадірлі қонағы болуға шақырамыз.
        </motion.p>

        {/* Glass Card */}

        <motion.div

          initial={{opacity:0,y:60}}

          animate={{opacity:1,y:0}}

          transition={{delay:1.3}}

          className="mt-16 w-full max-w-xl rounded-[35px]
          backdrop-blur-xl
          bg-white/40
          border border-white/60
          shadow-2xl
          p-10"

        >

          <div className="space-y-8">

            <div className="flex items-center gap-4">

              <CalendarDays className="text-[#b8860b]" />

              <span className="text-lg">

                26.07.2026

              </span>

            </div>

            <div className="flex items-center gap-4">

              <Clock3 className="text-[#b8860b]" />

              <span className="text-lg">

                19:00

              </span>

            </div>

            <div className="flex items-center gap-4">

              <MapPin className="text-[#b8860b]" />

              <span className="text-lg">

                Бақ сарайы мейрамханасы

                <br />

                (кіші залы)

              </span>

            </div>

          </div>

          <button
            className="mt-10 w-full rounded-full
            bg-gradient-to-r
            from-rose-400
            to-pink-500
            py-4
            text-white
            text-lg
            font-semibold
            transition
            hover:scale-105"
          >
            Тойға шақыру
          </button>

        </motion.div>

      </div>

    </section>
  );
}
