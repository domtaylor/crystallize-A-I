import React, { useState } from 'react';
import { Input } from '../styles';
import PlacesSuggest from '../algolia/PlacesSuggest';
import { useT } from 'lib/i18n';

import { Label, InputGroup, Input } from './styles'

function AddressFields({ type, form, showAddressForm }) {
  const t = useT();
  const [isEditing, setIsEditing] = useState(false);

  const touchForm = () => setIsEditing(true);

  const onPlacesChange = ({
    suggestion: { name, city, county, countryCode, postcode }
  }) => {
    form.change(`${type}.line_1`, name);
    form.change(`${type}.city`, city);
    form.change(`${type}.county`, county);
    form.change(`${type}.country`, countryCode.toUpperCase());
    form.change(`${type}.postcode`, postcode);

    touchForm();
  };

  const onPlacesClear = () => {
    form.change(`${type}.line_1`, '');
    form.change(`${type}.city`, '');
    form.change(`${type}.county`, '');
    form.change(`${type}.country`, '');
    form.change(`${type}.postcode`, '');
  };

  if (!isEditing && !showAddressForm) {
    return (
      <>
        <PlacesSuggest
          label={type}
          onChange={onPlacesChange}
          onClear={onPlacesClear}
        />
        <button
          onClick={touchForm}
          className="mt-3 text-grey text-sm appearance-none bg-transparent underline"
        >
          Enter address manually
        </button>
      </>
    );
  }

  return (
    <>
      <InputGroup>
        <Label htmlFor="address">{t('address.line_1')}</Label>
        <Input name={`${type}.line_1`} required />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="address">{t('address.line_2')}</Label>
        <Input name={`${type}.line_2`} required />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="city">{t('address.city')}</Label>
        <Input name={`${type}.city`} required />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="county">{t('address.county')}</Label>
        <Input name={`${type}.county`} required />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="postcode">{t('address.postcode')}</Label>
        <Input name={`${type}.postcode`} required />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="country">{t('address.country')}</Label>
        <Input name={`${type}.country`} required />
      </InputGroup>
    </>
  );
}

export default AddressFields;
