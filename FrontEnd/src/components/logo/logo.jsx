import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  // OR using local (public folder)
  // -------------------------------------------------------
  // const logo = (
  //   <Box
  //     component="img"
  //     src="/logo/logo_single.svg" => your path
  //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
  //   />
  // );

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 150,
        height: 37.5,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="37.5"
        stroke="null"
        style={{ vectorEffect: 'non-scaling-stroke' }}
        viewBox="0 0 37.5 100"
      >
        <g stroke="null">
          <title stroke="null">Layer 1</title>
          <g xmlns="http://www.w3.org/2000/svg" transform="matrix(0.61 0 0 0.61 388.04 378.48)">
            <g>
              <g id="svg_28" />
              <g id="svg_27" transform="matrix(1 0 0 1 253.61 0)" />
              <g id="svg_26" transform="matrix(1 0 0 1 -86.15 2.2)">
                <path
                  fillRule=" nonzero"
                  fill=" rgb(29,12,255)"
                  strokeMiterlimit="2"
                  strokeLinejoin=" miter"
                  strokeDashoffset="0"
                  strokeDasharray=" none"
                  strokeWidth="0"
                  stroke=" rgb(29,12,255)"
                  strokeLinecap=" butt"
                  d="m-276.96463,-560.74568c-0.648,-0.072 -1.296,-0.072 -1.728,-0.072c-0.86399,0 -1.152,0.36 -1.152,1.44c0,2.016 0.14401,2.232 1.368,2.232c5.11201,-0.072 5.688,0.576 5.688,6.12c0,6.336 -0.072,8.136 -0.43199,8.712c-0.504,0.864 -2.016,1.296 -4.752,1.296c-9.64801,0 -16.05601,-7.344 -16.05601,-18.288c0,-6.264 1.872,-11.808 5.04,-14.976c2.448,-2.448 6.40801,-3.96 10.44,-3.96c3.024,0 6.55201,0.792 8.784,1.944c2.16001,1.152 3.168,2.736 3.74401,5.976c0.28799,1.584 0.43199,1.8 1.22399,1.8c0.72,0 1.65601,-0.144 2.376,-0.288c0.648,-0.216 0.86401,-0.432 0.86401,-1.152c0,-0.288 0,-0.648 -0.072,-1.08c-0.21601,-2.808 -0.28801,-4.176 -0.36001,-8.784c0,-2.664 0,-2.664 -0.072,-2.808c-0.072,-0.144 -0.36,-0.216 -0.792,-0.216c-0.35999,0 -0.648,0 -0.792,0.072c-0.86399,0.36 -0.86399,0.36 -1.224,0.36c-0.216,0 -0.432,0 -0.792,-0.072c-3.52799,-0.648 -8.136,-1.08 -11.304,-1.08c-17.78399,0 -30.672,10.512 -30.672,25.056c0,7.92 3.96001,15.048 10.44,18.576c4.536,2.52 10.08001,3.672 17.78401,3.672c4.82399,0 13.82399,-0.72 18.35999,-1.44c1.44,-0.216 1.512,-0.288 1.512,-0.864c0,-0.504 -0.072,-1.656 -0.144,-2.808c-0.072,-1.512 -0.14399,-2.88 -0.14399,-5.04c0,-6.984 0,-7.56 0.50399,-8.928c0.36,-1.152 1.296,-1.728 2.808,-1.944c1.29601,-0.144 1.368,-0.216 1.368,-2.52c0,-0.72 -0.21599,-1.008 -0.864,-1.008c-0.216,0 -1.07999,0 -1.872,0.072l-5.616,0c-4.824,0.072 -4.824,0.072 -6.048,0.072l-7.416,-0.072z"
                  transform="translate(-339.46 22.86)"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
              <g id="svg_25" transform="matrix(1 0 0 1 -37 9.9)">
                <path
                  fillRule=" nonzero"
                  fill=" rgb(41,11,247)"
                  strokeMiterlimit="2"
                  strokeLinejoin=" miter"
                  strokeDashoffset="0"
                  strokeDasharray=" none"
                  strokeWidth="0"
                  stroke=" rgb(41,11,247)"
                  strokeLinecap=" butt"
                  d="m-231.66538,-568.16168c-12.16799,0 -19.87199,6.336 -19.87199,16.272c0,9.72 6.76799,15.624 17.856,15.624c12.88799,0 20.73599,-6.192 20.73599,-16.272c0,-6.264 -3.024,-11.376 -7.992,-13.608c-2.88,-1.296 -6.84,-2.016 -10.728,-2.016zm-1.512,4.608c4.39201,0 7.05601,5.184 7.05601,13.896c0,5.616 -1.72801,8.496 -5.11201,8.496c-4.248,0 -7.128,-5.4 -7.128,-13.32c0,-5.688 1.94401,-9.072 5.184,-9.072z"
                  transform="translate(-388.61 15.16)"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
              <g id="svg_24" transform="matrix(1 0 0 1 4.5 1.87)">
                <path
                  fillRule=" nonzero"
                  fill=" rgb(54,9,239)"
                  strokeMiterlimit="2"
                  strokeLinejoin=" miter"
                  strokeDashoffset="0"
                  strokeDasharray=" none"
                  strokeWidth="0"
                  stroke=" rgb(54,9,239)"
                  strokeLinecap=" butt"
                  d="m-195.32,-547.20968c17.136,-13.68 20.592,-17.856 20.592,-24.84c0,-7.128 -5.4,-11.52 -14.112,-11.52c-5.4,0 -10.584,1.944 -13.968,5.184c-2.304,2.232 -4.032,5.328 -4.032,7.416c0,1.368 1.8,2.592 3.888,2.592c0.864,0 1.224,-0.504 1.656,-2.376c0.288,-1.224 0.576,-1.872 0.936,-2.232c1.296,-1.368 4.392,-2.448 7.056,-2.448c4.032,0 6.048,2.16 6.048,6.48c0,4.464 -1.584,7.416 -7.776,14.328c-5.688,6.48 -10.8,11.88 -12.456,13.32c-0.792,0.792 -0.936,1.008 -0.936,2.304c0,2.016 0,2.016 0.72,2.016l9.864,-0.072c2.952,-0.072 5.184,-0.072 6.84,-0.072c2.664,0 5.76,0.072 9,0.144c1.944,0.072 3.672,0.072 4.392,0.072c0.72,0 1.152,-0.072 1.296,-0.216c0.216,-0.216 0.216,-0.216 0.72,-3.096c0.36,-2.52 1.224,-6.84 1.728,-8.568c0.72,-2.664 0.792,-3.024 0.792,-3.528c0,-0.864 -1.08,-1.368 -2.736,-1.368c-0.576,0 -0.864,0.288 -1.152,1.224c-1.44,4.464 -2.016,4.968 -5.976,5.04l-3.816,0.144c-1.944,0.072 -3.528,0.144 -4.968,0.144l-3.6,-0.072z"
                  transform="translate(-430.1 23.18)"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
              <g id="svg_23" transform="matrix(1 0 0 1 49.86 2.2)">
                <path
                  fillRule=" nonzero"
                  fill=" rgb(66,8,231)"
                  strokeMiterlimit="2"
                  strokeLinejoin=" miter"
                  strokeDashoffset="0"
                  strokeDasharray=" none"
                  strokeWidth="0"
                  stroke=" rgb(66,8,231)"
                  strokeLinecap=" butt"
                  d="m-138.54462,-583.56968c-17.56801,0 -29.59201,10.008 -29.59201,24.624c0,6.408 2.59201,12.456 7.20001,16.488c4.67999,4.176 11.01599,6.192 19.65599,6.192c5.184,0 11.88001,-0.576 14.832,-1.296c0.792,-0.216 0.936,-0.432 1.22401,-1.944c0.504,-2.808 1.43999,-6.552 2.30399,-9.432c0.072,-0.288 0.144,-0.504 0.144,-0.72c0,-0.432 -0.288,-0.648 -1.296,-0.936c-1.8,-0.504 -1.8,-0.504 -2.088,-0.504c-0.35999,0 -0.57599,0.144 -0.72,0.648c-1.29599,3.096 -1.944,4.248 -3.24,5.688c-2.30399,2.448 -5.39999,3.744 -9.072,3.744c-9,0 -14.904,-7.632 -14.904,-19.224c0,-6.336 1.584,-11.808 4.248,-14.544c1.944,-2.088 5.32801,-3.168 9.504,-3.168c3.672,0 7.272,0.792 9.57601,2.088c1.58399,0.936 2.23199,2.376 2.52,6.264c0.216,2.376 0.216,2.376 2.08799,2.376c2.232,0 2.232,0 2.232,-1.944c0.21601,-4.968 0.36001,-6.84 1.224,-11.808c0.072,-0.36 0.072,-0.648 0.072,-0.936c0,-0.576 -0.36,-0.864 -1.224,-0.864c-0.288,0 -0.576,0 -0.86399,0.072c-0.72001,0.216 -0.72001,0.216 -0.93601,0.216c-0.36,0 -0.86399,-0.072 -1.368,-0.144c-2.88,-0.432 -8.928,-0.936 -11.51999,-0.936z"
                  transform="translate(-475.47 22.86)"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
              <g id="svg_22" transform="matrix(1 0 0 1 87.41 -0.32)">
                <path
                  fillRule=" nonzero"
                  fill=" rgb(78,7,223)"
                  strokeMiterlimit="2"
                  strokeLinejoin=" miter"
                  strokeDashoffset="0"
                  strokeDasharray=" none"
                  strokeWidth="0"
                  stroke=" rgb(78,7,223)"
                  strokeLinecap=" butt"
                  d="m-96.60125,-536.91368c1.152,0 1.296,-0.216 1.296,-2.016c0,-1.728 -0.072,-1.728 -3.096,-1.728c-2.592,0.072 -3.456,-0.576 -3.744,-2.592c-0.216,-1.584 -0.288,-6.912 -0.288,-18.864c0,-13.392 0.216,-19.584 0.936,-23.904c0.072,-0.432 0.072,-0.864 0.072,-1.224c0,-0.504 -0.288,-0.72 -0.864,-0.72c-1.512,0 -14.256,2.664 -16.704,3.528c-0.648,0.216 -0.72,0.432 -0.72,2.232c0,0.792 0.216,1.08 1.008,1.152c1.152,0.072 1.8,0.144 2.016,0.216c1.296,0.216 1.944,0.936 2.16,2.376c0.144,1.368 0.288,5.832 0.288,12.384c0,7.128 -0.216,17.856 -0.36,21.24c-0.216,3.168 -1.08,3.96 -4.752,4.392c-0.864,0.144 -1.008,0.36 -1.008,1.584c0,1.872 0.072,1.944 1.296,1.944l10.44,-0.216l12.024,0.216z"
                  transform="translate(-513.02 25.38)"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
              <g id="svg_21" transform="matrix(1 0 0 1 121.06 9.9)">
                <path
                  fillRule=" nonzero"
                  fill=" rgb(91,5,216)"
                  strokeMiterlimit="2"
                  strokeLinejoin=" miter"
                  strokeDashoffset="0"
                  strokeDasharray=" none"
                  strokeWidth="0"
                  stroke=" rgb(91,5,216)"
                  strokeLinecap=" butt"
                  d="m-73.60287,-568.16168c-12.168,0 -19.87201,6.336 -19.87201,16.272c0,9.72 6.768,15.624 17.856,15.624c12.888,0 20.736,-6.192 20.736,-16.272c0,-6.264 -3.02399,-11.376 -7.992,-13.608c-2.88,-1.296 -6.84,-2.016 -10.72799,-2.016zm-1.51201,4.608c4.39201,0 7.05601,5.184 7.05601,13.896c0,5.616 -1.72801,8.496 -5.112,8.496c-4.24801,0 -7.12801,-5.4 -7.12801,-13.32c0,-5.688 1.944,-9.072 5.184,-9.072z"
                  transform="translate(-546.67 15.16)"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
              <g id="svg_20" transform="matrix(1 0 0 1 156.17 6.01)">
                <path
                  fillRule=" nonzero"
                  fill=" rgb(103,4,208)"
                  strokeMiterlimit="2"
                  strokeLinejoin=" miter"
                  strokeDashoffset="0"
                  strokeDasharray=" none"
                  strokeWidth="0"
                  stroke=" rgb(103,4,208)"
                  strokeLinecap=" butt"
                  d="m-47.82463,-561.82568c0,1.152 0,1.152 -0.144,5.688c-0.072,2.376 -0.288,10.152 -0.288,10.944c0,5.976 2.808,8.928 8.64,8.928c3.384,0 8.856,-1.368 12.96,-3.24c0.86401,-0.432 1.00801,-0.648 1.00801,-1.656l0,-3.456l-0.504,-0.216c-2.52,0.936 -4.53601,1.368 -6.48001,1.368c-3.096,0 -4.104,-1.656 -4.104,-6.984c0,-1.008 0.072,-3.312 0.216,-11.232l1.29601,0l4.96799,0c3.672,0.144 4.03201,0.144 4.32001,0c0.36,-0.144 0.36,-0.216 0.36,-2.448c0,-2.88 0,-3.024 -0.144,-3.168c-0.072,-0.072 -0.36,-0.144 -0.86401,-0.144l-0.72,0c-1.72799,0.072 -4.10399,0.072 -5.4,0.072c-2.08799,0 -2.30399,0 -3.744,-0.072c0.072,-2.232 0.288,-5.04 0.504,-7.056c0.072,-0.216 0.072,-0.432 0.072,-0.576c0,-0.792 -0.216,-0.864 -2.37599,-0.864c-0.86401,0 -1.22401,0.144 -2.088,1.08c-2.08801,2.232 -9,7.92 -11.16001,9.144c-1.00799,0.576 -1.07999,0.72 -1.07999,2.448c0,1.368 0.144,1.584 0.79199,1.584c0.288,0 0.648,0 1.008,-0.072l2.952,-0.072z"
                  transform="translate(-581.77 19.04)"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
              <g id="svg_19" transform="matrix(1 0 0 1 194.59 -0.32)">
                <path
                  fillRule=" nonzero"
                  fill=" rgb(115,3,200)"
                  strokeMiterlimit="2"
                  strokeLinejoin=" miter"
                  strokeDashoffset="0"
                  strokeDasharray=" none"
                  strokeWidth="0"
                  stroke=" rgb(115,3,200)"
                  strokeLinecap=" butt"
                  d="m-20.59737,-584.43368l-0.93601,0.288c-0.792,0.144 -0.936,0.36 -0.936,1.08c0,2.232 0.144,2.376 1.87201,2.304c2.88,-0.072 3.168,0.936 3.168,9.936c0,13.32 -0.216,24.84 -0.43201,26.784c-0.288,2.16 -1.368,3.24 -3.384,3.456c-1.36799,0.144 -1.43999,0.216 -1.43999,2.088c0,1.44 0.14399,1.584 1.36799,1.584l1.15201,0c1.51199,-0.072 7.05599,-0.216 8.27999,-0.216l8.352,0.144c0.432,0.072 0.93601,0.072 1.08001,0.072c1.15199,0 1.29599,-0.216 1.29599,-2.16c0,-1.296 -0.144,-1.44 -2.016,-1.584c-1.94399,-0.144 -2.44799,-0.864 -2.51999,-3.816c-0.072,-1.08 -0.072,-1.728 -0.072,-15.624c2.592,-0.72 3.24001,-0.792 4.68,-0.792c4.248,0 5.61601,1.872 5.61601,7.848c0,10.872 -0.216,11.736 -2.66401,12.384c-1.58399,0.432 -1.58399,0.432 -1.58399,2.304c0,1.152 0.288,1.44 1.152,1.44c0.21599,0 0.64799,0 1.22399,-0.072l8.712,-0.144l7.41601,0.144c0.648,0.072 1.22399,0.072 1.51199,0.072c0.936,0 1.08001,-0.288 1.08001,-2.16c0,-1.08 -0.21601,-1.296 -1.22401,-1.368c-3.52799,-0.144 -3.67199,-0.36 -3.67199,-5.616c0,-0.792 0.072,-3.168 0.144,-6.264c0.072,-1.368 0.072,-2.52 0.072,-3.384c0,-3.672 -0.28799,-5.976 -0.93599,-7.488c-1.29601,-2.952 -4.75201,-4.968 -8.568,-4.968c-3.312,0 -6.696,1.152 -12.96001,4.392c-0.072,-11.232 0.21601,-18.216 0.79201,-22.248c0.072,-0.36 0.144,-0.792 0.144,-1.008c0,-0.648 -0.288,-0.936 -1.00801,-0.936c-1.368,0 -2.30399,0.216 -6.912,1.44c-1.43999,0.432 -3.024,0.864 -4.60799,1.224l-3.24002,0.864z"
                  transform="translate(-620.2 25.38)"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
              <g id="svg_18" transform="matrix(1 0 0 1 236.56 9.9)">
                <path
                  fillRule=" nonzero"
                  fill=" rgb(128,1,192)"
                  strokeMiterlimit="2"
                  strokeLinejoin=" miter"
                  strokeDashoffset="0"
                  strokeDasharray=" none"
                  strokeWidth="0"
                  stroke=" rgb(128,1,192)"
                  strokeLinecap=" butt"
                  d="m55.25012,-547.13768c-3.528,2.52 -7.056,3.744 -10.58399,3.744c-4.82401,0 -7.34401,-2.52 -7.77601,-7.848l1.44001,-0.144c13.39199,-1.008 17.13599,-1.296 17.856,-1.296l0.936,-0.072c0.64799,-0.072 0.86399,-0.216 0.86399,-0.864c0,-1.8 -0.072,-2.16 -0.36,-2.448c-0.432,-0.36 -0.432,-0.36 -0.50399,-1.224c-0.216,-1.872 -1.51201,-4.68 -2.952,-6.408c-2.52001,-2.952 -6.264,-4.464 -11.16001,-4.464c-10.51199,0 -18.36,7.56 -18.36,17.712c0,8.712 5.76,14.184 14.832,14.184c4.96801,0 11.08801,-1.944 14.832,-4.752c2.44801,-1.872 2.44801,-1.872 2.44801,-2.232c0,-0.144 -0.072,-0.432 -0.144,-0.792l-0.93601,-2.88l-0.432,-0.216zm-18.576,-8.496c0.144,-3.024 0.36,-4.32 0.936,-5.472c0.79201,-1.656 2.16,-2.592 3.60001,-2.592c2.37599,0 4.39199,2.808 4.39199,6.12c0,0.864 -0.504,1.224 -2.088,1.296c-4.176,0.432 -6.48,0.576 -6.84,0.648z"
                  transform="translate(-662.17 15.16)"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
              <g id="svg_17" transform="matrix(1 0 0 1 271.17 9.9)">
                <path
                  fillRule=" nonzero"
                  fill=" rgb(140,0,184)"
                  strokeMiterlimit="2"
                  strokeLinejoin=" miter"
                  strokeDashoffset="0"
                  strokeDasharray=" none"
                  strokeWidth="0"
                  stroke=" rgb(140,0,184)"
                  strokeLinecap=" butt"
                  d="m86.76587,-567.44168c-0.864,0.144 -0.864,0.144 -1.008,0.144c-0.288,0 -0.72,-0.072 -1.22399,-0.144c-2.736,-0.504 -4.82401,-0.72 -7.20001,-0.72c-9.576,0 -14.76,3.6 -14.76,10.152c0,4.32 2.088,6.624 8.28,9.072c7.77601,3.024 8.424,3.456 8.424,5.4c0,2.016 -1.512,3.096 -4.31999,3.096c-3.88801,0 -7.12801,-1.728 -8.064,-4.248c-1.15201,-3.096 -1.15201,-3.096 -2.08801,-3.096c-0.36,0 -1.00799,0.072 -1.94399,0.216c-0.86401,0.072 -1.15201,0.36 -1.15201,1.152c0,0.288 0,0.576 0.072,0.936c0.144,1.8 0.216,2.448 0.216,4.248c0,1.656 0,1.8 -0.072,3.312c0,0.576 0.288,0.864 0.93601,0.864l1.43999,0l1.44,0.072c6.33601,0.72 6.69601,0.72 9,0.72c9.79201,0 15.40801,-3.672 15.40801,-10.152c0,-2.52 -1.08001,-4.824 -2.952,-6.264c-1.87201,-1.584 -4.39201,-2.736 -9.57601,-4.608c-3.816,-1.368 -4.82399,-2.16 -4.82399,-3.888c0,-1.8 1.43999,-2.808 3.95999,-2.808c4.032,0 6.408,1.656 7.70401,5.184c0.288,1.008 0.64799,1.368 1.29599,1.368c0.144,0 0.36,0 0.504,-0.072l1.22401,-0.144c0.71999,-0.072 1.00799,-0.36 1.00799,-0.936c0,-0.288 -0.072,-0.72 -0.144,-1.224c-0.36,-2.16 -0.71999,-5.688 -0.71999,-6.696c-0.072,-0.648 -0.216,-0.936 -0.576,-0.936l-0.28801,0z"
                  transform="translate(-696.78 15.16)"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
              <g id="svg_16" transform="matrix(0.75 0 0 0.75 -209.39 0)">
                <image
                  height="200"
                  width="200"
                  y="-816.07691"
                  x="-927.80034"
                  xlinkHref="data:image/png;base64,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"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
