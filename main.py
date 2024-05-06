from kivy.app import App
from kivy.uix.label import Label
from kivy.uix.boxlayout import BoxLayout
from kivy.clock import Clock
from kivy.graphics import Color, Rectangle
import threading
import time

class SpeedTracker(App):
    speed = 0

    def update_speed(self, dt):
        # Simulate speed increase
        self.speed += 1
        self.root.ids.speed_label.text = "Speed: {} km/h".format(self.speed)

    def run_in_background(self):
        while True:
            # Simulate background task (e.g., GPS tracking)
            print("Running in background...")
            time.sleep(1)

    def build(self):
        layout = BoxLayout(orientation='vertical')

        # Create gradient background
        with layout.canvas.before:
            Color(0.004, 0.251, 0.596, 1)  # Gradient start color
            self.rect = Rectangle(size=(layout.width, layout.height), pos=layout.pos)
            Color(0.780, 0.659, 0.407, 1)  # Gradient end color
            self.rect = Rectangle(size=(layout.width, layout.height), pos=layout.pos)

        # Create and add speed label
        self.speed_label = Label(text="Speed: 0 km/h", color=(1, 1, 1, 1), font_size='20sp', size_hint=(None, None), size=(200, 50))
        layout.add_widget(self.speed_label)

        # Start updating speed every second
        Clock.schedule_interval(self.update_speed, 1)

        # Start background task in a separate thread
        threading.Thread(target=self.run_in_background, daemon=True).start()

        return layout

if __name__ == '__main__':
    SpeedTracker().run()
