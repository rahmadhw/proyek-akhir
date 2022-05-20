from flask import Flask
from flask import render_template
app = Flask(__name__)



@app.route("/")
def index():
    return render_template("index.html")



@app.route("/home")
def home():
    return render_template("home/home.html")


@app.route("/data")
def data():
    return render_template("data/data.html")

@app.route("/model")
def model():
    return render_template("model/model.html")


if __name__ == '__main__':
    app.run(port=5000, debug=True)