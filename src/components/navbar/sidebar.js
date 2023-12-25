import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LanguageIcon from '@mui/icons-material/Language';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export const SideBar = [
    {
        title:"Home",
        path:'/',
        icon:<HomeIcon />,
        cName:'nav-text'
    },
    {
        title:"About",
        path:'/about',
        icon:<InfoIcon />,
        cName:'nav-text'
    },
    {
        title:"Contact",
        path:'/contact',
        icon:<ContactPageIcon />,
        cName:'nav-text'
    },
    {
        title:"More Products",
        path:'/portfolio',
        icon:<LanguageIcon />,
        cName:'nav-text'
    }
]

