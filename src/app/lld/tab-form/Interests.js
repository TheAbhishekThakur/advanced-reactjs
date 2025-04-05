const Interests = ({ state, setState, errors }) => {
  const { interests } = state;

  const onChangeHandler = (e) => {
    setState((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };
  return (
    <>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={onChangeHandler}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={interests.includes("music")}
            onChange={onChangeHandler}
          />
          Music
        </label>
      </div>
      {errors.interests.length === 0 && (
        <span className="err-msg">{errors.interests}</span>
      )}
    </>
  );
};

export default Interests;
