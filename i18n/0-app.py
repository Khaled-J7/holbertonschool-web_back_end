#!/usr/bin/env python3
"""
Basic Flask app 
"""

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/') # type: ignore
def index():
    render_template('index.html')
    

if __name__ == "__main__":
    app.run()
