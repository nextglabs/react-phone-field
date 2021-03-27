import React, { FC } from 'react';

export type ReactPhoneProps = {};
// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * ReactPhone component.
 */
export const ReactPhone: FC<ReactPhoneProps> = () => {
  return (
    <div>
      <input type="tel" />
    </div>
  );
};
