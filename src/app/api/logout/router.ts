import { cookies } from "next/headers";

export default async function GET(req, res) {
  try {
    cookies().delete("nhostRefreshToken");
    cookies().delete("nhostRefreshTokenExpiresAt");
    cookies().delete("nhostRefreshTokenId");

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    alert("Could not Logout");
    res.status(400).json({ message: "Error" });
  }
}
