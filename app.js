// Sistema de Sorteio Balanceado
function generateTeams() {
    const players = [...document.querySelectorAll('.player-input')].map(p => ({
      name: p.querySelector('.name').value,
      skill: parseInt(p.querySelector('.skill').value)
    }));
  
    // Algoritmo de balanceamento
    players.sort((a, b) => b.skill - a.skill);
    const teamA = [], teamB = [];
    let totalA = 0, totalB = 0;
    
    players.forEach((player, i) => {
      if (i % 2 === 0) {
        teamA.push(player);
        totalA += player.skill;
      } else {
        teamB.push(player);
        totalB += player.skill;
      }
    });
  
    // Ajuste final para equilíbrio
    if (Math.abs(totalA - totalB) > 1) {
      // Lógica de troca de jogadores para melhor balanceamento
    }
  
    return { teamA, teamB, totalA, totalB };
  }
  
  // Controle de Placar
  let currentGame = {
    teamA: [],
    teamB: [],
    scoreA: 0,
    scoreB: 0,
    points: []
  };
  
  function addPoint(team) {
    // Lógica de pontuação com verificação de vitória
    // Abre modal para seleção do marcador
  }
  
  // Armazenamento Local
  function saveStats() {
    const existingStats = JSON.parse(localStorage.getItem('volleyStats')) || {};
    const monthKey = new Date().toISOString().slice(0,7);
    
    existingStats[monthKey] = existingStats[monthKey] || [];
    existingStats[monthKey].push(currentGame);
    
    localStorage.setItem('volleyStats', JSON.stringify(existingStats));
  }
  
  // Exportação de Dados
  function exportStats() {
    const data = localStorage.getItem('volleyStats');
    const blob = new Blob([data], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'volley_stats.json';
    a.click();
  }