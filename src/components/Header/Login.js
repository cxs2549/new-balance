import styled from 'styled-components'
import {AiOutlineUser} from 'react-icons/ai'

const StyledLogin = styled.div.attrs({ className: 'flex items-center gap-3'  })`
p {
    font-weight: 500;
}
`
const Login = () => {
return (
<StyledLogin>
    <AiOutlineUser size={24} />
    <div className="text-sm flex gap-2">
        <p>Log in</p>
        <span>|</span>
        <p>Join</p>
    </div>
</StyledLogin>
)
}
export default Login