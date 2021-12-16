import styled from 'styled-components'


const StyledMenu = styled.div.attrs({ className: 'fixed top-16 right-0 w-72 shadow bg-white h-screen z-30 p-4 pb-24'  })`
    opacity: ${props => props.open ? 1 : 0};
    transition: all 0.3s ease-in-out;
    pointer-events: ${props => props.open ? 'all' : 'none'};
    right: ${props => props.open ? 0 : '-100%'};
    overflow-y: scroll;
`
const Menu = ({open, children}) => {
return (
<StyledMenu open={open}>
    {children}
</StyledMenu>
)
}
export default Menu