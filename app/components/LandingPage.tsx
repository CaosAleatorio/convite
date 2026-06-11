'use client';

import { motion } from 'framer-motion';

export default function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-red-950 to-black overflow-hidden">
      {/* Decoração de fundo animada - mais intensa */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-10 left-10 w-40 h-40 bg-red-700 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-20 right-20 w-48 h-48 bg-purple-900 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute top-1/3 right-1/4 w-44 h-44 bg-red-900 rounded-full blur-3xl"
        ></motion.div>
      </div>

      {/* Conteúdo */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20"
      >
        {/* Header principal - Mistério e Romance */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block text-8xl mb-8"
          >
            🖤
          </motion.div>
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent mb-6 tracking-tight">
            Maira...
          </h1>
          <p className="text-2xl md:text-3xl text-red-400 mb-4 font-light italic">
            "Existe um momento na vida, quando tudo muda"
          </p>
        </motion.div>

        {/* Mensagens impactantes */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-red-950/80 to-slate-900/80 backdrop-blur-md rounded-2xl p-10 border border-red-700/50 shadow-2xl hover:border-red-600 transition-all"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-4">
              ✨ Este não é um convite comum
            </h2>
            <p className="text-lg text-red-200 leading-relaxed">
              É uma promessa sussurrada no vento, um segredo guardado pelas estrelas. 
              Hoje, no exato momento em que você lê estas palavras, meu coração bate seu nome.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-slate-900/80 to-red-950/80 backdrop-blur-md rounded-2xl p-10 border border-red-700/50 shadow-2xl hover:border-red-600 transition-all"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-4">
              🌙 O convite
            </h2>
            <p className="text-lg text-red-200 leading-relaxed">
              Maira, você é convidada a vir ao meu coração. Não para uma festa ou evento qualquer,
              mas para algo que só você pode preencher. Algo que começou no momento em que você chegou
              e que nunca mais será o mesmo.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-red-950/80 to-slate-900/80 backdrop-blur-md rounded-2xl p-10 border border-red-700/50 shadow-2xl hover:border-red-600 transition-all"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-4">
              ⏰ Data & Hora
            </h2>
            <p className="text-2xl text-red-400 font-bold mb-2">
              AGORA
            </p>
            <p className="text-lg text-red-200">
              Este é o momento. Não há espera, não há amanhã. É hoje, é neste instante,
              que quero que você saiba o quanto você significa para mim.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-slate-900/80 to-red-950/80 backdrop-blur-md rounded-2xl p-10 border border-red-700/50 shadow-2xl hover:border-red-600 transition-all"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-4">
              💌 Para você saber
            </h2>
            <p className="text-lg text-red-200 leading-relaxed">
              Você é a pessoa que mudou meu mundo. Cada palavra sua, cada sorriso,
              cada momento compartilhado se tornou parte de quem sou. Este convite é minha forma
              de dizer que você é especial demais para passar despercebida.
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action - Botão que aceitará */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-20"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-8"
          >
            <p className="text-red-500 text-xl font-semibold">
              Sua resposta mudará tudo...
            </p>
          </motion.div>
          <motion.a
            href="https://wa.me/?text=Maira%20aceitou%20o%20convite%20para%20seu%20coração%20❤️"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, boxShadow: '0 0 40px rgba(239, 68, 68, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white text-xl font-bold rounded-full shadow-2xl hover:shadow-red-600/50 transition-all duration-300 inline-block border border-red-500"
          >
            💕 Eu Aceito
          </motion.a>
        </motion.div>

        {/* Mensagem final */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <p className="text-red-400 text-sm md:text-base italic">
            "E assim começa uma nova história... A nossa."
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
