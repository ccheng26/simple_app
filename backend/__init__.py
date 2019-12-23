import os
import sys

from dotenv import load_dotenv

from flask import Flask
from flask import request
from flask import render_template

from flask_cors import CORS
from flask_cors import cross_origin

from flask_sqlalchemy import SQLAlchemy


load_dotenv()

PG = {
    'user': os.getenv('POSTGRES_USER'),
    'pw': os.getenv('POSTGRES_PW'),
    'db': os.getenv('POSTGRES_DB'),
    'host': os.getenv('POSTGRES_HOST'),
    'port': os.getenv('POSTGRES_PORT')
}

db = SQLAlchemy()

sys.path.insert(0, os.path.abspath(
                os.path.join(
                    os.path.dirname(__file__), '..')))


def init():
    app = Flask(__name__, instance_relative_config=False)
    CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'
    db_str = os.getenv('DATABASE_URL')
    db_str = (db_str if db_str is not None
              else 'postgresql://%(user)s:%(pw)s@%(host)s:%(port)s/%(db)s' % PG)
    app.config['SQLALCHEMY_DATABASE_URI'] = db_str
    db.init_app(app)
    with app.app_context():
        from users import routes
        db.create_all()
        return app


if __name__ == "__main__":
    init().run(debug=True, port=8000)
