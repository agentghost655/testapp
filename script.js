const speedDisplay = document.getElementById('speedDisplay');
const drivingSwitch = document.getElementById('drivingSwitch');
const customSwitch = document.getElementById('customSwitch');
const customSettings = document.getElementById('customSettings');
const startTimeInput = document.getElementById('startTime');
const endTimeInput = document.getElementById('endTime');
const customMessageInput = document.getElementById('customMessage');
const updateCustomBtn = document.getElementById('updateCustom');
let drivingInterval;
let speed = 0;

// Initialize custom mode to be off
customSwitch.checked = false;

customSwitch.addEventListener('change', function() {
  if (this.checked) {
    // Enable custom mode
    customSettings.style.display = 'block';
  } else {
    // Disable custom mode
    customSettings.style.display = 'none';
    clearInterval(drivingInterval); // Stop the interval if custom mode is turned off
  }
});

updateCustomBtn.addEventListener('click', function() {
  // Activate custom mode when update button is clicked
  activateCustomMode();
});

function activateCustomMode() {
  const startTime = new Date();
  const endTime = new Date();

  // Set start and end times
  startTime.setHours(parseInt(startTimeInput.value.substring(0, 2)));
  startTime.setMinutes(parseInt(startTimeInput.value.substring(3, 5)));
  endTime.setHours(parseInt(endTimeInput.value.substring(0, 2)));
  endTime.setMinutes(parseInt(endTimeInput.value.substring(3, 5)));

  // Check if start time is before end time
  if (startTime < endTime) {
    // Start custom mode
    customSettings.style.display = 'none';

    // Check custom mode settings periodically
    drivingInterval = setInterval(function() {
      const currentTime = new Date();

      // Check if current time is within the specified range
      if (currentTime >= startTime && currentTime <= endTime) {
        // Silence incoming calls and display custom message
        alert("Incoming calls silenced. " + customMessageInput.value);
      }
    }, 1000);
  } else {
    alert("End time must be after start time.");
  }
}
