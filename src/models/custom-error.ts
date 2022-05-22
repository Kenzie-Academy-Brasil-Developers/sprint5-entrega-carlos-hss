export const CustomError = (message: string, statusCode = 400) => {
    return {
        message,
        statusCode
    }
}