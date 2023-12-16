import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET() {
	return rss({
	   title: SITE_TITLE,
	   description: SITE_DESCRIPTION,
	   site: 'https://codecat6128.github.io/',
	   items: [
		  {
			 title: 'Заголовок записи',
			 url: 'https://codecat6128.github.io/post-1',
			 date: new Date(),
			 description: 'Описание записи',
		  },
	   ],
	});
}
