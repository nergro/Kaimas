import { css } from 'styled-components/macro';
interface Props {
  classNamePrefix: string;
  showDropdown?: boolean;
  showSearch?: boolean;
}

export const StyledSelectBase = css<Props>`
  font: ${props => props.theme.fonts.normalText};
  width: 100%;

  .${props => props.classNamePrefix}__control {
    background: ${props => props.theme.colors.select.backgroundColor};
    border: solid ${props => props.theme.colors.select.borderColor};
    border-width: 1px;
    padding: 4px 12px 4px 6px;
    box-shadow: none;
    transition: none;
    height: 100%;
    min-height: 44px;

    &--menu-is-open {
      border-width: 2px 2px 0px 2px;
      border-radius: 10px 10px 0 0;
      padding: 4px 12px 6px 6px;

      .${props => props.classNamePrefix}__dropdown-indicator {
        transform: rotate(-180deg);
      }
    }

    &:hover,
    &--is-focused,
    &--has-value,
    &--menu-is-open {
      border-color: ${props => props.theme.colors.select.borderColorActive};

      .${props => props.classNamePrefix}__dropdown-icon {
        fill: ${props => props.theme.colors.select.borderColorActive};
      }

      .${props => props.classNamePrefix}__search-icon {
        fill: ${props => props.theme.colors.select.borderColorActive};
      }
    }
  }

  .${props => props.classNamePrefix}__dropdown-indicator {
    transition: transform 200ms ease;
    display: ${props => !props.showDropdown && 'none'};
    padding: 0;
  }

  .${props => props.classNamePrefix}__dropdown-icon {
    fill: ${props => props.theme.colors.select.borderColor};
    width: 10px;
    height: 6px;
  }

  .${props => props.classNamePrefix}__placeholder {
    color: ${props => props.theme.colors.select.placeholderColor};
  }

  .${props => props.classNamePrefix}__value-container {
    padding: 2px 0 2px 4px;
    height: 100%;
  }

  .${props => props.classNamePrefix}__input {
    color: ${props => props.theme.colors.select.textActiveColor};
    min-height: 20px;

    & > input {
      font: ${props => props.theme.fonts.normalTextBold};
      caret-color: ${props => props.theme.colors.select.textActiveColor};
    }
  }

  .${props => props.classNamePrefix}__single-value {
    color: ${props => props.theme.colors.select.textActiveColor};
    font: ${props => props.theme.fonts.normalTextBold};
  }

  .${props => props.classNamePrefix}__menu {
    margin-top: 0px;
    margin-bottom: 0px;

    background-color: ${props => props.theme.colors.select.menuBackgroundColor};
    border: solid ${props => props.theme.colors.select.borderColorActive};
    border-width: 0 2px 2px 2px;
    border-radius: 0 0 10px 10px;
    box-shadow: none;
    overflow: hidden;

    z-index: 100;
  }

  .${props => props.classNamePrefix}__menu-list {
    padding: 0;
    overflow: auto;
  }

  .${props => props.classNamePrefix}__option {
    overflow: hidden;
    color: ${props => props.theme.colors.select.textColor};

    &--is-focused,
    &--is-selected {
      background: ${props => props.theme.colors.select.optionHover};
    }

    &--is-selected {
      font: ${props => props.theme.fonts.normalTextBold};
    }
  }

  .${props => props.classNamePrefix}__indicator-separator {
    display: none;
  }

  .${props => props.classNamePrefix}__search-icon {
    display: ${props => !props.showSearch && 'none'};
    fill: ${props => props.theme.colors.select.textColor};
  }
`;
