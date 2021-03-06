<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
* This file is part of FireSale, a PHP based eCommerce system built for
* PyroCMS.
*
* Copyright (c) 2013 Moltin Ltd.
* http://github.com/firesale/firesale
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*
* @package firesale/core
* @author FireSale <support@getfiresale.org>
* @copyright 2013 Moltin Ltd.
* @version dev
* @link http://github.com/firesale/firesale
*
*/

$lang = array(
    // payment gateways
    'merchant_2checkout'					=> '2Checkout',
    'merchant_authorize_net'				=> 'Authorize.Net AIM',
    'merchant_authorize_net_sim'			=> 'Authorize.Net SIM',
    'merchant_cardsave'						=> 'Cardsave',
    'merchant_dps_pxpay'					=> 'DPS PaymentExpress PxPay',
    'merchant_dps_pxpost'					=> 'DPS PaymentExpress PxPost',
    'merchant_dummy'						=> 'Contoh',
    'merchant_eway'							=> 'eWay Hosted',
    'merchant_eway_shared'					=> 'eWay Shared',
    'merchant_ideal'						=> 'iDEAL',
    'merchant_inipay'						=> 'INIpay',
    'merchant_gocardless'					=> 'GoCardless',
    'merchant_manual'						=> 'Manual',
    'merchant_netaxept'						=> 'Nets Netaxept',
    'merchant_ogone_directlink'				=> 'Ogone DirectLink',
    'merchant_payflow_pro'					=> 'Payflow Pro',
    'merchant_paypal'						=> 'PayPal Standard (Deprecated)',
    'merchant_paypal_express'				=> 'PayPal Express',
    'merchant_paypal_pro'					=> 'PayPal Pro',
    'merchant_rabo_omnikassa'				=> 'Rabo OmniKassa',
    'merchant_sagepay_direct'				=> 'Sagepay Direct',
    'merchant_sagepay_server'				=> 'Sagepay Server',
    'merchant_stripe'						=> 'Stripe',
    'merchant_worldpay'						=> 'WorldPay',

    // payment gateway settings
    'merchant_api_login_id'					=> 'API Login ID',
    'merchant_transaction_key'				=> 'Transaction Key',
    'merchant_test_mode'					=> 'Mode Tes',
    'merchant_developer_mode'				=> 'Mode Developer',
    'merchant_simulator_mode'				=> 'Mode Simulator',
    'merchant_user_id'						=> 'ID Pengguna',
    'merchant_app_id'						=> 'App ID',
    'merchant_psp_id'						=> 'PSP ID',
    'merchant_api_key'						=> 'API Key',
    'merchant_key'							=> 'Key',
    'merchant_key_version'					=> 'Key Version',
    'merchant_username'						=> 'Username',
    'merchant_vendor'						=> 'Vendor',
    'merchant_password'						=> 'Password',
    'merchant_signature'					=> 'Signature',
    'merchant_customer_id'					=> 'Customer ID',
    'merchant_merchant_id'					=> 'Merchant ID',
    'merchant_account_no'					=> 'Account No',
    'merchant_installation_id'				=> 'Installation ID',
    'merchant_secret_word'					=> 'Secret Word',
    'merchant_secret'						=> 'Secret',
    'merchant_app_secret'					=> 'App Secret',
    'merchant_secret_key'					=> 'Secret Key',
    'merchant_token'						=> 'Token',
    'merchant_access_token'					=> 'Access Token',
    'merchant_payment_response_password'	=> 'Payment Response Password',
    'merchant_company_name'					=> 'Company Name',
    'merchant_company_logo'					=> 'Company Logo',
    'merchant_page_title'					=> 'Page Title',
    'merchant_page_banner'					=> 'Page Banner',
    'merchant_page_description'				=> 'Page Description',
    'merchant_page_footer'					=> 'Page Footer',
    'merchant_enable_token_billing'			=> 'Store card details for token billing',
    'merchant_paypal_email'					=> 'PayPal Account Email',
    'merchant_acquirer_url'					=> 'Acquirer URL',
    'merchant_public_key_path'				=> 'Public Key Server Path',
    'merchant_private_key_path'				=> 'Private Key Server Path',
    'merchant_private_key_password'			=> 'Private Key Password',
    'merchant_solution_type'				=> 'PayPal Account Required',
    'merchant_landing_page'					=> 'Selected Payment Tab',
    'merchant_solution_type_mark'			=> 'PayPal Account Required',
    'merchant_solution_type_sole'			=> 'PayPal Account Optional',
    'merchant_landing_page_billing'			=> 'Guest Checkout / Create Account',
    'merchant_landing_page_login'			=> 'PayPal Account Login',

    // payment gateway fields
    'merchant_card_type'					=> 'Card Type',
    'merchant_card_no'						=> 'Card Number',
    'merchant_name'							=> 'Nama',
    'merchant_first_name'					=> 'Nama Depan',
    'merchant_last_name'					=> 'Nama Belakang',
    'merchant_card_issue'					=> 'Card Issue Number',
    'merchant_exp_month'					=> 'Bulan Habis',
    'merchant_exp_year'						=> 'Tahun Habis',
    'merchant_start_month'					=> 'Bulan Mulai',
    'merchant_start_year'					=> 'Tahun Mulai',
    'merchant_csc'							=> 'CSC',
    'merchant_issuer'						=> 'Issuer',

    // status/error messages
    'merchant_insecure_connection'			=> 'Detail kartu harus dimasukkan menggunakan koneksi aman.',
    'merchant_required'						=> 'Field %s harus diisi.',
    'merchant_invalid_card_no'				=> 'Nomor Kartu tidak valid.',
    'merchant_card_expired'					=> 'Masa berlaku kartu telah habis.',
    'merchant_invalid_status'				=> 'Status pembayaran tidak valid',
    'merchant_invalid_method'				=> 'Method not supported by this gateway.',
    'merchant_invalid_response'				=> 'Respon dari payment gateway tidak valid.',
    'merchant_payment_failed'				=> 'Pembayaran gagal. Silakan coba lagi.',
    'merchant_payment_redirect'				=> 'Silakan tunggu sementara kami mengalihkan Anda ke halaman pembayaran...',
    'merchant_3dauth_redirect'				=> 'Silakan tunggu sementara kami mengalihkan Anda ke halaman card issuer untuk autentikasi...'
);

/* End of file ./language/english/merchant_lang.php */
