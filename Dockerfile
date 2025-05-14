# Use an official Python image
FROM python:3.10-slim

# Copy the Python file into the container
COPY print.py /app/print.py

# Set the working directory
WORKDIR /app

# Command to run when the container starts
CMD ["python", "print.py"]
