const stripHTML = (s: string, keepSpace?: boolean) => {
  if (keepSpace) {
    return s.replace(/(<([^>]+)>)/gi, " ")
  }
  return s.replace(/(<([^>]+)>)/gi, "")
}
export default stripHTML;