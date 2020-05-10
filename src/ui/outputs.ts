import ascii from './ascii';

const OUTPUTS = {
    STANDARTPREFIX: '  ',
    SUBMENUPREFIX: '     •',
    SUBMENUHOVEREDPREFIX: '   > •',
    HOVERPREFIX: ' >',

    HEADBULKDOWNLOAD: '    [Books in Bulk Download Queue: {queuelength}]\n',
    
    CHECKED: `${ascii.BRIGHTGREEN}x${ascii.RESETCOLOR}`,
    UNCHECKED: ' ',

    SEARCH: `${ascii.BRIGHTCYAN}? ${ascii.BRIGHTWHITE}Search:  ${ascii.RESETCOLOR}`,

    STANDARTOUTPUT: '',
    HOVEREDOUTPUT: '',

    SUBMENUOUTPUT: '',
    SUBMENUHOVEREDOUTPUT: '',
    
    TOGGLEDOUTPUT: '',
    TOGGLEDHOVEREDOUTPUT: '',

    CHECKEDOUTPUT: '',
    CHECKEDHOVEREDOUTPUT: ''
}

OUTPUTS.STANDARTOUTPUT = `${OUTPUTS.STANDARTPREFIX} {text}\n`;
OUTPUTS.HOVEREDOUTPUT = `${ascii.CYAN}${OUTPUTS.HOVERPREFIX} {text}${ascii.RESETCOLOR}\n`;

OUTPUTS.SUBMENUOUTPUT = `${ascii.BRIGHTWHITE}${OUTPUTS.SUBMENUPREFIX} {text}${ascii.RESETCOLOR}\n`;
OUTPUTS.SUBMENUHOVEREDOUTPUT = `${ascii.BRIGHTCYAN}${OUTPUTS.SUBMENUHOVEREDPREFIX} {text}${ascii.RESETCOLOR}\n`;

OUTPUTS.TOGGLEDOUTPUT = `${ascii.YELLOW}${OUTPUTS.STANDARTPREFIX} ─ {text}${ascii.RESETCOLOR}\n`;
OUTPUTS.TOGGLEDHOVEREDOUTPUT = `${ascii.BRIGHTYELLOW}${OUTPUTS.HOVERPREFIX} ─ {text}${ascii.RESETCOLOR}\n`;

OUTPUTS.CHECKEDOUTPUT = `${ascii.BRIGHTGREEN}${OUTPUTS.STANDARTPREFIX} {text}${ascii.RESETCOLOR}\n`;
OUTPUTS.CHECKEDHOVEREDOUTPUT = `${ascii.GREEN}${OUTPUTS.HOVERPREFIX} {text}${ascii.RESETCOLOR}\n`;

export default OUTPUTS;