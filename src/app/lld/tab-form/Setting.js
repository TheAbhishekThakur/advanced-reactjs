const Setting = ({ state, setState, errors }) => {
  return (
    <>
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={state.setting === "dark"}
            onChange={(e) => {
              setState({ ...state, setting: e.target.name, e });
            }}
          />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="light"
            checked={state.setting === "light"}
            onChange={(e) => {
              setState({ ...state, setting: e.target.name });
            }}
          />
          Light
        </label>
      </div>
      {errors.setting && <span className="err-msg">{errors.setting}</span>}
    </>
  );
};

export default Setting;
