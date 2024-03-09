import Svg from '@/assets/svg-components/Svg'
import SvgFour from '@/assets/svg-components/SvgFour'
import SvgOne from '@/assets/svg-components/SvgOne'
import SvgThree from '@/assets/svg-components/SvgThree'
import SvgTwo from '@/assets/svg-components/SvgTwo'
import item1 from '@/assets/svg/menu-1.svg'
import item2 from '@/assets/svg/menu-2.svg'
import item3 from '@/assets/svg/menu-3.svg'
import item4 from '@/assets/svg/menu-4.svg'
import item5 from '@/assets/svg/menu-5.svg'

export const ESC = [
	{
		title: 'По каналам',
		svg: () => <SvgOne />,
	},
	{
		title: 'Речные',
		svg: () => <SvgTwo />,
	},
	{
		title: 'По москве реке',
		svg: () => <SvgThree />,
	},
	{
		title: 'На парсной яхте',
		svg: () => <SvgFour />,
	},
	{
		title: 'Рыбалка гайдинг',
		svg: () => <Svg />,
	},
]
