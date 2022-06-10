import { MdLightMode, MdDarkMode } from 'react-icons/md';

const darkTheme = {
    primaryColor: '#0F66C3',
    firstBgColor: '#292929',
    secondBgColor: '#141414',
    searchBgColor: '#4F125',
    textColor: '#fff',
    borderColor: 'rgba(255, 255, 255, .2)',
    inputTextColor: 'rgba(255,255,255,0.6)',
    themeMode: <MdLightMode size={25} />,
};

const lightTheme = {
    primaryColor: '#0F66C3',
    firstBgColor: '#F3F2EF',
    secondBgColor: '#FFF',
    searchBgColor: '#EEF3F8',
    inputTextColor: 'rgba(0,0,0,0.6)',
    textColor: '#191919',
    borderColor: 'rgba(0,0,0,0.1)',
    themeMode: <MdDarkMode size={25} />,
};

export {
    lightTheme,
    darkTheme
};