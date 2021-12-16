import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { BsChevronDown } from 'react-icons/bs'
import { useState, useRef } from 'react'

const StyledFooter = styled.div.attrs({ className: '' })`
`

const SignUp = () => {
	return (
		<div className="bg-black text-white flex items-center justify-center gap-4 py-6">
			<p className="w-4/12 font-semibold leading-5">
				Be the first to know about new arrivals
			</p>
			<button className="bg-brand font-bold py-4 px-8 text-sm">Sign up</button>
		</div>
	)
}

const AccordionItem = ({ title }) => {
	const [ isOpen, setIsOpen ] = useState(false)
	const ref = useRef(null)
	const handleToggle = () => {
		setIsOpen(!isOpen)
		ref.current.classList.toggle('rotate-180')
	}
	return (
		<div>
			<div
				onClick={handleToggle}
				className="flex items-center justify-between  py-4 capitalize font-medium cursor-pointer"
			>
				<p className="font-semibold">{title}</p>
				<div
					ref={ref}
					id="arrow"
					className="transform transition-transform duration-200 md:hidden"
				>
					<BsChevronDown size={22} />
				</div>
			</div>
			<div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
				<ul className="flex flex-col gap-2 pb-8">
					<li>
						<a href="/">Contact Us</a>
					</li>
					<li>
						<a href="/">FAQ</a>
					</li>
				</ul>
			</div>
			<div className={`md:block hidden`}>
				<ul className="flex flex-col gap-2 pb-8">
					<li>
						<a href="/">Contact Us</a>
					</li>
					<li>
						<a href="/">FAQ</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

const Accordions = () => {
	return (
		<div className="px-4 text-sm mb-8 md:grid md:grid-cols-4 xl:w-11/12">
			<AccordionItem title="help" />
			<AccordionItem title="shop" />
			<AccordionItem title="about us" />
			<AccordionItem title="for you" />
		</div>
	)
}
const About = () => {
	return (
		<div className="px-4 xl:w-2/4">
			<div className="mb-2">
				<img src={logo} className="w-16" alt="" />
			</div>
			<p className="leading-7 font-medium max-w-sm">
				Independent since 1906, we empower people through sport and craftsmanship to create
				positive change in communities around the world.
			</p>
		</div>
	)
}
const Socials = () => {
	return (
		<div className="px-4 mt-6 mb-8">
			<ul className="flex items-center gap-6 text-2xl">
				<li>
					<i class="fa fa-facebook" aria-hidden="true" />
				</li>
				<li>
					<i class="fa fa-instagram" aria-hidden="true" />
				</li>
				<li>
					<i class="fa fa-twitter" aria-hidden="true" />
				</li>
				<li>
					<i class="fa fa-youtube" aria-hidden="true" />
				</li>
				<li>
					<i class="fa fa-pinterest" aria-hidden="true" />
				</li>
			</ul>
		</div>
	)
}
const Region = () => {
	return (
		<div className="flex items-center gap-8 px-4 text-xs">
			<div>Change region:</div>
			<div className="flex items-center gap-2">
				<img src="https://img.icons8.com/color/32/000000/usa.png" alt="usa" />
				<p className="font-medium">US</p>
			</div>
		</div>
	)
}
const Brands = () => {
	return (
		<div className="px-4 mt-8 mb-12 xl:flex xl:flex-col xl:items-center xl:gap-2 xl:justify-center">
			<p className="text-sm font-medium">New Balance family of brands</p>
			<div className="flex gap-4 mt-2 items-center">
				<img
					src="https://www.newbalance.com/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw4cb62335/images/homepage/footer/brine-logo.svg"
					className="h-6 xl:h-10"
					alt=""
				/>
				<img
					src="https://www.newbalance.com/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw962ceddc/images/homepage/footer/warror.svg"
					className="h-6 xl:h-10"
					alt=""
				/>
				<img
					src="https://www.newbalance.com/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dwa49d224b/images/homepage/footer/teamsports-logo.svg"
					className="h-6 xl:h-10"
					alt=""
				/>
			</div>
		</div>
	)
}
const links = [ 'privacy policy', 'terms of use', 'CA supply chains act', 'do not sell my info' ]
const Sitelinks = () => {
	return (
		<div className="flex flex-col xl:flex-row xl:gap-4 gap-2 px-4 capitalize text-sm">
			{links.map((link, i) => (
				<a href="/" className="underline">
					{link}
				</a>
			))}
		</div>
	)
}
const Copyright = () => {
	return <div className="text-xs px-4 py-8">Copyright 2020, CxS for New Balance</div>
}

const Footer = () => {
	return (
		<StyledFooter>
			<div className="max-w-7xl mx-auto">
				<SignUp />
				<div className="flex flex-col xl:flex-row xl:pt-8">
					<Accordions />
					<About />
				</div>
				<div className="flex flex-col xl:flex-row justify-between xl:items-center">
                    <Socials />
                    <Region />
                </div>
				<Brands />
				<div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
                    <Sitelinks />
                    <Copyright />
                </div>
			</div>
		</StyledFooter>
	)
}
export default Footer
