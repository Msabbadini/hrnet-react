import Typography from '#components/atoms/typography';
import { NavLink } from 'react-router-dom';

export interface NavLinkProps  {
    url?: string;
    type?: string;
    nameIcon?: string;
    linkImg?: string;
    text?: string;
}

const NavLinkItem = ({
    url ="#",
    type="icon",
    nameIcon="",
    text="",
    ...props
}:NavLinkProps) => {
    if(type === "icon"){
        return (
            <NavLink to={url} className={({isActive} )=>  `${isActive ?"underline ":"no-underline"} flex hover:underline cursor-pointer mr-2`} {...props}>
                 <Typography component="span"  theme='black'>
                    <i className={nameIcon} />
                 </Typography>
                <Typography component="span" variant='body-xl'>{text}</Typography>
            </NavLink>
        )
    }
    return (
        <NavLink to={url} className={({isActive} )=>  `${isActive ?"underline":"no-underline"} flex hover:underline cursor-pointer mr-2`}>
        <Typography component="h1" variant='body-2xl' className='sr-only'>{text}</Typography>
        </NavLink>
  )
}

export default NavLinkItem