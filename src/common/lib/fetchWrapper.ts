export interface FetchWrapperProps {
  input: string | URL | Request;
  init?: RequestInit | undefined;
}

export const fetchWrapper = async <T = unknown>(
  input: string | URL | Request,
  init?: RequestInit | undefined
) => {
  const data = await fetch(input, {
    ...init,
    credentials: "include",
  });
  const response = await data?.json();

  return response as T;
};
