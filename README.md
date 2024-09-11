# RESTful API Course

This project is a RESTful API that demonstrates all CRUD (Create, Read, Update, Delete) functionalities. The API allows users to manage a list of courses through various endpoints.

## Base URL

```
/api/courses/list
```

## Endpoints

### Get All Courses

- **URL:** `/api/courses/list`
- **Method:** `GET`
- **Description:** Retrieves a list of all courses.
- **Response Example:**
  ```json
  [
    {
      "id": 1,
      "title": "Groovy & Grails",
       "instructor":"John Smith",
      "description": "Groovy course description.",
      "credit": 4,
      "price": 1546,
      "hasPaid": false,
      "createdAt": "2024-06-01T23:31:35.096Z",
      "updatedAt": "2024-06-01T23:31:35.096Z",
    },
    {
      "id": 2,
     "title": "Introduction to Java", 
     "instructor":"John Doe",
      "description": "Introduction to Java course description.",
      "credit": 4,
      "price": 1546,
      "hasPaid": false,
      "createdAt": "2024-06-01T23:31:35.096Z",
      "updatedAt": "2024-06-01T23:31:35.096Z"
    }
  ]
  ```

### Get Course by ID

- **URL:** `/api/courses/list/:id`
- **Method:** `GET`
- **Description:** Retrieves a single course by its ID.
- **Response Example:**
  ```json
  {
    "id": 1,
    "title": "Groovy & Grails",
    "instructor":"John Doe",
    "description": "Groovy course description.",
    "credit": 4,
    "price": 1546,
    "hasPaid": false,
    "createdAt": "2024-06-01T23:31:35.096Z",
    "updatedAt": "2024-06-01T23:31:35.096Z",
  }
  ```

### Create a New Course

- **URL:** `/api/courses/create`
- **Method:** `POST`
- **Description:** Creates a new course.
- **Request Body Example:**
  ```json
  {
      "title": "Introduction to Java", 
     "instructor":"John Doe",
      "description": "Introduction to Java course description.",
      "credit": 4,
      "price": 1546,
      "hasPaid": false,
  }
  ```
- **Response Example:**
  ```json
  {
    "message": "Course created successfully",
    "course": {
      "_id": "665baf575dcd6c2ffe3ca85f",
       "title": "Introduction to Java", 
     "instructor":"John Doe",
      "description": "Introduction to Java course description.",
      "credit": 4,
      "price": 1546,
      "hasPaid": false,
        "createdAt": "2024-06-01T23:31:35.096Z",
        "updatedAt": "2024-06-01T23:31:35.096Z",
        "__v": 0
    }
  }
  ```

### Update a Course

- **URL:** `/api/courses/list/update/:id`
- **Method:** `PUT`
- **Description:** Updates an existing course by its ID.
- **Request Body Example:**
  ```json
  {
       "title": "Groovy & Grails",
        "description": "Groovy course description",
        "credit": 4,
        "price": 2506,
  }
  ```
- **Response Example:**
  ```json
  {
    "message": "Course updated successfully",
    "course": {
      "id": 1,
      "title": "Introduction to Programming",
      "description": "Updated course description.",
      "credit": 4,
        "price": 2506,
      "instructor": "John Doe"
    }
  }
  ```

### Delete a Course

- **URL:** `/api/courses/delete/:id`
- **Method:** `DELETE`
- **Description:** Deletes a course by its ID.
- **Response Example:**
  ```json
  {
    "message": "Course deleted successfully"
  }
  ```

## Running the API

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/restful-api-course.git
   cd restful-api-course
   ```

2. **Install dependencies:**
   ```sh
        npm install
   ```

3. **Run the application:**
   ```sh
        npm run dev
   ```

4. **Access the API:**
   Open your browser or use a tool like Postman to navigate to `/api/courses/list`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact [osman.techy@gmail.com](mailto:osman.techy@gmail.com).

---

 
