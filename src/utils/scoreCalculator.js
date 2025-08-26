// Sistema de pontuação otimizado para resultados mais altos e impressionantes
export const calculateScores = (answers) => {
  // Valores base mais altos para uma experiência positiva
  const defaultScores = {
    energia: 78,
    libido: 72,
    clareza: 85,
    recuperacao: 76,
    overall: 78
  };

  if (!answers || answers.length === 0) {
    return defaultScores;
  }

  let energia = 75;
  let libido = 70;
  let clareza = 80;
  let recuperacao = 75;

  // Pergunta 1: "O que mais está incomodando você hoje?"
  if (answers[0] !== undefined) {
    switch (answers[0]) {
      case 0: energia = 65; libido = 85; clareza = 85; recuperacao = 80; break; // Cansaço constante
      case 1: energia = 85; libido = 55; clareza = 85; recuperacao = 80; break; // Baixa libido
      case 2: energia = 85; libido = 85; clareza = 60; recuperacao = 80; break; // Falta de foco
      case 3: energia = 75; libido = 75; clareza = 75; recuperacao = 70; break; // Ganho de peso
      default: energia = 78; libido = 78; clareza = 78; recuperacao = 78;
    }
  }

  // Pergunta 2: "Como você se sente ao longo do dia?"
  if (answers[1] !== undefined) {
    const energiaBonus = [60, 70, 85, 95][answers[1]] || 78;
    energia = Math.round((energia + energiaBonus) / 2);
  }

  // Pergunta 3: "Quantas horas por noite você costuma dormir?"
  if (answers[2] !== undefined) {
    const recuperacaoBonus = [65, 75, 90, 85][answers[2]] || 80;
    recuperacao = Math.round((recuperacao + recuperacaoBonus) / 2);
  }

  // Pergunta 4: "Quando foi a última vez que você se sentiu realmente cheia de energia?"
  if (answers[3] !== undefined) {
    const energiaMultiplier = [0.95, 0.85, 0.75, 0.65][answers[3]] || 0.8;
    energia = Math.round(energia * energiaMultiplier);
  }

  // Pergunta 5: "Como está sua libido hoje?"
  if (answers[4] !== undefined) {
    libido = [50, 70, 85, 95][answers[4]] || 75;
  }

  // Pergunta 6: "O quanto você depende de café ou energéticos para funcionar?"
  if (answers[5] !== undefined) {
    const energiaPenalty = [0.8, 0.9, 0.95, 1.0][answers[5]] || 0.9;
    energia = Math.round(energia * energiaPenalty);
  }

  // Pergunta 7: "Você já checou seus hormônios ou vitaminas recentemente?"
  if (answers[6] !== undefined) {
    const clarezaBonus = [15, 5, -5][answers[6]] || 5;
    clareza = Math.max(60, clareza + clarezaBonus);
  }

  // Pergunta 8: "Você perde o fôlego ao subir as escadas?"
  if (answers[7] !== undefined) {
    const recuperacaoMultiplier = [0.7, 0.8, 0.9, 1.0][answers[7]] || 0.85;
    recuperacao = Math.round(recuperacao * recuperacaoMultiplier);
  }

  // Garantir que os valores estejam entre 50 e 95 (mais altos)
  energia = Math.max(50, Math.min(95, energia));
  libido = Math.max(50, Math.min(95, libido));
  clareza = Math.max(50, Math.min(95, clareza));
  recuperacao = Math.max(50, Math.min(95, recuperacao));

  // Calcular pontuação geral (sempre positiva)
  const overall = Math.round((energia + libido + clareza + recuperacao) / 4);

  return {
    energia,
    libido,
    clareza,
    recuperacao,
    overall
  };
};

export const getResultStatus = (overall) => {
  if (overall >= 85) return { 
    text: "Excellent", 
    color: "bg-gradient-to-r from-green-400 to-green-600", 
    textColor: "text-green-600",
    emoji: "🌟"
  };
  if (overall >= 75) return { 
    text: "Very Good", 
    color: "bg-gradient-to-r from-blue-400 to-blue-600", 
    textColor: "text-blue-600",
    emoji: "✨"
  };
  if (overall >= 65) return { 
    text: "Good", 
    color: "bg-gradient-to-r from-yellow-400 to-yellow-600", 
    textColor: "text-yellow-600",
    emoji: "⭐"
  };
  return { 
    text: "Can Improve", 
    color: "bg-gradient-to-r from-orange-400 to-orange-600", 
    textColor: "text-orange-600",
    emoji: "🎯"
  };
};

export const getProfileImage = (selectedAge) => {
  switch(selectedAge) {
    case '18-29': return "/images/mulher_18anos_modelo2.webp";
    case '30-39': return "/images/mulher_30anos_modelo2.webp";
    case '40-49': return "/images/mulher_40anos_modelo2.webp";
    case '50+': return "/images/mulher_50anos_modelo2.webp";
    default: return "/images/mulher_30anos_modelo2.webp";
  }
};