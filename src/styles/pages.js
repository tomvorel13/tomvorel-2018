import styled from 'styled-components'
import { colors } from '../utilities'

export const Wrapper = styled.div`
  max-width: 35rem;
  margin: 5em auto 0 auto;
`

export const Heading = styled.h1`
  color: ${colors.green};
  text-align: center;
  font-size: 4rem;
  font-weight: 400;
`

export const Text = styled.p`
  color: ${colors.white};
  text-align: left;
  font-size: 1.5rem;
  line-height: 1.2;
`
export default {
  Wrapper,
  Heading,
  Text,
}
