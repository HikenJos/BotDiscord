function disabledButton (checkBox: React.RefObject<HTMLInputElement>, button: React.RefObject<HTMLButtonElement>): void {
  if (checkBox.current !== null && button.current !== null) {
    if (checkBox.current.checked) {
      button.current.disabled = false
    } else {
      button.current.disabled = true
    }
  }
}

export default disabledButton
