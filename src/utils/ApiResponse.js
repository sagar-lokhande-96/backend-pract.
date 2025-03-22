class ApiResponse{
    constructor(message, statusCode, data = "Success"){
        this.message = message
        this.data = data
        this.statusCode = statusCode
        this.success = statusCode < 400
    }
}
