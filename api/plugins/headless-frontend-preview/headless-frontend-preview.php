<?php
/**
 * Plugin Name: Headless Frontend Preview
 * Plugin URI: https://platform.sh/
 * Description: Enables previewing posts
 * Author: Platform.sh, Paul F. Gilzow
 * Version: 0.1.0
 * Requires at least: 4.9.0
 * Tested up to: 5.9.0
 * Requires PHP: 7.4
 * License: GPL-3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 */

if((false !== $previewURL = getenv('FRONTEND_URL'))
	&& (false !== $previewSecret = getenv('WORDPRESS_PREVIEW_SECRET'))
	&& (false !== $previewLocation = getenv('FRONTEND_PREVIEW_LOCATION'))
)
{
	add_filter('preview_post_link', function ($previewLink, $post) use ($previewURL, $previewSecret, $previewLocation){
		$urlQuery = [
			'id' 	=> $post->ID,
			'secret'=> $previewSecret,
		];

		return $previewLocation.'?'.http_build_query($urlQuery);
	},10,2);

	add_filter('rest_prepare_post', function ($response, $post){
		if ('draft' == $post->post_status) {
			$response->data['link'] = get_preview_post_link($post);
		}
		return $response;
	}, 10, 2);
}
