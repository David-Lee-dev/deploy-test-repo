FROM python:3.8.10

WORKDIR /docker-workplace/test-server

COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY . .

CMD ["python3", "manage.py", "runserver", "0:8000"]

EXPOSE 8000