
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

## 📅 Event Route

### Base URL: `/api/v1/event`


### 1. Create Event

**Endpoint:** `POST /api/event/create`
**Description:** Create a new event (Admin only)
**Authentication:** Required (Bearer Token)
**Content-Type:** `multipart/form-data`

#### Request Body:

| Field       | Type   | Required | Description       |
| ----------- | ------ | -------- | ----------------- |
| title       | String | Yes      | Event title       |
| description | String | Yes      | Event details     |
| eventDate   | String | Yes      | Date of the event |
| location    | String | Yes      | Venue             |
| eventImage  | File   | Yes      | Event image       |

#### Response:

```json
{
  "success": true,
  "message": "Event created successfully"
}
```

---

### 2. Get All Events

**Endpoint:** `GET /api/event/all`
**Description:** Retrieve all events
**Authentication:** Not required

#### Response:

```json
{
  "success": true,
  "allEvents": [ ... ]
}
```

---

### 3. Get Single Event

**Endpoint:** `GET /api/event/:id`
**Description:** Retrieve details of a specific event
**Authentication:** Not required

#### Response:

```json
{
  "success": true,
  "event": { ... }
}
```

---

### 4. Update Event

**Endpoint:** `PUT /api/event/update/:id`
**Description:** Update an existing event (Admin only)
**Authentication:** Required
**Content-Type:** `multipart/form-data`

#### Request Body (any of the below):

| Field       | Type   | Description      |
| ----------- | ------ | ---------------- |
| title       | String | Updated title    |
| description | String | Updated details  |
| eventDate   | String | Updated date     |
| location    | String | Updated location |
| eventImage  | File   | New event image  |

#### Response:

```json
{
  "success": true,
  "message": "Event updated successfully",
  "event": { ... }
}
```

---

### 5. Delete Event

**Endpoint:** `DELETE /api/event/delete/:id`
**Description:** Delete a specific event (Admin only)
**Authentication:** Required

#### Response:

```json
{
  "success": true,
  "message": "Event deleted successfully",
  "deletedEvent": { ... }
}
```

---

## 📰 News Management API

### Base URL:  `/api/v1/news`


### 1. Create News

**Endpoint:** `POST /api/news/create`
**Description:** Create a news item (Admin only)
**Authentication:** Required
**Content-Type:** `multipart/form-data`

#### Request Body:

| Field     | Type   | Required | Description   |
| --------- | ------ | -------- | ------------- |
| headline  | String | Yes      | News headline |
| content   | String | Yes      | News content  |
| newsImage | File   | Yes      | News image    |

#### Response:

```json
{
  "success": true,
  "message": "News created successfully"
}
```

---

### 2. Get All News

**Endpoint:** `GET /api/news/all`
**Description:** Retrieve all news
**Authentication:** Not required

#### Response:

```json
{
  "success": true,
  "allNews": [ ... ]
}
```

---

### 3. Get Single News

**Endpoint:** `GET /api/news/:id`
**Description:** Retrieve a specific news item
**Authentication:** Not required

#### Response:

```json
{
  "success": true,
  "news": { ... }
}
```

---

### 4. Update News

**Endpoint:** `PUT /api/news/update/:id`
**Description:** Update a news item (Admin only)
**Authentication:** Required
**Content-Type:** `multipart/form-data`

#### Request Body (any of the below):

| Field     | Type   | Description          |
| --------- | ------ | -------------------- |
| headline  | String | Updated headline     |
| content   | String | Updated content      |
| newsImage | File   | New image (optional) |

#### Response:

```json
{
  "success": true,
  "message": "News updated successfully",
  "news": { ... }
}
```

---

### 5. Delete News

**Endpoint:** `DELETE /api/news/delete/:id`
**Description:** Delete a specific news item (Admin only)
**Authentication:** Required

#### Response:

```json
{
  "success": true,
  "message": "News deleted successfully",
  "deletedNews": { ... }
}
```

## 📁 Gallery API

### Base Route: `/api/gallery`

---

### 🔸 Upload Image

**Endpoint:** `POST /upload`
**Middleware:** `isAuthenticated`, `multer.single('image')`
**Description:** Upload an image with a caption to the gallery.

#### Request

* **Headers:** `Authorization: Bearer <token>`
* **Body (form-data):**

  * `image`: File (image)
  * `caption`: String

#### Response

```json
{
  "success": true,
  "message": "Image uploaded",
  "newImage": {
    "_id": "id",
    "imageUrl": "path/to/image",
    "caption": "Your caption",
    "updatedAt": "2025-05-13T12:00:00.000Z",
    "__v": 0
  }
}
```

---

### 🔸 Get Gallery Images

**Endpoint:** `GET /get`
**Description:** Retrieve all uploaded gallery images in descending order of upload time.

#### Response

```json
{
  "success": true,
  "images": [
    {
      "_id": "id",
      "imageUrl": "path/to/image",
      "caption": "A caption",
      "updatedAt": "2025-05-13T12:00:00.000Z",
      "__v": 0
    }
  ]
}
```

---

## 📢 Announcement API

### Base Route: `/api/announcement`

---

### 🔸 Create or Update Announcement

**Endpoint:** `POST /create`
**Middleware:** `isAuthenticated`
**Description:** Create a new or update an existing announcement using a unique key.

#### Request

* **Headers:** `Authorization: Bearer <token>`
* **Body (JSON):**

  * `key`: String (e.g., `"library"`)
  * `content`: String (announcement content)

#### Response

```json
{
  "message": "Announcement updated",
  "data": {
    "_id": "id",
    "key": "library",
    "content": "New books have arrived.",
    "updatedAt": "2025-05-13T12:00:00.000Z",
    "__v": 0
  }
}
```

---

### 🔸 Get Announcement by Key

**Endpoint:** `GET /get/:key`
**Description:** Fetch the content of an announcement by its unique key.

#### Example Request

`GET /get/library`

#### Response

```json
{
  "success": true,
  "announcement": {
    "_id": "id",
    "key": "library",
    "content": "New books have arrived.",
    "updatedAt": "2025-05-13T12:00:00.000Z",
    "__v": 0
  }
}
```


