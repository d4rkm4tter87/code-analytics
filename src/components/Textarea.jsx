import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({ text, setText }) {
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    console.log("Changed: ", e.target.value);
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setText(newText);
      setWarningText("No scripts allowed");
      return;
    } else if (/@/.test(newText)) {
      newText = newText.replace("@", "");
      setText(newText);
      setWarningText("No @ allowed");
      return;
    } else if (newText.includes("<")) {
      newText = newText.replace("<", "");
      setText(newText);
      setWarningText("No tags allowed");
      return;
    } else {
      setWarningText("");
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        placeholder="Enter some text..."
        spellCheck="false"
        onChange={handleChange}
        className="textarea"
      />
      <Warning text={warningText} />
    </div>
  );
}
