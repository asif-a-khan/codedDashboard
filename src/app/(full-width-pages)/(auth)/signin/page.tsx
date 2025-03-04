import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coded Dashboard",
  description: "This is Next.js template for an admin dashboard template",
};

export default function SignIn() {
  return <SignInForm />;
}
