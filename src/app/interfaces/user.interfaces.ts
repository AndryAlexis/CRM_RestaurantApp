/**
 * Interface representing a user in the system
 * Used for user registration and profile management
 */
export interface IUser {
    /** User's first name */
    name: string;
    /** User's last name/family name */
    surname: string;
    /** User's contact phone number */
    phone: string;
    /** User's account password (should be hashed when stored) */
    password: string;
    /** User's email address (used as unique identifier) */
    email: string;
}

/**
 * Interface representing an API response for user-related operations
 * Used to handle responses from user registration, login, etc.
 */
export interface IUserResponse {
    /** Response status (e.g. 'success', 'error') */
    status: string;
    /** Title/header of the response message */
    title: string;
    /** Detailed response message providing more information */
    message: string;
}



