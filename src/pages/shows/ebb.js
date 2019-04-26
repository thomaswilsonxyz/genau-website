import React from "react"
import { ShowLayout } from "../../components"

import { ebb } from "../../data/trilogy"

const { title, location, date, Header, ImageGallery, bodyText } = ebb

export default () => (
  <ShowLayout
    title={title}
    location={location}
    date={date}
    Header={Header}
    bodyText={bodyText}
    ImageGallery={ImageGallery}
  />
)
