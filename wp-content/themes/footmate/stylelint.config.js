import { propertyGroups } from 'stylelint-config-clean-order';

export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-clean-order',
  ],
  rules: {
    'no-empty-source': null,
    'selector-class-pattern': null,
    'order/properties-order': [
      propertyGroups.map((properties) => ({
        noEmptyLineBetween: true,
        emptyLineBefore: 'never',
        properties,
      })),
      {
        severity: 'warning',
        unspecified: 'bottomAlphabetical',
      },
    ],
  },
};
