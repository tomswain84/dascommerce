const stripHTML = (s: string) => s.replace(/(<([^>]+)>)/gi, "");
export default stripHTML;