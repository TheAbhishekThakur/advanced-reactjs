import { getData } from "../api"; // Assuming getData is defined in api.js
import Await, { usePromise } from "../hooks/useAwait";

const CustomLoader = () => <div>Custom Loading...</div>;
const CustomError = () => <div>Custom Error...</div>;

const Three = () => {
  const processing = async () => {
    return getData({
      type: 3,
    });
  };
  const promise = usePromise(processing());

  return (
    <Await promise={promise} loader={CustomLoader} error={CustomError}>
      Three
    </Await>
  );
};

export default Three;
