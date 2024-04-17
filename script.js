const speedDisplay = document.getElementById('speedDisplay');
const drivingSwitch = document.getElementById('drivingSwitch');
const customSwitch = document.getElementById('customSwitch');
const customSettings = document.getElementById('customSettings');
const startTimeInput = document.getElementById('startTime');
const endTimeInput = document.getElementById('endTime');
const customMessageInput = document.getElementById('customMessage');
let interval;
let speed = 0;

// Initialize driving mode by default
simulateDrivingMode();

drivingSwitch.addEventListener('change', function() {
  if (this.checked && !customSwitch.checked) {
    // Simulate driving mode if both switches are on
    simulateDrivingMode();
  } else {
    // Disable driving mode if custom mode is turned on
    disableDrivingMode();
  }
});

customSwitch.addEventListener('change', function() {
  if (this.checked) {
    // Enable custom mode
    setCustomMode();
  } else {
    // Disable custom mode
    customSettings.style.display = 'none';
    clearInterval(interval); // Stop the interval if custom mode is turned off
  }
});

function simulateDrivingMode() {
  interval = setInterval(function() {
    // Simulate random fluctuations in speed
    const delta = Math.random() * 6 - 3;
    speed = Math.max(0, speed + delta);
    speedDisplay.textContent = `Speed: ${speed.toFixed(1)} km/h`;

    if (speed > 20) {
      // Silencing calls when speed exceeds 20 km/h
      alert("Incoming calls silenced. You are driving.");
    }
  }, 1000);
}

function disableDrivingMode() {
  clearInterval(interval); // Stop the interval
  speed = 0;
  speedDisplay.textContent = "Speed: 0 km/h";
}

function setCustomMode() {
  customSettings.style.display = 'block';
}
