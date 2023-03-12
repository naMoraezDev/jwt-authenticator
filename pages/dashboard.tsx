import { useAuth } from "@/contexts/AuthContext";
import { useCan } from "@/hooks/useCan";
import { setupApiClient } from "@/services/api";
import { withSSRAuth } from "@/utils/withSSRAuth";

export default function Dashboard() {
  const { user, isAuthenticated } = useAuth();

  const userCanSeeMetrics = useCan({
    permissions: ["metrics.list"],
  });

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>
      {userCanSeeMetrics && <div>Métricas</div>}
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (context) => {
  const apiClient = setupApiClient(context);

  const response = await apiClient.get("/me");

  console.log(response.data);

  return {
    props: {},
  };
});
