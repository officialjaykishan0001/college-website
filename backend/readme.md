
# Backend API Documentation

## 🛡️ Authentication Middleware

All protected routes require the `isAuthenticated` middleware which verifies JWT from cookies or `Authorization` header.

---

## 🧩 Super Admin Script

File: `createSuperAdmin.js`
Creates a superadmin in the database manually if one doesn't exist. Use this script once during initial setup.


## 📂 Admin Routes

**Base Route:** `/api/v1/admin`

### 🔐 POST `/login`

Authenticate an admin and return a JWT token.

* **Body:**

  ```json
  {
    "email": "admin@example.com",
    "password": "yourpassword",
    "role": "superadmin" | "facultyadmin"
  }
  ```

* **Response:**

  * `200 OK`: Successful login, sets a cookie with JWT
  * `400 Bad Request`: Missing fields or incorrect credentials

---

### 🚪 GET `/logout`

Logs out the currently authenticated admin.

* **Auth Required:** ✅

* **Response:**

  * `200 OK`: Clears the token cookie

---

### 🧑‍🏫 POST `/register/facultyadmin`

Registers a new faculty admin. Only superadmins can use this route.

* **Auth Required:** ✅

* **Body:**

  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword"
  }
  ```

* **Response:**

  * `201 Created`: Faculty admin registered
  * `400 Bad Request`: Email already exists or missing data

---

### 📄 GET `/getfacultyadmins`

Returns all registered faculty admins.

* **Auth Required:** ✅

* **Response:**

  * `200 OK`: List of faculty admins

---

### ✏️ POST `/profile/update`

Updates the logged-in admin’s profile (currently only allows updating name).

* **Auth Required:** ✅

* **Body:**

  ```json
  {
    "name": "New Name"
  }
  ```

* **Response:**

  * `200 OK`: Profile updated

---

### ❌ DELETE `/delete/:id`

Deletes an admin by their MongoDB ObjectId.

* **Auth Required:** ✅

* **Params:**

  * `id`: Admin ID

* **Response:**

  * `200 OK`: Admin deleted

---

## 📂 Notice Routes

**Base Route:** `/api/v1/notice`

### 📢 POST `/create`

Creates a new notice.

* **Auth Required:** ✅

* **Body:**

  ```json
  {
    "title": "Notice Title",
    "description": "Notice description",
    "category": "General" | "Exam" | "Admission" | "Placement"
  }
  ```

* **Response:**

  * `200 OK`: Notice created
  * `400 Bad Request`: Missing fields

---

### 📃 GET `/getAllNotices`

Fetches all notices.

* **Auth Required:** ✅

* **Response:**

  * `200 OK`: Array of notices

---

### 🔍 GET `/get/:id`

Fetches a single notice by ID.

* **Auth Required:** ✅

* **Params:**

  * `id`: Notice ID

* **Response:**

  * `200 OK`: Single notice

---

### 🛠️ POST `/update/:id`

Updates a specific notice.

* **Auth Required:** ✅

* **Params:**

  * `id`: Notice ID

* **Body (optional fields):**

  ```json
  {
    "title": "New Title",
    "description": "Updated description",
    "category": "Exam"
  }
  ```

* **Response:**

  * `200 OK`: Updated notice

---

### 🗑️ DELETE `/delete/:id`

Deletes a notice by ID.

* **Auth Required:** ✅

* **Params:**

  * `id`: Notice ID

* **Response:**

  * `200 OK`: Deleted notice data

---



