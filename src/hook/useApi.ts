import { useLoader } from '@/context/LoaderContext';

export const useApi = () => {
  const { showLoader, hideLoader } = useLoader();

  const callApi = async <T>(
    apiFunction: () => Promise<T>,
    options: {
      showLoading?: boolean;
    } = { showLoading: true }
  ): Promise<T> => {
    try {
      if (options.showLoading) {
        showLoader();
      }
      const result = await apiFunction();
      return result;
    } finally {
      if (options.showLoading) {
        hideLoader();
      }
    }
  };

  return { callApi };
}; 