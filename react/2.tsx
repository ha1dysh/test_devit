import { useState } from "react";

type CensoredTextProps = {
	children: string;
	badWords: string[];
};

function CensoredText({ children, badWords }: CensoredTextProps) {
	const [show, setShow] = useState(false);

	// prettier-ignore
	const censoredText = children
    .split(" ")
    .map((word) => {
      return badWords.includes(word) 
        ? (<span key={word} onClick={() => setShow(true)}>
            {show ? word : "*".repeat(word.length)}{" "}
          </span>)
        : word + " ";
    });

	return <p>{censoredText}</p>;
}

export default CensoredText;
