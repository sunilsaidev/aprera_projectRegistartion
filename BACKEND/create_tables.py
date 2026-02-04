from app import create_app
from app.models.database import db

# 🔥 IMPORT ALL MODELS EXPLICITLY
from app.models.project import Project
from app.models.project_agent import ProjectAgent
from app.models.architect import Architect
from app.models.engineer import Engineer
from app.models.contractor import Contractor
from app.models.accountant import Accountant
from app.models.project_engineer import ProjectEngineer

app = create_app()

with app.app_context():
    db.create_all()
    print("✅ Tables created successfully")
