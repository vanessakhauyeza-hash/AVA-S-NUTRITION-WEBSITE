# Ava's Nutrition Hub — Digital Health Full-Stack Prototype

This package contains the approved frontend plus a PHP/MySQL backend prototype for the Digital Nutrition Screening Platform.

## Architecture

Frontend:
- HTML
- CSS
- Bootstrap
- JavaScript
- GitHub Pages

Backend:
- PHP 8+
- MySQL 8+ / MariaDB
- JSON API
- PDO prepared statements

## Important

GitHub Pages cannot execute PHP or host MySQL.

Therefore:
- Keep the frontend at `https://avasnutritionhub.org/`
- Deploy the `backend/` folder to a PHP/MySQL hosting provider.
- Replace the frontend API URL with the backend's HTTPS URL.

## Database

Import `backend/sql/schema.sql` into MySQL.

Configure these environment variables on the backend server:

DB_HOST
DB_NAME
DB_USER
DB_PASS

For local XAMPP testing, you can alternatively edit `backend/config/db.php`, but do not commit real credentials to GitHub.

## API endpoints

POST `/backend/api/save_screening.php`
- Saves a screening record.
- Prototype intentionally excludes direct identifiers.

GET `/backend/api/dashboard.php`
- Returns aggregate dashboard counts.
- Authentication must be added before real deployment.

## Privacy / clinical safety

This is a technical prototype, not a clinically validated diagnostic system.

For a real deployment:
- Add authenticated staff accounts.
- Add role-based access control.
- Use HTTPS.
- Encrypt sensitive data at rest where appropriate.
- Log access and changes.
- Define retention/deletion policies.
- Do not expose patient records publicly.
- Validate clinical rules with qualified nutrition/health professionals.
- Use only appropriately approved screening criteria and reference standards.

The current frontend should use test/demo data until those controls are implemented.
