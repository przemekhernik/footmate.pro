<?php

namespace YoastSEO_Vendor\WordProof\SDK\Controllers;

use YoastSEO_Vendor\WordProof\SDK\Exceptions\ValidationException;
use YoastSEO_Vendor\WordProof\SDK\Helpers\AppConfigHelper;
use YoastSEO_Vendor\WordProof\SDK\Helpers\EnvironmentHelper;
use YoastSEO_Vendor\WordProof\SDK\Helpers\OptionsHelper;
class IdentityController
{
    /**
     * Validate identity data
     *
     * @param array $data
     *
     * @return array
     * @throws ValidationException
     */
    public function validate($data)
    {
        if (!isset($data['first_name']) || !\is_string($data['first_name'])) {
            throw new \YoastSEO_Vendor\WordProof\SDK\Exceptions\ValidationException("Invalid field 'first_name'");
        }
        if (!isset($data['last_name']) || !\is_string($data['last_name'])) {
            throw new \YoastSEO_Vendor\WordProof\SDK\Exceptions\ValidationException("Invalid field 'last_name'");
        }
        if (!isset($data['provider']) || !\is_string($data['provider'])) {
            throw new \YoastSEO_Vendor\WordProof\SDK\Exceptions\ValidationException("Invalid field 'provider'");
        }
        if (isset($data['profile_picture']) && !\filter_var($data['profile_picture'], \FILTER_VALIDATE_URL)) {
            throw new \YoastSEO_Vendor\WordProof\SDK\Exceptions\ValidationException("Invalid field 'profile_picture'");
        }
        return ['first_name' => $data['first_name'], 'last_name' => $data['last_name'], 'provider' => $data['provider'], 'profile_picture' => $data['profile_picture'], 'proof_url' => \YoastSEO_Vendor\WordProof\SDK\Helpers\EnvironmentHelper::url() . '/identity/' . \YoastSEO_Vendor\WordProof\SDK\Helpers\OptionsHelper::sourceId()];
    }
    /**
     * Store identity data
     *
     * @param array $data
     *
     * @return bool
     * @throws ValidationException
     */
    public function store($data)
    {
        return \YoastSEO_Vendor\WordProof\SDK\Helpers\OptionsHelper::set('identity', $this->validate($data));
    }
    /**
     * Delete the stored identity data
     *
     * @return mixed
     */
    public function delete()
    {
        return \YoastSEO_Vendor\WordProof\SDK\Helpers\OptionsHelper::delete('identity');
    }
}
