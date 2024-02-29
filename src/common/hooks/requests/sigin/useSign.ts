import { fetchWrapper } from "@/common/lib/fetchWrapper";
import { useCallback } from "react";
import { SignDTO } from "@/common/dtos/sign/sign.dto";

export function useSignIn() {
  const signIn = useCallback(async (props: SignDTO) => {
    await fetchWrapper("http://localhost:3333/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },

      body: JSON?.stringify(props),
      next: {
        revalidate: 60 * 10, // 10 minutes
      },
    });

    return signIn;
  }, []);

  return { signIn };
}
