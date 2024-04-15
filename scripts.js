function updateSettings() {
    const customMessage = document.getElementById('customMessage').value;
    const startHours = document.getElementById('startHours').value;
    const startMinutes = document.getElementById('startMinutes').value;
    const endHours = document.getElementById('endHours').value;
    const endMinutes = document.getElementById('endMinutes').value;
    const isDriving = document.getElementById('isDriving').checked;
    const isCustomMode = document.getElementById('isCustomMode').checked;

    fetch('/update-settings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `customMessage=${customMessage}&startHours=${startHours}&startMinutes=${startMinutes}&endHours=${endHours}&endMinutes=${endMinutes}&isDriving=${isDriving ? 'on' : 'off'}&isCustomMode=${isCustomMode ? 'on' : 'off'}`,
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    });
}
