import React from 'react'
import { render } from 'react-dom'

import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { messages as enMessages } from './locales/en/messages'
import { messages as csMessages } from './locales/cs/messages'
import { messages as frMessages } from './locales/fr/messages'
import { en, cs, fr } from 'make-plural/plurals'
import Inbox from './Inbox'


i18n.loadLocaleData({
  en: { plurals: en },
  cs: { plurals: cs },
  fr: { plurals: fr }
})

i18n.load({
  en: enMessages,
  cs: csMessages,
  fr: frMessages
})
i18n.activate('en')

const App = () => (
  <I18nProvider i18n={i18n}>
    <Inbox />
  </I18nProvider>
)

render(<App />, document.getElementById('root'))