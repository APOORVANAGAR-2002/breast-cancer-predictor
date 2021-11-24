import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.linear_model import LogisticRegression
import pickle

data=pd.read_csv("Breast_cancer_data.csv")
X = data.iloc [:,0:5]
y = data.iloc [:,5]

model =LogisticRegression(random_state=0)
model.fit(X, y)

pickle.dump(model, open("model.pkl", "wb"))
print("Model is ready")
