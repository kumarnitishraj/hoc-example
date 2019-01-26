import React from "react";

const FeedItem = ({ contacts }) => {
  console.log(contacts)
  return (
    <div className="col-sm-4 offset-4">
    
      {contacts.map(contact => {
        
        return(
          <div className="row p-2" key={contact.email}>
          
            <div className="col-sm-2">
              <img
                className="rounded-circle img"
                src={contact.user.thumbnail}
                role="presentation"
              />
            </div>
            <div className="feedData col-sm-9">
              <strong>{contact.user.name}</strong>
              <br />
              <small>{contact.user.email}</small>
            </div>
          </div>
        )
      })
      }
    </div>
  );
};

export default FeedItem;
