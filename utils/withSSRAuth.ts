import { AuthTokenError } from "@/services/errors/AuthTokenError";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { destroyCookie, parseCookies } from "nookies";

export function withSSRAuth<P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>
): GetServerSideProps {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(context);

    if (!cookies["nextauth.token"]) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    try {
      return await fn(context);
    } catch (err) {
      if (err instanceof AuthTokenError) {
        destroyCookie(context, "nextauth.token");
        destroyCookie(context, "nextauth.refreshToken");

        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      } else {
        return {
          notFound: true,
        };
      }
    }
  };
}
