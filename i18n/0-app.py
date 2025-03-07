#!/usr/bin/env python3
"""
Basic Flask app that renders a template with a welcome message.
"""

from flask import Flask, render_template
from typing import Any

app = Flask(__name__)


@app.route("/")
def index() -> str:
    """Render the index template."""
    return render_template("0-index.html")


if __name__ == "__main__":
    app.run()
