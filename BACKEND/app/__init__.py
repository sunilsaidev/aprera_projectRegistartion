from flask import Flask
from flask_cors import CORS
from app.config import Config
from app.models.database import db

import logging
from logging.handlers import RotatingFileHandler
import os

# ---------------------------------------------------------
# Logging Setup
# ---------------------------------------------------------
LOG_DIR = os.path.join(os.path.dirname(__file__), "..", "logs")
os.makedirs(LOG_DIR, exist_ok=True)

log_file = os.path.join(LOG_DIR, "app.log")

handler = RotatingFileHandler(log_file, maxBytes=5_000_000, backupCount=5)
formatter = logging.Formatter(
    "%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
handler.setFormatter(formatter)

root_logger = logging.getLogger()
root_logger.setLevel(logging.INFO)
root_logger.addHandler(handler)
root_logger.addHandler(logging.StreamHandler())
logging.getLogger("werkzeug").setLevel(logging.WARNING)

# ---------------------------------------------------------
# App Factory
# ---------------------------------------------------------
def create_app():
    app = Flask(__name__)
    print("🔥 create_app called 🔥")

    app.config.from_object(Config)

    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    app.config["UPLOAD_FOLDER"] = os.path.join(BASE_DIR, "uploads")

    # -----------------------------------------------------
    # ✅ GLOBAL CORS FIX (THIS SOLVES PREFLIGHT ERRORS)
    # -----------------------------------------------------
    CORS(
        app,
        resources={r"/api/*": {"origins": "*"}},
        supports_credentials=True
    )

    # -----------------------------------------------------
    # Init DB
    # -----------------------------------------------------
    db.init_app(app)

    # -----------------------------------------------------
    # Register Blueprints
    # -----------------------------------------------------
    from app.controllers.test_connection_controller import test_connection_bp
    from app.controllers.location_controller import location_bp
    from app.controllers.development_details_controller import development_details_bp
    from app.controllers.project_registration_controller import project_registration_bp
    from app.controllers.project_wizard_controller import project_wizard_bp
    from app.controllers.associate_controller import associate_bp
    from app.controllers.project_uploddocuments_controller import project_upload_documents_bp
    from app.controllers.project_preview_controller import preview_bp
    
    from app.controllers.application_associate_controller import application_associate_bp


    app.register_blueprint(project_upload_documents_bp, url_prefix="/api")
    app.register_blueprint(test_connection_bp, url_prefix="/api")
    app.register_blueprint(location_bp, url_prefix="/api")
    app.register_blueprint(development_details_bp, url_prefix="/api")
    app.register_blueprint(project_registration_bp, url_prefix="/api")
    app.register_blueprint(project_wizard_bp, url_prefix="/api")
    app.register_blueprint(associate_bp, url_prefix="/api")
    app.register_blueprint(preview_bp, url_prefix="/api")
    app.register_blueprint(application_associate_bp, url_prefix="/api")


    # -----------------------------------------------------
    # Health Check
    # -----------------------------------------------------
    @app.route("/ping")
    def ping():
        return "pong", 200

    print("✅ FINAL REGISTERED ROUTES:")
    for rule in app.url_map.iter_rules():
        print(rule)

    return app
