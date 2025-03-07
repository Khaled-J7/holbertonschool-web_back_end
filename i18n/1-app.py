#!/usr/bin/env python3
"""
Basic Flask app that renders a template with a welcome message.
"""

from flask import Flask, render_template
from flask_babel import Babel

app = Flask(__name__)
babel = Babel(app)


class Config:
    """Class Config  that has a
    LANGUAGES class attribute equal to ["en", "fr"]"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app.config.from_object(Config)


@app.route("/", methods=["GET"], strict_slashes=False)
def hello_world():
    ''' return the template '''
    return render_template('1-index.html')


if __name__ == "__main__":
    app.run()
