import React from 'react'
import { render } from 'react-dom'

import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { messages as enMessages } from './locales/en/messages'
import { messages as csMessages } from './locales/cs/messages'
import { messages as frMessages } from './locales/fr/messages'
import Inbox from './Inbox'


i18n.load({
  en: enMessages,
  cs: csMessages,
  fr: frMessages
})
i18n.activate('cs')

const App = () => (
  <I18nProvider i18n={i18n}>
    <Inbox />
  </I18nProvider>
)

render(<App />, document.getElementById('root'))