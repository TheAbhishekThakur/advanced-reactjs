import { useEffect, useState } from "react";

export const usePromise = (initialPromise) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    initialPromise
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    loading,
    error,
    data,
  };
};

export const Await = ({
  promise,
  children,
  loader: CustomLoader,
  error: CustomError,
}) => {
  if (!promise) {
    return <div>No promise provided</div>;
  }

  const { loading, error, data } = usePromise(promise);

  if (loading) return <CustomLoader />;
  if (error) return <CustomError />;
  if (!data) return <div>No data found</div>;

  return children;
};
