# Online Trip Management System (Tourista)

## Project Logo:
![image](https://github.com/developerrajthakur22/efficient-veil-6767/assets/121308092/28f5fe53-2248-441a-88e3-c843d58acdaf)

**Netlify Link:**  <a href="https://64bd8eb175db485932ed5849--sunny-pie-ae061c.netlify.app/index.html">Tourista</a> 

## Introduction

The Online Trip Management System is a web application that aims to provide a convenient platform for managing tours and travels. The system allows both administrators and users to perform various operations related to tour packages, bus routes, hotel bookings, ticket bookings, and more.

## Problem Statement

### Admin Operations

1. **Login into the Application:** The admin can log in to the application with valid credentials to access the administrative features.

2. **User Management:** The admin can manage users, including creating, updating, and deleting user accounts.

3. **Tours/Travels Package Management:** The admin can manage tour packages, such as adding new packages, updating existing ones, and removing packages.

4. **Bus Management:** The admin can manage bus routes and buses, including adding new routes, updating bus details, and deleting routes.

5. **Ticket and Hotel Booking Management:** The admin can oversee ticket bookings and hotel reservations, ensuring smooth operations.

### User Operations

1. **Login as Customer:** Users can log in with their credentials to access the customer features.

2. **Select Routes/ book bus:** Users can view available bus routes to plan their trips.

3. **View Tours/Travels Packages:** Users can explore various tour packages offered by the system.

4. **Book / Print / Cancel Tickets:** Users can book tickets for their desired routes, print tickets for reference, and cancel bookings if needed.

5. **Book Packages:** Users can book tour packages that suit their preferences and requirements.

## Project Overview

The Online Trip Management System will be developed in several sprints using the following technologies:

- **Sprint 1:** Core Java + JPA with Hibernate
- **Sprint 2:** Spring Boot + Rest Controller + JPA with Hibernate
- **Sprint 3:** Frontend Development (HTML, CSS, JavaScript)

## Database

![image](https://github.com/developerrajthakur22/efficient-veil-6767/assets/121308092/cd12379f-2bbc-42ee-908f-d1f6cc171926)


## Team Members

This project is a collaborative effort of the following team members:

- Raj Thakur
- Sonu Kumar
- Harshal Musmade
- Rutwik Kumbhar
- Lalith Tonangi

## Project Configuration

The project uses the following configuration for the Spring Boot application:

```properties
server.port = 8888

spring.datasource.driver=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/Touristo
spring.datasource.username= Your Username
spring.datasource.password= Your Password

spring.jpa.hibernate.ddl-auto=update

```
## Setup

To run the application, follow these steps:

1. Ensure you have Java and MySQL installed on your system.

2. Set up the database with the provided connection details in the `application.properties`.

3. Run the Spring Boot application.

4. Access the application using the specified port (e.g., http://localhost:8888).
