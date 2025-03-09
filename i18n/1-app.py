#!/usr/bin/env python3
"""
Basic Flask app with Babel setup and configuration.
"""

from flask import Flask, render_template
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

# Initialize Babel and store it in a module-level variable named 'babel'
babel = Babel(app)

@app.route("/")
def index() -> str:
    """Render the index template."""
    return render_template("1-index.html")

if __name__ == "__main__":
    app.run()