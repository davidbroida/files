from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__)


@app.route("/add")
def add_it():
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = add(a,b)
    return str(result)

@app.route('/subtract')
def sub_it():
    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    result = sub(a,b)
    return str(result)

@app.route('/add')
def mult_it():
    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    result = mult(a,b)
    return str(result)

@app.route('/add')
def div_it():
    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    result = div(a,b)
    return str(result)

operators = {
    "add": add,
    "sub": sub,
    "mult": mult,
    "div": div,
}

@app.route('/math/<operator>')
def do_math(operator):
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = operators[operator](a,b)
    return str(result)


