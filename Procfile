release: python manage.py migrate
heroku config:set DEBUG_COLLECTSTATIC=1
heroku config:set DISABLE_COLLECTSTATIC=1
web: gunicorn backend.wsgi --log-file - 