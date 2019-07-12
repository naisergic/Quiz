/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';


export default defineMessages({
  licenseMessage: {
    id: `license.message`,
    defaultMessage: `
      copy right to {author}.
    `,
  },
  authorMessage: {
    id: `author.message`,
    defaultMessage: `
      Made with love by {author}.
    `,
  },
});
