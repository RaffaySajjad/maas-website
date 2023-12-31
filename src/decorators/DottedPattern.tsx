const DottedPattern = ({ fill = "rgb(229 231 235)" }) => {
  return (
    <svg width="404" height="392" fill="none" viewBox="0 0 404 392">
      <defs>
        <pattern
          id="837c3e70-6c3a-44e6-8854-cc48c737b659"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse">
          <rect
            x="0"
            y="0"
            width="4"
            height="4"
            className="text-gray-200"
            fill={fill}></rect>
        </pattern>
      </defs>
      <rect
        width="404"
        height="392"
        fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect>
    </svg>
  );
};

export default DottedPattern;
