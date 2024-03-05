/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "radial-gradient(circle, rgb(253, 227, 211), rgb(248, 219, 202), rgb(228, 161, 142))",
        "btn-gradient":
          "radial-gradient(circle, rgb(255, 255, 255), rgb(243, 242, 242), rgb(226, 226, 226))",
        "btn-after-gradient":
          "linear-gradient(216deg, rgb(241, 209, 199),rgb(254, 201, 201), rgb(255, 159, 175))",
      },
      boxShadow: {
        "custom-shadow":
          "inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.2)",
        "btn-after-shadow":
          "-7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001",
      },
      colors: {
        customFontColor: "#418cb4",
        placeholderColor: "#c6c5c5",
        inputBorderFocus: "#ff9faf",
        bgPopupColor: "rgb(248, 219, 202, 0.9)",
        requirementListValid: "rgb(244, 118, 96)",
      },
    },
  },
  plugins: [],
};
