import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components"

const Bubble = styled.div`
  ${tw`relative bg-blue-500 rounded-lg text-white print:text-gray-800 tracking-wide print:bg-white print:p-0 p-3 w-full mx-2 print:m-0`}
  ${tw`lg:p-5`}
  ${tw`leading-none`}
  ${tw`text-lg`}

  ${tw`flex flex-col items-start`}
  
  p {
    ${tw`flex flex-row text-3xl items-center m-0 p-0 leading-none`};
    ${tw`md:text-lg`};
    ${tw`lg:text-3xl`};
    ${tw`print:text-base`}
    &:first-of-type {
      ${tw`text-2xl font-medium text-white`}
      color: white !important;
      ${tw`md:text-base`};
      ${tw`lg:text-2xl`};
      ${tw`print:text-sm`}
    }
  }

  

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 75%;
    width: 0;
    height: 0;
    border: 0.406em solid transparent;
    border-right-color: #4299e1;
    border-left: 0;
    border-top: 0;
    margin-top: -0.203em;
    margin-left: -0.406em;
    @media print {
      display: none;
    }
  }
`

export default Bubble
