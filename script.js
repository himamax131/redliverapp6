// تحديث جدول ترتيب الفرق ديناميكيًا
document.addEventListener("DOMContentLoaded", function () {
  const standingsTable = document.getElementById("standings-table");

  if (standingsTable) {
    const teams = [
      { rank: 1, name: "ريد ليفر", points: 30, wins: 10, draws: 0, losses: 2, goalsFor: 28, goalsAgainst: 8 },
      { rank: 2, name: "الهلال", points: 27, wins: 9, draws: 0, losses: 3, goalsFor: 24, goalsAgainst: 10 },
      { rank: 3, name: "النسور", points: 25, wins: 8, draws: 1, losses: 3, goalsFor: 22, goalsAgainst: 12 },
    ];

    teams.forEach(team => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${team.rank}</td>
        <td>${team.name}</td>
        <td>${team.points}</td>
        <td>${team.wins}</td>
        <td>${team.draws}</td>
        <td>${team.losses}</td>
        <td>${team.goalsFor}</td>
        <td>${team.goalsAgainst}</td>
        <td>${team.goalsFor - team.goalsAgainst}</td>
      `;
      standingsTable.appendChild(row);
    });
  }
});
