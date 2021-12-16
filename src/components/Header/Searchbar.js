import styled from 'styled-components'

const StyledSearchbar = styled.div.attrs({ className: 'w-full text-gray-600 relative' })`

    input {
        @media (min-width: 640px) {
            max-width: 250px;
        }
        @media (min-width: 1024px) {
            min-width: 320px;
            max-width: auto;
        }
    }
    input[type="search"] {
  -webkit-appearance: none;
}

`
const Searchbar = () => {
	return (
		<StyledSearchbar>
			<input
				type="search"
				placeholder="Search our products"
				className="bg-gray-100 py-2 px-12 rounded w-full  hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-brand"
			/>
			<div className="absolute left-4 top-1/2 transform -translate-y-1/2">
				<svg
					width="24"
					height="24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="flex-none text-gray-400"
					aria-hidden="true"
				>
					<path d="m19 19-3.5-3.5" />
					<circle cx="11" cy="11" r="6" />
				</svg>
			</div>
		</StyledSearchbar>
	)
}
export default Searchbar
