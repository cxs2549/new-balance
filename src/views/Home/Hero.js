import styled from 'styled-components'
import hero from '../../assets/hero/hero-mobile.png'
import heroDesktop from '../../assets/hero/hero.png'
const StyledHero = styled.div.attrs({ className: '' })`
background-color: white;
/* height: calc(100vh - 165px); */
h1 {
    font-family: 'Libre Baskerville', serif;
    position: relative;
    line-height: 3.5rem;
    &::after {
        content: '';
        position: absolute;
        height: 4px;
        width: 17%;
        background-color: #C2211A;
        bottom: -32px;
        left: 0;
    }
}
`
const Hero = () => {
	return (
		<StyledHero>
			<img src={hero} alt="" className="lg:hidden w-full" />
			<img src={heroDesktop} alt="" className="hidden lg:block" />
			<div className="max-w-7xl mx-auto">
                <div className="px-4 py-5 flex flex-col gap-8 xl:max-w-sm xl:absolute xl:top-32">
                    <h1 className="text-5xl font-semibold mb-4">Something for everyone on your  list.</h1>
                    <div className="flex flex-col gap-4 text-sm">
                    <p className="text-sm md:text-base opacity-80">Up to 40% off select clothing.</p>
                        <button className="text-white font-bold bg-brand py-4 px-8">Shop women</button>
                        <button className="text-white font-bold bg-brand py-4 px-8">Shop men</button>
                        <span className="text-xs mt-2 opacity-75">Offer available 12/14-12/17. Exclusions apply.</span>
                    </div>
                </div>
            </div>
		</StyledHero>
	)
}
export default Hero
