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
  forgot: string
}

interface InsteadLogin {
  linkSign: string
}

export { TypeComponent, Data, Remenber, InsteadLogin }
