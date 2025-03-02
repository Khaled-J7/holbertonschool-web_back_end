#!/usr/bin/env python3
"""Flask application
"""
from flask import Flask, jsonify
from auth import Auth
from flask import request
from flask import abort


app = Flask(__name__)
AUTH = Auth()


@app.route("/")
def index():
    """Root application"""
    return jsonify({"message": "Bienvenue"})


@app.route("/users", methods=["POST"])
def register_user() -> str:
    """Register user"""

    try:
        email = request.form["email"]
        password = request.form["password"]
    except KeyError:
        abort(400)

    try:
        user = AUTH.register_user(email, password)
    except ValueError:
        return jsonify({"message": "email already registered"}), 400

    msg = {"email": email, "message": "user created"}
    return jsonify(msg)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000")
