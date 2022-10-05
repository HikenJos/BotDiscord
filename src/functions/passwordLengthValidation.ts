function passwordIsShort (password: string): boolean {
  if (password.length >= 6) {
    return true
  } else {
    return false
  }
}

export default passwordIsShort
