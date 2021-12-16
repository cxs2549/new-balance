import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import { useState } from 'react'

const Item = ({ title, sublinks, superlinks, textsm }) => {
	const [ isOpen, setOpen ] = useState(false)
	return (
		<li className="">
			<div
				onClick={() => setOpen(!isOpen)}
				className={`cursor-pointer  flex items-center justify-between hover:text-brand  ${textsm ? 'h-8 opacity-80 hover:opacity-100' : 'h-12'}`}
			>
				<p className={`${textsm ? 'text-base' : 'text-xl'} capitalize font-medium`}>{title}</p>
				{superlinks && <AiOutlineRight size={textsm ? 17 : 22} />}
				{sublinks && <AiOutlineRight size={textsm ? 17 : 22} />}
			</div>
			{/* InnerMenu */}

			<div
				className={`absolute h-screen left-0 bg-white w-full top-0 z-20 px-4 py-4 transition-opacity duration-200 ${isOpen
					? 'opacity-1'
					: 'opacity-0 pointer-events-none'}`}
			>
				<button onClick={() => setOpen(false)} className="h-12 flex items-center  w-full hover:text-brand">
					<AiOutlineLeft size={22} />
				</button>
				<div className="my-5 capitalize text-2xl font-semibold">{title}</div>
				<ul className="flex flex-col">
					{sublinks &&
						sublinks.map((link, index) => (
							<Item
								key={index}
								title={link.title || link}
								superlinks={link.superlinks}
								sublinks={link.sublinks}
                                textsm
							/>
						))}
				</ul>
				<ul className="flex flex-col gap-1">
					{superlinks &&
						superlinks.map((link, index) => (
							<Item
								key={index}
								title={link.title || link}
								superlinks={link.superlinks}
								sublinks={link.sublinks}
                                textsm
							/>
						))}
				</ul>
			</div>
		</li>
	)
}

export default Item
