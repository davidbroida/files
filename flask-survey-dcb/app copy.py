from flask import Flask, request, render_template, redirect, flash
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey as survey

app = Flask(__name__)
app.config['SECRET_KEY'] ='secretkey'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)

responses = []

@app.route("/")
def home_page():
    return render_template("home.html", survey = survey)

@app.route("/begin", methods=["POST"])
def start_survey():
    return redirect("/questions/0")

@app.route("/questions/<int:qid>")
def handle_question(qid):

    if(responses is None):
        return redirect("/")

    if(len(responses) == len(survey.questions)):
        return redirect("/complete")

    if(len(responses) != qid):
        flash("No skipping questions!", 'error')
        return redirect(f"/questions/{len(responses)}")

    question = survey.questions[qid]
    return render_template("questions.html", question=question)

@app.route("/answer", methods = ["POST"])
def handle_answer():
    answer = request.form['answer']
    responses.append(answer)
    return redirect(f"/questions/{len(responses)}")

@app.route("/complete")
def thank_you_page():
    return render_template("thankyou.html", survey=survey)