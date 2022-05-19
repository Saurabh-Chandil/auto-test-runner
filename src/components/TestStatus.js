
export default function TestStatus({ running, failed, passed }) {
  return (
    <>
      <div
        style={{
          backgroundColor: "orange",
          padding: "5px",
          color: "white",
          marginBottom: "5px",
          width: "250px",
          marginLeft: "40rem",
          marginTop: "5rem"
        }}
      >
        Tests that are still running {running}
      </div>
      <div
        style={{
          backgroundColor: "green",
          padding: "5px",
          color: "white",
          marginBottom: "5px",
          width: "250px",
          marginLeft: "40rem"
        }}
      >
        Tests that have passed so far {passed}
      </div>
      <div
        style={{
          backgroundColor: "red",
          padding: "5px",
          color: "white",
          marginBottom: "5px",
          width: "250px",
          marginLeft: "40rem"
        }}
      >
        Tests that have failed so far {failed}
      </div>
    </>
  );
}
