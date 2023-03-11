import { useAuth } from "@/contexts/AuthContext";
import { api } from "@/services/api";
import { useEffect } from "react";

export default function Dashboard() {
  const { user } = useAuth();

  return <h1>Dashboard: {user?.email}</h1>;
}
