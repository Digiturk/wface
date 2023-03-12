import { WIcon, WTheme, WCircularProgress } from '../../../';
import Select from 'react-select';
import React, { useRef, FC, useState, useCallback, useEffect } from 'react';
import { useAppContext } from '../../../store';
import { useTheme } from '@mui/material';

export interface SearchProps {
  classes?: any;
  theme?: WTheme;
}

export const Search: FC = () => {
  const theme = useTheme<WTheme>();
  const textFieldRef = useRef<any>();
  const [value, setValue] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);
  const appContext = useAppContext();

  const searchResults = useCallback(async () => {
    if (value.length === 0) {
      setResults([]);
      return;
    }

    setLoading(true);

    try {
      const resp = await appContext.configuration.searchProvider?.search(value, appContext);
      setResults(resp || []);
    } catch (e) {
      console.log(e);
      setResults([]);
    }

    setLoading(false);
  }, [value, appContext]);

  const onChange = useCallback((val: any, action: any) => {
    if (action.action !== "input-blur" && action.action !== "menu-close") {
      setValue(val);
    }
  }, []);

  const focusSearch = useCallback((e: any) => {
    if (e.ctrlKey && e.shiftKey && e.keyCode === 70) {
      textFieldRef.current && textFieldRef.current.focus()
      e.stopPropagation();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", focusSearch);
    return () => window.removeEventListener("keydown", focusSearch);
  }, [focusSearch]);

  useEffect(() => {
    searchResults();
  }, [searchResults]);

  return (
    <div>
      <Select
        ref={textFieldRef}
        isSearchable
        value={value}
        onChange={(option, e) => appContext.configuration.searchProvider?.onItemSelected(option, appContext)}
        noOptionsMessage={() => "No result found"}
        blurInputOnSelect={true}
        inputValue={value}
        onInputChange={(value, action) => onChange(value, action)}
        options={results}
        formatOptionLabel={(option, context) => {
          if (appContext.configuration.searchProvider?.renderSearchItem) {
            return appContext.configuration.searchProvider?.renderSearchItem(option, appContext);
          }
        }}
        getOptionValue={(option) => value}
        menuIsOpen={value.length > 0 && focused}
        placeholder="Search..."
        isLoading={loading}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        styles={{
          control: (base) => ({
            ...base,
            width: focused ? 400 : 200,
            backgroundColor: focused ? '#00000066' : '#00000033',
            border: '0',
            height: 30,
            minHeight: 30,
            transition: 'all ease 400ms',
            // color: '#FFF',
            boxShadow: 'none',
            fontSize: 14,
          }),
          placeholder: (base) => ({
            ...base,
            color: '#FFFFFF66',
            lineHeight: '26px',
          }),
          container: (base) => ({
            ...base,
            border: 'none',
          }),
          dropdownIndicator: (base) => ({
            height: 30
          }),
          input: (base) => ({
            ...base,
            color: '#FFF'
          }),
          option: (base, state) => ({
            ...base,
            color: 'initial',
            backgroundColor: state.isFocused ? theme?.palette.background.default : 'initial',
            padding: 0,
          }),
        }}
        components={{
          DropdownIndicator: (props) => (
            <div style={{ padding: '2px 5px 0px' }}>
              <WIcon icon="search" style={{ color: '#FFFFFF66' }} />
            </div>
          ),
          IndicatorSeparator: () => null,
          LoadingIndicator: (props) => (
            <div style={{ padding: '2px 5px 0px' }}>
              <WCircularProgress size={22} style={{ color: '#FFFFFFCC' }} />
            </div>
          )
        }}
      />
    </div>
  );
}