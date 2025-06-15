class ApiResponse {
  /**
   * @param {number} statusCode - HTTP status code (e.g., 200, 201)
   * @param {*} data - Actual response data (object, array, etc.)
   * @param {string} message - Human-readable message (default: "success")
   */
  constructor(statusCode, data, message = "success") {
    this.statusCode = statusCode;  // HTTP status code
    this.data = data;              // Actual response payload
    this.message = message;        // Message to describe the result
    this.success = statusCode < 400; // Set success based on status code
  }

  /**
   * Converts the response to a JSON-compatible object
   */
  toJSON() {
    return {
      statusCode: this.statusCode,
      data: this.data,
      message: this.message,
      success: this.success
    };
  }
}

export default ApiResponse;
