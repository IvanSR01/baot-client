export const footerLinksSec: TypeFooterLink[] = [
  {
    name: "Аренда яхт",
    link: "/",
  },
  {
    name: "Аренда лодок",
    link: "/",
  },
  {
    name: "Экскурсии",
    link: "/",
  },
  {
    name: "Экскурсии",
    link: "/",
  },
  {
    name: "Экскурсии",
    link: "/",
  },
];
export const footerLinksBuyer: TypeFooterLink[] = [
  {
    name: "Часто задаваемые вопросы",
    link: "/",
  },
  {
    name: "Оферта",
    link: "/",
  },
  {
    name: "Согласие на обработку персональных данных",
    link: "/",
  },
  {
    name: "Возврат",
    link: "/",
  },
  {
    name: "Контакты",
    link: "/",
  },
];

export const footerLinksPart: TypeFooterLink[] = [
  {
    name: "Как зарегистрироваться",
    link: "/auth/register/seller",
  },
  {
    name: "Как добавить товар/услугу",
    link: "/",
  },
  {
    name: "Рейтинг партнера",
    link: "/",
  },
  {
    name: "Требования к материалам",
    link: "/",
  },
  {
    name: "Партнерское соглашение",
    link: "/",
  },
];

export const SITEMAP = [{
	title: 'Покупателям', links: [
		{
			name: "Как зарегистрироваться",
			link: "/",
		},
		{
			name: "Как добавить товар/услугу",
			link: "/",
		},
		{
			name: "Рейтинг партнера",
			link: "/",
		},
		{
			name: "Требования к материалам",
			link: "/",
		},
		{
			name: "Партнерское соглашение",
			link: "/",
		},
	],
},
{	title: 'Партнерам' ,links: [
		{
			name: "Как зарегистрироваться",
			link: "/",
		},
		{
			name: "Как добавить товар/услугу",
			link: "/",
		},
		{
			name: "Рейтинг партнера",
			link: "/",
		},
		{
			name: "Требования к материалам",
			link: "/",
		},
		{
			name: "Партнерское соглашение",
			link: "/",
		},
	]}
]

export type TypeFooterLink = {
  link: string;
  name: string;
};
