import ProgressBar from "./progress-bar";
import AutoComplete from "./autocomplete";
import Pagination from "./pagination";
import TabForm from "./tab-form";
import FileExplorer from "./file-explorer";
import OtpInput from "./otp-input";
import NestedCheckboxes from "./nested-checkboxes";
import Accordion from "./accordion";
import Slider from "./slider";

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
          {/* <OtpInput /> */}
          {/* <NestedCheckboxes /> */}
          {/* <Accordion /> */}
          <Slider />
        </div>
      </div>
    </>
  );
};
export default LLD;
