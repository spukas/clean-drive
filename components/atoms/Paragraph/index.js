import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Paragraph = styled.p`
  font-family: ${p => p.theme.fonts.primary};
  color: ${p => p.light ? p.theme.palette.white[1] : p.theme.palette.grayscale[0]};
  font-size: 1rem;
  line-height: 1.3;
  margin: 1rem 0 0;
`
Paragraph.propTypes = {
    light: PropTypes.bool,
}

Paragraph.defaultProps = {
    light: false,
}

export default Paragraph