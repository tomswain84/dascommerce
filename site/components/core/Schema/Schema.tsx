import type { VFC } from "react";

const Schema: VFC<{ data: Record<string, any> }> = ({ data }) => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data)
        }}
      />
    </>
  )
}
export default Schema;