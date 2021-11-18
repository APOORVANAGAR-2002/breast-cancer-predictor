from flask import Flask, render_template
import pickle

app = Flask(__name__)
print("1")
model = pickle.load(open("model.pkl", "rb"))
print("2")

@app.route("/")
@app.route("/home")
def home():
    return render_template("index.html")


if(__name__ == "__main__"):
    app.run(debug = True)