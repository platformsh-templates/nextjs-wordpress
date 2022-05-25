<?php
/**
 * Plugin Name: WP-CLI GraphQL Auth Token Generation
 * Plugin URI: https://platform.sh/
 * Description: Enables the generation of JWT auth and refresh tokens from WPCLI
 * Author: Platform.sh, Paul F. Gilzow
 * Version: 0.1.0
 * Requires at least: 4.9.0
 * Tested up to: 5.9.0
 * Requires PHP: 7.4
 * License: GPL-3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 */
use WP_CLI\Utils;
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

/**
 * Allows for retrieval of a wpGraphQL refresh token to be used to retrieve draft posts
 */
class WPGraphQL_Auth_CLI_Command {
    protected array $requiredPlugins = ['wp-graphql','wp-graphql-jwt-authentication'];
    protected bool $appPasswordsAvailable;
    protected array $defaults = ['return'=>'refreshToken','format'=>'json'];
    /**
     * Retrieve a refresh token for a user
     * ## OPTIONS
     * <username>
     *  : The WordPress username
     * <password>
     *  : The user's password or application password
     *
     * [--return=<return>]
     *  : Type of token to return
     * ---
     * default: refreshToken
     * options:
     *   - refreshToken
     *   - authToken
     *   - all (returns an associate array)
     * ---
     *
     * [--format=<format>]
     *  : Render output in a particular format
     * ---
     * default: json
     * options:
     *   - table
     *   - csv
     *   - json
     *   - yaml
     * ---
     *
     * [--porcelain]
     *  : Output just the token, overrides --format
     * ## EXAMPLE
     *
     *     $ wp graphql_auth get-graphql-token admin password123
     *
     * @alias token
     * @subcommand get-graphql-token
     * @when after_wp_load
     */
    public function get_graphql_token($args, $assoc_args ) {
        list($user, $pass) = $args;

        $options = wp_parse_args($assoc_args,$this->defaults);

        $porcelain = Utils\get_flag_value( $assoc_args, 'porcelain', false );

        /**
         * They've asked for both tokens but also porcelain which we can't do
         */
        if ($porcelain && 'all' === $options['return']) {
            WP_CLI::error('I can\'t return both token types with the porcelain flag.');
            WP_CLI::halt(1);
        }

        $this->verify_graphql_plugins();

        $return = $options['return'];
        $this->preauth();

        try {
            $response = \WPGraphQL\JWT_Authentication\Auth::login_and_get_token($user, $pass);
        } catch (Throwable $error){
            WP_CLI::error("Problem retrieving token: " . $error->getMessage());
            $this->cleanup(1);
        }


        if (! is_array($response)) {
            WP_CLI::error("Problem retrieving token.");
            $this->cleanup(1);
        }

        if ('all' === $return) {
            $returnKeys = ['refreshToken', 'authToken'];
        } else {
            $returnKeys = [$return];
        }

        $data = array_intersect_key($response,array_flip($returnKeys));

        if ($porcelain) {
            WP_CLI::line( $data[$return]);
        } elseif('json' === $options['format'] && 1 === count($data)) {
            WP_CLI::line(json_encode($data));
        } else {
            WP_CLI\Utils\format_items($options['format'],[$data], $returnKeys);
        }

        $this->cleanup();
    }

    /**
     * Checks to make sure the other graphql-related plugins are installed and activated
     * @throws \WP_CLI\ExitException
     */
    protected function verify_graphql_plugins() {
        //we need to make sure both the wp-graphql and wp-graphql-jwt-authentication plugins are installed and active
        $options=['exit_error'=>false,'return'=>'return_code'];
        foreach ($this->requiredPlugins as $plugin) {
            $installed = WP_CLI::runcommand(sprintf('plugin is-installed %s',$plugin),['exit_error'=>false,'return'=>'return_code']);
            if ( 0 !== $installed ) {
                WP_CLI::error(sprintf('%s is required to be installed in order to create a token.', $plugin));
                WP_CLI::halt(1);
            }

            $active = WP_CLI::runcommand(sprintf('plugin is-active %s', $plugin), $options);
            if ( 0 !== $active ) {
                WP_CLI::error(sprintf('%s is required to be active in order to create a token.', $plugin));
                WP_CLI::halt(1);
            }
        }
    }

    /**
     * Needed for adjusting the `application_password_is_api_request` filter @see $this->preauth()
     * @return bool
     */
    public function isAPIRequest() {
        return true;
    }

    /**
     * Adjusts the wp filters related to authenticating a user request with an application password
     *
     * WordPress only allows authentication with an app password via the rest api and xml-rpc. In order to tell WordPress
     * that we are an API request, we need to set application_password_is_api_request to true, and then set
     * wp_is_application_passwords_available. Just in case the site is set to not allow app passwords, we'll record the
     * current setting and then set it to true while we're running
     */
    protected function preauth() {
        // get the current version so we can reset it later
        $this->appPasswordsAvailable = wp_is_application_passwords_available();
        //now set it to true
        add_filter('wp_is_application_passwords_available', '__return_true');
        // instruct WordPress that this is an API request
        add_filter('application_password_is_api_request', [$this, 'isAPIRequest'], 10);
    }

    /**
     * Removes our entry in application_password_is_api_request so we dont interfere with any other processes.
     * Sets wp_is_application_passwords_available back to what is was before we started.
     * Finally, returns an exit code
     * @param int $exitcode
     * @throws \WP_CLI\ExitException
     */
    protected function cleanup(int $exitcode=0) {
        //remove our filter now that we're done
        remove_filter('application_password_is_api_request', [$this, 'isAPIRequest'], 10);
        //reset it back to what it was set to when we started
        add_filter('wp_is_application_passwords_available',$this->appPasswordsAvailable);
        WP_CLI::halt($exitcode);
    }
}

if (defined( 'WP_CLI') && WP_CLI) {
    WP_CLI::add_command( 'graphql_auth', 'WPGraphQL_Auth_CLI_Command' );
}
