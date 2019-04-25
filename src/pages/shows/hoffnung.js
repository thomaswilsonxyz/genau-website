import React from "react"

import { ShowLayout } from "../../components"

import { hoffnung } from "../../data/trilogy"

const { title, location, date, bodyText } = hoffnung

export default () => (
  <ShowLayout
    title={title}
    location={location}
    date={date}
    bodyText={bodyText}
  />
)
