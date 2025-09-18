import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization; // frontend sends "Bearer <token>"

    if (!authHeader) {
      return res.json({ success: false, message: "Not Authorized. Login Again" });
    }

    // Extract token (remove "Bearer ")
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.json({ success: false, message: "Not Authorized. Login Again" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("Decoded token:", decoded);
    console.log("ENV ADMIN_EMAIL:", process.env.ADMIN_EMAIL);

    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.json({ success: false, message: "Not Authorized. Login Again" });
    }

    req.user = decoded;
    next();
  } catch (error) {
    console.log("Auth Error:", error.message);
    res.json({ success: false, message: "Invalid or Expired Token" });
  }
};

export default adminAuth;
