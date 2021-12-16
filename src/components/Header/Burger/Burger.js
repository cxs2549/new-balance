import styled from 'styled-components'
import Hamburger from 'hamburger-react'
import { useState, useRef } from 'react'
import Menu from './Menu'
import useOnClickOutside from 'use-onclickoutside'
import { links } from '../../../store'
import { AiOutlineUser } from 'react-icons/ai'
import { TiLocationArrowOutline } from 'react-icons/ti'
import { MdOutlineLiveHelp } from 'react-icons/md'
import Item from './Item'

const StyledBurger = styled.div.attrs({ className: 'lg:hidden -mr-2' })`
p {
    cursor: pointer;
}
    p:hover {
        color: #CF231F;
    }

    #overlay {
        height: 100vh;
        width: 100vw;

    }
`
const Burger = () => {
	const [ isOpen, setOpen ] = useState(false)
	const handleOpen = () => {
		setOpen(!isOpen)
		document.body.style.overflowY = 'hidden'
		document.getElementById('top').style.backgroundColor = !isOpen
			? 'hsl(0, 0%, 87.6%)'
			: 'white'
	}
	const handleClose = () => {
		setOpen(false)
		document.body.style.overflowY = 'auto'
		document.getElementById('top').style.backgroundColor = 'white'
	}
	const ref = useRef()
	useOnClickOutside(ref, handleClose)
	return (
		<StyledBurger ref={ref}>
			<Hamburger toggled={isOpen} toggle={handleOpen} size={27} />
			<Menu open={isOpen}>
				<ul className="flex flex-col gap-1">
					{links.map((link, index) => (
						<Item
							key={index}
							title={link.title || link}
							superlinks={link.superlinks}
							sublinks={link.sublinks}
						/>
					))}
				</ul>
				<ul className="mt-8 flex flex-col gap-6 text-sm font-medium ">
					<li>
						<div className="flex items-center gap-5 ">
							<AiOutlineUser size={24} />
							<div className="flex gap-2 ">
								<p >Login</p>
								<span className="opacity-75">|</span>
								<p >Join</p>
							</div>
						</div>
					</li>
					<li>
						<div className="flex items-center gap-5">
							<TiLocationArrowOutline size={24} />
							<div className="flex gap-2 ">
								<p>Find a Store</p>
							</div>
						</div>
					</li>
					<li>
						<div className="flex items-center gap-5">
							<img src="https://img.icons8.com/color/24/000000/usa.png" alt="usa" />
							<div className="flex gap-2 ">
								<p>US</p>
							</div>
						</div>
					</li>
					<li>
						<div className="flex items-center gap-5">
							<MdOutlineLiveHelp size={24} />
							<div className="flex gap-2 ">
								<p>Help</p>
							</div>
						</div>
					</li>
				</ul>
			</Menu>
            <div id="overlay" className={`${isOpen ? 'opacity-80' : 'opacity-0' } fixed bg-black   top-16 left-0 w-full h-screen z-20 pointer-events-none transition-opacity duration-300`}></div>
		</StyledBurger>
	)
}
export default Burger
