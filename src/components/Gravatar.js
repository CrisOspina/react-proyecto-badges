import React from 'react';

import md5 from 'md5';

const Gravatar = (props) => {
    let email = props.email;
    let hash = md5(email);
    return ( 
        <img 
            src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
            alt="Foto usuario"
            className={props.className}
        />
     );
}
 
export default Gravatar;