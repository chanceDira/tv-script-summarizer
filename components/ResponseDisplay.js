import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ResponseDisplay = ({ data, error, loading }) => {
  let content;

  if (loading) {
    content = "Loading...";
  } else if (error) {
    content = `Error: ${error.message}`;
  } else if (data) {
    content = data.result;
  } else {
    content = "TV script summary will be displayed here";
  }

  return (
    <div className="response-display">
   
      <div className="response-content">
      <ReactMarkdown>
        { content }
      </ReactMarkdown>
      </div>
    </div>
  );
};

export default ResponseDisplay;
