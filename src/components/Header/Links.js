import styled from 'styled-components'
import { links } from '../../store'
import men from '../../assets/new/men.png'
import women from '../../assets/new/women.png'
import kids from '../../assets/new/kids.png'
import { useState, useRef } from 'react'
import useOnClickOutside from 'use-onclickoutside'

const StyledLinks = styled.nav.attrs({ className: 'px-1 flex gap-6 text-sm xl:text-base flex-1' })`

    > div:first-child, > div:last-child {
        display: none;
        @media (min-width: 768px) {
            display: block;
        }
    }

    .active {
        color: red;
    }
`

const New = () => {
	return (
		<div className="grid grid-cols-3 gap-4  p-8 shadow">
			<img src={men} alt="" />
			<img src={women} alt="" />
			<img src={kids} alt="" />
		</div>
	)
}

const InfoPage = ({ leftlinks, rightlinks }) => {
	return (
		<div className="max-w-7xl mx-auto py-8 px-4 xl:px-0">
			<div className="flex">
				<div className="w-2/12 flex flex-col gap-2">
					{leftlinks.map((link, index) => <p>{link}</p>)}
				</div>
				<div className="w-10/12 grid grid-cols-5">
					{rightlinks.map((link, index) => (
						<div>
							<p className="mb-3 uppercase text-sm font-bold">{link.title}</p>
							<ul className="flex flex-col gap-2 font-normal">
								{link.sublinks.map((link, index) => <li>{link}</li>)}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

const theLinks = [
	{ title: links[0].title, content: <New /> },
	{
		title: links[1].title,
		content: <InfoPage leftlinks={links[1].leftlinks} rightlinks={links[1].superlinks} />
	},
	{
		title: links[2].title,
		content: <InfoPage leftlinks={links[1].leftlinks} rightlinks={links[1].superlinks} />
	},
	{
		title: links[3].title,
		content: <InfoPage leftlinks={links[1].leftlinks} rightlinks={links[1].superlinks} />
	},
	{ title: links[4] }
]

const LinkItem = ({ title, content }) => {
	const [ isOpen, setOpen ] = useState(false)
	const ref = useRef()
	useOnClickOutside(ref, () => setOpen(false))
	return (
		<div
			
			className="capitalize font-semibold"
			ref={ref}
		>
			<p
				onClick={() => setOpen(!isOpen)}
				className={`${isOpen && 'active'} cursor-pointer text-sm`}
			>
				{title}
			</p>
			{/* dropdown */}
			<div
				className={`${isOpen
					? 'opacity-100'
					: 'opacity-0 pointer-events-none'} fixed top-28 lg:top-16 left-0 w-full bg-white z-10 hidden md:block shadow`}
			>
				{content}
			</div>
		</div>
	)
}

const Links = () => {
	return (
		<StyledLinks>
			{theLinks.map((link, index) => (
				<LinkItem key={index} title={link.title || link} content={link.content} />
			))}
		</StyledLinks>
	)
}
export default Links
