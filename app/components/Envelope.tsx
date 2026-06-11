'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Envelope() {
  const [isOpening, setIsOpening] = useState(false);
  const router = useRouter();

  const handleEnvelopeClick = () => {
    if (!isOpening) {
      setIsOpening(true);
      setTimeout(() => {
        router.push('/convite');
      }, 2500);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-red-950 to-slate-900 overflow-hidden">
      {/* Decoração de fundo - efeito místico */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 w-40 h-40 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-900 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-44 h-44 bg-red-900 rounded-full blur-3xl"></div>
      </div>

      {/* Envelope Container */}
      <div className="relative w-full max-w-2xl px-4 perspective">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          onClick={handleEnvelopeClick}
          className="cursor-pointer group"
        >
          {/* Envelope Principal */}
          <div className="relative w-full bg-black rounded-lg shadow-2xl border border-red-900" style={{ aspectRatio: '16/10' }}>
            {/* Brilho ao redor */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-900 via-purple-900 to-red-900 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>

            {/* Base do Envelope */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-black rounded-lg overflow-hidden">
              {/* Aba superior (tampa) */}
              <motion.div
                animate={isOpening ? { rotateX: -120 } : { rotateX: 0 }}
                transition={{ duration: 1.5 }}
                style={{
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'top',
                  height: '50%',
                }}
                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-red-900 to-red-950 border-b-2 border-red-700"
              >
                {/* Aba esquerda da tampa */}
                <motion.div
                  animate={isOpening ? { rotateZ: -45 } : { rotateZ: 0 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  className="absolute top-0 left-0 bg-gradient-to-br from-red-900 to-red-950"
                  style={{
                    transformOrigin: 'center',
                    width: '50%',
                    height: '100%',
                    clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                  }}
                />

                {/* Aba direita da tampa */}
                <motion.div
                  animate={isOpening ? { rotateZ: 45 } : { rotateZ: 0 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  className="absolute top-0 right-0 bg-gradient-to-bl from-red-900 to-red-950"
                  style={{
                    transformOrigin: 'center',
                    width: '50%',
                    height: '100%',
                    clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                  }}
                />
              </motion.div>

              {/* Conteúdo do envelope (visível após abrir) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isOpening ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center bg-black rounded-lg"
              >
                <div className="text-5xl mb-4">🖤</div>
                <p className="text-2xl text-red-500 font-bold">Para Maira...</p>
                <p className="text-sm text-red-400 mt-2">Um convite que mudará tudo</p>
              </motion.div>

              {/* Ícone/Texto no envelope fechado */}
              <motion.div
                animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl mb-4"
                >
                  🖤
                </motion.div>
                <p className="text-2xl text-red-500 font-bold">Abra-me</p>
                <p className="text-xs text-red-400 mt-3">Seu destino te espera...</p>
              </motion.div>
            </div>

            {/* Linha central de abertura */}
            <motion.div
              animate={isOpening ? { scaleY: 0 } : { scaleY: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-transparent via-red-700 to-transparent transform -translate-y-1/2"
              style={{ transformOrigin: 'center' }}
            />

            {/* Sombra interna */}
            <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Indicador de interação */}
        <motion.div
          animate={isOpening ? { y: 20, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8 text-red-600 text-lg font-semibold"
        >
          ✨ Clique no envelope ✨
        </motion.div>
      </div>
    </div>
  );
}
