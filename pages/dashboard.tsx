import { useAuth } from "@/contexts/AuthContext";
import { setupApiClient } from "@/services/api";
import { api } from "@/services/apiClient";
import { withSSRAuth } from "@/utils/withSSRAuth";

export default function Dashboard() {
  const { user } = useAuth();

  return <h1>Dashboard: {user?.email}</h1>;
}

export const getServerSideProps = withSSRAuth(async (context) => {
  const apiClient = setupApiClient(context);

  const response = await apiClient.get("/me");

  console.log(response.data);

  return {
    props: {},
  };
});
