from flask import Blueprint, jsonify
from app.models.database import db
from sqlalchemy import text

test_connection_bp = Blueprint("test_connection_bp", __name__)

@test_connection_bp.route("/test", methods=["GET"])
def get_tests():
    try:
        result = db.session.execute(text("SELECT 1")).fetchone()
        return jsonify({
            "status": "success",
            "message": "PostgreSQL connection is working",
            "result": result[0]
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500
