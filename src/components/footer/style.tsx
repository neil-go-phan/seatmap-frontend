import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #353535;
  color: #f2f2f2;
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
`

export const Contact = styled.div`
  font-size: 1.5rem;
`

export const CompanyLogo = styled.img.attrs(({ src }) => ({
  src: src,
  alt: 'Article Cover',
}))`
  width: 200px;
`
export const Link = styled.a.attrs(({href, target}) => ({
  href : href,
  target:target
}))`

`