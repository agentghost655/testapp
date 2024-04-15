from flask import Flask, render_template, request, jsonify
import pyttsx3

app = Flask(__name__)

# Initialize the text-to-speech engine
engine = pyttsx3.init()

# Data
is_driving = True
is_in_custom_mode = False
custom_message = ""
start_time = "00:00"  # 00:00 am
end_time = "23:55"  # 11:55 pm

# Routes
@app.route('/')
def index():
    return render_template('index.html', start_time=start_time, end_time=end_time, custom_message=custom_message)

@app.route('/update-settings', methods=['POST'])
def update_settings():
    global custom_message, start_time, end_time, is_driving, is_in_custom_mode
    custom_message = request.form['customMessage']
    start_time = request.form['startHours'] + ":" + request.form['startMinutes']
    end_time = request.form['endHours'] + ":" + request.form['endMinutes']
    is_driving = bool(request.form.get('isDriving', True))
    is_in_custom_mode = bool(request.form.get('isCustomMode', False))
    return jsonify({'message': 'Settings updated successfully'})

# Function to speak the message
def speak_message(message):
    engine.say(message)
    engine.runAndWait()

# Function to handle incoming calls
def handle_incoming_call():
    if is_driving:
        if is_in_custom_mode:
            speak_message(custom_message)
        else:
            speak_message("The person you are calling is driving. Please call again later.")
    else:
        speak_message("The person you are calling has switched off their mobile.")

if __name__ == '__main__':
    app.run(debug=True)
