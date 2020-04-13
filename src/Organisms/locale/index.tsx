import { SearchSelect } from 'Molecules/select/SearchSelect';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getLocale, setLocale } from 'services/localStorage';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  width: 60px;
  margin-left: 20px;
`;

const options = [
  { value: 'en', label: 'EN' },
  { value: 'lt', label: 'LT' },
];

interface SelectOption {
  value: string;
  label: string;
}

export const Locale: FC = () => {
  const { i18n } = useTranslation();

  const [localeState, setLocaleState] = useState<SelectOption>({ value: 'lt', label: 'LT' });

  useEffect(() => {
    const locale = getLocale();
    if (locale !== null) {
      setLocaleState(locale);
    } else {
      setLocaleState({ value: 'lt', label: 'LT' });
    }
  }, []);

  const onLocaleChange = (selected?: SelectOption): void => {
    selected && i18n.changeLanguage(selected.value);
    selected && setLocaleState(selected);
    selected && setLocale(selected);
  };

  return (
    <Wrapper>
      <SearchSelect
        options={options}
        onChange={onLocaleChange}
        value={localeState}
        placeholder=""
        isSearchable={false}
      />
    </Wrapper>
  );
};
