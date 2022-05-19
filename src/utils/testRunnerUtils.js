export const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "not started":
        return "lightblue";
      case "running...":
        return "orange";
      case "passed":
        return "green";
      case "failed":
        return "red";
      default:
        return "red";
    }
  };
  
  export const initialTestsState = () => ({
    running: 0,
    failed: 0,
    passed: 0,
    done: false
  });
  