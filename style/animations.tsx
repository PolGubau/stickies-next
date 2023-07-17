// animation to slide up the .bgSection when the page loads using the keyframes from styled components
// https://styled-components.com/docs/api#keyframes

import { keyframes } from "styled-components";

export const slideUp = keyframes` 
  from {
    transform: translateY(100vh);
  }
  to {
    transform: translateY(0);
  }
`;
