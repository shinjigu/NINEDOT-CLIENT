import axiosInstance from '../../../axiosInstance';

const getAccessToken = async (code: string) => {
  const response = await axiosInstance.get(`/api/v1/auth/oauth2/google/callback?code=${code}`);
  return response.data;
};

export default getAccessToken;
