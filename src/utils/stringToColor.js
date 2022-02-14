export const stringToColor = str => {
  let hash = 0;
  let i;

  for (i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  return color;
};

// generate a random hex color
// export const generateRandomColor = () => {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

// generate random dark color
// export const generateRandomDarkColor = () => {
//   let color = "#";
//   let letters = "0123456789ABCDEF";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   const darkColor = color
//     .replace(/^#/, "#")
//     .replace(/([a-f0-9])([a-f0-9])([a-f0-9])/, "$1$1$2$2$3$3");
//   return darkColor;
// };
