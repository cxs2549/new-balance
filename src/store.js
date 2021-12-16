export const links = [
	{ title: 'new', sublinks: [ 'shop men', 'shop women', 'shop kids' ] },
	{
		title: 'men',
        leftlinks: ['gift guide', 'new arrivals', 'best sellers', 'launch calendar'],
		superlinks: [
			{ title: 'shoes', sublinks: [ 'all shoes', 'running', 'lifestyle' ] },
			{ title: 'clothing', sublinks: [ 'all clothing', 'running', 'lifestyle' ] },
			{ title: 'sports', sublinks: [ 'all sports', 'running', 'lifestyle' ] },
			{ title: 'accessories & gear', sublinks: [ 'all accessories', 'running', 'lifestyle' ] },
			{ title: 'shop by collection', sublinks: [ 'white shoes', 'all-Terrain', 'lifestyle' ] }
		]
	},
	{
		title: 'women',
		superlinks: [
			{ title: 'shoes', sublinks: [ 'all shoes', 'running', 'lifestyle' ] },
			{ title: 'clothing', sublinks: [ 'all shoes', 'running', 'lifestyle' ] },
			{ title: 'sports', sublinks: [ 'all shoes', 'running', 'lifestyle' ] }
		]
	},
	{
		title: 'kids',
		superlinks: [
			{ title: 'shoes', sublinks: [ 'all shoes', 'running', 'lifestyle' ] },
			{ title: 'clothing' },
			{ title: 'sports' }
		]
	},
	'gift guide'
]