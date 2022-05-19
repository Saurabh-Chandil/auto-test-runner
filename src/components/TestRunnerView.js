import { getStatusColor } from "../utils/testRunnerUtils";

export default function TestRunnerView({ tests }) {
    const getStyles = ({ status }) => ({
      marginLeft: "0.8rem",
      backgroundColor: getStatusColor(status),
      color: "white",
      padding: "5px"
    });
  
    return (
      <>
        {tests.map((item) => {
          return (
            <div key={item.description}>
              <h4>
                {item.description}
                <span style={getStyles(item)}>{item.status}</span>
              </h4>
            </div>
          );
        })}
      </>
    );
  }
  