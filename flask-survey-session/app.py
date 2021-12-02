from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey as survey

app = Flask(__name__)
app.config['SECRET_KEY']= "not-so-secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)

RESPONSES_KEY = "responses"

@app.route("/")
def home_page():
    return render_template("home.html", survey=survey)


@app.route("/begin")
def start_survey():

    session[RESPONSES_KEY] = []

    return redirect("/questions/0")


@app.route("/questions/<int:qid>")
def handle_question(qid):

    responses = session.get(RESPONSES_KEY)
    
    if(responses is None):
        return redirect("/begin")
    
    if(len(responses) == len(survey.questions)):
        return render_template("thank_you.html", survey=survey)

    if(len(responses) != qid):
        flash("No skipping questions!", 'error')
        return redirect(f"/questions/{len(responses)}")

    question = survey.questions[qid]
    return render_template("questions.html", survey=survey, question=question)


@app.route("/answers", methods = ["POST"])
def handle_answer():
    answer = request.args.get('answer')
    responses = session[RESPONSES_KEY]
    responses.append(answer)
    session[RESPONSES_KEY] = responses

    if(len(responses) == len(survey.questions)):
        return render_template("thank_you.html", survey=survey)

    return redirect(f"/questions/{len(responses)}")