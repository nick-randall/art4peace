from flask import Flask, render_template
import smtpd
import os



username = os.environ.get('EMAILADDRESS')
password = os.environ.get('PASSWORD')

# print(password, username)

from flask import Flask, escape, request

app = Flask(__name__, template_folder="")

@app.route('/')
def hello():
    name = request.args.get("name", "World")
    return render_template("art4peace.html")

app.run()