import One from "./components/One";
import Three from "./components/Three";
import Two from "./components/Two";

const ReduceCodeDuplication = () => {
  return (
    <div>
      <h1>Reduce Code Duplication</h1>
      <div>
        {/* Problem: We are repeating the same code in each component for fetching data, handling loading states, and error handling. */}
        <One />
        <Two />
        {/* Solution: We can create a custom hook to handle the data fetching logic, which can be reused across components. */}
        <Three />
      </div>
    </div>
  );
};

export default ReduceCodeDuplication;
