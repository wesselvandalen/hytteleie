export const getColorByCategory = (category: string): string => {
    switch (category.toLowerCase()) {
        case 'skog': return '#80cc91';
        case 'fjell': return '#c8d2d0';
        case 'avsides': return '#de9370';
        case 'familie': return '#d6de93';
        case 'innsjø': return '#6dd7c9';
        case 'romantisk': return '#e5b4e7';
        case 'luksus': return '#ccaf80';
        case 'enkel': return '#a7b0a4';
        default: return '#e7e7e8';
    }
}

export const getIconByAmenity = (amenity: string): any => {
    switch (amenity.toLowerCase()) {
        case 'kjøkken': return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 21V15.6C15 15.0399 15 14.7599 14.891 14.546C14.7951 14.3578 14.6422 14.2049 14.454 14.109C14.2401 14 13.9601 14 13.4 14H10.6C10.0399 14 9.75992 14 9.54601 14.109C9.35785 14.2049 9.20487 14.3578 9.10899 14.546C9 14.7599 9 15.0399 9 15.6V21M3 7C3 8.65685 4.34315 10 6 10C7.65685 10 9 8.65685 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 8.65685 16.3431 10 18 10C19.6569 10 21 8.65685 21 7M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>);
        case 'peis': return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 9C11.1077 8.98562 10.2363 9.27003 9.52424 9.808C8.81222 10.346 8.30055 11.1066 8.07061 11.9688C7.84068 12.8311 7.90568 13.7455 8.25529 14.5665C8.6049 15.3876 9.21904 16.0682 10 16.5M12 3V5M6.6 18.4L5.2 19.8M4 13H2M6.6 7.6L5.2 6.2M20 14.5351V4C20 2.89543 19.1046 2 18 2C16.8954 2 16 2.89543 16 4V14.5351C14.8044 15.2267 14 16.5194 14 18C14 20.2091 15.7909 22 18 22C20.2091 22 22 20.2091 22 18C22 16.5194 21.1956 15.2267 20 14.5351Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>);
        case 'badstu': return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16C10 11.6863 16 2 16 2C16 2 22 11.6863 22 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 9C8 10.6569 6.65685 12 5 12C3.34315 12 2 10.6569 2 9C2 6.84315 5 2 5 2C5 2 8 6.84315 8 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>);
        case 'wifi': return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19.5H12.01M22.8064 8.70076C19.9595 6.09199 16.1656 4.5 11.9999 4.5C7.83414 4.5 4.04023 6.09199 1.19336 8.70076M4.73193 12.243C6.67006 10.5357 9.21407 9.5 12 9.5C14.7859 9.5 17.3299 10.5357 19.268 12.243M15.6983 15.7751C14.6792 14.9763 13.3952 14.5 11.9999 14.5C10.5835 14.5 9.28172 14.9908 8.25537 15.8116" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>);
        case 'båt': return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8ZM12 8V22M12 22C9.34784 22 6.8043 20.9464 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12H5M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>);
        case 'solnedgang': return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>);
        case 'turstier': return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 21H20.0104C20.9816 21 21.4671 21 21.7348 20.7975C21.968 20.6211 22.1123 20.3515 22.1297 20.0596C22.1497 19.7246 21.8804 19.3205 21.3417 18.5125L18.3313 13.9969C17.8862 13.3292 17.6636 12.9954 17.3831 12.8791C17.1378 12.7773 16.8622 12.7773 16.6169 12.8791C16.3364 12.9954 16.1139 13.3292 15.6687 13.9969L14.9245 15.1132M19 21L11.3155 9.90018C10.8736 9.26182 10.6526 8.94264 10.3766 8.83044C10.1351 8.73228 9.8649 8.73228 9.62344 8.83044C9.34742 8.94264 9.12645 9.26182 8.68451 9.90018L2.73822 18.4893C2.17519 19.3025 1.89368 19.7092 1.90971 20.0473C1.92366 20.3419 2.06688 20.6152 2.30109 20.7943C2.57002 21 3.06459 21 4.05373 21H19ZM21 6C21 7.65685 19.6569 9 18 9C16.3432 9 15 7.65685 15 6C15 4.34315 16.3432 3 18 3C19.6569 3 21 4.34315 21 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>);
        case 'stjernehimmel': return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 22V17M4.5 7V2M2 4.5H7M2 19.5H7M13 3L11.2658 7.50886C10.9838 8.24209 10.8428 8.60871 10.6235 8.91709C10.4292 9.1904 10.1904 9.42919 9.91709 9.62353C9.60871 9.84281 9.24209 9.98381 8.50886 10.2658L4 12L8.50886 13.7342C9.24209 14.0162 9.60871 14.1572 9.91709 14.3765C10.1904 14.5708 10.4292 14.8096 10.6235 15.0829C10.8428 15.3913 10.9838 15.7579 11.2658 16.4911L13 21L14.7342 16.4911C15.0162 15.7579 15.1572 15.3913 15.3765 15.0829C15.5708 14.8096 15.8096 14.5708 16.0829 14.3765C16.3913 14.1572 16.7579 14.0162 17.4911 13.7342L22 12L17.4911 10.2658C16.7579 9.98381 16.3913 9.8428 16.0829 9.62353C15.8096 9.42919 15.5708 9.1904 15.3765 8.91709C15.1572 8.60871 15.0162 8.24209 14.7342 7.50886L13 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>);
        case 'strøm': return <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        case 'brygge': return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 6C2.6 6.5 3.2 7 4.5 7C7 7 7 5 9.5 5C10.8 5 11.4 5.5 12 6C12.6 6.5 13.2 7 14.5 7C17 7 17 5 19.5 5C20.8 5 21.4 5.5 22 6M2 18C2.6 18.5 3.2 19 4.5 19C7 19 7 17 9.5 17C10.8 17 11.4 17.5 12 18C12.6 18.5 13.2 19 14.5 19C17 19 17 17 19.5 17C20.8 17 21.4 17.5 22 18M2 12C2.6 12.5 3.2 13 4.5 13C7 13 7 11 9.5 11C10.8 11 11.4 11.5 12 12C12.6 12.5 13.2 13 14.5 13C17 13 17 11 19.5 11C20.8 11 21.4 11.5 22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>);
        default: return null;
    }
}

export const makePriceReadable = (number: number): string => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function getPosition(string: string, subString: string, index: number) {
    return string.split(subString, index).join(subString).length;
}

export const getFirstXSentences = (sentence: string, number: number) : string => {
    const secondDot = getPosition(sentence, '.', 2);
    const letterAfterSecondDot = sentence[secondDot + 1];

    // If the letter after the second dot is not a space (f.e. .NET, the letter after the dot (N) is not a ' '),
    // get the third dot and return the string between those points.
    if (letterAfterSecondDot !== undefined && letterAfterSecondDot !== ' ') {
        const thirdDot = getPosition(sentence, '.', 3);
        return sentence.substring(0, thirdDot + 1);
    }

    const sentenceRegex = /(?:\b(?:[A-Z][a-z]*|[Ii])\b[^.!?]*[.!?])+/g;

    const matches = sentence.match(sentenceRegex);

    if (!matches) return '';

    return matches.slice(0, number).join(" ").trim();
}