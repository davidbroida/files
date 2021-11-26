from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home_page():
    return render_template("home.html")


@app.route('/happy_story')
def happy_story():
    place = request.args["place"]
    noun = request.args["noun"]
    verb = request.args["verb"]
    adjective = request.args["adjective"]
    plural_noun = request.args["plural_noun"]
    return render_template("happy_story.html", place = place, noun = noun, verb = verb, adjective = adjective, plural_noun = plural_noun)



