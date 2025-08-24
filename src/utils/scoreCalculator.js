// Sistema de pontuação baseado nas respostas do usuário
export const calculateScores = (answers) => {
  // Valores padrão caso não haja respostas
  const defaultScores = {
    energia: 45,
    libido: 32,
    clareza: 58,
    recuperacao: 41,
    overall: 44
  };

  if (!answers || answers.length === 0) {
    return defaultScores;
  }

  let energia = 0;
  let libido = 0;
  let clareza = 0;
  let recuperacao = 0;

  // Pergunta 1: "O que mais está incomodando você hoje?"
  if (answers[0]) {
    switch (answers[0]) {
      case 0: energia = 20; libido = 60; clareza = 60; recuperacao = 50; break; // Cansaço constante
      case 1: energia = 60; libido = 20; clareza = 60; recuperacao = 50; break; // Baixa libido
      case 2: energia = 60; libido = 60; clareza = 20; recuperacao = 50; break; // Falta de foco
      case 3: energia = 40; libido = 40; clareza = 40; recuperacao = 30; break; // Ganho de peso
      default: energia = 45; libido = 45; clareza = 45; recuperacao = 45;
    }
  }

  // Pergunta 2: "Como você se sente ao longo do dia?"
  if (answers[1] !== undefined) {
    const energiaBonus = [10, 30, 60, 85][answers[1]] || 45;
    energia = Math.round((energia + energiaBonus) / 2);
  }

  // Pergunta 3: "Quantas horas por noite você costuma dormir?"
  if (answers[2] !== undefined) {
    const recuperacaoBonus = [20, 40, 80, 70][answers[2]] || 50;
    recuperacao = Math.round((recuperacao + recuperacaoBonus) / 2);
  }

  // Pergunta 4: "Quando foi a última vez que você se sentiu realmente cheia de energia?"
  if (answers[3] !== undefined) {
    const energiaMultiplier = [0.9, 0.7, 0.5, 0.3][answers[3]] || 0.7;
    energia = Math.round(energia * energiaMultiplier);
  }

  // Pergunta 5: "Como está sua libido hoje?"
  if (answers[4] !== undefined) {
    libido = [15, 35, 65, 90][answers[4]] || 45;
  }

  // Pergunta 6: "O quanto você depende de café ou energéticos para funcionar?"
  if (answers[5] !== undefined) {
    const energiaPenalty = [0.6, 0.8, 0.9, 1.0][answers[5]] || 0.8;
    energia = Math.round(energia * energiaPenalty);
  }

  // Pergunta 7: "Você já checou seus hormônios ou vitaminas recentemente?"
  if (answers[6] !== undefined) {
    const clarezaBonus = [20, 10, -10][answers[6]] || 0;
    clareza = Math.max(10, clareza + clarezaBonus);
  }

  // Pergunta 8: "Você perde o fôlego ao subir as escadas?"
  if (answers[7] !== undefined) {
    const recuperacaoMultiplier = [0.4, 0.6, 0.8, 1.0][answers[7]] || 0.7;
    recuperacao = Math.round(recuperacao * recuperacaoMultiplier);
  }

  // Garantir que os valores estejam entre 10 e 95
  energia = Math.max(10, Math.min(95, energia));
  libido = Math.max(10, Math.min(95, libido));
  clareza = Math.max(10, Math.min(95, clareza));
  recuperacao = Math.max(10, Math.min(95, recuperacao));

  // Calcular pontuação geral
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
  if (overall >= 70) return { text: "Ótimo", color: "bg-green-500", textColor: "text-green-600" };
  if (overall >= 50) return { text: "Bom", color: "bg-yellow-500", textColor: "text-yellow-600" };
  if (overall >= 30) return { text: "Regular", color: "bg-orange-500", textColor: "text-orange-600" };
  return { text: "Baixo", color: "bg-red-500", textColor: "text-red-600" };
};

export const getProfileImage = (overall) => {
  // Retorna a imagem baseada na idade selecionada na primeira página
  const selectedAge = localStorage.getItem('selectedAge') || '30-39';
  
  switch(selectedAge) {
    case '18-29': return "/images/mulher_18anos_modelo2.webp";
    case '30-39': return "/images/mulher_30anos_modelo2.webp";
    case '40-49': return "/images/mulher_40anos_modelo2.webp";
    case '50+': return "/images/mulher_50anos_modelo2.webp";
    default: return "/images/mulher_30anos_modelo2.webp";
  }
};