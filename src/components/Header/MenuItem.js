/* @flow */
import type { Node } from 'react'
import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

const StyledMenuItem = styled.li`
  display: flex;
  align-items: stretch;
  white-space: nowrap;
  > span {
    display: flex;
    align-items: center;
    padding: 0 15px;
    font-size: 15px;
    color: ${({ active }) => (active ? theme.accent : theme.textSecondary)};
  }
  a {
    text-decoration: none;
    color: ${({ active }) => (active ? theme.accent : theme.textSecondary)};
  }
`

type Props = {
  url: string,
  label: string,
  active: boolean,
  renderLink: mixed,
}

const renderLinkDefault = ({
  url,
  children,
}: {
  url: string,
  children: Node,
}) => <a href={url}>{children}</a>

const DefaultProps = {
  active: false,
  renderLink: renderLinkDefault,
}

const MenuItem = ({ url, label, active, renderLink }: Props) => (
  <StyledMenuItem active={active}>
    <span>{renderLink({ url, children: label })}</span>
  </StyledMenuItem>
)

MenuItem.defaultProps = DefaultProps

export default MenuItem