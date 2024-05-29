# RESTful API Course

This project is a RESTful API that demonstrates all CRUD (Create, Read, Update, Delete) functionalities. The API allows users to manage a list of courses through various endpoints.

## Base URL

```
http://localhost:5000/api/courses
```

## Endpoints

### Get All Courses

- **URL:** `/`
- **Method:** `GET`
- **Description:** Retrieves a list of all courses.
- **Response Example:**
  ```json
  [
    {
      "id": 1,
      "title": "Introduction to Programming",
      "description": "Learn the basics of programming.",
      "instructor": "John Doe"
    },
    {
      "id": 2,
      "title": "Advanced Data Structures",
      "description": "Deep dive into data structures.",
      "instructor": "Jane Smith"
    }
  ]
  ```

### Get Course by ID

- **URL:** `/:id`
- **Method:** `GET`
- **Description:** Retrieves a single course by its ID.
- **Response Example:**
  ```json
  {
    "id": 1,
    "title": "Introduction to Programming",
    "description": "Learn the basics of programming.",
    "instructor": "John Doe"
  }
  ```

### Create a New Course

- **URL:** `/`
- **Method:** `POST`
- **Description:** Creates a new course.
- **Request Body Example:**
  ```json
  {
    "title": "Introduction to Programming",
    "description": "Learn the basics of programming.",
    "instructor": "John Doe"
  }
  ```
- **Response Example:**
  ```json
  {
    "message": "Course created successfully",
    "course": {
      "id": 3,
      "title": "Introduction to Programming",
      "description": "Learn the basics of programming.",
      "instructor": "John Doe"
    }
  }
  ```

### Update a Course

- **URL:** `/:id`
- **Method:** `PUT`
- **Description:** Updates an existing course by its ID.
- **Request Body Example:**
  ```json
  {
    "title": "Introduction to Programming",
    "description": "Updated course description.",
    "instructor": "John Doe"
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
      "instructor": "John Doe"
    }
  }
  ```

### Delete a Course

- **URL:** `/:id`
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
   pip install -r requirements.txt
   ```

3. **Run the application:**
   ```sh
   python app.py
   ```

4. **Access the API:**
   Open your browser or use a tool like Postman to navigate to `http://localhost:5000/api/courses`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact [osman.techy@gmail.com](mailto:osman.techy@gmail.com).

---

 