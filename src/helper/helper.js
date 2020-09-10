export const removeHtml = stringWithHtml => {
  let end = stringWithHtml.length - 5
  return stringWithHtml.slice(4, end)
}

export const getAnchroFromParsedDOM = domString => {
  try {
    const p = new DOMParser()
    const parsed = p.parseFromString(domString, "text/html")
    return parsed.getElementsByTagName("a")[0].href
  } catch (error) {
    console.log(error)
  }
}
