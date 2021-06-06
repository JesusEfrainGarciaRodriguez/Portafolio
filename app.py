from flask import Flask, render_template, request, redirect, url_for
from flask_mail import Mail, Message

app = Flask(__name__)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'portafolio.email@gmail.com'
app.config['MAIL_PASSWORD'] = '#Portafolio1234'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/enviar_correo', methods=['POST'])
def enviar_correo():
    if(request.method == 'POST'):
        nombre = request.form['nombre']
        correo = request.form['correo']
        asunto = request.form['asunto']
        msg = request.form['mensaje']

        message = Message(asunto, sender='portafolio.email@gmail.com',
              recipients=["efraingarcia_86@hotmail.com"])

        message.body = """Mensaje de: %s, con el correo: %s.\n\n%s""" % (nombre, correo, msg,)
        mail.send(message)

        return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(port = 3000, debug = False)