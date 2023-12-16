import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET() {
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: 'https://codecat6128.github.io/',
	});
}
