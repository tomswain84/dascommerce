import NextLink, { LinkProps as NextLinkProps } from 'next/link'

const Link: React.FC<NextLinkProps & { className?: string, title?: string, html?: string, id?: string }> = ({ href, children, html, ...props }) => {
  return (
    <NextLink href={href} passHref>
      {html ? (
        <a {...props} dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <a {...props}>{children}</a>
      )}
    </NextLink>
  )
}

export default Link
