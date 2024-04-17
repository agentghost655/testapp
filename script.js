const speedDisplay = document.getElementById('speedDisplay');
const drivingSwitch = document.getElementById('drivingSwitch');
const customSwitch = document.getElementById('customSwitch');
const customSettings = document.getElementById('customSettings');
const startTimeInput = document.getElementById('startTime');
const endTimeInput = document.getElementById('endTime');
const customMessageInput = document.getElementById('customMessage');
let interval;

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
  let speed = 0;
  interval = setInterval(function() {
    speed += Math.floor(Math.random() * 30);
    speedDisplay.textContent = `Speed: ${speed} km/h`;

    if (speed > 20) {
      // Silencing calls when speed exceeds 20 km/h
      alert("Incoming calls silenced. You are driving.");
    }
  }, 1000);
}

function disableDrivingMode() {
  clearInterval(interval); // Stop the interval
  speedDisplay.textContent = "Speed: 0 km/h";
}

function setCustomMode() {
  customSettings.style.display = 'block';

  // Prompt user to set start and end times
  const startTime = prompt("Enter start time (HH:MM):", "02:00");
  const endTime = prompt("Enter end time (HH:MM):", "09:00");

  // Prompt user to enter custom message
  const customMessage = prompt("Enter custom message for callers:", "I am currently busy. Please call after 9 am.");

  if (startTime && endTime && customMessage) {
    // Set input values
    startTimeInput.value = startTime;
    endTimeInput.value = endTime;
    customMessageInput.value = customMessage;
  } else {
    // If user cancels the prompts or doesn't enter values, turn off custom mode
    customSwitch.checked = false;
    customSettings.style.display = 'none';
  }
}
