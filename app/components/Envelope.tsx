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
      // Redirecionar após a animação completar (2.5s)
      setTimeout(() => {
        router.push('/convite');
      }, 2500);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-36 h-36 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      {/* Envelope Container */}
      <div className="relative w-full max-w-2xl px-4 perspective">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          onClick={handleEnvelopeClick}
          className="cursor-pointer"
        >
          {/* Envelope Principal */}
          <div className="relative w-full bg-white rounded-lg shadow-2xl" style={{ aspectRatio: '16/10' }}>
            {/* Base do Envelope */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 rounded-lg overflow-hidden">
              {/* Aba superior (tampa) */}
              <motion.div
                animate={isOpening ? { rotateX: -120 } : { rotateX: 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                style={{
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'top',
                }}
                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-rose-100 to-rose-50 border-b-2 border-rose-200"
                style={{ height: '50%' }}
              >
                {/* Aba esquerda da tampla */}
                <motion.div
                  animate={isOpening ? { rotateZ: -45 } : { rotateZ: 0 }}
                  transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
                  style={{ transformOrigin: 'center' }}
                  className="absolute top-0 left-0 bg-gradient-to-br from-rose-100 to-rose-200"
                  style={{
                    width: '50%',
                    height: '100%',
                    clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                  }}
                />

                {/* Aba direita da tampa */}
                <motion.div
                  animate={isOpening ? { rotateZ: 45 } : { rotateZ: 0 }}
                  transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
                  style={{ transformOrigin: 'center' }}
                  className="absolute top-0 right-0 bg-gradient-to-bl from-rose-100 to-rose-200"
                  style={{
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
                className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center bg-white rounded-lg"
              >
                <div className="text-4xl mb-4">💌</div>
                <p className="text-xl text-gray-700 font-semibold">Você foi convidado!</p>
                <p className="text-sm text-gray-500 mt-2">Clique para abrir a carta</p>
              </motion.div>

              {/* Ícone/Texto no envelope fechado */}
              <motion.div
                animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none"
              >
                <div className="text-5xl mb-4 animate-pulse">💌</div>
                <p className="text-lg text-gray-600 font-medium">Clique para abrir</p>
              </motion.div>
            </div>

            {/* Linha central de abertura */}
            <motion.div
              animate={isOpening ? { scaleY: 0 } : { scaleY: 1 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent transform -translate-y-1/2"
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
          className="text-center mt-8 text-gray-500 text-sm"
        >
          ↓ Clique no envelope ↓
        </motion.div>
      </div>
    </div>
  );
}
