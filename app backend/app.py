from flask import Flask, render_template
import pickle

app = Flask(__name__)
model = pickle.load(open("model.pkl", "rb"))

@app.route("/")
def home():
    return render_template("..\public\index.html")


if(__name__ == "__main__"):
    app.run(debug = True)