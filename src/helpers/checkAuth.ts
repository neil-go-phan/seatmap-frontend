import axiosClient from "src/helpers/axiosClient";

export async function checkAuth(): Promise<boolean> {
  const res: any = await axiosClient.get(`/auth/check-auth`).then((res) => res);
  if (res.data) {
    return true
  }
  return false;
}
