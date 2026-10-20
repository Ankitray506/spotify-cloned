const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env'), override: true });

console.log("JWT SECRET LOADED:", !!process.env.JWT_SECRET);

const app = require('./src/app');
const connectDB = require('./src/db/db');

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
