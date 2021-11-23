from flask import Flask, render_template, jsonify, request
import pickle
import sys
from flask_cors import CORS


sys.path.append('D:\Hack Your Way\breast-cancer-predictor')

app = Flask(__name__)
CORS(app)
print("1")
model = pickle.load(open("model.pkl", "rb"))
print("2")

@app.route("/")
@app.route("/home")
def home():
    return render_template("index.html")


@app.route('/submit', methods = ['POST'])
def submit():
    print("Request received")
    print(request.data)
    return jsonify({"Result": "Welcome to GeeksForGeeks, "+request.json['name']})


if(__name__ == "__main__"):
    app.run(debug = True)