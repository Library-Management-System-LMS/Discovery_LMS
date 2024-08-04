# Project Name: Library Management System

## Purpose: 
    The purpose of the library management website is to provide a platform for users to efficiently manage library resources, including books. It aims to streamline the process of borrowing, returning, and managing library items for both library staff and users(Patrons).

    - Automate library tasks and processes for staff.
    - Simplify resource management (books).
    - Enhance user experience for library patrons.
    - Streamline borrowing, returning, and renewing of library materials.

## Actors:
    - We have three main actors in our system:

        1. Librarian: Mainly responsible for adding and modifying books, book items, and users. The Librarian can also issue, reserve, and return book items.

        2. User: All users can search the catalog, as well as check-out, reserve, renew, and return a book.

        3. System: Mainly responsible for sending notifications for overdue books, canceled reservations, etc.
        
## Scope: 
    1. Manage library catalog: Add, edit, and delete resources.
    2. User accounts: user registration, login, and profile management.
    3. Circulation: Borrowing, returning, renewing of materials.
    4. Search functionality: Find resources by title, author, genre, etc.
    5. Overdue fines and notifications.
    6. Inventory management: Track resource availability and location.
    7. Reporting: Generate reports on usage, fines, etc. (for staff)

## Workflow:
    1. User logs in to the website using their credentials.
    2. User searches for a specific item using the search functionality.
    3. If the item is available, the user can proceed to borrow it.
    4. The user checks out the item, and the system updates the inventory accordingly.
    5. When the user is done with the item, they return it using the check-in functionality.
    6. The system marks the item as returned and updates the availability status.
    7. For items that are currently unavailable, users can place reservations.
    8. Library staff can manage reservations, check inventory, and perform administrative tasks through the backend interface.

