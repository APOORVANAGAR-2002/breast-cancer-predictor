from flask import Flask, render_template, jsonify, request, redirect
import pickle
from flask_cors import CORS, cross_origin
import json
import numpy as np
import pandas as pd


# sys.path.append('D:\Hack Your Way\breast-cancer-predictor')

app = Flask(__name__)
CORS(app)
print("1")
model = pickle.load(open("model.pkl", "rb"))
print("2")

@app.route("/")
@app.route("/home")
def home():
    return render_template("index.html", prediction = "None")


@app.route('/submit', methods = ['POST', 'GET'])
# @cross_origin() 
def submit():
    print("Request received")
    bytes_data = request.data
    new_str = bytes_data.decode('utf-8') # Decode using the utf-8 encoding
    data = json.loads(new_str)
    features = []
    for key in data.keys():
        data[key] = float(data[key])
        features.append(data[key])

    features = np.array(features)
    features = features.reshape(1,5)
    df = pd.DataFrame(features, columns = ['mean_radius', 'mean_texture', 'mean_perimeter', 'mean_area', 'mean_smoothness'])

    result = model.predict(df)
    print(result, type(result))
    print("Model predicted")
    
    param = {1:"BENIGN", 0:"MALIGNANT"}
    return jsonify({"result": "You have chances of {} Breast Cancer".format(param[result[0]])})
    
# @app.route('/result')
# def result():


if(__name__ == "__main__"):
    app.run(debug = True)