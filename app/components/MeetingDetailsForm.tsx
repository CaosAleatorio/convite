'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface MeetingDetails {
  date?: string;
  time?: string;
  location?: string;
  activity?: string;
  notes?: string;
}

export default function MeetingDetailsForm() {
  const [details, setDetails] = useState<MeetingDetails>({});
  const [completedFields, setCompletedFields] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const whatsappNumber = '258840437680';

  const fields = [
    { key: 'date', label: '📅 Data do Encontro', placeholder: 'Clique para escolher a data...', emoji: '📅', type: 'date' },
    { key: 'time', label: '⏰ Horário', placeholder: 'Clique para escolher a hora...', emoji: '⏰', type: 'time' },
    { key: 'location', label: '📍 Local', placeholder: 'Ex: Onde mais gostaria de ir', emoji: '📍', type: 'text' },
    { key: 'activity', label: '🎯 Atividade', placeholder: 'Ex: Comer, Jogar, Dançar, Passeio, Piquenique, Filme...', emoji: '🎯', type: 'text' },
    { key: 'notes', label: '💭 Observações', placeholder: 'Ex: Preferências de comida, alergias, roupa especial, surpresas, música favorita, etc...', emoji: '💭', type: 'text' },
  ];

  const handleFieldChange = (key: string, value: string) => {
    setDetails(prev => ({ ...prev, [key]: value }));

    if (value.trim() && !completedFields.includes(key)) {
      setCompletedFields(prev => [...prev, key]);
    } else if (!value.trim()) {
      setCompletedFields(prev => prev.filter(k => k !== key));
    }
  };

  const handleSubmit = () => {
    const filledFields = fields.filter(f => details[f.key as keyof MeetingDetails]?.trim());

    if (filledFields.length === 0) {
      alert('Por favor, preencha pelo menos um campo do encontro!');
      return;
    }

    // Construir mensagem
    const message = `
🎉 *VOCÊ CONFIRMOU NOSSO ENCONTRO!* 🎉

${filledFields.map(f => {
      const value = details[f.key as keyof MeetingDetails];
      return `${f.emoji} *${f.label.replace(f.emoji + ' ', '')}:* ${value}`;
    }).join('\n')}

Estou ansioso por este momento com você! ❤️
Até logo! 💕
    `.trim();

    // Codificar para URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Mostrar confirmação
    setShowSuccess(true);

    // Redirecionar para WhatsApp após 2 segundos
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  if (showSuccess) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-red-950 to-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="text-9xl mb-8"
          >
            ✅
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-4">
            Encontro Confirmado!
          </h1>
          <p className="text-2xl text-red-400 mb-8">
            Sua mensagem será enviada no WhatsApp...
          </p>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="inline-block text-6xl"
          >
            💕
          </motion.div>
        </motion.div>
      </div>
    );
  }

  const progress = (completedFields.length / fields.length) * 100;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-red-950 to-black overflow-auto">
      {/* Decoração de fundo */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
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
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block text-7xl mb-4"
          >
            💌
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent mb-4">
            Vamos Marcar!
          </h1>
          <p className="text-xl text-red-400">
            Preencha os detalhes do nosso encontro especial
          </p>
        </motion.div>

        {/* Barra de Progresso */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex justify-between items-center mb-3">
            <p className="text-red-300 font-semibold">Progresso</p>
            <p className="text-red-400 text-sm">{completedFields.length} de {fields.length}</p>
          </div>
          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-red-700/50">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full"
            ></motion.div>
          </div>
        </motion.div>

        {/* Formulário */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, staggerChildren: 0.1 }}
          className="space-y-6 mb-12"
        >
          {fields.map((field, index) => (
            <motion.div
              key={field.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="group"
            >
              <label className="block text-lg font-semibold text-red-400 mb-3">
                {field.label}
                {completedFields.includes(field.key) && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-2 text-green-400"
                  >
                    ✓
                  </motion.span>
                )}
              </label>
              <motion.input
                type={field.type as string}
                placeholder={field.placeholder}
                value={details[field.key as keyof MeetingDetails] || ''}
                onChange={(e) => handleFieldChange(field.key, e.target.value)}
                whileFocus={{ scale: 1.02 }}
                className={`w-full px-6 py-4 bg-slate-900/50 border-2 border-red-700/30 rounded-lg text-white placeholder-red-300/50 focus:outline-none focus:border-red-500 focus:shadow-lg focus:shadow-red-600/30 transition-all duration-300 ${
                  field.key === 'date' || field.key === 'time' ? 'cursor-pointer' : ''
                }`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Botão de Envio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4"
        >
          <motion.button
            onClick={handleSubmit}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(239, 68, 68, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            disabled={completedFields.length === 0}
            className="flex-1 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-lg font-bold rounded-lg shadow-2xl hover:shadow-red-600/50 transition-all duration-300 border border-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ✅ Enviar para WhatsApp
          </motion.button>
        </motion.div>

        {/* Mensagem de ajuda */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-8"
        >
          <p className="text-red-400/70 text-sm">
            {completedFields.length === 0
              ? '📝 Preencha pelo menos um campo para continuar'
              : '✨ Pronto para enviar! Clique no botão acima'}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
