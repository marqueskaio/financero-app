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

export const LogoIcon  = ({width=24, height=24, color="black"}: IconProps) => {
    return (
        <Svg width={width} viewBox="0 0 103.5 103.499997" height={height} preserveAspectRatio="xMidYMid meet">
                <Path
                    d="M 0 0 L 103.003906 0 L 103.003906 103.003906 L 0 103.003906 Z M 0 0 "
                    stroke-linecap="round"
                    clip-rule="nonzero"/>
                <Path
                    d="M 0.597656 0.597656 L 102.402344 0.597656 L 102.402344 102.402344 L 0.597656 102.402344 Z M 0.597656 0.597656 "
                    stroke-linecap="round"
                    clip-rule="nonzero"/>
                <Path
                    d="M 51.5 0.597656 C 23.386719 0.597656 0.597656 23.386719 0.597656 51.5 C 0.597656 79.613281 23.386719 102.402344 51.5 102.402344 C 79.613281 102.402344 102.402344 79.613281 102.402344 51.5 C 102.402344 23.386719 79.613281 0.597656 51.5 0.597656 Z M 51.5 0.597656 "
                    stroke-linecap="round"
                    clip-rule="nonzero"/>
                <Path
                    d="M 28.878906 19.242188 L 74 19.242188 L 74 83.679688 L 28.878906 83.679688 Z M 28.878906 19.242188 "
                    clip-rule="nonzero"/>
                <Path
                    fill="#ffffff" d="M 0 0 L 103.003906 0 L 103.003906 103.003906 L 0 103.003906 Z M 0 0 "
                    fill-opacity="1"
                    stroke-linecap="round"
                    fill-rule="nonzero"/>
                <Path
                    fill="#ffffff"
                    d="M 0.597656 0.597656 L 102.402344 0.597656 L 102.402344 102.402344 L 0.597656 102.402344 Z M 0.597656 0.597656 "
                    fill-opacity="1"
                    stroke-linecap="round"
                    fill-rule="nonzero"/>
                <Path
                    fill="#f27c22"
                    d="M 73.988281 55.53125 L 73.988281 43.433594 L 51.8125 43.433594 L 51.8125 55.53125 L 73.988281 55.53125 "
                    fill-opacity="1"
                    fill-rule="nonzero"/>
                <Path
                    fill="#f27c22"
                    d="M 28.964844 83.753906 L 28.964844 19.242188 L 73.988281 19.242188 L 73.988281 31.339844 L 41.0625 31.339844 L 41.0625 83.753906 L 28.964844 83.753906 "
                    fill-opacity="1"
                    fill-rule="nonzero"/>
        </Svg>

    )
}

export const LeftArrowCircleIcon = ({width=24, height=24, color="white"}: IconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM7.71967 11.4697C7.57902 11.6103 7.5 11.8011 7.5 12C7.5 12.1989 7.57902 12.3897 7.71967 12.5303L10.7197 15.5303C11.0126 15.8232 11.4874 15.8232 11.7803 15.5303C12.0732 15.2374 12.0732 14.7626 11.7803 14.4697L10.0607 12.75H15.75C16.1642 12.75 16.5 12.4142 16.5 12C16.5 11.5858 16.1642 11.25 15.75 11.25L10.0607 11.25L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967C11.4874 8.17678 11.0126 8.17678 10.7197 8.46967L7.71967 11.4697Z" 
                fill={color}/>
        </Svg>
    )
}