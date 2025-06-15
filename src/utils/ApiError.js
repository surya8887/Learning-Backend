import { STATUS_CODES } from "http";

class ApiError extends Error {
  /**
   * @param {number} statusCode - HTTP status code (e.g., 404, 500)
   * @param {string} message - Error message to return in the response
   * @param {Array} errors - Optional array of detailed error information
   * @param {string} stack - Optional stack trace string for debugging
   */
  constructor(statusCode, message = STATUS_CODES[statusCode] || "Something went wrong", errors = [], stack = "") {
    super(message); // Call parent Error class constructor with message

    this.name = this.constructor.name; // Set error name as 'ApiError'
    this.statusCode = statusCode; // HTTP status code
    this.message = message; // Error message (overrides default Error.message)
    this.errors = errors; // Additional error details (e.g., validation errors)
    this.data = null; // Optional payload, null by default
    this.success = false; // Always false for errors

    // If stack trace is provided, use it; otherwise generate automatically
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  /**
   * Converts the error to a JSON-like object (useful for sending error in response)
   */
  toJSON() {
    return {
      statusCode: this.statusCode,
      message: this.message,
      errors: this.errors,
      data: this.data,
      success: this.success,
    };
  }
}

export default ApiError;
