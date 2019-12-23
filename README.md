# User App

### Packages Used
Extensive package list can be found in the package.json and requirements.txt files, respectively

JS 
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)

Python
- [Flask](http://flask.palletsprojects.com/en/1.1.x/)
- [FlaskCors](https://flask-cors.corydolphin.com/en/latest/api.html#extension)
- [SQLAlchemy](https://docs.sqlalchemy.org/en/13/)

### Prerequisites and CLI interfaces
``` bash
Python 3+
pip
node
postgresql
```

### Compilation instructions
Backend API files are located in the **backend** directory

Frontend components are in the **src** directory

1. Clone or download the repository
2. Installation instructions
``` bash
pip install -r requirements.txt
npm install
psql -U {db_user} -f user_schema.sql {database_name}
```
3. Add .env file and local environment settings
``` bash
# in root directory
touch .env

# include the following variables:
POSTGRES_USER={db_user}
POSTGRES_PW={db_password}
POSTGRES_DB={database_name}
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
API=http://127.0.0.1:8000
```
4. Run Appliciation
```bash
# to run backend api
# API will run on localhost:8000 and http://127.0.0.1:8000/
python backend/__init__.py 

# to run frontend
npm run dev
# alternatively for production builds
npm run build
npm run start
```

### Additional Notes
The application can be reached at localhost:3000, where the web frontend points to. 
For the purposes of this application the app is using localStorage to handle the user session.
If the user has not logged out, and goes to another page, then navigates back to the app, it will show the the user page.