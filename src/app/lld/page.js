import ProgressBar from "./progress-bar";
import AutoComplete from "./autocomplete";
import Pagination from "./pagination";
import TabForm from "./tab-from";
import FileExplorer from "./file-explorer";
import OtpInput from "./otp-input";

const LLD = () => {
  return (
    <>
      <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
        Low Level Design
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {/* <ProgressBar />*/}
          {/* <AutoComplete />  */}
          {/* <Pagination /> */}
          {/* <TabForm /> */}
          {/* <FileExplorer /> */}
          <OtpInput />
        </div>
      </div>
    </>
  );
};
export default LLD;
