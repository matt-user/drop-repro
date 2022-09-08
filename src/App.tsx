import { Dropdown, Button } from "@fuel-ui/react";

function App() {

  return (
    <div className="App">
      <Dropdown>
        <Dropdown.Trigger>
          <Button>User to favor</Button>
        </Dropdown.Trigger>
        <Dropdown.Menu autoFocus aria-label="Actions">
          <Dropdown.MenuItem key="seller" textValue="Seller">
            Seller
          </Dropdown.MenuItem>
          <Dropdown.MenuItem key="buyer" textValue="Buyer">
            Buyer
          </Dropdown.MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default App
