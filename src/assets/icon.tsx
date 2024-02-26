import React from "react"
import {Svg, Path} from "react-native-svg"

interface IconProps {
    width?: number
    height?: number
    color?: string
}
export const OpenEyeIcon = ({width=24, height=24, color="black"}: IconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 22 18" fill="none">
            <Path
                d="M1.0355 9.3224C0.96642 9.11513 0.966354 8.89073 1.03531 8.68343C2.42368 4.50972 6.36074 1.5 11.0008 1.5C15.6386 1.5 19.5742 4.50692 20.9643 8.6776C21.0334 8.88487 21.0334 9.10927 20.9645 9.31658C19.5761 13.4903 15.639 16.5 10.999 16.5C6.36115 16.5 2.42559 13.4931 1.0355 9.3224Z"
                stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path
                d="M14 9C14 10.6569 12.6568 12 11 12C9.3431 12 7.99995 10.6569 7.99995 9C7.99995 7.34315 9.3431 6 11 6C12.6568 6 14 7.34315 14 9Z"
                stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    )
}
export const ClosedEyeIcon = ({width=24, height=24, color="black"}: IconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 22 20" fill="none">
            <Path
                d="M2.9799 6.22257C2.05679 7.31382 1.35239 8.59601 0.934326 10.0015C2.22562 14.338 6.24308 17.5 10.9991 17.5C11.9916 17.5 12.952 17.3623 13.8622 17.1049M5.2276 4.22763C6.88385 3.13558 8.86768 2.5 10.9999 2.5C15.7559 2.5 19.7734 5.66205 21.0647 9.99852C20.3528 12.3919 18.8105 14.4277 16.772 15.772M5.2276 4.22763L1.99997 1M5.2276 4.22763L8.87865 7.87868M16.772 15.772L20 19M16.772 15.772L13.1213 12.1213M13.1213 12.1213C13.6642 11.5784 14 10.8284 14 10C14 8.34315 12.6568 7 11 7C10.1715 7 9.42154 7.33579 8.87865 7.87868M13.1213 12.1213L8.87865 7.87868"
                stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    )
}
