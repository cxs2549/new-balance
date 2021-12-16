import styled from 'styled-components'
import tw from 'twin.macro'
import Headroom from 'react-headroom'
import logo from '../../assets/logo.png'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Burger from './Burger/Burger'
import Searchbar from './Searchbar'
import Links from './Links'
import Login from './Login'

const StyledHeader = styled.header.attrs({ className: 'shadow flex flex-col items-center' })`
 .container {
    ${tw`max-w-7xl mx-auto px-4 flex items-center gap-6 justify-between`}
 }
 #logo {
     height: 60px;
     width: 60px;
 }
 
`
const Header = () => {
	return (
		<Headroom>
			<StyledHeader>
				<div id="top" className="container h-16 bg-white transition-colors duration-500">
					<div className="flex-1  lg:flex-none">
						<img id="logo" src={logo} alt=""  />
					</div>
					<div className="hidden lg:block flex-1">
						<Links />
					</div>
					<div className="hidden sm:block">
						<Searchbar />
					</div>
					<div className="hidden sm:block">
						<Login />
					</div>
					<AiOutlineShoppingCart size={28} />
					<Burger />
				</div>
				<div className="px-4 bg-white flex items-center w-full h-14 sm:hidden">
					<Searchbar />
				</div>
				<div className="px-4 bg-white flex items-center h-12 lg:hidden w-full">
					<Links />
					<div className="sm:hidden">
						<Login />
					</div>
				</div>
			</StyledHeader>
		</Headroom>
	)
}
export default Header
