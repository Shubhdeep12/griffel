import hashString from '@emotion/hash';

import { HASH_PREFIX } from '../../constants';
import { atRulesToString } from './hashPropertyKey';
import type { AtRules } from './types';

interface HashedClassNameParts {
  property: string;
  value: string;
  salt: string;
  selector: string;
}

export function hashClassName({ property, selector, salt, value }: HashedClassNameParts, atRules: AtRules): string {
  return (
    HASH_PREFIX +
    hashString(
      salt +
        selector +
        atRulesToString(atRules) +
        property +
        // Trimming of value is required to generate consistent hashes
        value.trim(),
    )
  );
}
