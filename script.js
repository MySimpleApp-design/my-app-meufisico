let watchId;

// Função para iniciar o tracking de localização
function startTracking() {
  if (navigator.geolocation) {
    watchId = navigator.geolocation.watchPosition(updateLocation, showError, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('stopButton').style.display = 'block';
  } else {
    alert("Geolocation não é suportado pelo seu navegador.");
  }
}

// Função para parar o tracking
function stopTracking() {
  if (watchId) {
    navigator.geolocation.clearWatch(watchId);
    document.getElementById('startButton').style.display = 'block';
    document.getElementById('stopButton').style.display = 'none';
  }
}

// Atualizar as informações de localização
function updateLocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const accuracy = position.coords.accuracy;

  document.getElementById('latitude').innerText = latitude.toFixed(6);
  document.getElementById('longitude').innerText = longitude.toFixed(6);
  document.getElementById('accuracy').innerText = accuracy.toFixed(0);
}

// Exibir erro caso não consiga obter a localização
function showError(error) {
  alert("Erro ao tentar obter a localização.");
}

// Função para carregar histórico de atividades (simulado)
function loadHistory() {
  const historyTable = document.getElementById('history-table').getElementsByTagName('tbody')[0];
  const activities = [
    { date: '2025-05-01', activity: 'Corrida', duration: 30 },
    { date: '2025-05-02', activity: 'Caminhada', duration: 45 },
  ];

  activities.forEach(activity => {
    const row = historyTable.insertRow();
    row.insertCell(0).innerText = activity.date;
    row.insertCell(1).innerText = activity.activity;
    row.insertCell(2).innerText = activity.duration;
  });
}

// Carregar histórico ao iniciar
window.onload = loadHistory;
