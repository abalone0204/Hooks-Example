import React, {useState, useEffect} from 'react'

const User = ( ) => {
  const user = useUser('Hakata')
  return (
    <div>
      <p>{user.value}</p>
      <input type="text" {...user}/>
    </div>
  )
}

const useUser = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  useEffect(() => {
    document.title = value
  })
  function handleChange(event) {
    setValue(event.target.value)
  }
  return {value, onChange: handleChange }
}

export default User