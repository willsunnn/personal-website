import React from 'react'
import './App.css'
import { Button, Text, Flex } from '@radix-ui/themes'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <Flex direction="column" gap="2">
          <Text>Hello from Radix Themes :</Text>
          <Button>Lets go</Button>
        </Flex>
      </header>
    </div>
  )
}

export default App
