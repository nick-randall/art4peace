from flask import Flask, render_template
import smtpd
import os



username = os.environ.get('EMAILADDRESS')
password = os.environ.get('PASSWORD')

# print(password, username)

from flask import Flask, escape, request

app = Flask(__name__, template_folder="")

@app.route('/', methods=['GET','POST'])
def hello():
    name = request.args.get("name", "World")
    return render_template("art4peace.html")

def contact():
    if request.method == 'POST':
        return "message sent"
    elif request.method == 'GET':
        return render_template("contact_form.html")


app.run()