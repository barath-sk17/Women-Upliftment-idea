# Web 3.0 Complaint Filing System - README

This project aims to create a web-based platform for filing anonymous complaints, specifically targeting cases of mental harassment against women. The system provides a safe and confidential space for victims to report incidents without the fear of being stereotyped or targeted. The solution utilizes React.js as the front-end framework and Django with the Django REST framework as the back-end technology. The system incorporates secure communication channels and cryptographic techniques to ensure the privacy and integrity of the complaint filing process.

## Features

- **Anonymous Complaint Filing**: The website allows users to file complaints anonymously, ensuring the privacy of the victims. No personal information or identity is disclosed during the process.

- **Sleek User Interface**: The front-end design is created using React.js, providing a beautiful and intuitive user interface. The website offers smooth navigation and an engaging user experience.

- **Case Tracking**: Users can view the number of cases filed within the website. This feature provides transparency and helps create awareness about the prevalence of mental harassment.

- **Secure Communication**: The system ensures secure communication between the victim and the authorized person handling the complaints. Private and public key encryption is utilized to maintain the confidentiality and integrity of the data exchanged.

- **Evidence Verification**: When a complaint is filed, the system generates a signature file by signing the evidence with the user's private key. The signature, public key, and evidence are sent as an email to the authorized person. An algorithm for verification is implemented to ensure the authenticity of the evidence.

## Technology Stack

- Front-end: React.js
- Back-end: Django with Django REST framework
- Database: Django Admin Database
- Communication Security: [Specify the encryption techniques or protocols used, e.g., RSA encryption, HTTPS, etc.]

## Installation and Setup

1. Clone the repository: `git clone "https://github.com/barath-sk17/Women-Upliftment-idea.git"`
2. Navigate to the project directory: `cd project`
4. Configure the database settings in the Django settings file.
5. Run the development server:
   - Front-end (React.js): `npm start`
   - Back-end (Django): `python manage.py runserver`

Note: Please ensure that you have Node.js, npm, and Python installed on your system before running the project.

## Usage

1. Access the website by opening the provided URL in a web browser.
2. Navigate through the website's interface to familiarize yourself with the features.
3. To file a complaint, click on the appropriate button or section and follow the instructions provided.
4. The complaint will be submitted anonymously and securely to the authorized person for further action.
5. The authorized person can verify the evidence by using the algorithm provided within the email.
6. Maintain the confidentiality and integrity of the complaints and personal data throughout the process.

## Project Sample

https://drive.google.com/drive/folders/1yWOSpqo6cFJkBi5NxmqmA2rmhwC5H-I3?usp=sharing
