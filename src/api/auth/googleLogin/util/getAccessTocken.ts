import axiosInstance from '../../../axiosInstance';

export const getAccessToken = async (code: string) => {
  const response = await axiosInstance.get(`/api/v1/auth/oauth2/google/callback?code=${code}`);
  return response.data;
};
