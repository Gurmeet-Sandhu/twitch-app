import React, { useState } from 'react';

function Searchbar(props) {

  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.fetchData(text)
  }

  return (
    <div className="bg-light headline">
      <div className="w-50 px-5 pt-5 mx-auto">
        <h4 className="text-center font-weight-light">Twitch Channel Search</h4>
        <form className="input-group my-3" onSubmit={handleSubmit}>
          <input type="text" className="form-control" value={text} onChange={handleChange} placeholder="Search Channels" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit" >Search</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Searchbar