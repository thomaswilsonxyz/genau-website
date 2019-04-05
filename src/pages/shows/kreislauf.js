import React from "react"
import Show from "../show"

import { kreislauf } from "../../data/trilogy"

const { name, tagLine } = kreislauf

export default () => <Show name={name} tagLine={tagLine} />
