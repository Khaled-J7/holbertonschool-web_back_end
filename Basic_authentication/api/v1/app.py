#!/usr/bin/env python3
"""
Route module for the API
"""
from os import getenv
from api.v1.views import app_views
from flask import Flask, jsonify, abort, request
from flask_cors import (CORS, cross_origin)
import os
from api.v1.auth.auth import Auth

app = Flask(__name__)
app.register_blueprint(app_views)
CORS(app, resources={r"/api/v1/*": {"origins": "*"}})
auth = None     # Initialize auth to None

# Load the appropriate authentication instance based on AUTH_TYPE
AUTH_TYPE = getenv("AUTH_TYPE")
if AUTH_TYPE == "auth":
    auth = Auth()


@app.errorhandler(404)
def not_found(error) -> str:
    """ Not found handler
    """
    return jsonify({"error": "Not found"}), 404


@app.errorhandler(401)
def unauthorized(error) -> str:
    """Unauthorized Haandler"""
    return jsonify({"error": "Unauthorized"}), 401


@app.errorhandler(403)
def forbidden(error) -> str:
    """Forbidden Handler"""
    return jsonify({"error": "Forbidden"}), 403


@app.before_request
def before_request():
    """ Filter each request before it's processed """
    if auth is None:
        return  # Do nothing if auth is None

    # List of paths that don't require authentication
    excluded_paths = ['/api/v1/status/',
                      '/api/v1/unauthorized/', '/api/v1/forbidden/']

    # Skip validation for excluded paths
    if auth.require_auth(request.path, excluded_paths):
        # Check if the Authorization header is missing
        if auth.authorization_header(request) is None:
            abort(401)  # Unauthorized

        # Check if the current user cannot be determined
        if auth.current_user(request) is None:
            abort(403)  # Forbidden


if __name__ == "__main__":
    host = getenv("API_HOST", "0.0.0.0")
    port = getenv("API_PORT", "5000")
    app.run(host=host, port=port)
