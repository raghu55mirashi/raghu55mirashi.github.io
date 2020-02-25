download or clone to local system
create virtual environment in root folder using "virtualenv env" in commandline .....
example if downloaded file in desktop then  in cmd desktop/django-react-portfolio>virtualenv env
then 'env\scripts\activate'
then 'pip install -r requirements.txt'

then will go to set react app
first need to change dir to 'cd frontend'
then 'yarn install'
after all node_modules installation 'yarn start'
then build package by 'yarn build' it will be accessible through django app

then cd to django-react-portfolio
always remember to activate env if it is active then ok else follow 4th step
then python manage.py runserver

