#!/usr/bin/env python3
"""
Flask app with Babel setup and custom locale selection.
"""

from flask import Flask, render_template, request
from flask_babel import Babel
from typing import Any

app = Flask(__name__)

class Config:
    """
    Configuration class for Babel.
    Sets available languages, default locale, and timezone.
    """
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'

# Apply configuration to the Flask app
app.config.from_object(Config)

# Initialize Babel
babel = Babel(app)

@babel.localeselector
def get_locale() -> str:
    """
    Determine the best match between the user's preferred languages
    and the app's supported languages.
    """
    # Extract the best match from the user's accept_languages
    return request.accept_languages.best_match(app.config['LANGUAGES'])

@app.route("/")
def index() -> str:
    """Render the index template."""
    return render_template("2-index.html")

if __name__ == "__main__":
    app.run()