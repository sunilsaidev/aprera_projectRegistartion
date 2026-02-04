from flask import Blueprint, jsonify
from app.models.location_models import LocationModel
import logging

location_bp = Blueprint("location", __name__)

# -------------------------
# GET STATES
# -------------------------
@location_bp.route("/states", methods=["GET"])
def get_states():
    try:
        data = LocationModel.get_states()
        return jsonify(data or []), 200
    except Exception as e:
        logging.exception("Error fetching states")
        return jsonify({"error": str(e)}), 500


# -------------------------
# GET DISTRICTS BY STATE
# -------------------------
@location_bp.route("/districts/<int:state_id>", methods=["GET"])
def get_districts(state_id):
    try:
        data = LocationModel.get_districts_by_state(state_id)
        return jsonify(data or []), 200
    except Exception as e:
        logging.exception(f"Error fetching districts for state_id={state_id}")
        return jsonify({"error": str(e)}), 500


# -------------------------
# GET MANDALS BY DISTRICT
# -------------------------
@location_bp.route("/mandals/<int:district_id>", methods=["GET"])
def get_mandals(district_id):
    try:
        data = LocationModel.get_mandals_by_district(district_id)
        return jsonify(data or []), 200
    except Exception as e:
        logging.exception(f"Error fetching mandals for district_id={district_id}")
        return jsonify({"error": str(e)}), 500


# -------------------------
# GET VILLAGES BY MANDAL
# -------------------------
@location_bp.route("/villages/<int:mandal_id>", methods=["GET"])
def get_villages(mandal_id):
    try:
        data = LocationModel.get_villages_by_mandal(mandal_id)
        return jsonify(data or []), 200
    except Exception as e:
        logging.exception(f"Error fetching villages for mandal_id={mandal_id}")
        return jsonify({"error": str(e)}), 500
