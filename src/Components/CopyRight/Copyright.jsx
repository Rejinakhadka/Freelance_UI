import React from "react";

const CopyrightNotice = () => {
  const paragraphStyle = {
    fontFamily: "Manrope, sans-serif",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "26px",
    letterSpacing: "-2%",
    textAlign: "center",
    color: "#181433"
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <p style={paragraphStyle}>&copy; AR Shakir 2022. All Rights Reserved.</p>
    </div>
  );
};

export default CopyrightNotice;
