addEventListener('keydown', event => {
  if(event.key !== 'Enter')
    return

  const elementWithSelection = getSelection()?.anchorNode?.parentElement

  if(!elementWithSelection)
    return

  elementWithSelection.click()
  getSelection()?.removeAllRanges()
})
