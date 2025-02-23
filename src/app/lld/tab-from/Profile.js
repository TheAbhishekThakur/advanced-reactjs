import "./style.css";
const Profile = ({ state, setState }) => {
  return (
    <div>
      <div>
        <label>Name</label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          value={state.profile.name}
          onChange={(e) => {
            setState({
              ...state,
              profile: { ...state.profile, name: e.target.value },
            });
          }}
        />
      </div>
      <div>
        <label>Age</label>

        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="number"
          value={state.profile.age}
          onChange={(e) => {
            setState({
              ...state,
              profile: { ...state.profile, age: e.target.value },
            });
          }}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="email"
          value={state.profile.email}
          onChange={(e) => {
            setState({
              ...state,
              profile: { ...state.profile, email: e.target.value },
            });
          }}
        />
      </div>
    </div>
  );
};

export default Profile;
