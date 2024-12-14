# Bizzightful

## Introduction
* Bizzightful is a web that empowers online businesses by providing actionable insights based on data from various e-commerce platforms.

* The program is majorlly written in go language and javascript
* The database is created using postgresql

## Features:
   * Ethical web scraping to collect data on product pricing, reviews, sales, and inventory.
   * AI-driven insights to provide meaningful recommendations.
   * Focus on simplicity and ease of use, tailored for non-technical users.

## Usage:

To access the platform, follow the instructions below:

* On your terminal or command line, input the following commands:

1. Clone the repository:

```bash
git clone https://github.com/johneliud/bizzightful.git
```

2. Change directory to bizzightful

```bash
cd bizzightful
```

3. Create and Open the .env file

```bash
code .env
```

* For your database to run, follow the order bellow:

4. Input your credentials in the file as follows:

```sh
DB_USER=<postgres-name>
DB_NAME=<db_name>
DB_HOST=<localhost>
DB_PORT=<5432>
DB_SSLMODE=<disable>
DB_PASSWORD=<user_password>
```

5. Then run :

```bash
go run .
```

## Contribution

Follow these steps if you would like to contribute to this project or if you've discovered a bug.

1. **Fork the repository:** Click the "Fork" button at the top-right corner of the repository page.
2. **Clone your fork:** Clone the forked repository to your local machine using:

```bas
git clone https://github.com/<your-username>/<your-forked-repo>.git
```
3. **Create a new branch:** Create a branch for your feature or bug fix.

```bash
git checkout -b feature/your-feature-name
```
4. **Make your changes:** Implement your feature or bug fix, ensuring code quality.
5. **Run tests:** Make sure your changes do not break existing functionality. Write tests where applicable.
6. **Commit your changes:** Follow good commit message practices (e.g., `git commit -m "Add feature X`").
7. **Push your branch:** Push your changes to your fork.
8. **Create a Pull Request:** Go to the original repository, and click "Compare & pull request." Describe your changes in detail.

## AUTHORS
- [@ombima56](https://github.com/ombima56)

- [@johneliud](https://github.com/johneliud)

- [@Vinolia-E](https://github.com/Vinolia-E)

- [@rodneyo1](https://github.com/rodneyo1)