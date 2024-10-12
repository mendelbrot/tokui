type Props = React.PropsWithChildren

function NavContainer(props: Props) {
  return <div className="fixed bottom-6 right-6">{props.children}</div>
}

export default NavContainer
