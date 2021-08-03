import React from 'react';
import api from '../Api';

function Items(props) {
  const handleClick = async (e) => {
    const data = await api.get(`https://api.twitch.tv/helix/channels?broadcaster_id=${e.target.id}`)
    console.log(data)
  }

  const items = props.items.map(item => {

    return (
      <div key={item.id}>
        <div className="card border-light m-4" style={{ width: '18rem' }}>
          <img src={item.thumbnail_url} className="card-img-top" alt="thumbnail" />
          <div className="card-body">
            <h5 className="card-title">{item.display_name}</h5>
            {/* <h6 className="card-subtitle mb-2 text-muted">Title : {item.title}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Game id : {item.game_id}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Game Name : {item.game_name}</h6> */}
            <h6>{item.is_live ? <span className="badge badge-pill badge-success rounded-pill" style={{ backgroundColor: "green" }}>Live</span> : <span className="badge badge-pill badge-danger rounded-pill" style={{ backgroundColor: "red" }}>Not Live</span>}</h6>
            <button id={item.id} type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target={"#" + item.display_name} onClick={handleClick}>View Details</button>
          </div>
        </div>
        <div className="modal fade" id={item.display_name} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{item.display_name}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <img src={item.thumbnail_url} className="card-img-top" alt="thumbnail" />
              <p><span className="p-2" style={{fontStyle:"italic"}}>{item.title}</span></p>
              <div className="modal-body">
                <p><span style={{ fontWeight: "bold" }}>Broadcaster Language :</span> {item.broadcaster_language}</p>
                <p><span style={{ fontWeight: "bold" }}>Broadcaster Login :</span> {item.broadcaster_login}</p>
                
                <p><span style={{ fontWeight: "bold" }}>Game ID :</span> {item.game_id}</p>
                <p><span style={{ fontWeight: "bold" }}>Game Name :</span>{item.game_name}</p>
                <h6>{item.is_live ? <span className="badge badge-pill badge-success rounded-pill" style={{ backgroundColor: "green" }}>Live</span> : <span className="badge badge-pill badge-danger rounded-pill" style={{ backgroundColor: "red" }}>Not Live</span>}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  );


  return <div className="p-5 d-flex flex-wrap min-vh-100" style={{ backgroundColor: "#f7e6ff" , marginTop:"8em" }}>{items}</div>;
}

export default Items