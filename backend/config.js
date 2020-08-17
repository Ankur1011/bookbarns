export default{
    MONGODB_URL:process.env.MONGODB_URL || 'mongodb+srv://ankur:ankur123@cluster0.diprf.mongodb.net/bookstore?retryWrites=true&w=majority',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb'
}