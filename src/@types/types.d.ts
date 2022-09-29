interface TypeComponent {
  children: JSX.Element | JSX.Element[]
}

interface Data {
  title: string
  description: string
}

interface Remenber {
  textCheck: string
  linkCheck: string
  linkForgot: string
}

export { TypeComponent, Data, Remenber }
