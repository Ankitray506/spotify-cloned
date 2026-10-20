const jwt = require("jsonwebtoken");

function extractToken(req) {
    if (req.cookies && req.cookies.token) {
        return req.cookies.token;
    }
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        return req.headers.authorization.split(" ")[1];
    }
    return null;
}

async function authArtist(req, res, next) {
    const token = extractToken(req);

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.role !== "artist" && decoded.role !== "admin" && decoded.email !== "ankitrayh6475@gmail.com") {
            return res.status(403).json({ message: "Only artists have access to this action" });
        }

        req.user = decoded;
        next();
    }
    catch (err) {
        console.error("AuthArtist error:", err.message);
        return res.status(401).json({ message: "Unauthorized or invalid token" });
    }
}

async function authUser(req, res, next) {
    const token = extractToken(req);

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Listeners, artists, and admins can browse music and albums
        if (decoded.role !== "user" && decoded.role !== "artist" && decoded.role !== "admin") {
            return res.status(403).json({ message: "You don't have access" });
        }

        req.user = decoded;
        next();
    } catch (err) {
        console.error("AuthUser error:", err.message);
        return res.status(401).json({ message: "Unauthorized or invalid token" });
    }
}

// Strict Admin middleware: Only user with role === 'admin' OR email === 'ankitrayh6475@gmail.com'
async function authAdmin(req, res, next) {
    const token = extractToken(req);

    if (!token) {
        return res.status(401).json({ message: "Admin authorization required: No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const isAdmin = decoded.role === "admin" || decoded.email === "ankitrayh6475@gmail.com";
        if (!isAdmin) {
            return res.status(403).json({ message: "Access Denied: Restricted to Administrator only" });
        }

        req.user = decoded;
        next();
    } catch (err) {
        console.error("AuthAdmin error:", err.message);
        return res.status(401).json({ message: "Invalid or expired admin session token" });
    }
}

module.exports = { authArtist, authUser, authAdmin, extractToken };
