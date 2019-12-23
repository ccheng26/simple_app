import os
import json

from flask import Flask
from flask import request
from flask import render_template
from flask import current_app as app
from flask import jsonify

from flask_cors import CORS
from flask_cors import cross_origin

from sqlalchemy.sql import exists
from flask_sqlalchemy import SQLAlchemy

from backend import db
from .models import User


@app.route("/", methods=["GET"])
def index():
    if request.method == "GET":
        return "API ROUTES"


@cross_origin()
@app.route("/login", methods=["POST"])
def login():
    if request.method == "POST":
        session = db.session
        response = {}
        responseBody = dict(request.get_json())
        username, password = responseBody.values()
        if check_if_exists('username', username):
            try:
                matched = session.query(User).filter(
                    User.username == username,
                    User.user_password == password).first()
                if matched is not None:
                    response['data'] = matched.as_dict()
                    return response
                else:
                    response['apiError'] = 'Unknown username or password'
            finally:
                session.close()
        else:
            response['apiError'] = 'Unknown username or password'
        return response


@cross_origin()
@app.route("/signup", methods=["POST"])
def signup():
    response = {}
    if request.method == "POST":
        responseBody = dict(request.get_json())
        firstName, lastName, email,
        username, password, confirmPassword = responseBody.values()
        for key in responseBody.keys():
            if not bool(responseBody[key]):
                response['apiError'] = f'Missing {key}'
                return response
        if password != confirmPassword:
            response['apiError'] = 'Passwords do not Match'
            return response
        else:
            new_user = User(first_name=firstName, last_name=lastName,
                            email=email, username=username,
                            user_password=password)
            if check_if_exists('email', email) or \
               check_if_exists('username', username):
                response['apiError'] = 'Username or password already exists'
            else:
                try:
                    session = db.session
                    session.add(new_user)
                    session.commit()
                    response['success'] = 'User successfully created'
                finally:
                    session.close()
        return jsonify(response)


def check_if_exists(query_name, query_value):
    session = db.session
    value_exists = session.query(exists().where(
        getattr(User, query_name) == query_value)).scalar()
    session.close()
    return value_exists
