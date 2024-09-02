# ECO-AFRIQA
ECO-AFRIQA is an e-commerce farming platform built with Django, MySQL, and Django REST Framework. The platform allows farmers to list their products and customers to place orders seamlessly.

# Table of Contents
- Features
- Technology Stack
- Installation
- Running the Application
- Directory Structure
- Contributing
- License

# Features
## Public Pages (Accessible to All Visitors)
- Home Page: Introduction to Freshly, highlight of key services, and a call to action for sign-up.
- About Page: Company history, mission and vision, team members, and contact information.
- Blogs Page: List of blog posts with categories, tags, and search functionality. Individual blog post pages.
- Sign Up Page: Sign-up form (name, email, password, etc.), benefits of signing up, and a link to login for existing users.

# Private Pages (Accessible to Registered Users Only)
Accessible after successful registration and email verification:
- Products Page: Add, view, edit, and delete user-added products.
- Gardens Page: View available gardens with details, filter, and search functionality. Send invoice for garden requests.
- Services Page: Information on installation and consultation services, renting and selling gardening equipment, and forms to request services with invoice generation.

# Account Management (Accessible to Registered Users)
- User Profile: View and edit profile information and manage email notification preferences.
- Email Notifications: List, read, and manage received email notifications.
- Logout: Log out from the account.

# Main Navigation Bar
- For First-Time Visitors: Home, About, Blogs, Sign Up.
- For Registered Users: Home, About, Blogs, Products, Gardens, Services, Profile, Logout.

# User Journey
- First-Time Visit: Users see the Home, About, Blogs, and Sign-Up pages, with encouragement to sign up.
- Post Sign-Up: Users receive email verification, after which they can access additional features and manage their products, gardens, and services.

# Technology Stack
- Frontend: HTML, CSS, JavaScript (React.js)
- Backend: Django
- Database: MySQL
- Authentication: JWT (JSON Web Tokens)
- Deployment: Docker, Kubernetes

# Installation
## Prerequisites
- Django
- packages
- React 
  
# Steps

1. Clone the repository:
```bash
    git clone https://github.com/Manoty/ECO-AFRIQA.git
```

2. Create and activate a virtual environment in the root directory.
```bash
    cd ECO-AFRICA1
    python -m venv env
    source env/bin/activate   # On Windows, use `env\Scripts\activate`
```

3. Install dependencies:
```bash
    pip install -r requirements.txt
```


4. Ensure you have MySQL installed and within it create a database called `freshly`
```bash
    sudo -u root mysql -p
    
    SHOW DATABASES;
    CREATE DATABASE freshly;
    quit; 
```


5. Navigate to the main application and apply migrations
```bash
    cd freshly_set
    python manage.py makemigratilons
    python manage.py migrate
```

5. Create a superuser:
    > used to login to the admin panel in your django application. for easy recall you could use admin for the password and admin for the username. These are only for development server and will be change in production
```bash
    python manage.py createsuperuser
```

6. Open the directory with your favourite editor and input your own environmental variables. These are contained within the `.env.example` file. Create your own `.env` file in the root directory and input the variables.


7. Run the development server:
```bash
    python manage.py runserver
```

8. In another terminal, navigate to the frontend directory
```bash
    cd frontend
```

8. Install all the node packages and dependencies then start the server
```bash
    npm install
    npm start
```

# Directory Structure

```bash
freshly-set/
│
├── freshly_set/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── freshlyapp/templates
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│  
│   ├── views.py
│   ├── migrations/
│   │   └── __init__.py
│   └── tests.py
    frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│   └── 
    .env
└── .gitignore
│
├── manage.py
└── requirements.txt
```


# Contributing
Contributions are welcome! Please follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature).
- Commit your changes (git commit -am 'Add some feature').
- Push to the branch (git push origin feature/your-feature).
- Create a new Pull Request.

# License
This project is licensed under the MIT License. See the LICENSE file for details.

