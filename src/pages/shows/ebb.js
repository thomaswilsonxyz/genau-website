import React from "react"
import { ShowLayout } from "../../components"

import { ebb } from "../../data/trilogy"

const { title, location, date, bodyText } = ebb

export default () => (
  <ShowLayout
    title={title}
    location={location}
    date={date}
    bodyText={bodyText}
  />
)
