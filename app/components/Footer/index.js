import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from '../common/A';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage {...messages.licenseMessage} values={{author:"Naisergic Sharma"}}/>
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="/">Naisergic Sharma</A>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
