import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coded Dashboard",
  description: "This is Next.js template for an admin dashboard template",
};

export default function SignUp() {
  return <SignUpForm />;
}
