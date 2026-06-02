'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50 overflow-hidden">
      {/* Decoração de fundo animada */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-rose-200 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 right-1/4 w-36 h-36 bg-blue-200 rounded-full blur-3xl"
        ></motion.div>
      </div>

      {/* Conteúdo */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20"
      >
        {/* Header com ícone */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block text-7xl mb-6"
          >
            💌
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Você foi Convidado!
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Algo especial está vindo
          </p>
        </motion.div>

        {/* Seção de Imagens */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={imageVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative h-64 rounded-xl overflow-hidden shadow-xl"
            >
              <div className="w-full h-full bg-gradient-to-br from-rose-200 to-purple-200 flex items-center justify-center">
                <div className="text-5xl">
                  {i === 1 && '🎉'}
                  {i === 2 && '✨'}
                  {i === 3 && '🎊'}
                </div>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Conteúdo de Boas-vindas */}
        <motion.div
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl mb-16 border border-white/50"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Bem-vindo ao nosso Evento!
          </h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              Estamos muito felizes por você estar aqui! Este evento será uma celebração especial repleta de momentos inesquecíveis.
            </p>
            <p>
              Prepare-se para uma experiência única, cheia de surpresas, alegria e muita diversão. Sua presença faz toda a diferença!
            </p>
            <p>
              Fique atento aos detalhes e prepare-se para uma jornada extraordinária.
            </p>
          </div>
        </motion.div>

        {/* Detalhes do Evento */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl p-8 border-2 border-rose-200"
          >
            <h3 className="text-2xl font-bold text-rose-700 mb-3 flex items-center gap-2">
              <span className="text-3xl">📅</span> Data & Hora
            </h3>
            <p className="text-gray-700">
              Em breve você receberá todos os detalhes sobre data, hora e local do evento.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-8 border-2 border-purple-200"
          >
            <h3 className="text-2xl font-bold text-purple-700 mb-3 flex items-center gap-2">
              <span className="text-3xl">📍</span> Local
            </h3>
            <p className="text-gray-700">
              Fique atento para descobrir onde este evento especial será realizado.
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Confirme sua Presença
          </motion.button>
          <motion.p
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-600 mt-6 text-sm"
          >
            ↓ Desça para mais informações ↓
          </motion.p>
        </motion.div>

        {/* Seção Adicional */}
        <motion.div
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            O que esperar?
          </h3>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {['Diversão', 'Surpresas', 'Momentos', 'Memórias'].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white/60 backdrop-blur-md rounded-lg p-6 border border-white/50"
              >
                <p className="text-lg font-semibold text-transparent bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 border-t border-white/20 mt-20 py-8 text-center text-gray-600 text-sm"
      >
        <p>✨ Obrigado por aceitar nosso convite ✨</p>
      </motion.footer>
    </div>
  );
}
