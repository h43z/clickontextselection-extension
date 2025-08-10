addEventListener('keydown', event => {
  if(event.key !== 'Enter')
    return

  if(event.shiftKey)
    return

  const elementWithSelection = getSelection()?.anchorNode?.parentElement

  if(!elementWithSelection)
    return

  elementWithSelection.click()
  getSelection()?.removeAllRanges()
})
